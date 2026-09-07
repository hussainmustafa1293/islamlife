/**
 * Islamic Lifestyle Dashboard - Advanced Tasbeeh Counter
 * Features: Dark Theme, Web Audio Synthesis, Haptic Feedback, LocalStorage, Radial SVG Ring
 */

const TasbeehModule = {
  // Preset Adhkar (Zikr list)
  adhkar: [
    {
      id: "subhanallah",
      arabic: "سُبْحَانَ اللَّهِ",
      translit: "SubhanAllah",
      meaning: "Glory be to Allah",
      defaultGoal: 33
    },
    {
      id: "alhamdulillah",
      arabic: "الْحَمْدُ لِلَّهِ",
      translit: "Alhamdulillah",
      meaning: "All praise is due to Allah",
      defaultGoal: 33
    },
    {
      id: "allahuakbar",
      arabic: "اللَّهُ أَكْبَرُ",
      translit: "Allahu Akbar",
      meaning: "Allah is the Greatest",
      defaultGoal: 34
    },
    {
      id: "astaghfirullah",
      arabic: "أَسْتَغْفِرُ اللَّهَ",
      translit: "Astaghfirullah",
      meaning: "I seek forgiveness from Allah",
      defaultGoal: 100
    },
    {
      id: "tahlil",
      arabic: "لَا إِلٰهَ إِلَّا اللَّهُ",
      translit: "La ilaha illallah",
      meaning: "None has the right to be worshipped but Allah",
      defaultGoal: 100
    },
    {
      id: "salawat",
      arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ",
      translit: "Salawat (Durood Sharif)",
      meaning: "O Allah, send blessings upon Muhammad",
      defaultGoal: 100
    },
    {
      id: "hawqala",
      arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
      translit: "La Hawla Wa La Quwwata Illa Billah",
      meaning: "There is no might nor power except with Allah",
      defaultGoal: 100
    },
    {
      id: "hasbunallah",
      arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      translit: "Hasbunallahu Wa Ni'mal Wakeel",
      meaning: "Allah is sufficient for us, and He is the best Disposer of affairs",
      defaultGoal: 100
    }
  ],

  // State
  count: 0,
  goal: 33,
  currentZikrId: "subhanallah",
  cycles: 0,
  totalLifetimeTaps: 0,
  soundEnabled: true,
  audioCtx: null,

  /**
   * Initialize Tasbeeh Engine
   */
  init() {
    this.loadState();
    this.populateZikrDropdown();
    this.bindEvents();
    this.updateUI();
  },

  /**
   * Populate Zikr dropdown select element
   */
  populateZikrDropdown() {
    const selectEl = document.getElementById("tasbeehZikrSelect");
    if (!selectEl) return;

    selectEl.innerHTML = "";
    this.adhkar.forEach(zikr => {
      const option = document.createElement("option");
      option.value = zikr.id;
      option.textContent = `${zikr.translit} (${zikr.arabic})`;
      if (zikr.id === this.currentZikrId) option.selected = true;
      selectEl.appendChild(option);
    });

    const customOpt = document.createElement("option");
    customOpt.value = "custom";
    customOpt.textContent = "Custom Adhkar / Zikr";
    if (this.currentZikrId === "custom") customOpt.selected = true;
    selectEl.appendChild(customOpt);
  },

  /**
   * Synthesize crisp, soft click sound via Web Audio API
   */
  playClickSound(isGoalCelebration = false) {
    if (!this.soundEnabled) return;
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();

      if (isGoalCelebration) {
        // Glorious bell-like chime
        osc.type = "triangle";
        osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.35); // A5

        gainNode.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.5);

        osc.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.5);
      } else {
        // Crisp tactile click
        osc.type = "sine";
        osc.frequency.setValueAtTime(650, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, this.audioCtx.currentTime + 0.04);

        gainNode.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.04);

        osc.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.05);
      }
    } catch (e) {
      console.warn("Audio context not allowed or supported yet:", e);
    }
  },

  /**
   * Handle single tap
   */
  tap() {
    this.count++;
    this.totalLifetimeTaps++;

    // Check if goal is reached
    const isGoal = this.goal > 0 && this.count % this.goal === 0;

    if (isGoal) {
      this.cycles++;
      // Celebrate with distinct haptic vibration and chime
      if (navigator.vibrate) {
        try {
          navigator.vibrate([60, 50, 100]);
        } catch (e) {}
      }
      this.playClickSound(true);
      this.triggerCelebrationEffect();
    } else {
      // Standard tactile feedback
      if (navigator.vibrate) {
        try {
          navigator.vibrate(35);
        } catch (e) {}
      }
      this.playClickSound(false);
    }

    this.saveState();
    this.updateUI();
  },

  /**
   * Reset the current count
   */
  reset() {
    if (confirm("Reset current Tasbeeh count to 0?")) {
      this.count = 0;
      this.saveState();
      this.updateUI();
      if (navigator.vibrate) {
        try { navigator.vibrate(50); } catch (e) {}
      }
    }
  },

  /**
   * Set target goal
   * @param {number} newGoal
   */
  setGoal(newGoal) {
    this.goal = parseInt(newGoal, 10) || 0;
    this.saveState();
    this.updateUI();
  },

  /**
   * Switch active Zikr
   * @param {string} zikrId
   */
  setZikr(zikrId) {
    this.currentZikrId = zikrId;
    const found = this.adhkar.find(z => z.id === zikrId);
    if (found && found.defaultGoal) {
      this.goal = found.defaultGoal;
      const goalSelect = document.getElementById("tasbeehGoalSelect");
      if (goalSelect) goalSelect.value = this.goal;
    }
    this.saveState();
    this.updateUI();
  },

  /**
   * Visual celebration animation when goal is reached
   */
  triggerCelebrationEffect() {
    const stage = document.querySelector(".tasbeeh-counter-stage");
    if (stage) {
      stage.classList.add("celebrating-glow");
      setTimeout(() => stage.classList.remove("celebrating-glow"), 1000);
    }

    const toastMsg = document.getElementById("tasbeehGoalToast");
    if (toastMsg) {
      toastMsg.style.display = "block";
      setTimeout(() => { toastMsg.style.display = "none"; }, 2500);
    }
  },

  /**
   * Update visual elements on the UI
   */
  updateUI() {
    const countEl = document.getElementById("tasbeehCountDisplay");
    const targetLabelEl = document.getElementById("tasbeehTargetLabel");
    const cycleEl = document.getElementById("tasbeehCycleCount");
    const totalEl = document.getElementById("tasbeehTotalCount");
    const zikrArabicEl = document.getElementById("tasbeehArabicDisplay");
    const zikrMeaningEl = document.getElementById("tasbeehMeaningDisplay");
    const ringEl = document.getElementById("tasbeehRingProgress");

    if (countEl) countEl.textContent = this.count;
    if (cycleEl) cycleEl.textContent = this.cycles;
    if (totalEl) totalEl.textContent = this.totalLifetimeTaps;

    if (targetLabelEl) {
      targetLabelEl.textContent = this.goal > 0 ? `Target: ${this.goal}` : "Free Count";
    }

    // Update Zikr text
    const activeZikr = this.adhkar.find(z => z.id === this.currentZikrId);
    if (activeZikr) {
      if (zikrArabicEl) zikrArabicEl.textContent = activeZikr.arabic;
      if (zikrMeaningEl) zikrMeaningEl.textContent = `${activeZikr.translit} — ${activeZikr.meaning}`;
    } else {
      if (zikrArabicEl) zikrArabicEl.textContent = "ذِكْرُ اللَّهِ";
      if (zikrMeaningEl) zikrMeaningEl.textContent = "Custom Remembrance of Allah";
    }

    // Update SVG progress ring
    if (ringEl) {
      const radius = ringEl.r.baseVal.value || 90;
      const circumference = 2 * Math.PI * radius;
      ringEl.style.strokeDasharray = `${circumference} ${circumference}`;

      if (this.goal > 0) {
        const progress = (this.count % this.goal) / this.goal;
        const offset = circumference - (progress * circumference);
        ringEl.style.strokeDashoffset = offset;
      } else {
        ringEl.style.strokeDashoffset = 0;
      }
    }
  },

  /**
   * Save settings to LocalStorage
   */
  saveState() {
    const data = {
      count: this.count,
      goal: this.goal,
      currentZikrId: this.currentZikrId,
      cycles: this.cycles,
      totalLifetimeTaps: this.totalLifetimeTaps,
      soundEnabled: this.soundEnabled
    };
    try {
      localStorage.setItem("islamic_dashboard_tasbeeh", JSON.stringify(data));
    } catch (e) {}
  },

  /**
   * Load settings from LocalStorage
   */
  loadState() {
    try {
      const saved = localStorage.getItem("islamic_dashboard_tasbeeh");
      if (saved) {
        const parsed = JSON.parse(saved);
        this.count = parsed.count || 0;
        this.goal = parsed.goal !== undefined ? parsed.goal : 33;
        this.currentZikrId = parsed.currentZikrId || "subhanallah";
        this.cycles = parsed.cycles || 0;
        this.totalLifetimeTaps = parsed.totalLifetimeTaps || this.count;
        this.soundEnabled = parsed.soundEnabled !== undefined ? parsed.soundEnabled : true;
      }
    } catch (e) {}
  },

  /**
   * Bind DOM event listeners
   */
  bindEvents() {
    const tapBtn = document.getElementById("btnTasbeehTap");
    const resetBtn = document.getElementById("btnTasbeehReset");
    const zikrSelect = document.getElementById("tasbeehZikrSelect");
    const goalSelect = document.getElementById("tasbeehGoalSelect");
    const soundToggleBtn = document.getElementById("btnTasbeehSoundToggle");

    if (tapBtn) {
      tapBtn.addEventListener("click", () => this.tap());
      // Support spacebar tap when Tasbeeh modal is open
      window.addEventListener("keydown", (e) => {
        if (e.code === "Space" && document.getElementById("tasbeehModal")?.classList.contains("show")) {
          e.preventDefault();
          this.tap();
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.reset());
    }

    if (zikrSelect) {
      zikrSelect.addEventListener("change", (e) => {
        this.setZikr(e.target.value);
      });
    }

    if (goalSelect) {
      goalSelect.addEventListener("change", (e) => {
        this.setGoal(e.target.value);
      });
      goalSelect.value = this.goal;
    }

    if (soundToggleBtn) {
      soundToggleBtn.addEventListener("click", () => {
        this.soundEnabled = !this.soundEnabled;
        soundToggleBtn.innerHTML = this.soundEnabled 
          ? '<i class="fas fa-volume-up"></i>' 
          : '<i class="fas fa-volume-mute"></i>';
        this.saveState();
      });
    }
  }
};

window.TasbeehModule = TasbeehModule;
