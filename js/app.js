/**
 * Islamic Lifestyle Dashboard - Main Application Controller
 * Coordinates: Geolocation, Aladhan API, Next Prayer Countdown, Calendar & Modules Init
 */

const App = {
  // State
  coords: {
    lat: 31.5204,
    lng: 74.3587
  },
  locationName: "Lahore, Pakistan",
  prayerMethod: 1, // 1 = University of Islamic Sciences, Karachi (standard for subcontinent)
  timings: null,
  nextPrayer: null,
  countdownInterval: null,

  // Popular preset cities for quick switching
  presetCities: [
    { name: "Lahore, Pakistan", lat: 31.5204, lng: 74.3587, method: 1 },
    { name: "Karachi, Pakistan", lat: 24.8607, lng: 67.0011, method: 1 },
    { name: "Islamabad, Pakistan", lat: 33.6844, lng: 73.0479, method: 1 },
    { name: "Makkah, Saudi Arabia", lat: 21.3891, lng: 39.8579, method: 4 },
    { name: "Madinah, Saudi Arabia", lat: 24.5247, lng: 39.5692, method: 4 },
    { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708, method: 4 },
    { name: "London, UK", lat: 51.5074, lng: -0.1278, method: 3 },
    { name: "New York, USA", lat: 40.7128, lng: -74.0060, method: 2 },
    { name: "Toronto, Canada", lat: 43.6532, lng: -79.3832, method: 2 }
  ],

  currentLang: localStorage.getItem("noor_lang") || "ur",

  // Prayer display configuration
  prayerDisplayList: [
    { key: "Fajr", label: "Fajr", ur: "فجر", ar: "الفجر", icon: "fa-cloud-sun" },
    { key: "Sunrise", label: "Sunrise", ur: "طلوعِ آفتاب", ar: "الشروق", icon: "fa-sun" },
    { key: "Dhuhr", label: "Dhuhr", ur: "ظہر", ar: "الظهر", icon: "fa-sun" },
    { key: "Asr", label: "Asr", ur: "عصر", ar: "العصر", icon: "fa-cloud-sun" },
    { key: "Maghrib", label: "Maghrib", ur: "مغرب", ar: "المغرب", icon: "fa-cloud-moon" },
    { key: "Isha", label: "Isha", ur: "عشاء", ar: "العشاء", icon: "fa-moon" }
  ],

  /**
   * Boot Application
   */
  async init() {
    this.applyLanguage(this.currentLang);
    this.bindGlobalEvents();
    CalendarSystem.renderCalendars(); // Initial render with fallback
    TasbeehModule.init();
    DashboardModules.init();
    ChatbotModule.init();

    // Check if user previously saved location
    const savedCity = localStorage.getItem("islamic_user_city");
    if (savedCity) {
      try {
        const parsed = JSON.parse(savedCity);
        this.coords = { lat: parsed.lat, lng: parsed.lng };
        this.locationName = parsed.name;
        this.prayerMethod = parsed.method || 1;
      } catch (e) {}
    }

    // Render baseline prayer timings immediately so user never sees empty cards
    this.useFallbackTimings();
    this.fetchPrayerTimes();

    // Try HTML5 Geolocation API
    this.detectLocation();
  },

  /**
   * Use HTML5 Geolocation API with graceful fallback
   */
  detectLocation() {
    const locNameEl = document.getElementById("locationNameDisplay");
    const locCoordsEl = document.getElementById("locationCoordsDisplay");

    if (locNameEl) locNameEl.textContent = "Locating via GPS...";

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          this.coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          if (locCoordsEl) {
            locCoordsEl.textContent = `${this.coords.lat.toFixed(3)}° N, ${this.coords.lng.toFixed(3)}° E`;
          }

          // Try reverse geocoding via OpenStreetMap Nominatim or BigDataCloud
          await this.reverseGeocode(this.coords.lat, this.coords.lng);
          this.fetchPrayerTimes();
        },
        (error) => {
          console.warn("Geolocation denied or unavailable:", error.message);
          // Use default or previously saved location
          if (locNameEl) locNameEl.textContent = this.locationName;
          if (locCoordsEl) {
            locCoordsEl.textContent = `${this.coords.lat.toFixed(3)}° N, ${this.coords.lng.toFixed(3)}° E`;
          }
          this.fetchPrayerTimes();
        },
        { timeout: 8000, enableHighAccuracy: true }
      );
    } else {
      if (locNameEl) locNameEl.textContent = this.locationName;
      this.fetchPrayerTimes();
    }
  },

  /**
   * Reverse geocode coordinates to City, Country
   */
  async reverseGeocode(lat, lng) {
    const locNameEl = document.getElementById("locationNameDisplay");
    try {
      const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
      if (res.ok) {
        const data = await res.json();
        const city = data.city || data.locality || data.principalSubdivision || "Current Location";
        const country = data.countryName || "";
        this.locationName = country ? `${city}, ${country}` : city;
        if (locNameEl) locNameEl.textContent = this.locationName;
        return;
      }
    } catch (e) {
      console.warn("Reverse geocode failed:", e);
    }
    if (locNameEl) locNameEl.textContent = this.locationName;
  },

  /**
   * Fetch today's prayer timings from Aladhan API
   */
  async fetchPrayerTimes() {
    const today = new Date();
    const timestamp = Math.floor(today.getTime() / 1000);
    const url = `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${this.coords.lat}&longitude=${this.coords.lng}&method=${this.prayerMethod}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Aladhan API Error: ${response.status}`);

      const result = await response.json();
      if (result.code === 200 && result.data) {
        this.timings = result.data.timings;

        // Render Triple Calendar with authentic Hijri date
        if (result.data.date && result.data.date.hijri) {
          CalendarSystem.renderCalendars(result.data.date.hijri);
        }

        // Render 5 Daily Prayer Cards
        this.renderPrayerCards(this.timings);

        // Update Qibla Compass
        DashboardModules.updateQiblaBearing(this.coords.lat, this.coords.lng);

        // Start Live Countdown to Next Prayer
        this.startCountdown();
      }
    } catch (error) {
      console.warn("Could not fetch Aladhan API, using fallback timings:", error);
      this.useFallbackTimings();
    }
  },

  /**
   * Fallback prayer timings if user is completely offline
   */
  useFallbackTimings() {
    this.timings = {
      Fajr: "04:40",
      Sunrise: "06:05",
      Dhuhr: "12:15",
      Asr: "15:45",
      Sunset: "18:25",
      Maghrib: "18:25",
      Isha: "19:50",
      Imsak: "04:30"
    };

    CalendarSystem.renderCalendars();
    this.renderPrayerCards(this.timings);
    DashboardModules.updateQiblaBearing(this.coords.lat, this.coords.lng);
    this.startCountdown();
  },

  /**
   * Render Prayer cards in hero section
   */
  renderPrayerCards(timings) {
    const row = document.getElementById("prayerTimesRow");
    if (!row) return;

    const isUrdu = this.currentLang === "ur";

    row.innerHTML = this.prayerDisplayList.map(item => {
      const timeStr = timings[item.key] || "--:--";
      // Format 24h to 12h AM/PM
      const formattedTime = this.format12Hour(timeStr);
      const displayTitle = isUrdu ? `${item.ur}` : item.label;
      const displaySub = isUrdu ? item.label : item.ur;

      return `
        <div class="prayer-time-card" id="cardPrayer_${item.key}" data-prayer="${item.key}">
          <div class="prayer-icon"><i class="fas ${item.icon}"></i></div>
          <div class="prayer-label ${isUrdu ? 'font-urdu' : ''}">${displayTitle}</div>
          <div class="prayer-time">${formattedTime}</div>
          <div class="font-arabic text-dim" style="font-size: 0.8rem; margin-top: 2px;">${item.ar}</div>
          <div class="text-muted" style="font-size: 0.68rem;">${displaySub}</div>
        </div>
      `;
    }).join("");
  },

  /**
   * Start live countdown timer loop
   */
  startCountdown() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);

    this.updateNextPrayerAndCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateNextPrayerAndCountdown();
    }, 1000);
  },

  /**
   * Compute next prayer and update DOM countdown
   */
  updateNextPrayerAndCountdown() {
    if (!this.timings) return;

    const now = new Date();
    const todayY = now.getFullYear();
    const todayM = now.getMonth();
    const todayD = now.getDate();

    // Convert prayer strings to Date objects
    // Prayers to check in chronological sequence
    const sequence = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const prayerMoments = sequence.map(name => {
      const timeStr = this.timings[name]; // e.g. "04:45"
      const [h, m] = timeStr.split(":").map(Number);
      return {
        name,
        date: new Date(todayY, todayM, todayD, h, m, 0)
      };
    });

    // Find the next upcoming prayer
    let next = prayerMoments.find(p => p.date > now);
    let isNextDay = false;

    if (!next) {
      // All prayers for today have passed; next prayer is tomorrow's Fajr
      const [fajrH, fajrM] = this.timings["Fajr"].split(":").map(Number);
      next = {
        name: "Fajr",
        date: new Date(todayY, todayM, todayD + 1, fajrH, fajrM, 0)
      };
      isNextDay = true;
    }

    this.nextPrayer = next;

    // Time difference
    const diffMs = next.date - now;
    const diffSecTotal = Math.max(0, Math.floor(diffMs / 1000));

    const hours = Math.floor(diffSecTotal / 3600);
    const minutes = Math.floor((diffSecTotal % 3600) / 60);
    const seconds = diffSecTotal % 60;

    // Update Countdown elements
    const hoursEl = document.getElementById("countdownHours");
    const minutesEl = document.getElementById("countdownMinutes");
    const secondsEl = document.getElementById("countdownSeconds");
    const nextNameEl = document.getElementById("nextPrayerNameDisplay");
    const nextArabicEl = document.getElementById("nextPrayerArabicDisplay");

    const labelHours = document.getElementById("labelCountdownHours");
    const labelMinutes = document.getElementById("labelCountdownMinutes");
    const labelSeconds = document.getElementById("labelCountdownSeconds");

    const isUrdu = this.currentLang === "ur";
    if (labelHours) labelHours.textContent = isUrdu ? "گھنٹے" : "Hours";
    if (labelMinutes) labelMinutes.textContent = isUrdu ? "منٹ" : "Minutes";
    if (labelSeconds) labelSeconds.textContent = isUrdu ? "سیکنڈ" : "Seconds";

    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    const prayerConfig = this.prayerDisplayList.find(p => p.key === next.name) || { label: next.name, ur: next.name, ar: "" };
    if (nextNameEl) {
      nextNameEl.textContent = isUrdu ? `${prayerConfig.ur} (${prayerConfig.label})` : prayerConfig.label;
      if (isUrdu) nextNameEl.classList.add("font-urdu");
      else nextNameEl.classList.remove("font-urdu");
    }
    if (nextArabicEl) nextArabicEl.textContent = prayerConfig.ar;

    // Highlight the active next prayer card
    document.querySelectorAll(".prayer-time-card").forEach(c => c.classList.remove("active"));
    const activeCard = document.getElementById(`cardPrayer_${next.name}`);
    if (activeCard) {
      activeCard.classList.add("active");
    }
  },

  /**
   * Helper: Convert "18:45" to "6:45 PM"
   */
  format12Hour(time24) {
    if (!time24 || !time24.includes(":")) return time24;
    const cleanTime = time24.split(" ")[0]; // remove any "(PKT)" or timezone
    const [h, m] = cleanTime.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${String(m).padStart(2, '0')} ${period}`;
  },

  /**
   * Switch location to a preset city
   */
  selectPresetCity(cityObj) {
    this.coords = { lat: cityObj.lat, lng: cityObj.lng };
    this.locationName = cityObj.name;
    this.prayerMethod = cityObj.method || 1;

    const locNameEl = document.getElementById("locationNameDisplay");
    const locCoordsEl = document.getElementById("locationCoordsDisplay");
    if (locNameEl) locNameEl.textContent = this.locationName;
    if (locCoordsEl) locCoordsEl.textContent = `${this.coords.lat.toFixed(3)}° N, ${this.coords.lng.toFixed(3)}° E`;

    localStorage.setItem("islamic_user_city", JSON.stringify(cityObj));
    this.fetchPrayerTimes();
  },

  /**
   * Bind modal triggers & City switcher
   */
  bindGlobalEvents() {
    const btnLocate = document.getElementById("btnTriggerLocate");
    const citySelect = document.getElementById("citySelectorModalList");
    const methodSelect = document.getElementById("prayerMethodSelect");

    if (btnLocate) {
      btnLocate.addEventListener("click", () => this.detectLocation());
    }

    if (citySelect) {
      citySelect.innerHTML = this.presetCities.map((c, i) => `
        <button class="list-group-item list-group-item-action bg-transparent text-white border-secondary d-flex justify-content-between align-items-center" data-city-idx="${i}">
          <div>
            <i class="fas fa-map-marker-alt text-teal me-2"></i><strong>${c.name}</strong>
          </div>
          <span class="badge bg-success rounded-pill">Select</span>
        </button>
      `).join("");

      citySelect.querySelectorAll("[data-city-idx]").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = btn.getAttribute("data-city-idx");
          this.selectPresetCity(this.presetCities[idx]);
          const modalEl = document.getElementById("modalCityPicker");
          if (modalEl && window.bootstrap) {
            bootstrap.Modal.getInstance(modalEl)?.hide();
          }
        });
      });
    }

    if (methodSelect) {
      methodSelect.addEventListener("change", (e) => {
        this.prayerMethod = parseInt(e.target.value, 10) || 1;
        this.fetchPrayerTimes();
      });
    }

    const btnLang = document.getElementById("btnLanguageToggle");
    if (btnLang) {
      btnLang.addEventListener("click", () => this.toggleLanguage());
    }
  },

  /**
   * Toggle between Urdu primary and English primary
   */
  toggleLanguage() {
    this.currentLang = this.currentLang === "ur" ? "en" : "ur";
    localStorage.setItem("noor_lang", this.currentLang);
    this.applyLanguage(this.currentLang);
    if (this.timings) {
      this.renderPrayerCards(this.timings);
      this.updateNextPrayerAndCountdown();
    }
  },

  /**
   * Apply UI changes based on language
   */
  applyLanguage(lang) {
    const btnLang = document.getElementById("btnLanguageToggle");
    const isUrdu = lang === "ur";

    if (btnLang) {
      btnLang.innerHTML = isUrdu 
        ? '<i class="fas fa-globe me-1 text-teal"></i> English'
        : '<i class="fas fa-globe me-1 text-teal"></i> اردو';
    }

    if (isUrdu) {
      document.body.classList.add("lang-urdu-active");
    } else {
      document.body.classList.remove("lang-urdu-active");
    }
  }
};

// Initialize once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

window.App = App;
