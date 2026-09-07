# 🌙 Noor Lifestyle — Islamic Lifestyle Dashboard (نورِ اسلام)

An advanced, responsive, and feature-rich Islamic lifestyle web application designed to enrich daily spiritual practices. Built with modern vanilla JavaScript, Bootstrap 5.3, glassmorphic dark-mode aesthetics, and real HTML5 audio playback.

![Banner](https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Core Features & Modules

### 1. 🕌 Comprehensive Namaz Guide (طریقہ نماز)
* **14 Step-by-Step Practical Steps:** From Niyyah and Takbeer-e-Tehreema to Salaam, complete with vocalized Arabic text, phonetic English transliteration, sentence-by-sentence Urdu translation, and juristic guidelines.
* **5 Daily Prayers Rakat Breakdown Chart:** Clear tabular breakdown of Sunnah, Farz, Nafl, and Witr rakats for Fajr, Zuhr, Asr, Maghrib, Isha, and Jumu'ah.
* **Dua-e-Qunoot (دعائے قنوت):** Vocalized Arabic text, Urdu translation, and pronunciation guide for Witr prayer.
* **Sunnah Wudu Method (مسنون طریقہ وضو):** 4 obligatory Farz highlighted alongside the complete 9-step Sunnah sequence and concluding Masnoon Dua.

### 2. 🌟 99 Names of Allah (اسماء الحسنیٰ)
* **High-Quality Audio Playback:** Single-click "Play All" (سب نام ایک ساتھ سنیں) feature powered by HTML5 Audio for seamless, uninterrupted recitation without browser speech synthesis limitations.
* **Individual Pronunciation:** Authentic Arabic MP3 recitations for each sacred name.
* **Interactive Cards:** Arabic calligraphy, English transliteration, and comprehensive Urdu meanings.
* **Live Search & Filter:** Instant search by Arabic, English, or Urdu meaning.

### 3. 💚 99 Names of Prophet Muhammad ﷺ (اسماء النبی)
* **Complete Dataset:** 99 blessed attributes and titles of the Holy Prophet ﷺ.
* **Full Audio Recitation:** Dedicated high-quality audio track for complete listening.
* **Intelligent Voice Detection:** Automatically detects available device Arabic speech synthesis voices with graceful fallback guidance.

### 4. 📖 Quran Tilawat & Reading (تلاوت و تفہیم)
* **5 Key Surahs Audio Stream:** High-fidelity recitations by Mishary Rashid Alafasy for:
  - *Surah Yaseen (سورة يٰسٓ - Heart of Quran)*
  - *Surah Ar-Rahman (سورة الرَّحْمٰن)*
  - *Surah Al-Waqi'ah (سورة الْوَاقِعَة)*
  - *Surah Al-Mulk (سورة الْمُلْك)*
  - *Surah Al-Kahf (سورة الْكَهْف)*
* **Dual-Language Quran Reader:** Arabic verse-by-verse presentation with accurate Urdu translation.

### 5. 📿 Digital Tasbeeh Counter (ڈیجیٹل تسبیح)
* **Custom Zikr & Targets:** Select predefined Azkar (SubhanAllah, Alhamdulillah, Allahu Akbar, Astaghfirullah, Durood Shareef) or custom targets (33, 100, 500, 1000, or Free Count).
* **Interactive Haptic & Visual Feedback:** Radial SVG progress ring, tap animation, keyboard shortcuts (`Space` / `Enter`), and sound chime toggle.
* **Persistent Statistics:** Tracks lifetime taps and completed cycles in `localStorage`.

### 6. 🧭 Qibla Direction Compass (قبلہ نما)
* **Accurate Great-Circle Calculation:** Spherical trigonometry formula calculating exact bearing to the Holy Kaaba (21.4225° N, 39.8262° E) based on user GPS coordinates.
* **Live Orientation Sensor:** Real-time compass heading with directional turn guidance and alignment indicators.

### 7. 🤲 Masnoon Duas & Supplications (مسنون دعائیں)
* 10+ authentic daily supplications (Sayyid-ul-Istighfar, morning/evening, travel, entering/leaving mosque, post-meal, distress relief) with Arabic text, Urdu translations, and one-click clipboard copying.

### 8. 📚 Inspiring Islamic Stories (سبق آموز کہانیاں)
* Authentic stories in Urdu detailing the justice of Hazrat Umar Farooq (RA), the honesty of Prophet Muhammad ﷺ, and lessons in Islamic character.

### 9. 🤖 AI Islamic Assistant / Chatbot (مفتی نور - سوال و جواب)
* Context-aware conversational assistant providing references from Quran and authentic Hadith with quick-prompt chips.

### 10. 📅 Daily Wisdom & Habit Tracker
* **Ayat of the Day:** Fetched from AlQuran Cloud API with auto-fallback.
* **Hadith of the Day:** Curated authentic Hadiths with automatic midnight cache rotation.
* **Daily Islamic Habit Checklist:** Tracks 5 daily prayers, Surah Al-Mulk recitation, and 100x Durood Shareef with midnight auto-reset and day streaks.

---

## 🛠️ Technology Stack

* **Frontend:** HTML5, Modern CSS3 (Variables, Flexbox, Grid, Glassmorphism, CSS Animations)
* **Framework:** Bootstrap 5.3 (Modals, Offcanvas, Accordion, Tooltips)
* **Icons & Fonts:** Font Awesome 6.5, Google Fonts (Amiri, Noto Nastaliq Urdu, Outfit, Inter)
* **Audio:** HTML5 Audio API, Web Audio Chimes, Web Speech API (fallback)
* **APIs Integrated:** AlQuran Cloud API, Aladhan Prayer Timings API

---

## 🚀 Getting Started

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/hussainmustafa1293/islamlife.git
   ```
2. Navigate to the project folder:
   ```bash
   cd islamlife
   ```
3. Open `index.html` in any modern web browser or serve via a local server:
   ```bash
   python -m http.server 8080
   ```
4. Visit `http://localhost:8080` in your browser.

---

## 📄 License
This project is open-source and intended for personal spiritual growth, education, and community benefit.
