/**
 * Islamic Lifestyle Dashboard - The Triple Calendar System
 * Gregorian Calendar | Hijri (Islamic) Calendar | Punjabi Desi (Bikrami) Calendar
 */

const CalendarSystem = {
  // Punjabi Desi Solar Months (Bikrami / Nanakshahi calendar system)
  desiMonths: [
    { name: "Chet", shahmukhi: "چیت", gurmukhi: "ਚੇਤ", startMonth: 2, startDay: 14, days: 31, season: "Basant (Spring / بہار)" },
    { name: "Baisakh", shahmukhi: "ویساکھ", gurmukhi: "ਵਿਸਾਖ", startMonth: 3, startDay: 14, days: 31, season: "Basant (Harvest / بہار)" },
    { name: "Jeth", shahmukhi: "جیٹھ", gurmukhi: "ਜੇਠ", startMonth: 4, startDay: 15, days: 31, season: "Grikham (Summer / گرمی)" },
    { name: "Harh", shahmukhi: "ہاڑھ", gurmukhi: "ਹਾੜ੍ਹ", startMonth: 5, startDay: 15, days: 31, season: "Grikham (Peak Summer / کڑی دھوپ)" },
    { name: "Sawan", shahmukhi: "ساون", gurmukhi: "ਸਾਵਣ", startMonth: 6, startDay: 16, days: 31, season: "Barkha (Monsoon Rains / ساون رت)" },
    { name: "Bhadon", shahmukhi: "بھادوں", gurmukhi: "ਭਾਦੋਂ", startMonth: 7, startDay: 16, days: 31, season: "Barkha (Late Monsoon / برسات)" },
    { name: "Assu", shahmukhi: "اسو", gurmukhi: "ਅੱਸੂ", startMonth: 8, startDay: 16, days: 30, season: "Sard (Autumn Breeze / پت جھڑ)" },
    { name: "Katak", shahmukhi: "کاتک", gurmukhi: "ਕੱਤਕ", startMonth: 9, startDay: 17, days: 30, season: "Sard (Pleasant Autumn / گلابی سردی)" },
    { name: "Maghar", shahmukhi: "مگھر", gurmukhi: "ਮੱਘਰ", startMonth: 10, startDay: 16, days: 30, season: "Hemant (Pre-Winter / سردی کا آغاز)" },
    { name: "Poh", shahmukhi: "پوہ", gurmukhi: "ਪੋਹ", startMonth: 11, startDay: 15, days: 30, season: "Poh (Chilly Winter / شدید ٹھنڈ)" },
    { name: "Magh", shahmukhi: "ماگھ", gurmukhi: "ਮਾਘ", startMonth: 0, startDay: 14, days: 30, season: "Shishir (Winter Frost / ٹھنڈا موسم)" },
    { name: "Phagan", shahmukhi: "پھگن", gurmukhi: "ਫੱਗਣ", startMonth: 1, startDay: 13, days: 30, season: "Shishir (Winter Farewell / بہار کی آمد)" }
  ],

  /**
   * Calculate Punjabi Desi Date from Gregorian Date
   * @param {Date} date - standard JS Date
   * @returns {Object} Desi calendar details
   */
  getDesiDate(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed (0 = Jan, 8 = Sep)
    const day = date.getDate();

    // Determine which Desi month the current date falls into
    // Each month starts at startMonth and startDay
    let currentDesiMonth = null;
    let desiDay = 1;
    let desiYear = year + 57; // Bikrami year is Gregorian + 57 (after Chet)

    // Sorted transitions starting from Jan to Dec
    const transitions = [
      { desiIndex: 10, month: 0, day: 14 }, // Magh (Jan 14)
      { desiIndex: 11, month: 1, day: 13 }, // Phagan (Feb 13)
      { desiIndex: 0,  month: 2, day: 14 }, // Chet (Mar 14) - Desi New Year starts!
      { desiIndex: 1,  month: 3, day: 14 }, // Baisakh (Apr 14)
      { desiIndex: 2,  month: 4, day: 15 }, // Jeth (May 15)
      { desiIndex: 3,  month: 5, day: 15 }, // Harh (Jun 15)
      { desiIndex: 4,  month: 6, day: 16 }, // Sawan (Jul 16)
      { desiIndex: 5,  month: 7, day: 16 }, // Bhadon (Aug 16)
      { desiIndex: 6,  month: 8, day: 16 }, // Assu (Sep 16)
      { desiIndex: 7,  month: 9, day: 17 }, // Katak (Oct 17)
      { desiIndex: 8,  month: 10, day: 16 },// Maghar (Nov 16)
      { desiIndex: 9,  month: 11, day: 15 } // Poh (Dec 15)
    ];

    let foundTransition = null;
    let transitionDate = null;

    // Find the latest transition that happened on or before today
    for (let i = transitions.length - 1; i >= 0; i--) {
      const t = transitions[i];
      const tDate = new Date(year, t.month, t.day);
      if (date >= tDate) {
        foundTransition = t;
        transitionDate = tDate;
        break;
      }
    }

    // If date is earlier than Jan 14 (e.g. Jan 1 - Jan 13), it belongs to Poh of previous Gregorian year
    if (!foundTransition) {
      foundTransition = { desiIndex: 9, month: 11, day: 15 };
      transitionDate = new Date(year - 1, 11, 15);
      desiYear = year + 56;
    } else if (foundTransition.desiIndex === 10 || foundTransition.desiIndex === 11) {
      // Magh and Phagan are still in the previous Bikrami year before Chet arrives in March
      desiYear = year + 56;
    }

    const monthObj = this.desiMonths[foundTransition.desiIndex];
    // Calculate difference in days
    const diffTime = Math.abs(date.setHours(0,0,0,0) - transitionDate.setHours(0,0,0,0));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    desiDay = diffDays + 1;

    return {
      day: desiDay,
      monthName: monthObj.name,
      shahmukhi: monthObj.shahmukhi,
      gurmukhi: monthObj.gurmukhi,
      season: monthObj.season,
      year: desiYear,
      formattedText: `${desiDay} ${monthObj.name} ${desiYear} Bikrami`,
      formattedDesi: `${desiDay} ${monthObj.shahmukhi} (${monthObj.gurmukhi})`
    };
  },

  /**
   * Get formatted Gregorian calendar data
   * @param {Date} date
   */
  getGregorianDate(date = new Date()) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return {
      day: date.getDate(),
      weekday: days[date.getDay()],
      month: months[date.getMonth()],
      year: date.getFullYear(),
      fullString: `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    };
  },

  /**
   * Fallback Hijri date calculator using Intl.DateTimeFormat
   * @param {Date} date
   */
  getFallbackHijri(date = new Date()) {
    try {
      const formatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      const parts = formatter.formatToParts(date);
      let day = '', month = '', year = '';
      parts.forEach(p => {
        if (p.type === 'day') day = p.value;
        if (p.type === 'month') month = p.value;
        if (p.type === 'year') year = p.value;
      });

      return {
        day: day || date.getDate(),
        monthEn: month || "Safar",
        monthAr: "صفر",
        year: year ? `${year} AH` : "1448 AH",
        fullString: `${day} ${month} ${year} AH`
      };
    } catch (e) {
      return {
        day: "24",
        monthEn: "Safar",
        monthAr: "صفر",
        year: "1448 AH",
        fullString: "24 Safar 1448 AH"
      };
    }
  },

  /**
   * Render all three calendars onto the DOM
   * @param {Object|null} aladhanHijriData - Hijri data object from Aladhan API
   */
  renderCalendars(aladhanHijriData = null) {
    const today = new Date();

    // 1. Gregorian
    const greg = this.getGregorianDate(today);
    const gregDayEl = document.getElementById("gregorianDay");
    const gregMonthYearEl = document.getElementById("gregorianMonthYear");
    const gregWeekdayEl = document.getElementById("gregorianWeekday");

    if (gregDayEl) gregDayEl.textContent = greg.day;
    if (gregMonthYearEl) gregMonthYearEl.textContent = `${greg.month} ${greg.year}`;
    if (gregWeekdayEl) gregWeekdayEl.textContent = greg.weekday;

    // 2. Hijri (Islamic)
    let hijri = null;
    if (aladhanHijriData) {
      hijri = {
        day: aladhanHijriData.day,
        monthEn: aladhanHijriData.month?.en || "Islamic Month",
        monthAr: aladhanHijriData.month?.ar || "",
        year: `${aladhanHijriData.year} AH`,
        designation: aladhanHijriData.designation?.abbreviated || "AH"
      };
    } else {
      hijri = this.getFallbackHijri(today);
    }

    const hijriDayEl = document.getElementById("hijriDay");
    const hijriMonthYearEl = document.getElementById("hijriMonthYear");
    const hijriArabicEl = document.getElementById("hijriArabic");
    const hijriWeekdayEl = document.getElementById("hijriWeekday");

    if (hijriDayEl) hijriDayEl.textContent = hijri.day;
    if (hijriMonthYearEl) hijriMonthYearEl.textContent = `${hijri.monthEn} ${hijri.year}`;
    if (hijriArabicEl) hijriArabicEl.textContent = `${hijri.day} ${hijri.monthAr}`;
    if (hijriWeekdayEl) hijriWeekdayEl.textContent = "Islamic Lunar Calendar";

    // 3. Punjabi Desi (Bikrami)
    const desi = this.getDesiDate(today);
    const desiDayEl = document.getElementById("desiDay");
    const desiMonthYearEl = document.getElementById("desiMonthYear");
    const desiScriptEl = document.getElementById("desiScript");
    const desiSeasonEl = document.getElementById("desiSeason");

    if (desiDayEl) desiDayEl.textContent = desi.day;
    if (desiMonthYearEl) desiMonthYearEl.textContent = `${desi.monthName} ${desi.year}`;
    if (desiScriptEl) desiScriptEl.textContent = desi.formattedDesi;
    if (desiSeasonEl) desiSeasonEl.textContent = desi.season;
  }
};

window.CalendarSystem = CalendarSystem;
