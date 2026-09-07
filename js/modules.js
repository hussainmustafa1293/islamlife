/**
 * Islamic Lifestyle Dashboard - 8 Feature Menu Modules & Datasets
 * Covers: 99 Names of Allah, Quran Tilawat, Quran Reading, Qibla Direction,
 * Masnoon Duas, 99 Names of Prophet, Islamic Stories, Namaz Guide.
 */

const DashboardModules = {
  userCoords: { lat: 31.5204, lng: 74.3587 }, // Default Lahore / updated by Geolocation

  // =========================================================================
  // 1. 99 Names of Allah (Asma-ul-Husna)
  // =========================================================================
  allahNames: [
    { num: 1, ar: "الرَّحْمَٰنُ", en: "Ar-Rahman", meaning: "The Most Gracious, The Beneficent" },
    { num: 2, ar: "الرَّحِيمُ", en: "Ar-Raheem", meaning: "The Most Merciful" },
    { num: 3, ar: "الْمَلِكُ", en: "Al-Malik", meaning: "The King and Owner of All" },
    { num: 4, ar: "الْقُدُّوسُ", en: "Al-Quddus", meaning: "The Pure, Most Holy" },
    { num: 5, ar: "السَّلَامُ", en: "As-Salam", meaning: "The Source of Peace, The Flawless" },
    { num: 6, ar: "الْمُؤْمِنُ", en: "Al-Mu'min", meaning: "The Granter of Security and Faith" },
    { num: 7, ar: "الْمُهَيْمِنُ", en: "Al-Muhaymin", meaning: "The Guardian, The Preserver" },
    { num: 8, ar: "الْعَزِيزُ", en: "Al-Azeez", meaning: "The Almighty, The Invulnerable" },
    { num: 9, ar: "الْجَبَّارُ", en: "Al-Jabbar", meaning: "The Compeller, The Restorer" },
    { num: 10, ar: "الْمُتَكَبِّرُ", en: "Al-Mutakabbir", meaning: "The Supremely Great" },
    { num: 11, ar: "الْخَالِقُ", en: "Al-Khaliq", meaning: "The Creator, The Maker" },
    { num: 12, ar: "الْبَارِئُ", en: "Al-Bari'", meaning: "The Evolver, The Developer" },
    { num: 13, ar: "الْمُصَوِّرُ", en: "Al-Musawwir", meaning: "The Shaper of Beauty, The Fashioner" },
    { num: 14, ar: "الْغَفَّارُ", en: "Al-Ghaffar", meaning: "The Constant Forgiver" },
    { num: 15, ar: "الْقَهَّارُ", en: "Al-Qahhar", meaning: "The Subduer, The All-Dominant" },
    { num: 16, ar: "الْوَهَّابُ", en: "Al-Wahhab", meaning: "The Bestower of Countless Gifts" },
    { num: 17, ar: "الرَّزَّاقُ", en: "Ar-Razzaq", meaning: "The Provider, The Sustainer" },
    { num: 18, ar: "الْفَتَّاحُ", en: "Al-Fattah", meaning: "The Opener of All Doors" },
    { num: 19, ar: "الْعَلِيمُ", en: "Al-'Aleem", meaning: "The All-Knowing, The Omniscient" },
    { num: 20, ar: "الْقَابِضُ", en: "Al-Qabid", meaning: "The Withholder, The Restrainer" },
    { num: 21, ar: "الْبَاسِطُ", en: "Al-Basit", meaning: "The Expander, The Magnanimous" },
    { num: 22, ar: "الْخَافِضُ", en: "Al-Khafid", meaning: "The Humbler of the Arrogant" },
    { num: 23, ar: "الرَّافِعُ", en: "Ar-Rafi'", meaning: "The Exalter of the Righteous" },
    { num: 24, ar: "الْمُعِزُّ", en: "Al-Mu'izz", meaning: "The Bestower of Honor" },
    { num: 25, ar: "الْمُذِلُّ", en: "Al-Muzill", meaning: "The Dishonorer of Oppressors" },
    { num: 26, ar: "السَّمِيعُ", en: "As-Sami'", meaning: "The All-Hearing" },
    { num: 27, ar: "الْبَصِيرُ", en: "Al-Baseer", meaning: "The All-Seeing" },
    { num: 28, ar: "الْحَكَمُ", en: "Al-Hakam", meaning: "The Ultimate Judge" },
    { num: 29, ar: "الْعَدْلُ", en: "Al-'Adl", meaning: "The Utterly Just" },
    { num: 30, ar: "اللَّطِيفُ", en: "Al-Lateef", meaning: "The Subtly Kind, The Ineffable" },
    { num: 31, ar: "الْخَبِيرُ", en: "Al-Khabeer", meaning: "The All-Aware" },
    { num: 32, ar: "الْحَلِيمُ", en: "Al-Haleem", meaning: "The Most Forbearing" },
    { num: 33, ar: "الْعَظِيمُ", en: "Al-'Azeem", meaning: "The Magnificent, The Infinite" },
    { num: 34, ar: "الْغَفُورُ", en: "Al-Ghafoor", meaning: "The All-Forgiving" },
    { num: 35, ar: "الشَّكُورُ", en: "Ash-Shakoor", meaning: "The Most Appreciative" },
    { num: 36, ar: "الْعَلِيُّ", en: "Al-'Aliyy", meaning: "The Highest, The Sublime" },
    { num: 37, ar: "الْكَبِيرُ", en: "Al-Kabeer", meaning: "The Greatest, The Boundless" },
    { num: 38, ar: "الْحَفِيظُ", en: "Al-Hafeez", meaning: "The Preserver, The Protector" },
    { num: 39, ar: "الْمُقِيتُ", en: "Al-Muqeet", meaning: "The Nourisher of Creation" },
    { num: 40, ar: "الْحَسِيبُ", en: "Al-Haseeb", meaning: "The Reckoner, The Sufficient" },
    { num: 41, ar: "الْجَلِيلُ", en: "Al-Jaleel", meaning: "The Majestic, The Exalted" },
    { num: 42, ar: "الْكَرِيمُ", en: "Al-Kareem", meaning: "The Most Generous, Bountiful" },
    { num: 43, ar: "الرَّقِيبُ", en: "Ar-Raqeeb", meaning: "The Watchful, Ever-Vigilant" },
    { num: 44, ar: "الْمُجِيبُ", en: "Al-Mujeeb", meaning: "The Responder to Prayers" },
    { num: 45, ar: "الْوَاسِعُ", en: "Al-Wasi'", meaning: "The All-Encompassing, Boundless" },
    { num: 46, ar: "الْحَكِيمُ", en: "Al-Hakeem", meaning: "The Perfectly Wise" },
    { num: 47, ar: "الْوَدُودُ", en: "Al-Wadood", meaning: "The Loving, The Affectionate" },
    { num: 48, ar: "الْمَجِيدُ", en: "Al-Majeed", meaning: "The All-Glorious" },
    { num: 49, ar: "الْبَاعِثُ", en: "Al-Ba'ith", meaning: "The Resurrector of the Dead" },
    { num: 50, ar: "الشَّهِيدُ", en: "Ash-Shaheed", meaning: "The Witness of All" },
    { num: 51, ar: "الْحَقُّ", en: "Al-Haqq", meaning: "The Absolute Truth" },
    { num: 52, ar: "الْوَكِيلُ", en: "Al-Wakeel", meaning: "The Trustworthy Trustee" },
    { num: 53, ar: "الْقَوِيُّ", en: "Al-Qawiyy", meaning: "The All-Strong, Possessor of Might" },
    { num: 54, ar: "الْمَتِينُ", en: "Al-Mateen", meaning: "The Firm, The Steadfast" },
    { num: 55, ar: "الْوَلِيُّ", en: "Al-Waliyy", meaning: "The Protecting Friend" },
    { num: 56, ar: "الْحَمِيدُ", en: "Al-Hameed", meaning: "The All-Praiseworthy" },
    { num: 57, ar: "الْمُحْصِي", en: "Al-Muhsi", meaning: "The Appraiser, Knower of All" },
    { num: 58, ar: "الْمُبْدِئُ", en: "Al-Mubdi'", meaning: "The Originator of Creation" },
    { num: 59, ar: "الْمُعِيدُ", en: "Al-Mu'eed", meaning: "The Restorer of Life" },
    { num: 60, ar: "الْمُحْيِي", en: "Al-Muhyee", meaning: "The Giver of Life" },
    { num: 61, ar: "الْمُمِيتُ", en: "Al-Mumeet", meaning: "The Creator of Death" },
    { num: 62, ar: "الْحَيُّ", en: "Al-Hayy", meaning: "The Ever-Living" },
    { num: 63, ar: "الْقَيُّومُ", en: "Al-Qayyum", meaning: "The Self-Subsisting Sustainer" },
    { num: 64, ar: "الْوَاجِدُ", en: "Al-Wajid", meaning: "The Finder, The Unfailing" },
    { num: 65, ar: "الْمَاجِدُ", en: "Al-Majid", meaning: "The Illustrious, The Noble" },
    { num: 66, ar: "الْوَاحِدُ", en: "Al-Wahid", meaning: "The Unique, The Only One" },
    { num: 67, ar: "الْأَحَدُ", en: "Al-Ahad", meaning: "The Indivisible One" },
    { num: 68, ar: "الصَّمَدُ", en: "As-Samad", meaning: "The Eternal, Independent Refuge" },
    { num: 69, ar: "الْقَادِرُ", en: "Al-Qadir", meaning: "The Capable, The Omnipotent" },
    { num: 70, ar: "الْمُقْتَدِرُ", en: "Al-Muqtadir", meaning: "The Determiner, All-Powerful" },
    { num: 71, ar: "الْمُقَدِّمُ", en: "Al-Muqaddim", meaning: "The Expediter, Who Brings Forward" },
    { num: 72, ar: "الْمُؤَخِّرُ", en: "Al-Mu'akhkhir", meaning: "The Delayer, Who Puts Behind" },
    { num: 73, ar: "الْأَوَّلُ", en: "Al-Awwal", meaning: "The Very First (Without Beginning)" },
    { num: 74, ar: "الْآخِرُ", en: "Al-Akhir", meaning: "The Very Last (Without End)" },
    { num: 75, ar: "الظَّاهِرُ", en: "Az-Zahir", meaning: "The Manifest, Evident" },
    { num: 76, ar: "الْبَاطِنُ", en: "Al-Batin", meaning: "The Hidden, Unseen" },
    { num: 77, ar: "الْوَالِي", en: "Al-Waali", meaning: "The Governor, Sole Ruler" },
    { num: 78, ar: "الْمُتَعَالِي", en: "Al-Muta'ali", meaning: "The Supreme, Most Exalted" },
    { num: 79, ar: "الْبَرُّ", en: "Al-Barr", meaning: "The Source of All Goodness" },
    { num: 80, ar: "التَّوَّابُ", en: "At-Tawwab", meaning: "The Acceptor of Repentance" },
    { num: 81, ar: "الْمُنْتَقِمُ", en: "Al-Muntaqim", meaning: "The Just Avenger of Wrong" },
    { num: 82, ar: "العَفُوُّ", en: "Al-'Afuww", meaning: "The Supreme Pardoner" },
    { num: 83, ar: "الرَّؤُوفُ", en: "Ar-Ra'oof", meaning: "The Most Kind, Compassionate" },
    { num: 84, ar: "مَالِكُ الْمُلْكِ", en: "Malik-ul-Mulk", meaning: "The Absolute Master of the Kingdom" },
    { num: 85, ar: "ذُو الْجَلَالِ وَالْإِكْرَامِ", en: "Zul-Jalali wal-Ikram", meaning: "The Lord of Majesty and Bounty" },
    { num: 86, ar: "الْمُقْسِطُ", en: "Al-Muqsit", meaning: "The Perfectly Equitable" },
    { num: 87, ar: "الْجَامِعُ", en: "Al-Jami'", meaning: "The Gatherer, The Unifier" },
    { num: 88, ar: "الْغَنِيُّ", en: "Al-Ghaniyy", meaning: "The Self-Sufficient, Free of Need" },
    { num: 89, ar: "الْمُغْنِي", en: "Al-Mughni", meaning: "The Enricher, Bestower of Wealth" },
    { num: 90, ar: "الْمَانِعُ", en: "Al-Mani'", meaning: "The Preventer of Harm" },
    { num: 91, ar: "الضَّارُّ", en: "Ad-Darr", meaning: "The Distresser, Creator of Trials" },
    { num: 92, ar: "النَّافِعُ", en: "An-Nafi'", meaning: "The Giver of Benefit" },
    { num: 93, ar: "النُّورُ", en: "An-Noor", meaning: "The Light of the Heavens and Earth" },
    { num: 94, ar: "الْهَادِي", en: "Al-Hadi", meaning: "The Ultimate Guide" },
    { num: 95, ar: "الْبَدِيعُ", en: "Al-Badi'", meaning: "The Incomparable Originator" },
    { num: 96, ar: "الْبَاقِي", en: "Al-Baqi", meaning: "The Everlasting, Eternal" },
    { num: 97, ar: "الْوَارِثُ", en: "Al-Warith", meaning: "The Inheritor of All Existence" },
    { num: 98, ar: "الرَّشِيدُ", en: "Ar-Rasheed", meaning: "The Infallible Teacher and Guide" },
    { num: 99, ar: "الصَّبُورُ", en: "As-Saboor", meaning: "The Most Patient and Enduring" }
  ],

  // =========================================================================
  // 2. Quran Tilawat Audio Playlists (5 Mandatory Surahs with Open MP3 Links)
  // =========================================================================
  tilawatSurahs: [
    {
      id: 36,
      name: "Surah Yaseen",
      ar: "سورة يٰسٓ",
      reciter: "Mishary Rashid Alafasy",
      audio: "https://server8.mp3quran.net/afs/036.mp3",
      duration: "14:10"
    },
    {
      id: 55,
      name: "Surah Ar-Rahman",
      ar: "سورة الرَّحْمٰن",
      reciter: "Mishary Rashid Alafasy",
      audio: "https://server8.mp3quran.net/afs/055.mp3",
      duration: "09:45"
    },
    {
      id: 56,
      name: "Surah Al-Waqi'ah",
      ar: "سورة الْوَاقِعَة",
      reciter: "Mishary Rashid Alafasy",
      audio: "https://server8.mp3quran.net/afs/056.mp3",
      duration: "10:30"
    },
    {
      id: 67,
      name: "Surah Al-Mulk",
      ar: "سورة الْمُلْك",
      reciter: "Mishary Rashid Alafasy",
      audio: "https://server8.mp3quran.net/afs/067.mp3",
      duration: "07:22"
    },
    {
      id: 18,
      name: "Surah Al-Kahf",
      ar: "سورة الْكَهْف",
      reciter: "Mishary Rashid Alafasy",
      audio: "https://server8.mp3quran.net/afs/018.mp3",
      duration: "25:40"
    }
  ],

  // =========================================================================
  // 3. Quran Surah Reading Highlights (5 Specific Surahs with Arabic & Urdu)
  // =========================================================================
  quranSurahs: [
    {
      num: 36,
      name: "Surah Yaseen (Heart of Quran)",
      ar: "سورة يٰسٓ",
      desc: "قرآن کا دل - مغفرت اور ایمان بالآخرت کی عظیم سورت",
      ayahs: [
        {
          num: 1,
          ar: "يس ۝",
          ur: "یسٓ (حقیقی معنی اللہ اور اس کے رسول ہی بہتر جانتے ہیں)۔",
          en: "Ya-Sin."
        },
        {
          num: 2,
          ar: "وَالْقُرْآنِ الْحَكِيمِ ۝",
          ur: "حکمت سے لبریز قرآن کی قسم۔",
          en: "By the wise Qur'an."
        },
        {
          num: 3,
          ar: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ ۝",
          ur: "بے شک آپ (اے حبیب مکرم!) رسولوں میں سے ہیں۔",
          en: "Indeed you, [O Muhammad], are from among the messengers,"
        },
        {
          num: 4,
          ar: "عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ ۝",
          ur: "سیدھے اور سچے راستے پر ہیں۔",
          en: "On a straight path."
        },
        {
          num: 5,
          ar: "تَنزِيلَ الْعَزِيزِ الرَّحِيمِ ۝",
          ur: "(یہ قرآن) غالب اور نہایت رحم فرمانے والے کا نازل کیا ہوا ہے۔",
          en: "[This is] a revelation of the Exalted in Might, the Merciful,"
        },
        {
          num: 6,
          ar: "لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ ۝",
          ur: "تاکہ آپ ایسی قوم کو ڈرائیں جن کے باپ دادا کو نہیں ڈرایا گیا تھا سو وہ غفلت میں پڑے ہیں۔",
          en: "That you may warn a people whose forefathers were not warned, so they are unaware."
        },
        {
          num: 7,
          ar: "لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ ۝",
          ur: "یقیناً ان میں سے اکثر لوگوں پر (نافرمانی کی وجہ سے عذاب کی) بات ثابت ہو چکی ہے سو وہ ایمان نہیں لائیں گے۔",
          en: "Already the word has come into effect upon most of them, so they do not believe."
        },
        {
          num: 8,
          ar: "إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُم مُّقْمَحُونَ ۝",
          ur: "بے شک ہم نے ان کی گردنوں میں طوق ڈال دیے ہیں جو ان کی ٹھوڑیوں تک ہیں، پس ان کے سر اوپر اٹھے ہوئے ہیں۔",
          en: "Indeed, We have put shackles on their necks, and they are to their chins, so they are with heads [kept] aloft."
        },
        {
          num: 9,
          ar: "وَجَعَلْنَا مِن بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ ۝",
          ur: "اور ہم نے ایک دیوار ان کے آگے کھڑی کر دی اور ایک دیوار ان کے پیچھے، پس ہم نے ان کی آنکھوں پر پردہ ڈال دیا ہے سو وہ کچھ نہیں دیکھ پاتے۔",
          en: "And We have put before them a barrier and behind them a barrier and covered them, so they do not see."
        },
        {
          num: 10,
          ar: "وَسَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ ۝",
          ur: "اور ان کے حق میں برابر ہے کہ آپ انہیں ڈرائیں یا نہ ڈرائیں، وہ ایمان لانے والے نہیں۔",
          en: "And it is all the same for them whether you warn them or do not warn them - they will not believe."
        },
        {
          num: 11,
          ar: "إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ ۖ فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ ۝",
          ur: "آپ تو صرف اسی شخص کو ڈرا سکتے ہیں جو نصیحت کی پیروی کرے اور بن دیکھے رحمن سے ڈرے، پس آپ اسے مغفرت اور عزت والے اجر کی خوشخبری سنا دیجیے۔",
          en: "You can only warn one who follows the message and fears the Most Merciful unseen. So give him good tidings of forgiveness and noble reward."
        },
        {
          num: 12,
          ar: "إِنَّا نَحْنُ نُحْيِي الْمَوْتَىٰ وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ ۚ وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ ۝",
          ur: "بے شک ہم ہی مُردوں کو زندہ کریں گے اور ہم لکھتے جاتے ہیں وہ تمام اعمال جو وہ آگے بھیج چکے اور ان کے تمام آثار بھی، اور ہم نے ہر چیز کو ایک کھلی کتاب (لوحِ محفوظ) میں احاطہ کر رکھا ہے۔",
          en: "Indeed, it is We who bring the dead to life and record what they have put forth and what they left behind, and all things We have enumerated in a clear register."
        },
        {
          num: 82,
          ar: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ ۝",
          ur: "اس کی شان تو یہ ہے کہ جب وہ کسی چیز کا ارادہ فرماتا ہے تو اسے صرف فرماتا ہے: 'ہو جا' پس وہ ہو جاتی ہے۔",
          en: "His command is only when He intends a thing that He says to it, 'Be,' and it is."
        },
        {
          num: 83,
          ar: "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ وَإِلَيْهِ تُرْجَعُونَ ۝",
          ur: "پس پاک ہے وہ ذات جس کے دستِ قدرت میں ہر چیز کی بادشاہی ہے اور تم اسی کی طرف لوٹائے جاؤ گے۔",
          en: "So exalted is He in whose hand is the realm of all things, and to Him you will be returned."
        }
      ]
    },
    {
      num: 55,
      name: "Surah Ar-Rahman (The Beneficent)",
      ar: "سورة الرَّحْمٰن",
      desc: "عروس القرآن - الٰہی نعمتوں اور رحمتوں کا شاہکار بیان",
      ayahs: [
        { num: 1, ar: "الرَّحْمَٰنُ ۝", ur: "رحمن (بڑا مہربان اللہ)۔", en: "The Most Merciful." },
        { num: 2, ar: "عَلَّمَ الْقُرْآنَ ۝", ur: "اسی نے قرآن سکھایا۔", en: "Taught the Qur'an," },
        { num: 3, ar: "خَلَقَ الْإِنسَانَ ۝", ur: "اسی نے انسان کو پیدا فرمایا۔", en: "Created man," },
        { num: 4, ar: "عَلَّمَهُ الْبَيَانَ ۝", ur: "اسے بیان کرنا (اور بولنا) سکھایا۔", en: "[And] taught him eloquence." },
        { num: 5, ar: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ ۝", ur: "سورج اور چاند ایک معین حساب کے پابند ہیں۔", en: "The sun and the moon [move] by precise calculation," },
        { num: 6, ar: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ ۝", ur: "اور سبزہ اور درخت سب اسی کو سجدہ ریز ہیں۔", en: "And the stars and trees prostrate." },
        { num: 7, ar: "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ ۝", ur: "اور اسی نے آسمان کو بلند کیا اور عدل کا ترازو قائم کیا۔", en: "And the heaven He raised and imposed the balance." },
        { num: 8, ar: "أَلَّا تَطْغَوْا فِي الْمِيزَانِ ۝", ur: "تاکہ تم تولنے میں ناانصافی نہ کرو۔", en: "That you not transgress within the balance." },
        { num: 9, ar: "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ ۝", ur: "اور تول کو انصاف کے ساتھ قائم رکھو اور ماپ میں کمی نہ کرو۔", en: "And establish weight in justice and do not make deficient the balance." },
        { num: 10, ar: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ ۝", ur: "اور اسی نے زمین کو تمام مخلوقات کے لیے بچھایا۔", en: "And the earth He has laid out for the creatures." },
        { num: 11, ar: "فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ ۝", ur: "اس میں طرح طرح کے پھل اور غلاف والے کھجور کے درخت ہیں۔", en: "Therein is fruit and date palms having sheaths," },
        { num: 12, ar: "وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ ۝", ur: "اور بھوسے والا اناج اور خوشبودار پھول ہیں۔", en: "And grain having husks and scented plants." },
        { num: 13, ar: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ۝", ur: "پس (اے جن و انس!) تم اپنے پروردگار کی کون کون سی نعمتوں کو جھٹلاؤ گے؟", en: "So which of the favors of your Lord would you deny?" },
        { num: 14, ar: "خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ ۝", ur: "اس نے انسان کو ٹھیکرے جیسی کھنکھناتی مٹی سے پیدا فرمایا۔", en: "He created man from clay like that of pottery." },
        { num: 15, ar: "وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ ۝", ur: "اور جنات کو آگ کے خالص شعلے سے پیدا کیا۔", en: "And He created the jinn from a smokeless flame of fire." },
        { num: 16, ar: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ۝", ur: "سو تم اپنے رب کی کون کون سی نعمتوں کو جھٹلاؤ گے؟", en: "So which of the favors of your Lord would you deny?" },
        { num: 26, ar: "كُلُّ مَنْ عَلَيْهَا فَانٍ ۝", ur: "زمین پر جو کوئی بھی ہے فنا ہو جانے والا ہے۔", en: "Everyone upon the earth will perish," },
        { num: 27, ar: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ ۝", ur: "اور صرف آپ کے رب کی جلال اور اکرام والی ذات ہی باقی رہے گی۔", en: "And there will remain the Face of your Lord, Owner of Majesty and Honor." },
        { num: 28, ar: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ۝", ur: "پس تم اپنے پروردگار کی کس کس نعمت کو جھٹلاؤ گے؟", en: "So which of the favors of your Lord would you deny?" }
      ]
    },
    {
      num: 67,
      name: "Surah Al-Mulk (The Sovereignty)",
      ar: "سورة الْمُلْك",
      desc: "عذابِ قبر سے نجات دینے والی اور شفاعت فرمانے والی سورت",
      ayahs: [
        {
          num: 1,
          ar: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ۝",
          ur: "بڑی بابرکت ہے وہ ذات جس کے دستِ قدرت میں ساری بادشاہی ہے اور وہ ہر چیز پر کامل قدرت رکھتا ہے۔",
          en: "Blessed is He in whose hand is dominion, and He is over all things competent -"
        },
        {
          num: 2,
          ar: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ ۝",
          ur: "جس نے موت اور زندگی کو پیدا فرمایا تاکہ تمہیں آزمائے کہ تم میں سے عمل کے لحاظ سے کون سب سے بہتر ہے، اور وہ غالب، بڑا بخشنے والا ہے۔",
          en: "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving -"
        },
        {
          num: 3,
          ar: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ ۝",
          ur: "جس نے سات آسمان اوپر تلے پیدا کیے، تم رحمن کی کاریگری میں کوئی نقص نہیں دیکھو گے، پس دوبارہ نگاہ ڈالو، کیا تمہیں کوئی شگاف نظر آتا ہے؟",
          en: "[And] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return [your] vision [to the sky]; do you see any breaks?"
        },
        {
          num: 4,
          ar: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ ۝",
          ur: "پھر بار بار نگاہ ڈالو، نگاہ تھک کر عاجز ہو کر تمہاری طرف لوٹ آئے گی۔",
          en: "Then return your vision twice again. [Your] vision will return to you humbled while it is fatigued."
        },
        {
          num: 5,
          ar: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ ۝",
          ur: "اور بے شک ہم نے آسمانِ دنیا کو روشن چراغوں (ستاروں) سے آراستہ کیا اور انہیں شیطانوں کو مار بھگانے کا ذریعہ بنایا اور ان کے لیے دہکتی آگ کا عذاب تیار کر رکھا ہے۔",
          en: "And We have certainly beautified the nearest heaven with stars and have made [from] them projectiles for the devils and have prepared for them the punishment of the Blaze."
        },
        {
          num: 12,
          ar: "إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ ۝",
          ur: "بے شک جو لوگ اپنے رب سے بن دیکھے ڈرتے ہیں، ان کے لیے مغفرت اور بہت بڑا اجر ہے۔",
          en: "Indeed, those who fear their Lord unseen will have forgiveness and great reward."
        },
        {
          num: 13,
          ar: "وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ ۖ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ ۝",
          ur: "اور تم اپنی بات چھپا کر کہو یا پکار کر، بے شک وہ سینوں کے پوشیدہ رازوں کو بھی خوب جاننے والا ہے۔",
          en: "And conceal your speech or publicize it; indeed, He is Knowing of that within the breasts."
        },
        {
          num: 14,
          ar: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ ۝",
          ur: "بھلا کیا وہی نہ جانے گا جس نے پیدا کیا ہے؟ حالانکہ وہ بڑا باریک بین اور باخبر ہے۔",
          en: "Does He who created not know, while He is the Subtle, the Acquainted?"
        },
        {
          num: 30,
          ar: "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ ۝",
          ur: "آپ فرما دیجیے: بھلا دیکھو تو اگر تمہارا پانی زمین کی گہرائی میں اتر جائے تو کون ہے جو تمہارے لیے نتھرا ہوا میٹھا پانی لے آئے؟",
          en: "Say, 'Have you considered: if your water was to become sunken [into the earth], then who could bring you flowing water?'"
        }
      ]
    },
    {
      num: 56,
      name: "Surah Al-Waqi'ah (The Inevitable)",
      ar: "سورة الْوَاقِعَة",
      desc: "رزق میں برکت اور تنگیِ معاش سے حفاظت کی مبارک سورت",
      ayahs: [
        { num: 1, ar: "إِذَا وَقَعَتِ الْوَاقِعَةُ ۝", ur: "جب واقع ہونے والی (قیامت) واقع ہو جائے گی۔", en: "When the Occurrence occurs," },
        { num: 2, ar: "لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ۝", ur: "اس کے واقع ہونے میں کوئی جھوٹ نہیں۔", en: "There is, at its occurrence, no denial." },
        { num: 3, ar: "خَافِضَةٌ رَّافِعَةٌ ۝", ur: "وہ (کسی کو) پست کرنے والی اور (کسی کو) بلند کرنے والی ہوگی۔", en: "It will bring down [some] and raise up [others]." },
        { num: 4, ar: "إِذَا رُجَّتِ الْأَرْضُ رَجًّا ۝", ur: "جب زمین زور سے ہلا ڈالی جائے گی۔", en: "When the earth is shaken with convulsion," },
        { num: 5, ar: "وَبُسَّتِ الْجِبَالُ بَسًّا ۝", ur: "اور پہاڑ ریزہ ریزہ کر دیے جائیں گے۔", en: "And the mountains are broken down, crumbling" },
        { num: 6, ar: "فَكَانَتْ هَبَاءً مُّنبَثًّا ۝", ur: "پس وہ اڑتی ہوئی غبار بن جائیں گے۔", en: "And become dust dispersing." },
        { num: 7, ar: "وَكُنتُمْ أَزْوَاجًا ثَلَاثَةً ۝", ur: "اور تم تین گروہوں میں تقسیم ہو جاؤ گے۔", en: "And you become [of] three kinds:" },
        { num: 8, ar: "فَأَصْحَابُ الْمَيْمَنَةِ مَا أَصْحَابُ الْمَيْمَنَةِ ۝", ur: "پس دائیں ہاتھ والے، کیا ہی کہنا دائیں ہاتھ والوں کا!", en: "Then the companions of the right - what are the companions of the right?" },
        { num: 9, ar: "وَأَصْحَابُ الْمَشْأَمَةِ مَا أَصْحَابُ الْمَشْأَمَةِ ۝", ur: "اور بائیں ہاتھ والے، کیا ہی برے ہیں بائیں ہاتھ والے!", en: "And the companions of the left - what are the companions of the left?" },
        { num: 10, ar: "وَالسَّابِقُونَ السَّابِقُونَ ۝", ur: "اور (نیکی میں) سبقت لے جانے والے تو سبقت ہی لے جانے والے ہیں۔", en: "And the forerunners, the forerunners -" },
        { num: 11, ar: "أُولَٰئِكَ الْمُقَرَّبُونَ ۝", ur: "وہی اللہ کے خاص مقرب بندے ہیں۔", en: "Those are the ones brought near [to Allah]" },
        { num: 12, ar: "فِي جَنَّاتِ النَّعِيمِ ۝", ur: "نعمتوں والی سدا بہار جنتوں میں۔", en: "In the Gardens of Pleasure," },
        { num: 88, ar: "فَأَمَّا إِن كَانَ مِنَ الْمُقَرَّبِينَ ۝", ur: "پس اگر وہ مرنے والا مقربین میں سے ہو،", en: "And if the deceased was of those brought near to Allah," },
        { num: 89, ar: "فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ ۝", ur: "تو اس کے لیے راحت، خوشبودار رزق اور نعمتوں والی جنت ہے۔", en: "Then [for him is] rest and satisfaction and a garden of pleasure." },
        { num: 96, ar: "فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ ۝", ur: "پس آپ اپنے عظمت والے رب کے نام کی تسبیح کیجیے۔", en: "So exalt the name of your Lord, the Most Great." }
      ]
    },
    {
      num: 18,
      name: "Surah Al-Kahf (The Cave)",
      ar: "سورة الْكَهْف",
      desc: "جمعہ کے دن تلاوت کی فضیلت اور فتنہ دجال سے حفاظت کی عظیم سورت",
      ayahs: [
        {
          num: 1,
          ar: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا ۝",
          ur: "سب تعریفیں اللہ ہی کے لیے ہیں جس نے اپنے بندۂ خاص پر یہ کتاب نازل فرمائی اور اس میں ذرا بھی کجی نہیں رکھی۔",
          en: "[All] praise is for Allah, who has sent down upon His Servant the Book and has not made therein any deviance."
        },
        {
          num: 2,
          ar: "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا ۝",
          ur: "سیدھی اور درست کتاب تاکہ اپنی بارگاہ سے سخت عذاب سے ڈرائے اور نیک عمل کرنے والے مومنوں کو اچھے اجر کی خوشخبری دے۔",
          en: "[He has made it] straight, to warn of severe punishment from Him and to give good tidings to the believers who do righteous deeds that they will have a good reward"
        },
        {
          num: 3,
          ar: "مَّاكِثِينَ فِيهِ أَبَدًا ۝",
          ur: "جس میں وہ ہمیشہ رہیں گے۔",
          en: "In which they will remain forever"
        },
        {
          num: 10,
          ar: "إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا ۝",
          ur: "جب ان نوجوانوں نے غار میں پناہ لی تو عرض کیا: اے ہمارے رب! ہمیں اپنی بارگاہ سے خصوصی رحمت عطا فرما اور ہمارے معاملے میں ہمارے لیے ہدایت اور بھلائی کا سامان مہیا فرما۔",
          en: "[Mention] when the youths retreated to the cave and said, 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.'"
        },
        {
          num: 107,
          ar: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا ۝",
          ur: "بے شک جو لوگ ایمان لائے اور نیک عمل کیے ان کی مہمانی کے لیے فردوس کے باغات ہیں۔",
          en: "Indeed, those who have believed and done righteous deeds - they will have the Gardens of Paradise as a lodging,"
        },
        {
          num: 109,
          ar: "قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا ۝",
          ur: "آپ فرما دیجیے: اگر سمندر میرے رب کی باتوں کو لکھنے کے لیے سیاہی بن جائے تو سمندر ختم ہو جائے گا مگر میرے رب کے کلمات ختم نہ ہوں گے، خواہ ہم اس کی مدد کے لیے اتنا ہی سمندر اور لے آئیں۔",
          en: "Say, 'If the sea were ink for [writing] the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted, even if We brought the like of it as a supplement.'"
        },
        {
          num: 110,
          ar: "قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ فَمَن كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا ۝",
          ur: "آپ فرما دیجیے: میں تو تمہاری ہی مثل بشر ہوں، میری طرف وحی کی جاتی ہے کہ تمہارا معبود ایک ہی معبود ہے، سو جو اپنے رب کی ملاقات کی امید رکھتا ہے اسے چاہیے کہ نیک عمل کرے اور اپنے رب کی عبادت میں کسی کو شریک نہ ٹھہرائے۔",
          en: "Say, 'I am only a man like you, to whom has been revealed that your god is one God. So whoever would hope for the meeting with his Lord - let him do righteous work and not associate in the worship of his Lord anyone.'"
        }
      ]
    }
  ],

  // =========================================================================
  // 4. Masnoon Duas (Authentic Supplications with Accurate Urdu Translations)
  // =========================================================================
  masnoonDuas: [
    {
      category: "صبح و شام کے اذکار",
      title: "سید الاستغفار (بخشش و مغفرت کی سردار دعا)",
      ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
      ur: "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے ہی مجھے پیدا فرمایا اور میں تیرا ہی بندہ ہوں، اور میں اپنی طاقت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے اعمال کے شر سے تیری پناہ مانگتا ہوں، اپنے اوپر تیری نعمتوں کا اعتراف کرتا ہوں اور اپنے گناہوں کا اقرار کرتا ہوں، پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہوں کو معاف نہیں کر سکتا۔",
      translit: "Allahumma Anta Rabbi la ilaha illa Ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika ma-stata't...",
      en: "O Allah, You are my Lord, there is none worthy of worship but You. You created me and I am Your servant...",
      ref: "صحیح البخاری: 6306 (فضیلت: جو صبح پڑھے اور شام سے پہلے مر جائے وہ جنتی ہے)"
    },
    {
      category: "سوتے وقت کی دعا",
      title: "سونے سے پہلے کی مسنون دعا",
      ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      ur: "اے اللہ! تیرے ہی نام کے ساتھ میں مرتا (سوتا) ہوں اور جیتا (جاگتا) ہوں۔",
      translit: "Bismika Allahumma amootu wa-ahya",
      en: "In Your Name, O Allah, I die and I live.",
      ref: "صحیح البخاری: 6324"
    },
    {
      category: "بیدار ہونے کے بعد",
      title: "نیند سے بیدار ہونے کی مسنون دعا",
      ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      ur: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے (سلانے) کے بعد زندہ کیا اور اسی کی طرف سب کو اٹھ کر جانا ہے۔",
      translit: "Alhamdu lillahil-ladhee ahyana ba'da ma amatana wa-ilayhin-nushoor",
      en: "All praise is for Allah who gave us life after having caused us to die, and unto Him is the resurrection.",
      ref: "صحیح البخاری: 6312"
    },
    {
      category: "گھر سے نکلتے وقت",
      title: "گھر سے رخصت ہونے کی دعا",
      ar: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
      ur: "اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، اور گناہوں سے بچنے اور نیکی کرنے کی طاقت اللہ کی توفیق کے سوا ممکن نہیں۔",
      translit: "Bismillahi tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah",
      en: "In the name of Allah, I place my trust in Allah; there is no power nor strength except with Allah.",
      ref: "سنن ابی داؤد: 5095 (فضیلت: فرشتے کہتے ہیں تو محفوظ کر دیا گیا)"
    },
    {
      category: "گھر میں داخل ہوتے وقت",
      title: "گھر میں داخلے کی مسنون دعا",
      ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
      ur: "اے اللہ! میں تجھ سے داخل ہونے کی اور نکلنے کی بھلائی مانگتا ہوں، اللہ کے نام سے ہم داخل ہوئے اور اللہ کے نام سے ہم نکلے، اور اپنے رب اللہ پر ہم نے بھروسہ کیا۔",
      translit: "Allahumma innee as'aluka khayral-mawlaji wa khayral-makhraj...",
      en: "O Allah, I ask You for the best entrance and the best exit. In the name of Allah we enter...",
      ref: "سنن ابی داؤد: 5096"
    },
    {
      category: "کھانا کھانے کے آداب",
      title: "کھانا کھانے کے بعد کی دعا",
      ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ",
      ur: "تمام شکر و تعریف اللہ کے لیے ہے جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمانوں میں سے بنایا۔",
      translit: "Alhamdu lillahil-ladhee at'amana wa saqana wa ja'alana minal-muslimeen",
      en: "All praise belongs to Allah Who fed us, gave us drink, and made us Muslims.",
      ref: "جامع الترمذی: 3457"
    },
    {
      category: "مسجد کے آداب",
      title: "مسجد میں داخل ہونے کی دعا",
      ar: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      ur: "اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔",
      translit: "Allahumma-ftah lee abwaba rahmatik",
      en: "O Allah, open for me the gates of Your mercy.",
      ref: "صحیح مسلم: 713"
    },
    {
      category: "مسجد سے نکلتے وقت",
      title: "مسجد سے باہر نکلنے کی دعا",
      ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
      ur: "اے اللہ! میں تجھ سے تیرے فضل کا سوال کرتا ہوں۔",
      translit: "Allahumma innee as'aluka min fadlik",
      en: "O Allah, I ask You from Your bounty.",
      ref: "صحیح مسلم: 713"
    },
    {
      category: "سفر کی دعا",
      title: "سواری اور سفر کی مسنون دعا",
      ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ ۝ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
      ur: "پاک ہے وہ ذات جس نے اس (سواری) کو ہمارے تابع کر دیا حالانکہ ہم اسے قابو میں لانے والے نہ تھے، اور یقیناً ہم اپنے رب ہی کی طرف لوٹ کر جانے والے ہیں۔",
      translit: "Subhanal-ladhee sakh-khara lana hadha wa ma kunna lahu muqrineen. Wa inna ila Rabbina lamunqaliboon.",
      en: "Glory unto Him who has subjected this to us, for we could never have accomplished this by ourselves...",
      ref: "صحیح مسلم: 1342"
    },
    {
      category: "پریشانی و غم سے نجات",
      title: "غم، دکھ، قرض اور کمزوری سے پناہ کی دعا",
      ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
      ur: "اے اللہ! میں تیری پناہ مانگتا ہوں فکر اور غم سے، بے بسی اور سستی سے، بخل اور بزدلی سے، قرض کے بوجھ تلے دبنے سے اور ظالم لوگوں کے غلبے اور دباؤ سے۔",
      translit: "Allahumma innee a'oodhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal...",
      en: "O Allah, I seek refuge in You from grief and sadness, helplessness and laziness, stinginess and cowardice...",
      ref: "صحیح البخاری: 2893"
    },
    {
      category: "والدین کے حقوق",
      title: "والدین کے لیے قرآنی دعا",
      ar: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
      ur: "اے میرے رب! ان دونوں (والدین) پر رحم فرما جیسا کہ انہوں نے بچپن میں شفقت اور محبت کے ساتھ میری پرورش کی۔",
      translit: "Rabbi-irhamhuma kama rabbayani sagheera",
      en: "My Lord, have mercy upon them both as they brought me up when I was small.",
      ref: "سورۃ الاسراء: 24"
    },
    {
      category: "بیماری و شفا",
      title: "بیماری دور کرنے اور کامل شفا کی دعا",
      ar: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
      ur: "اے اللہ! تمام انسانوں کے پالنے والے، تکلیف کو دور فرما دے، شفا عطا فرما تو ہی اصل شفا دینے والا ہے، تیری شفا کے سوا کوئی شفا نہیں، ایسی کامل شفا عطا فرما جو کسی بیماری کو باقی نہ چھوڑے۔",
      translit: "Allahumma Rabban-naas adh-hibil-ba's, ishfi wa Antash-Shafee, la shifa'a illa shifa'uk...",
      en: "O Allah, Lord of mankind, remove the hardship and grant healing. You are the Healer...",
      ref: "صحیح البخاری: 5743"
    }
  ],

  // =========================================================================
  // 5. 99 Names of Prophet Muhammad (ﷺ) (مکمل اسماء النبی مع اردو معانی)
  // =========================================================================
  prophetNames: [
    { num: 1, ar: "مُحَمَّدٌ", en: "Muhammad", ur: "محمد", meaning: "بہت زیادہ تعریف کیا گیا (ﷺ)" },
    { num: 2, ar: "أَحْمَدُ", en: "Ahmad", ur: "احمد", meaning: "اللہ کی سب سے زیادہ حمد و ثناء کرنے والا" },
    { num: 3, ar: "حَامِدٌ", en: "Hamid", ur: "حامد", meaning: "اللہ کا شکر اور تعریف بجا لانے والا" },
    { num: 4, ar: "مَاحِي", en: "Al-Mahi", ur: "ماحی", meaning: "کفر، شرک اور گمراہی کو مٹانے والا" },
    { num: 5, ar: "حَاشِرٌ", en: "Al-Hashir", ur: "حاشر", meaning: "جن کے قدموں میں تمام انسان جمع کیے جائیں گے" },
    { num: 6, ar: "عَاقِبٌ", en: "Al-Aqib", ur: "عاقب", meaning: "سب کے بعد تشریف لانے والا (خاتم النبیین)" },
    { num: 7, ar: "نَبِيُّ الرَّحْمَةِ", en: "Nabiyy-ur-Rahmah", ur: "نبی الرحمۃ", meaning: "سراپا رحمت اور شفقت والے پیغمبر" },
    { num: 8, ar: "نَبِيُّ التَّوْبَةِ", en: "Nabiyy-ut-Tawbah", ur: "نبی التوبہ", meaning: "توبہ اور مغفرت کی راہ دکھانے والے نبی" },
    { num: 9, ar: "نَبِيُّ الْمَلَاحِمِ", en: "Nabiyy-ul-Malahim", ur: "نبی الملاحم", meaning: "حق کی خاطر باطل سے مقابلہ فرمانے والے" },
    { num: 10, ar: "فَاتِحٌ", en: "Al-Fatih", ur: "فاتح", meaning: "فتوحات، برکات اور ہدایت کے دروازے کھولنے والے" },
    { num: 11, ar: "شَاهِدٌ", en: "Shahid", ur: "شاہد", meaning: "حق اور امت پر گواہی دینے والے" },
    { num: 12, ar: "مَشْهُودٌ", en: "Mashhood", ur: "مشہود", meaning: "جن کی رسالت و حقانیت کی گواہی دی گئی" },
    { num: 13, ar: "بَشِيرٌ", en: "Basheer", ur: "بشیر", meaning: "اہلِ ایمان کو جنت کی خوشخبری سنانے والے" },
    { num: 14, ar: "نَذِيرٌ", en: "Nadheer", ur: "نذیر", meaning: "اللہ کی نافرمانی کے انجام سے خبردار کرنے والے" },
    { num: 15, ar: "دَاعِي اللَّهِ", en: "Da'i-Allah", ur: "داعی اللہ", meaning: "اللہ کی توحید اور سیدھے راستے کی طرف بلانے والے" },
    { num: 16, ar: "سِرَاجٌ مُنِيرٌ", en: "Siraj-un-Muneer", ur: "سراج منیر", meaning: "روشن چراغ جو تاریکیوں کو منور فرماتا ہے" },
    { num: 17, ar: "نُورٌ", en: "Noor", ur: "نور", meaning: "سراپا نور اور ہدایت کی روشنی" },
    { num: 18, ar: "هَادٍ", en: "Hadi", ur: "ہادی", meaning: "صراطِ مستقیم کی مکمل رہنمائی کرنے والے" },
    { num: 19, ar: "مَهْدِيٌّ", en: "Mahdi", ur: "مہدی", meaning: "کامل ہدایت یافتہ اور راست باز" },
    { num: 20, ar: "مُصْطَفَى", en: "Mustafa", ur: "مصطفیٰ", meaning: "اللہ تعالیٰ کے برگزیدہ اور منتخب فرمائے ہوئے" },
    { num: 21, ar: "مُجْتَبَى", en: "Mujtaba", ur: "مجتبیٰ", meaning: "چنے ہوئے اور محبوب بنائے ہوئے" },
    { num: 22, ar: "مُرْتَضَى", en: "Murtaza", ur: "مرتضیٰ", meaning: "پسندیدہ جن سے ربِ کائنات راضی ہوا" },
    { num: 23, ar: "طٰهٰ", en: "Ta-Ha", ur: "طٰہٰ", meaning: "اے پاک اور مطہر نبی مکرم" },
    { num: 24, ar: "يٰسٓ", en: "Ya-Seen", ur: "یٰسٓ", meaning: "اے کامل انسان اور تمام مخلوق کے سردار" },
    { num: 25, ar: "مُزَّمِّلٌ", en: "Al-Muzzammil", ur: "مزمل", meaning: "چادر میں لپٹنے والے اور راتوں کو عبادت کرنے والے" },
    { num: 26, ar: "مُدَّثِّرٌ", en: "Al-Muddaththir", ur: "مدثر", meaning: "کملی اوڑھنے والے اور دین کی دعوت دینے والے" },
    { num: 27, ar: "شَفِيعٌ", en: "Shafee'", ur: "شفیع", meaning: "قیامت کے دن گناہگاروں کی شفاعت فرمانے والے" },
    { num: 28, ar: "مُشَفَّعٌ", en: "Mushaffa'", ur: "مشفع", meaning: "جن کی شفاعت بارگاہِ الٰہی میں قطعی قبول ہے" },
    { num: 29, ar: "صَادِقٌ", en: "Sadiq", ur: "صادق", meaning: "گفتار اور کردار کے کامل سچے" },
    { num: 30, ar: "مَصْدُوقٌ", en: "Masdooq", ur: "مصدوق", meaning: "جن کے ہر قول کی تصدیق کی گئی" },
    { num: 31, ar: "أَمِينٌ", en: "Ameen", ur: "امین", meaning: "دیانت دار اور معتمد جن پر سب کو کامل بھروسہ ہے" },
    { num: 32, ar: "مَأْمُونٌ", en: "Ma'moon", ur: "مامون", meaning: "جن سے کسی کو کوئی ضرر نہ پہنچے، امن والے" },
    { num: 33, ar: "كَرِيمٌ", en: "Kareem", ur: "کریم", meaning: "بزرگ، سخی اور بلند اخلاق والے" },
    { num: 34, ar: "حَكِيمٌ", en: "Hakeem", ur: "حکیم", meaning: "کامل حکمت اور دانائی سے بھرپور" },
    { num: 35, ar: "عَلِيمٌ", en: "Aleem", ur: "علیم", meaning: "علم و عرفان کے سمندر" },
    { num: 36, ar: "خَبِيرٌ", en: "Khabeer", ur: "خبیر", meaning: "امورِ جہاں اور باطن سے باخبر" },
    { num: 37, ar: "جَوَادٌ", en: "Jawad", ur: "جواد", meaning: "بے انتہا جود و سخاوت فرمانے والے" },
    { num: 38, ar: "عَزِيزٌ", en: "Azeez", ur: "عزیز", meaning: "عزت و غلبے والے جن پر کوئی غالب نہیں آ سکتا" },
    { num: 39, ar: "حَفِيٌّ", en: "Hafeey", ur: "حفی", meaning: "کمال مہربانی اور تعظیم فرمانے والے" },
    { num: 40, ar: "وَلِيٌّ", en: "Waliyy", ur: "ولی", meaning: "مومنوں کے حامی، مددگار اور دوست" },
    { num: 41, ar: "حَقٌّ", en: "Haqq", ur: "حق", meaning: "سراپا حق اور سچائی کا اعلیٰ ترین نمونہ" },
    { num: 42, ar: "قَوِيٌّ", en: "Qawiyy", ur: "قوی", meaning: "قوت و استقامت والے" },
    { num: 43, ar: "مُبِينٌ", en: "Mubeen", ur: "مبین", meaning: "حق اور باطل کو واضح جدا کرنے والے" },
    { num: 44, ar: "مُذَكِّرٌ", en: "Muthakkir", ur: "مذکر", meaning: "اللہ تعالیٰ کی نعمتوں اور احکام کی یاد دلانے والے" },
    { num: 45, ar: "وَاعِظٌ", en: "Wa'iz", ur: "واعظ", meaning: "دلوں میں اتر جانے والی نصیحت فرمانے والے" },
    { num: 46, ar: "نَاصِحٌ", en: "Nasih", ur: "ناصح", meaning: "تمام امت کے سب سے بڑے خیر خواہ" },
    { num: 47, ar: "مُنْذِرٌ", en: "Munthir", ur: "منذر", meaning: "برے اعمال کے برے نتائج سے ڈرانے والے" },
    { num: 48, ar: "قَرِيبٌ", en: "Qareeb", ur: "قریب", meaning: "ہر امتی کے دل سے سب سے قریب" },
    { num: 49, ar: "خَلِيلُ الرَّحْمٰنِ", en: "Khaleel-ur-Rahman", ur: "خلیل الرحمن", meaning: "اللہ رحمن کے خاص اور گہرے دوست" },
    { num: 50, ar: "حَبِيبُ اللَّهِ", en: "Habeebullah", ur: "حبیب اللہ", meaning: "اللہ تعالیٰ کے سب سے لاڈلے اور پیارے محبوب" },
    { num: 51, ar: "صَفِيُّ اللَّهِ", en: "Safiyyullah", ur: "صفی اللہ", meaning: "اللہ کے چنے ہوئے اور خالص بندے" },
    { num: 52, ar: "نَجِيُّ اللَّهِ", en: "Najiyyullah", ur: "نجی اللہ", meaning: "معراج میں اللہ سے مناجات و راز و نیاز فرمانے والے" },
    { num: 53, ar: "خَاتَمُ الْأَنْبِيَاءِ", en: "Khatam-ul-Anbiya", ur: "خاتم الانبیاء", meaning: "سلسلہ نبوت کو مکمل کرنے والے آخری نبی" },
    { num: 54, ar: "سَيِّدُ الْمُرْسَلِينَ", en: "Sayyid-ul-Mursaleen", ur: "سید المرسلین", meaning: "تمام رسولوں اور نبیوں کے امام و سردار" },
    { num: 55, ar: "إِمَامُ الْمُتَّقِينَ", en: "Imam-ul-Muttaqeen", ur: "امام المتقین", meaning: "تمام پرہیزگاروں کے مقتدا اور پیشوا" },
    { num: 56, ar: "قَائِدُ الْغُرِّ الْمُحَجَّلِينَ", en: "Qaid-ul-Ghurril Muhajjaleen", ur: "قائد الغر المحجلین", meaning: "وضو کے اعضاء چمکنے والے امتیوں کے رہبر" },
    { num: 57, ar: "خَيْرُ الْبَرِيَّةِ", en: "Khayr-ul-Bariyyah", ur: "خیر البریہ", meaning: "تمام مخلوقات میں سب سے افضل اور اعلیٰ" },
    { num: 58, ar: "غَوْثٌ", en: "Ghaus", ur: "غوث", meaning: "بے کسوں کے فریاد رس" },
    { num: 59, ar: "غِيَاثٌ", en: "Ghiyaath", ur: "غیاث", meaning: "مشکلات میں امتیوں کی دستگیری فرمانے والے" },
    { num: 60, ar: "مَلْجَأٌ", en: "Malja'", ur: "ملجا", meaning: "پریشان حالوں کے لیے جائے پناہ" },
    { num: 61, ar: "عِصْمَةٌ", en: "Ismah", ur: "عصمت", meaning: "گناہوں سے مکمل معصوم اور پاک" },
    { num: 62, ar: "نِعْمَةُ اللَّهِ", en: "Ni'matullah", ur: "نعمت اللہ", meaning: "دنیا کے لیے اللہ کا سب سے بڑا انعام و نعمت" },
    { num: 63, ar: "هِدَايَةُ اللَّهِ", en: "Hidayatullah", ur: "ہدایت اللہ", meaning: "اللہ کی عطا کردہ سراپا ہدایت" },
    { num: 64, ar: "مِفْتَاحُ الرَّحْمَةِ", en: "Miftah-ur-Rahmah", ur: "مفتاح الرحمۃ", meaning: "الٰہی رحمت کے خزانوں کی چابی" },
    { num: 65, ar: "مِفْتَاحُ الْجَنَّةِ", en: "Miftah-ul-Jannah", ur: "مفتاح الجنۃ", meaning: "جنت کے دروازوں کی کنجی" },
    { num: 66, ar: "عَمَلٌ صَالِحٌ", en: "Amal Salih", ur: "عمل صالح", meaning: "جن کی پوری زندگی سراپا نیکی اور عملِ صالح ہے" },
    { num: 67, ar: "مُنْتَقًى", en: "Muntaqa", ur: "منتقیٰ", meaning: "کمال نفاست کے ساتھ منتخب فرمائے گئے" },
    { num: 68, ar: "صَابِرٌ", en: "Sabir", ur: "صابر", meaning: "تمام مصائب اور آزمائشوں پر کمال صبر فرمانے والے" },
    { num: 69, ar: "شَكُورٌ", en: "Shakoor", ur: "شکور", meaning: "اللہ تعالیٰ کا کثرت سے شکر گزار رہنے والے" },
    { num: 70, ar: "قَانِعٌ", en: "Qani'", ur: "قانع", meaning: "تھوڑی سی دنیاوی چیز پر راضی رہنے والے" },
    { num: 71, ar: "زَاهِدٌ", en: "Zahid", ur: "زاہد", meaning: "دنیا کے ساز و سامان سے بے رغبت رہنے والے" },
    { num: 72, ar: "أَوَّابٌ", en: "Awwab", ur: "اواب", meaning: "ہر حال میں اللہ کی طرف رجوع فرمانے والے" },
    { num: 73, ar: "بَرٌّ", en: "Barr", ur: "بر", meaning: "احسان، بھلائی اور نیکی کے پیکر" },
    { num: 74, ar: "سَمْحٌ", en: "Samh", ur: "سمح", meaning: "نرم مزاج، شائستہ اور آسانی فرمانے والے" },
    { num: 75, ar: "وَفِيٌّ", en: "Wafeey", ur: "وفی", meaning: "عہد اور وعدے کو بدرجہ اتم نبھانے والے" },
    { num: 76, ar: "صَفُوحٌ", en: "Safooh", ur: "صفوح", meaning: "بڑے سے بڑے قصوروار کو معاف فرمانے والے" },
    { num: 77, ar: "رَؤُوفٌ", en: "Ra'oof", ur: "رؤف", meaning: "امتیوں پر کمال درجہ نرم دل اور شفیق" },
    { num: 78, ar: "رَحِيمٌ", en: "Raheem", ur: "رحیم", meaning: "مومنین پر بے انتہا رحم و کرم فرمانے والے" },
    { num: 79, ar: "مُقْتَصِدٌ", en: "Muqtasid", ur: "مقتصد", meaning: "زندگی کے تمام امور میں اعتدال اور میانہ روی برتنے والے" },
    { num: 80, ar: "مُوَفَّقٌ", en: "Muwaffaq", ur: "موفق", meaning: "ہمیشہ اللہ کی تائید اور توفیق سے ہمکنار" },
    { num: 81, ar: "عَفُوٌّ", en: "Afuww", ur: "عفو", meaning: "ظلم کرنے والوں کو بھی معاف فرما دینے والے" },
    { num: 82, ar: "وَدُودٌ", en: "Wadood", ur: "ودود", meaning: "امت سے محبت فرمانے والے اور سب کے چہیتے" },
    { num: 83, ar: "مُطَاعٌ", en: "Muta'", ur: "مطاع", meaning: "جن کی فرماں برداری اور اطاعت لازم ہے" },
    { num: 84, ar: "مُطِيعٌ", en: "Mutee'", ur: "مطیع", meaning: "حکمِ الٰہی کے کامل ترین تابع دار" },
    { num: 85, ar: "مُجِيبٌ", en: "Mujeeb", ur: "مجیب", meaning: "امتیوں کی التجاؤں اور پکار کا جواب دینے والے" },
    { num: 86, ar: "كَافٍ", en: "Kafi", ur: "کافی", meaning: "امتیوں کے لیے ہر اعتبار سے کافی و شافی رہبر" },
    { num: 87, ar: "مُبَلِّغٌ", en: "Muballigh", ur: "مبلغ", meaning: "پیغامِ حق کو بلا کم و کاست پہنچانے والے" },
    { num: 88, ar: "فَصِيحُ اللِّسَانِ", en: "Faseeh-ul-Lisan", ur: "فصیح اللسان", meaning: "سب سے شیریں، واضح اور پرتاثیر کلام والے" },
    { num: 89, ar: "طَاهِرٌ", en: "Tahir", ur: "طاہر", meaning: "باطنی اور ظاہری تمام آلائشوں سے پاک" },
    { num: 90, ar: "مُطَهَّرٌ", en: "Mutahhar", ur: "مطہر", meaning: "رب کائنات کا خاص پاکیزہ بنایا ہوا" },
    { num: 91, ar: "وَجِيهٌ", en: "Wajeeh", ur: "وجیہہ", meaning: "دنیا اور آخرت میں انتہائی عزت و جاہ والے" },
    { num: 92, ar: "صَاحِبُ الشَّفَاعَةِ", en: "Sahib-ush-Shafa'ah", ur: "صاحب الشفاعۃ", meaning: "شفاعتِ کبریٰ کے واحد مالک" },
    { num: 93, ar: "صَاحِبُ الْمَقَامِ الْمَحْمُودِ", en: "Sahib-ul-Maqam-il-Mahmood", ur: "صاحب المقام المحمود", meaning: "مقامِ محمود کی عظیم الشان منزل والے" },
    { num: 94, ar: "صَاحِبُ اللِّوَاءِ", en: "Sahib-ul-Liwa", ur: "صاحب اللواء", meaning: "روزِ محشر لواء الحمد (پرچمِ حمد) اٹھانے والے" },
    { num: 95, ar: "صَاحِبُ الْحَوْضِ", en: "Sahib-ul-Hawd", ur: "صاحب الحوض", meaning: "حوضِ کوثر کے ساقی" },
    { num: 96, ar: "صَاحِبُ التَّاجِ", en: "Sahib-ut-Taj", ur: "صاحب التاج", meaning: "عظمت اور شرف کی دستار اور تاج والے" },
    { num: 97, ar: "صَاحِبُ الْمِعْرَاجِ", en: "Sahib-ul-Mi'raj", ur: "صاحب المعراج", meaning: "آسمانوں اور قاب قوسین کی سیر کرنے والے" },
    { num: 98, ar: "سَيِّدُ الْكَوْنَيْنِ", en: "Sayyid-ul-Kawnayn", ur: "سید الکونین", meaning: "دونوں جہانوں (دنیا و آخرت) کے آقا و سردار" },
    { num: 99, ar: "خَاتَمُ النَّبِيِّينَ", en: "Khatam-un-Nabiyyeen", ur: "خاتم النبیین", meaning: "آخری نبی جن کے بعد نبوت کا دروازہ ہمیشہ کے لیے بند ہو گیا (ﷺ)" }
  ],

  // =========================================================================
  // 6. Inspiring Islamic Stories (سبق آموز کہانیاں - 3 Distinct Authentic Stories)
  // =========================================================================
  stories: [
    {
      id: "story-1",
      title: "حضرت عمر فاروق رضی اللہ عنہ کا بے مثال عدل اور بیت المال کا چراغ",
      category: "عدل و امانت",
      badge: "واقعہ صحابہ کرام",
      summary: "مسلمانوں کے عظیم خلیفہ حضرت عمر فاروق رضی اللہ عنہ کی تقویٰ، عدل اور سرکاری امانت کی حفاظت کا روح پرور واقعہ۔",
      body: `امیر المؤمنین حضرت عمر فاروق رضی اللہ عنہ رات کے وقت اپنے حجرے میں بیٹھ کر مسلمانوں کے بیت المال کا حساب کتاب لکھ رہے تھے اور ایک چراغ کی روشنی میں کام کر رہے تھے۔ اسی دوران ایک شخص آپ سے ملاقات کے لیے حاضر ہوا جو کسی ذاتی کام کے لیے آیا تھا۔ 

حضرت عمر رضی اللہ عنہ نے اس شخص سے پوچھا: "کیا تم مسلمانوں کے اجتماعی اور سرکاری امور کے متعلق بات کرنے آئے ہو یا تمہارا کوئی ذاتی کام ہے؟" اس شخص نے مودبانہ عرض کیا: "یا امیر المؤمنین! میرا کام خالصتاً ذاتی نوعیت کا ہے۔"

یہ سنتے ہی حضرت عمر رضی اللہ عنہ نے فوراً جلتے ہوئے چراغ کو پھونک مار کر بجھا دیا اور دوسرا چراغ جلا لیا۔ وہ شخص یہ دیکھ کر حیران رہ گیا اور عرض کرنے لگا: "اے امیر المؤمنین! آپ نے ایک چراغ بجھا کر دوسرا کیوں جلایا؟ اس میں کیا راز ہے؟"

حضرت عمر فاروق رضی اللہ عنہ نے عدل کا وہ زریں اصول بیان فرمایا جو قیامت تک کے حکمرانوں کے لیے مشعلِ راہ ہے: 
"پہلے چراغ میں جو تیل جل رہا تھا وہ مسلمانوں کے بیت المال کا تھا، جب تک میں مسلمانوں کے سرکاری کام میں مصروف تھا مجھے اس چراغ کی روشنی استعمال کرنے کا حق حاصل تھا۔ لیکن جب تم ذاتی گفتگو کے لیے آئے تو مجھ پر لازم تھا کہ میں مسلمانوں کے مال کو بجھا کر اپنے ذاتی خرچ کے تیل والا چراغ جلاؤں، تاکہ کل قیامت کے دن اللہ کی عدالت میں مسلمانوں کے مال کی خیانت کا جوابدہ نہ ہونا پڑے۔"`,
      lesson: "عوامی عہدہ اور قومی وسائل اللہ کی طرف سے مقدس امانت ہیں۔ عدل و دیانت کا تقاضا ہے کہ ذاتی فائدے کے لیے قومی و اجتماعی وسائل کے ایک ذرے کا بھی استعمال نہ کیا جائے۔"
    },
    {
      id: "story-2",
      title: "حضور نبی اکرم ﷺ کی بے داغ امانت اور دیانت - 'الصادق اور الامین'",
      category: "سیرت النبی ﷺ",
      badge: "اخلاقِ نبوی ﷺ",
      summary: "ہجرتِ مدینہ کی نازک رات جانی دشمنوں کی امانتیں واپس لوٹانے کا لازوال نبوی واقعہ۔",
      body: `اعلانِ نبوت سے قبل بھی مکہ مکرمہ کا سارا معاشرہ حضور نبی اکرم ﷺ کی بے داغ صداقت، امانت اور پرہیزگاری کا معترف تھا۔ مشرکینِ مکہ بتوں کی پوجا کرتے تھے اور آپ ﷺ کی دعوت کے مخالف تھے، لیکن جب بھی انہیں اپنا قیمتی سونا، نقدی یا مال محفوظ رکھنا ہوتا تو وہ پورے مکہ میں صرف اور صرف حضرت محمد ﷺ کو سب سے زیادہ امانت دار پا کر اپنی امانتیں آپ کے پاس رکھواتے تھے۔

جب کفارِ مکہ نے ظلم کی انتہا کر دی اور بالآخر ہجرت کی رات دارالندوہ میں جمع ہو کر رسول اللہ ﷺ کے قتل کا ناپاک منصوبہ بنایا اور آپ کے کاشانۂ اقدس کا تلواروں سے محاصرہ کر لیا، اس کٹھن اور نازک ترین گھڑی میں بھی آپ کے حجرہ مبارک میں انہی جانی دشمنوں کی قیمتی امانتیں رکھی ہوئی تھیں۔

رسول اللہ ﷺ نے حضرت علی المرتضیٰ رضی اللہ عنہ کو اپنے پاس بلایا اور اپنے بستر پر سونے کا حکم دیا اور فرمایا:
"علی! میرے اس سبز چادر کو اوڑھ کر میرے بستر پر سو جاؤ، تمہیں ان کافروں سے کوئی گزند نہیں پہنچے گا۔ اور کل صبح اٹھ کر اہلِ مکہ کی جتنی امانتیں میرے پاس محفوظ ہیں، ان کے ایک ایک مالک کو تلاش کر کے ان کی امانتیں واپس لوٹا دینا اور پھر مدینہ منورہ آ جانا۔"

آپ ﷺ نے دشمنوں کی طرف سے جان لینے کے ارادے کے باوجود ان کی امانتوں میں خیانت کا تصور تک نہ فرمایا اور خطرے کے باوجود حضرت علی رضی اللہ عنہ کو تمام امانتیں ان کے حقداروں تک بحفاظت پہنچانے کے لیے مقرر فرمایا۔`,
      lesson: "اسلام میں امانت داری اور ایفائے عہد کی اہمیت اتنی زیادہ ہے کہ بدترین دشمن اور مخالف کے ساتھ بھی خیانت کرنا جائز نہیں۔ سچا مسلمان وہ ہے جس کے کردار اور امانت پر غیر بھی اعتبار کریں۔"
    },
    {
      id: "story-3",
      title: "پیاسے کتے کو پانی پلانے پر گناہگار کی بخشش - مخلوقِ خدا پر رحم کی فضیلت",
      category: "رحمت و شفقت",
      badge: "صحیح حدیثِ مبارکہ",
      summary: "صحیح بخاری و مسلم کی ایمان افروز حدیث: ایک بے زبان جانور پر رحم کرنے سے اللہ تعالیٰ کی بے پایاں بخشش کا مظاہرہ۔",
      body: `سیدنا ابوہریرہ رضی اللہ عنہ سے روایت ہے کہ رسول اللہ ﷺ نے فرمایا: ایک شخص راستے پر چل رہا تھا کہ اسے شدید پیاس لگی۔ اس کی نظر ایک کنویں پر پڑی، وہ کنویں میں اترا، جی بھر کر پانی پیا اور اپنی پیاس بجھا کر اوپر باہر نکلا۔

باہر آ کر اس نے دیکھا کہ ایک پیاسا کتا ہانپ رہا ہے اور پیاس کی شدت کی وجہ سے کیچڑ اور نم ریت چاٹ رہا ہے۔ اس نیک دل شخص نے اپنے دل میں سوچا: "اس بے زبان جانور کو بھی اس وقت ویسی ہی جان لیوا پیاس لگی ہے جیسی مجھے کچھ دیر پہلے لگی تھی۔"

وہ شخص دوبارہ کنویں کی گہرائی میں اترا۔ چونکہ پانی نکالنے کے لیے ڈول یا رسی نہ تھی، اس لیے اس نے اپنا چمڑے کا موزہ (جوتا) اتارا اور اس میں پانی بھرا۔ پھر کنویں کی دیوار پر چڑھنے کے لیے اس نے پانی سے بھرے موزے کو اپنے دانتوں سے مضبوطی سے پکڑا اور اوپر چڑھا۔ 

اس نے وہ ٹھنڈا پانی اس پیاسے کتے کے سامنے رکھا اور اسے سیراب کیا۔ کتے نے پانی پیا اور اس کی جان بچ گئی۔ اللہ تعالیٰ کو اس بندے کا یہ بے غرض خلوص اور ایک بے زبان جانور پر ترس کھانا اس قدر پسند آیا کہ اللہ نے اس کی اس نیکی کی قدر فرمائی اور اس کے تمام پچھلے گناہ معاف فرما کر اس کی بخشش فرما دی۔

صحابہ کرام رضی اللہ عنہم نے حیرت و عقیدت سے پوچھا: "یا رسول اللہ! کیا جانوروں کے ساتھ بھلائی کرنے پر بھی ہمارے لیے اجر ہے؟" آپ ﷺ نے ارشاد فرمایا: "ہر جاندار پر رحم کرنے اور اسے فائدہ پہنچانے میں اجر و ثواب ہے۔"`,
      lesson: "اللہ تعالیٰ کی رحمت بے پایاں ہے۔ خلوصِ دل سے کسی مجبور یا بے زبان مخلوق پر ترس کھانا اور چھوٹی سے چھوٹی نیکی کو بھی حقیر نہ سمجھنا، اللہ کی رضا اور بخشش کا سب سے بڑا وسیلہ بن سکتا ہے۔"
    }
  ],

  // =========================================================================
  // 7. Daily Wisdom (Ayat & Hadith) Dataset
  // =========================================================================
  dailyWisdom: {
    currentTab: 'ayah',
    ayahIndex: 0,
    hadithIndex: 0,
    ayahs: [
      {
        id: 1,
        ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
        ur: "اے ایمان والو! صبر اور نماز کے ذریعے (اللہ سے) مدد چاہو، بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",
        en: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
        ref: "سورة البقرة: 153",
        refEn: "Surah Al-Baqarah 2:153"
      },
      {
        id: 2,
        ar: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
        ur: "اور جب میرے بندے آپ سے میرے متعلق پوچھیں تو (فرما دیں کہ) میں قریب ہوں، جب پکارنے والا مجھے پکارتا ہے تو میں اس کی دعا قبول کرتا ہوں۔",
        en: "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
        ref: "سورة البقرة: 186",
        refEn: "Surah Al-Baqarah 2:186"
      },
      {
        id: 3,
        ar: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
        ur: "پس تم مجھے یاد رکھا کرو، میں تمہیں یاد رکھوں گا، اور میرا شکر ادا کیا کرو اور میری ناشکری نہ کرو۔",
        en: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
        ref: "سورة البقرة: 152",
        refEn: "Surah Al-Baqarah 2:152"
      },
      {
        id: 4,
        ar: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        ur: "سن لو! اللہ ہی کے ذکر سے دلوں کو سچا چین اور اطمینان ملتا ہے۔",
        en: "Unquestionably, by the remembrance of Allah hearts are assured.",
        ref: "سورة الرعد: 28",
        refEn: "Surah Ar-Ra'd 13:28"
      },
      {
        id: 5,
        ar: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
        ur: "اور جو اللہ سے ڈرتا ہے، اللہ اس کے لیے (ہر تنگی سے) نکلنے کی راہ پیدا فرما دیتا ہے اور اسے ایسی جگہ سے رزق دیتا ہے جہاں سے اس کا گمان بھی نہیں ہوتا۔",
        en: "And whoever fears Allah - He will make for him a way out, and will provide for him from where he does not expect.",
        ref: "سورة الطلاق: 2-3",
        refEn: "Surah At-Talaq 65:2-3"
      },
      {
        id: 6,
        ar: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        ur: "بے شک ہر مشکل اور تنگی کے ساتھ آسانی ہے۔",
        en: "Indeed, with hardship [will be] ease.",
        ref: "سورة الشرح: 6",
        refEn: "Surah Ash-Sharh 94:6"
      },
      {
        id: 7,
        ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        ur: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی نصیب فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔",
        en: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
        ref: "سورة البقرة: 201",
        refEn: "Surah Al-Baqarah 2:201"
      },
      {
        id: 8,
        ar: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
        ur: "اور التجا کیجیے: اے میرے رب! میرے علم میں مزید اضافہ فرما۔",
        en: "And say, 'My Lord, increase me in knowledge.'",
        ref: "سورة طه: 114",
        refEn: "Surah Ta-Ha 20:114"
      }
    ],
    hadiths: [
      {
        id: 1,
        ar: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
        ur: "تم میں سے سب سے بہتر وہ انسان ہے جس نے قرآن سیکھا اور دوسروں کو سکھایا۔",
        en: "The best among you are those who learn the Quran and teach it.",
        ref: "صحيح البخاري: 5027",
        refEn: "Sahih al-Bukhari 5027"
      },
      {
        id: 2,
        ar: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        ur: "اعمال کا دارومدار صرف نیتوں پر ہے، اور ہر شخص کو وہی ملے گا جس کی اس نے نیت کی۔",
        en: "Actions are but by intentions, and every person will have only what they intended.",
        ref: "صحيح البخاري: 1",
        refEn: "Sahih al-Bukhari 1"
      },
      {
        id: 3,
        ar: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
        ur: "سچا مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں۔",
        en: "A Muslim is the one from whose tongue and hand the Muslims are safe.",
        ref: "صحيح البخاري: 10",
        refEn: "Sahih al-Bukhari 10"
      },
      {
        id: 4,
        ar: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
        ur: "اپنے بھائی کے چہرے کے سامنے تمہارا مسکرانا تمہارے لیے صدقہ ہے۔",
        en: "Your smiling in the face of your brother is charity for you.",
        ref: "جامع الترمذي: 1956",
        refEn: "Jami at-Tirmidhi 1956"
      },
      {
        id: 5,
        ar: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا",
        ur: "جس نے مجھ پر ایک مرتبہ درود بھیجا، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے۔",
        en: "Whoever sends blessings upon me once, Allah sends ten blessings upon him.",
        ref: "صحيح مسلم: 408",
        refEn: "Sahih Muslim 408"
      },
      {
        id: 6,
        ar: "الدُّعَاءُ هُوَ الْعِبَادَةُ",
        ur: "دعا ہی اصل عبادت ہے۔",
        en: "Supplication is the very essence of worship.",
        ref: "سنن أبي داود: 1479",
        refEn: "Sunan Abi Dawood 1479"
      },
      {
        id: 7,
        ar: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        ur: "تم میں سے کوئی مومن نہیں ہو سکتا جب تک کہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
        en: "None of you truly believes until he loves for his brother what he loves for himself.",
        ref: "صحيح البخاري: 13",
        refEn: "Sahih al-Bukhari 13"
      },
      {
        id: 8,
        ar: "الطُّهُورُ شَطْرُ الإِيمَانِ",
        ur: "پاکیزگی اور صفائی آدھا ایمان ہے۔",
        en: "Purity is half of faith.",
        ref: "صحيح مسلم: 223",
        refEn: "Sahih Muslim 223"
      },
      {
        id: 9,
        ar: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
        ur: "جو شخص اللہ اور آخرت کے دن پر ایمان رکھتا ہو اسے چاہیے کہ اچھی بات کہے یا خاموش رہے۔",
        en: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
        ref: "صحيح البخاري: 6018",
        refEn: "Sahih al-Bukhari 6018"
      },
      {
        id: 10,
        ar: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
        ur: "جو شخص حصولِ علم کے لیے کسی راستے پر چلتا ہے، اللہ تعالیٰ اس کے سبب اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
        en: "Whoever treads a path in search of knowledge, Allah will make easy for him the path to Paradise.",
        ref: "صحيح مسلم: 2699",
        refEn: "Sahih Muslim 2699"
      }
    ]
  },

  // =========================================================================
  // Daily Habit Tracker Dataset (7 Core Daily Milestones)
  // =========================================================================
  habitsList: [
    { id: "fajr", name: "Fajr Prayer", ur: "نمازِ فجر (۲ سنت + ۲ فرض)", ar: "صلاة الفجر", category: "Salah", icon: "fa-cloud-sun" },
    { id: "zuhr", name: "Zuhr Prayer", ur: "نمازِ ظہر (۴ سنت + ۴ فرض + ۲ سنت)", ar: "صلاة الظهر", category: "Salah", icon: "fa-sun" },
    { id: "asr", name: "Asr Prayer", ur: "نمازِ عصر (۴ رکعت فرض)", ar: "صلاة العصر", category: "Salah", icon: "fa-cloud-sun" },
    { id: "maghrib", name: "Maghrib Prayer", ur: "نمازِ مغرب (۳ فرض + ۲ سنت)", ar: "صلاة المغرب", category: "Salah", icon: "fa-cloud-moon" },
    { id: "isha", name: "Isha Prayer", ur: "نمازِ عشاء (۴ فرض + ۲ سنت + ۳ وتر)", ar: "صلاة العشاء", category: "Salah", icon: "fa-moon" },
    { id: "mulk", name: "Surah Al-Mulk Recitation", ur: "تلاوتِ سورۃ الملک (عذابِ قبر سے نجات)", ar: "سورة الملك", category: "Quran", icon: "fa-quran" },
    { id: "durood", name: "100x Durood Shareef", ur: "۱۰۰ مرتبہ درودِ پاک کا ورد", ar: "الصلاة على النبي ﷺ", category: "Dhikr", icon: "fa-heart" }
  ],

  // =========================================================================
  // 8. Complete Namaz Guide (طریقہ نماز بمعہ اردو ترجمہ و تلفظ)
  // =========================================================================
  namazGuide: {
    steps: [
      {
        step: 1,
        title: "نیت (Niyyah - Intention)",
        titleEn: "Intention (Niyyah)",
        instruction: "نماز شروع کرنے سے پہلے باوضو ہو کر قبلہ رخ کھڑے ہوں اور دل میں نیت کریں کہ کونسی نماز اور کتنی رکعتیں پڑھ رہے ہیں (مثلاً: میں آج کی فجر کی دو رکعت فرض نماز اللہ تعالیٰ کی رضا کے لیے ادا کرنے کی نیت کرتا ہوں، رخ میرا کعبہ شریف کی طرف)۔",
        ar: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَى رَكْعَتَيْ صَلَاةِ الْفَجْرِ فَرْضًا، مُتَوَجِّهًا إِلَى جِهَةِ الْكَعْبَةِ الشَّرِيفَةِ",
        translit: "Nawaytu an usalliya lillahi ta'ala rak'atay salatil-fajri fardan, mutawajjihan ila jihatil-Ka'batis-shareefah.",
        translation: "میں نے نیت کی کہ اللہ تعالیٰ کے لیے فجر کی دو رکعت فرض نماز ادا کروں، میرا رخ کعبہ شریف کی طرف ہے۔",
        note: "نیت کا اصل تعلق دل کے پختہ ارادے سے ہے۔ زبان سے بھی الفاظ ادا کر لینا مستحب ہے۔"
      },
      {
        step: 2,
        title: "تکبیرِ تحریمہ (Takbeer-e-Tahreema)",
        titleEn: "Takbeer-e-Tahreema",
        instruction: "دونوں ہاتھ کانوں کی لو تک اٹھائیں (انگوٹھے کانوں کی لو کو چھوئیں، خواتین سینے تک ہاتھ اٹھائیں)۔ ہتھیلیاں قبلہ رخ ہوں اور انگلیوں کو معمول کے مطابق کھلا رکھتے ہوئے بلند آواز (یا دل میں) 'اللّٰہُ اَکْبَرُ' کہیں اور ناف کے نیچے ہاتھ باندھ لیں (خواتین سینے پر ہاتھ باندھیں)۔",
        ar: "اَللّٰهُ أَكْبَرُ",
        translit: "Allahu Akbar",
        translation: "اللہ سب سے بڑا ہے۔",
        note: "ہاتھ باندھنے کا طریقہ: دائیں ہاتھ کی ہتھیلی کو بائیں کلائی کے جوڑ پر رکھیں، انگوٹھے اور چھوٹی انگلی سے بائیں کلائی کے گرد حلقہ بنائیں اور بیچ کی تین انگلیاں بائیں بازو پر سیدھی رکھیں۔"
      },
      {
        step: 3,
        title: "ثناء (Sana)",
        titleEn: "Opening Supplication (Sana)",
        instruction: "ہاتھ باندھنے کے بعد نگاہ سجدہ گاہ پر رکھتے ہوئے ادب و خشوع کے ساتھ آہستہ آواز میں ثناء پڑھیں:",
        ar: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلٰهَ غَيْرُكَ",
        translit: "Subhanak-Allahumma wa bi-hamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghayruk.",
        translation: "اے اللہ! تو ہر عیب اور نقص سے پاک ہے، اور اپنی تمام تعریفوں کے ساتھ، اور تیرا نام بڑی برکت والا ہے، اور تیری شان سب سے بلند و بالا ہے، اور تیرے سوا کوئی عبادت کے لائق نہیں۔",
        note: "ثناء ہر نماز کی پہلی رکعت میں تکبیرِ تحریمہ کے فوراً بعد پڑھی جاتی ہے۔"
      },
      {
        step: 4,
        title: "تعوّذ اور تسمیہ (Ta'awwudh & Tasmiyah)",
        titleEn: "Ta'awwudh & Tasmiyah",
        instruction: "ثناء کے فوراً بعد شیطان کے شر سے پناہ مانگیں اور اللہ کے مبارک نام سے آغاز کریں:",
        ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ • بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translit: "A'oodhu billahi minash-shaytanir-rajeem. Bismillahir-Rahmanir-Raheem.",
        translation: "میں اللہ کی پناہ مانگتا ہوں شیطان مردود سے • شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم فرمانے والا ہے۔",
        note: "ہر رکعت میں سورۃ الفاتحہ شروع کرنے سے قبل تسمیہ (بسم اللہ) پڑھنا مسنون ہے۔"
      },
      {
        step: 5,
        title: "سورۃ الفاتحہ (Surah Al-Fatiha)",
        titleEn: "Surah Al-Fatiha",
        instruction: "سورۃ الفاتحہ نماز کا لازمی رکن و واجب ہے، اس کو ٹھہر ٹھہر کر اور تجوید کے ساتھ پڑھیں:",
        ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ۝",
        translit: "Alhamdu lillahi Rabbil-'aalameen. Ar-Rahmanir-Raheem. Maliki Yawmid-Deen. Iyyaka na'budu wa iyyaka nasta'een. Ihdinas-Siraatal-Mustaqeem. Siraatal-ladheena an'amta 'alayhim, ghayril-maghdoobi 'alayhim wa lad-daalleen. (Aameen)",
        translation: "سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔ بڑا مہربان نہایت رحم فرمانے والا ہے۔ روزِ جزا کا مالک ہے۔ ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔ ہمیں سیدھے راستے پر چلا۔ ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ ان کا راستہ جن پر غضب نازل ہوا اور نہ گمراہوں کا۔ (آمین - اے اللہ ہماری یہ دعا قبول فرما)",
        note: "سورۃ الفاتحہ کے اختتام پر آہستہ سے 'آمین' کہنا سنت ہے۔"
      },
      {
        step: 6,
        title: "سورت ملانا (Qira'at / Surah Recitation)",
        titleEn: "Surah Recitation (e.g. Al-Ikhlas)",
        instruction: "فرض نماز کی پہلی دو رکعتوں میں اور سنت و نفل کی تمام رکعتوں میں سورۃ الفاتحہ کے بعد قرآن کی کوئی سورت (مثلاً سورۃ الاخلاص) تلاوت کریں:",
        ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ۝",
        translit: "Bismillahir-Rahmanir-Raheem. Qul Huw-Allahu Ahad. Allahus-Samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad.",
        translation: "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔ آپ فرما دیجیے کہ وہ اللہ ایک ہے، اللہ بے نیاز ہے (سب اس کے محتاج ہیں وہ کسی کا محتاج نہیں)، نہ اس سے کوئی پیدا ہوا اور نہ وہ کسی سے پیدا ہوا، اور نہ ہی کوئی اس کے برابر کا ہے۔",
        note: "کم از کم ایک بڑی آیت یا تین چھوٹی آیات پڑھنا واجب ہے۔"
      },
      {
        step: 7,
        title: "رکوع اور اس کی تسبیح (Ruku - Bowing)",
        titleEn: "Ruku (Bowing)",
        instruction: "'اللّٰہُ اَکْبَرُ' کہتے ہوئے رکوع میں جائیں۔ پیٹھ اور سر کو بالکل برابر اور سیدھا رکھیں، دونوں ہاتھوں کی انگلیوں کو کشادہ کر کے گھٹنوں کو مضبوطی سے تھام لیں، نگاہ پاؤں کے انگوٹھوں پر ہو اور کم از کم 3 مرتبہ رکوع کی یہ تسبیح پڑھیں:",
        ar: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        translit: "Subhana Rabbiyal-'Azeem (3 or 5 times)",
        translation: "پاک ہے میرا پروردگار جو بڑی عظمت والا ہے۔",
        note: "رکوع میں کم از کم 3 مرتبہ تسبیح کہنا سنت ہے، طاق عدد (3، 5، یا 7 بار) پڑھنا افضل ہے۔"
      },
      {
        step: 8,
        title: "قومہ (Qawmah - رکوع سے سیدھا کھڑا ہونا)",
        titleEn: "Qawmah (Standing after Ruku)",
        instruction: "رکوع سے بالکل سیدھے کھڑے ہوتے ہوئے تسمیع کہیں، اور بالکل سیدھا کھڑے ہو کر تحمید کہیں:",
        ar: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ • رَبَّنَا لَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
        translit: "Sami'-Allahu liman hamidah. Rabbana lakal-hamd, hamdan katheeran tayyiban mubarakan feeh.",
        translation: "اللہ نے اس بندے کی سن لی جس نے اس کی تعریف کی • اے ہمارے رب! تمام تعریفیں تیرے ہی لیے ہیں، بہت زیادہ، پاکیزہ اور برکت والی تعریف۔",
        note: "رکوع سے اٹھ کر بالکل سیدھا کھڑا ہونا اور کم از کم ایک مرتبہ 'سُبْحَانَ اللّٰہ' کہنے کی مقدار اطمینان سے ٹھہرنا واجب ہے۔"
      },
      {
        step: 9,
        title: "سجدہ اور اس کی تسبیح (Sajdah - Prostration)",
        titleEn: "Sajdah (Prostration)",
        instruction: "'اللّٰہُ اَکْبَرُ' کہتے ہوئے سجدے میں جائیں۔ ترتیب یہ ہے: پہلے دونوں گھٹنے، پھر دونوں ہاتھ، پھر ناک اور آخر میں پیشانی زمین پر رکھیں۔ دونوں پاؤں کی انگلیاں قبلہ رخ مڑی ہوں اور کم از کم 3 مرتبہ سجدے کی تسبیح پڑھیں:",
        ar: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
        translit: "Subhana Rabbiyal-A'la (3 or 5 times)",
        translation: "پاک ہے میرا پروردگار جو سب سے بلند و بالا اور برتر ہے۔",
        note: "مرد حضرات پیٹ رانوں سے اور کہنیاں زمین سے اونچی رکھیں، خواتین سمٹ کر سجدہ کریں۔"
      },
      {
        step: 10,
        title: "جلسہ (Jalsa - دو سجدوں کے درمیان بیٹھنا)",
        titleEn: "Jalsa (Sitting between Sajdahs)",
        instruction: "'اللّٰہُ اَکْبَرُ' کہتے ہوئے سجدے سے اٹھ کر بائیں پاؤں کو بچھا کر اس پر اطمینان سے بیٹھ جائیں اور دایاں پاؤں کھڑا رکھیں۔ دونوں ہاتھ رانوں پر رکھیں اور یہ مسنون دعا پڑھیں:",
        ar: "رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي",
        translit: "Rabbigh-fir lee, war-hamnee, wah-dinee, wa 'aafinee, war-zuqnee.",
        translation: "اے میرے رب! مجھے بخش دے، مجھ پر رحم فرما، مجھے سیدھی راہ دکھا، مجھے عافیت عطا فرما اور مجھے پاکیزہ رزق عطا فرما۔",
        note: "دونوں سجدوں کے درمیان سیدھا بیٹھ کر کم از کم ایک تسبیح کے برابر اطمینان حاصل کرنا واجب ہے۔ پھر 'اللّٰہُ اَکْبَرُ' کہہ کر دوسرا سجدہ اسی طرح ادا کریں۔"
      },
      {
        step: 11,
        title: "قعدہ اور تشہد / التحیات (Qa'dah & Tashahhud)",
        titleEn: "Qa'dah & Tashahhud (Attahiyyat)",
        instruction: "دو رکعت کے بعد (قعدہ اولیٰ) یا نماز کی آخری رکعت کے بعد (قعدہ اخیرہ) میں باادب بیٹھ کر تشہد پڑھیں:",
        ar: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
        translit: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-saliheen. Ash-hadu an la ilaha ill-Allahu wa ash-hadu anna Muhammadan 'abduhu wa rasooluh.",
        translation: "تمام زبانی، بدنی اور مالی عبادتیں خالصتاً اللہ ہی کے لیے ہیں۔ اے نبی مکرم ﷺ! آپ پر سلامتی، اللہ کی رحمت اور اس کی برکتیں نازل ہوں۔ ہم پر اور اللہ کے تمام نیک و صالح بندوں پر بھی سلام ہو۔ میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور میں گواہی دیتا ہوں کہ حضرت محمد ﷺ اللہ کے بندے اور اس کے رسول ہیں۔",
        note: "جب 'أَشْهَدُ أَنْ لَا إِلٰهَ' پر پہنچیں تو دائیں ہاتھ کے انگوٹھے اور درمیانی انگلی سے حلقہ بنا کر کلمہ شہادت کی انگلی کو قبلہ رخ اٹھائیں، اور 'إِلَّا اللَّهُ' پر انگلی جھکا دیں۔"
      },
      {
        step: 12,
        title: "درودِ ابراہیمی (Durood-e-Ibrahim)",
        titleEn: "Durood-e-Ibrahim",
        instruction: "آخری قعدے میں تشہد کے بعد حضور نبی اکرم ﷺ اور آپ کی آلِ پاک پر درودِ ابراہیمی پڑھیں:",
        ar: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ۝ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ۝",
        translit: "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedum-Majeed. Allahumma barik 'ala Muhammadin wa 'ala aali Muhammadin kama barakta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedum-Majeed.",
        translation: "اے اللہ! حضرت محمد ﷺ پر اور ان کی آل پر رحمت نازل فرما جیسا کہ تو نے حضرت ابراہیم علیہ السلام اور ان کی آل پر رحمت نازل فرمائی، بے شک تو بڑی تعریف والا اور بزرگی والا ہے۔ اے اللہ! حضرت محمد ﷺ پر اور ان کی آل پر برکت نازل فرما جیسا کہ تو نے حضرت ابراہیم علیہ السلام اور ان کی آل پر برکت نازل فرمائی، بے شک تو بڑی تعریف والا اور بزرگی والا ہے۔",
        note: "نماز کے قعدۂ اخیرہ میں درودِ ابراہیمی پڑھنا سنتِ مؤکدہ ہے۔"
      },
      {
        step: 13,
        title: "دعائے ماثورہ (Dua-e-Masoora)",
        titleEn: "Dua-e-Masoora",
        instruction: "درود شریف پڑھنے کے بعد قرآن و حدیث سے ثابت شدہ کوئی دعا (دعائے ماثورہ) پڑھیں:",
        ar: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
        translit: "Allahumma innee zalamtu nafsee zulman katheeran, wa la yaghfirudh-dhunooba illa Ant, faghfir lee maghfiratan min 'indika war-hamnee, innaka Antal-Ghafoorur-Raheem.",
        translation: "اے اللہ! میں نے اپنی جان پر بہت زیادہ ظلم کیا ہے، اور تیرے سوا کوئی گناہوں کو معاف نہیں کر سکتا، پس تو اپنے خاص فضل سے میری بخشش فرما اور مجھ پر رحم فرما، بے شک تو ہی بڑا بخشنے والا نہایت رحم فرمانے والا ہے۔",
        note: "اس کے ساتھ قرآنی دعا 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ' بھی پڑھی جا سکتی ہے۔"
      },
      {
        step: 14,
        title: "سلام (Salam - اختتامِ نماز)",
        titleEn: "Salam (Concluding the Prayer)",
        instruction: "پہلے دائیں کندھے کی طرف چہرہ پھیرتے ہوئے سلام کہیں، پھر بائیں کندھے کی طرف چہرہ پھیرتے ہوئے سلام کہیں:",
        ar: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        translit: "As-salamu 'alaykum wa rahmatullah (Right, then Left)",
        translation: "تم پر سلامتی ہو اور اللہ کی رحمت نازل ہو۔",
        note: "سلام پھیرتے وقت دائیں اور بائیں جانب موجود فرشتوں، نمازیوں اور صالح ارواح کو سلام کرنے کی نیت کریں۔ اس کے ساتھ ہی نماز پایۂ تکمیل کو پہنچ جاتی ہے۔"
      }
    ],
    rakats: [
      {
        name: "نمازِ فجر (Fajr)",
        total: "4 رکعتیں",
        sunnahBefore: "2 سنتِ مؤکدہ",
        farz: "2 فرض",
        sunnahAfter: "-",
        nafl: "-",
        witr: "-",
        note: "فجر کی دو سنتیں تمام سنتوں میں سب سے زیادہ مؤکدہ ہیں۔ حدیث میں فرمایا گیا کہ یہ دنیا اور جو کچھ دنیا میں ہے اس سے بہتر ہیں۔"
      },
      {
        name: "نمازِ ظہر (Zuhr)",
        total: "12 رکعتیں",
        sunnahBefore: "4 سنتِ مؤکدہ",
        farz: "4 فرض",
        sunnahAfter: "2 سنتِ مؤکدہ",
        nafl: "2 نفل",
        witr: "-",
        note: "فرض سے پہلے 4 سنتیں مؤکدہ اور فرض کے بعد 2 سنتیں مؤکدہ ہیں۔"
      },
      {
        name: "نمازِ عصر (Asr)",
        total: "8 رکعتیں",
        sunnahBefore: "4 سنتِ غیر مؤکدہ",
        farz: "4 فرض",
        sunnahAfter: "-",
        nafl: "-",
        witr: "-",
        note: "فرض سے پہلے 4 سنتیں غیر مؤکدہ (مستحب) ہیں جن کی بڑی فضیلت آئی ہے۔"
      },
      {
        name: "نمازِ مغرب (Maghrib)",
        total: "7 رکعتیں",
        sunnahBefore: "-",
        farz: "3 فرض",
        sunnahAfter: "2 سنتِ مؤکدہ",
        nafl: "2 نفل",
        witr: "-",
        note: "پہلے 3 رکعت فرض پڑھے جاتے ہیں، اس کے بعد 2 سنتِ مؤکدہ اور 2 نفل۔"
      },
      {
        name: "نمازِ عشاء (Isha)",
        total: "17 رکعتیں",
        sunnahBefore: "4 سنتِ غیر مؤکدہ",
        farz: "4 فرض",
        sunnahAfter: "2 سنتِ مؤکدہ",
        nafl: "2 نفل + 2 نفل",
        witr: "3 وتر واجب",
        note: "عشاء میں 4 فرض کے بعد 2 سنتِ مؤکدہ، 2 نفل، 3 وتر واجب اور 2 نفل پڑھے جاتے ہیں۔"
      },
      {
        name: "نمازِ جمعہ (Jummah)",
        total: "14 رکعتیں",
        sunnahBefore: "4 سنتِ مؤکدہ",
        farz: "2 فرض",
        sunnahAfter: "4 سنتِ مؤکدہ + 2 سنت",
        nafl: "2 نفل",
        witr: "-",
        note: "جمعۃ المبارک کے دن ظہر کی جگہ امام کے پیچھے خطبہ سن کر دو رکعت فرض ادا کی جاتی ہے۔"
      }
    ],
    qunoot: {
      title: "دعائے قنوت برائے نمازِ وتر (Complete Dua-e-Qunoot)",
      ar: "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ ۝ اللَّهُمَّ إِيَّاكَ نَعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ، وَنَرْجُو رَحْمَتَكَ وَنَخْشَىٰ عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحَقٌ ۝",
      translit: "Allahumma inna nasta'eenuka wa nastaghfiruka wa nu'minu bika wa natawakkalu 'alayka wa nuthnee 'alaykal-khayr, wa nashkuruka wa la nakfuruk, wa nakhla'u wa natruku man yafjuruk. Allahumma iyyaka na'budu, wa laka nusallee wa nasjudu, wa ilayka nas'a wa nahfidu, wa narjoo rahmataka wa nakhsha 'adhabak, inna 'adhabaka bil-kuffari mulhaq.",
      translation: "اے اللہ! ہم تجھ ہی سے مدد چاہتے ہیں اور تجھ سے بخشش مانگتے ہیں، اور تجھ پر ایمان لاتے ہیں، اور تجھ پر بھروسہ رکھتے ہیں، اور تیری بہترین تعریف کرتے ہیں، اور تیرا شکر ادا کرتے ہیں اور تیری ناشکری نہیں کرتے، اور ہم ہر اس شخص سے علیحدہ ہوتے ہیں اور چھوڑتے ہیں جو تیری نافرمانی کرے۔ اے اللہ! ہم تیری ہی عبادت کرتے ہیں، اور تیرے ہی لیے نماز پڑھتے ہیں اور سجدہ کرتے ہیں، اور تیری ہی طرف دوڑتے ہیں اور خدمت کے لیے حاضر ہوتے ہیں، اور ہم تیری رحمت کے امیدوار ہیں اور تیرے عذاب سے ڈرتے ہیں، بے شک تیرا عذاب کافروں کو پہنچنے والا ہے۔",
      instruction: "نمازِ وتر کی تیسری رکعت میں سورۃ الفاتحہ اور سورت پڑھنے کے بعد دونوں ہاتھ کانوں تک اٹھا کر 'اللّٰہُ اَکْبَرُ' کہیں اور دوبارہ ہاتھ باندھ کر یہ دعائے قنوت پڑھیں۔ اس کے بعد رکوع میں جائیں۔"
    },
    wudu: {
      faraiz: [
        "۱. ایک مرتبہ پورا چہرہ پیشانی کے بالوں سے ٹھوڑی کے نیچے تک اور دونوں کانوں کی لو تک دھونا۔",
        "۲. دونوں ہاتھ کہنیوں سمیت ایک بار دھونا۔",
        "۳. چوتھائی سر کا ایک بار مسح کرنا۔",
        "۴. دونوں پاؤں ٹخنوں سمیت ایک بار دھونا۔"
      ],
      steps: [
        {
          step: 1,
          title: "نیت اور تسمیہ (Bismillah)",
          desc: "دل میں وضو کی نیت کریں کہ میں ناپاکی دور کرنے اور نماز کی ادائیگی کے لیے وضو کرتا ہوں اور 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' کہیں۔"
        },
        {
          step: 2,
          title: "دونوں ہاتھوں کو دھونا",
          desc: "دونوں ہاتھوں کو گٹوں (کلائیوں) تک تین مرتبہ اچھی طرح دھوئیں اور انگلیوں کا آپس میں خلال کریں۔"
        },
        {
          step: 3,
          title: "کلی کرنا اور مسواک",
          desc: "تین مرتبہ دائیں ہاتھ سے منہ میں پانی لے کر خوب اچھی طرح کلی کریں اور مسواک یا انگلی سے دانتوں کو صاف کریں۔"
        },
        {
          step: 4,
          title: "ناک میں پانی ڈالنا",
          desc: "تین مرتبہ دائیں ہاتھ کے چلو سے ناک میں نرم ہڈی تک پانی پہنچائیں اور بائیں ہاتھ کی چھوٹی انگلی سے ناک صاف کریں۔"
        },
        {
          step: 5,
          title: "پورا چہرہ دھونا",
          desc: "پیشانی کے بالوں سے لے کر ٹھوڑی کے نیچے تک اور ایک کان کی لو سے دوسرے کان کی لو تک پورا چہرہ تین مرتبہ دھوئیں اور داڑھی کا خلال کریں۔"
        },
        {
          step: 6,
          title: "کہنیوں سمیت ہاتھ دھونا",
          desc: "پہلے دائیں ہاتھ کو انگلیوں کے پوروں سے کہنی سمیت تین مرتبہ دھوئیں، پھر بائیں ہاتھ کو کہنی سمیت تین مرتبہ دھوئیں۔"
        },
        {
          step: 7,
          title: "سر، کانوں اور گردن کا مسح",
          desc: "ہاتھوں کو تر کر کے پورے سر کا ایک بار مسح کریں، شہادت کی انگلی سے کانوں کے اندر اور انگوٹھے سے کانوں کے باہر کا حصہ صاف کریں، اور انگلیوں کی پشت سے گردن کا مسح کریں۔"
        },
        {
          step: 8,
          title: "ٹخنوں سمیت پاؤں دھونا",
          desc: "پہلے دایاں پاؤں ٹخنوں سمیت تین مرتبہ دھوئیں اور بائیں ہاتھ کی چھوٹی انگلی سے پاؤں کی انگلیوں کا خلال کریں، پھر بایاں پاؤں ٹخنوں سمیت تین مرتبہ دھوئیں۔"
        },
        {
          step: 9,
          title: "وضو کے بعد کی مسنون دعا",
          desc: "وضو مکمل کرنے کے بعد آسمان کی طرف نگاہ اٹھا کر کلمہ شہادت اور یہ دعا پڑھیں: 'أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ' (اے اللہ! مجھے خوب توبہ کرنے والوں اور خوب پاکیزہ رہنے والوں میں شامل فرما)۔"
        }
      ]
    }
  },

  // =========================================================================
  // HTML5 AUDIO ENGINE (100% Authentic MP3 Recitation + Robust Arabic Fallback)
  // =========================================================================
  namesAudio: {
    // 100% reliable local MP3 + CDN fallback for complete 99 names recitations
    allahFullUrl: 'audio/asma-ul-husna.mp3',
    allahFullCdnFallback: 'https://ia802807.us.archive.org/31/items/AsmaUlHusna99NamesofALLAH_201808/Asma-ul-Husna-99Nam-Download-From-YTPak.com.mp3',
    
    prophetFullUrl: 'audio/asma-un-nabi.mp3',
    prophetFullCdnFallback: 'https://dn721906.ca.archive.org/0/items/asma-un-nabi-names-of-prophet-muhammad/Asma-Un-Nabi%2C%20Names%20of%20Prophet%20Muhammad.mp3',

    // Authentic individual names of Allah MP3 repository (1.mp3 to 99.mp3)
    individualAllahBaseUrl: 'https://6a0371d6d2c0468550d1fdea--gleaming-tapioca-363d34.netlify.app/'
  },

  _fullAudioPlayer: null,
  _currentAudioType: null,
  _singleAudioPlayer: null,
  _singleActiveBtn: null,
  _activeUtterance: null,

  /**
   * CRITICAL CHECK: Verifies if user device/browser has authentic Arabic voice installed
   */
  hasArabicVoice() {
    if (!('speechSynthesis' in window)) return false;
    const voices = (this._cachedVoices && this._cachedVoices.length > 0)
      ? this._cachedVoices
      : window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return false;
    return voices.some(v => 
      v.lang === 'ar-SA' || 
      (v.lang && v.lang.toLowerCase().startsWith('ar')) || 
      (v.name && v.name.toLowerCase().includes('arabic'))
    );
  },

  getArabicVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = (this._cachedVoices && this._cachedVoices.length > 0)
      ? this._cachedVoices
      : window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    return voices.find(v => v.lang === 'ar-SA') ||
           voices.find(v => v.lang === 'ar-AE') ||
           voices.find(v => v.lang === 'ar-EG') ||
           voices.find(v => v.lang && v.lang.toLowerCase().startsWith('ar')) ||
           voices.find(v => v.name && v.name.toLowerCase().includes('arabic')) ||
           null;
  },

  showArabicVoiceMissingNotice() {
    const msg = "عربی تلفظ سننے کے لیے آپ کی ڈیوائس میں عربی زبان کا انسٹال ہونا ضروری ہے۔ براہ کرم 'سب ایک ساتھ سنیں' کا بٹن استعمال کریں۔";
    this.showWisdomToast(msg, 'warning');
  },

  /**
   * 1. Individual Play Button: Plays real MP3 when available, or speech synthesis with Arabic voice check
   */
  playSingleName(nameData, btnElement) {
    // 1. Stop any currently playing single audio
    if (this._singleAudioPlayer) {
      this._singleAudioPlayer.pause();
      this._singleAudioPlayer.currentTime = 0;
      this._singleAudioPlayer = null;
    }
    if (this._singleActiveBtn) {
      this._singleActiveBtn.classList.remove('speaking');
      const icon = this._singleActiveBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-play';
      this._singleActiveBtn = null;
    }

    // Stop any full audio playback if running
    if (this._fullAudioPlayer && !this._fullAudioPlayer.paused) {
      this.stopAllNames(false);
    }

    // Extract parameters
    let num = null;
    let arText = '';
    let type = 'allah';

    if (typeof nameData === 'object' && nameData !== null) {
      num = nameData.num;
      arText = nameData.ar || '';
      type = nameData.type || 'allah';
    } else if (typeof nameData === 'number') {
      num = nameData;
    } else if (typeof nameData === 'string') {
      arText = nameData;
    }

    // 2. Play authentic MP3 for Allah names (1..99)
    if (type === 'allah' && num && num >= 1 && num <= 99) {
      const mp3Url = `${this.namesAudio.individualAllahBaseUrl}${num}.mp3`;
      const audio = new Audio(mp3Url);
      this._singleAudioPlayer = audio;
      this._singleActiveBtn = btnElement;

      if (btnElement) {
        btnElement.classList.add('speaking');
        const icon = btnElement.querySelector('i');
        if (icon) icon.className = 'fas fa-volume-high';
      }

      audio.onended = () => {
        if (btnElement) {
          btnElement.classList.remove('speaking');
          const icon = btnElement.querySelector('i');
          if (icon) icon.className = 'fas fa-play';
        }
        this._singleAudioPlayer = null;
        this._singleActiveBtn = null;
      };

      audio.onerror = () => {
        console.warn("Individual MP3 failed to load, trying speech synthesis fallback:", mp3Url);
        if (btnElement) {
          btnElement.classList.remove('speaking');
          const icon = btnElement.querySelector('i');
          if (icon) icon.className = 'fas fa-play';
        }
        this._singleAudioPlayer = null;
        this._singleActiveBtn = null;
        this.fallbackSpeechSynthesis(arText, btnElement);
      };

      audio.play().catch(err => {
        console.warn("Audio play() blocked or error:", err);
        this.fallbackSpeechSynthesis(arText, btnElement);
      });
      return;
    }

    // 3. Fallback for names without individual MP3s
    this.fallbackSpeechSynthesis(arText, btnElement);
  },

  fallbackSpeechSynthesis(text, btnElement) {
    if (!text) return;

    // CRITICAL ERROR HANDLING: Check if Arabic voice is installed
    if (!this.hasArabicVoice()) {
      this.showArabicVoiceMissingNotice();
      return;
    }

    if (!('speechSynthesis' in window)) {
      this.showArabicVoiceMissingNotice();
      return;
    }

    window.speechSynthesis.cancel();
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    const arVoice = this.getArabicVoice();
    if (arVoice) utterance.voice = arVoice;

    this._activeUtterance = utterance;

    if (btnElement) {
      btnElement.classList.add('speaking');
      const icon = btnElement.querySelector('i');
      if (icon) icon.className = 'fas fa-volume-high';

      utterance.onend = () => {
        btnElement.classList.remove('speaking');
        if (icon) icon.className = 'fas fa-play';
        this._activeUtterance = null;
      };

      utterance.onerror = () => {
        btnElement.classList.remove('speaking');
        if (icon) icon.className = 'fas fa-play';
        this._activeUtterance = null;
      };
    }

    window.speechSynthesis.speak(utterance);
  },

  // Backward compatibility alias
  playArabicSpeech(arabicText, btnElement) {
    this.playSingleName(arabicText, btnElement);
  },

  /**
   * 2. "Play All" (Single Complete MP3 Track Recitation)
   * Plays the complete Asma-ul-Husna / Asma-un-Nabi recitation track with zero looping collision
   */
  playAllNames(type = 'allah') {
    // 1. Stop any single name playing
    if (this._singleAudioPlayer) {
      this._singleAudioPlayer.pause();
      this._singleAudioPlayer.currentTime = 0;
      this._singleAudioPlayer = null;
    }
    if (this._singleActiveBtn) {
      this._singleActiveBtn.classList.remove('speaking');
      const icon = this._singleActiveBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-play';
      this._singleActiveBtn = null;
    }

    // 2. If already playing this track, toggle or restart
    if (this._fullAudioPlayer && this._currentAudioType === type && !this._fullAudioPlayer.paused) {
      this.stopAllNames(true);
      return;
    }

    // Stop any other full audio
    this.stopAllNames(false);

    // 3. Determine MP3 URL (Local file with online CDN fallback)
    const trackUrl = (type === 'prophet') 
      ? this.namesAudio.prophetFullUrl 
      : this.namesAudio.allahFullUrl;
    
    const fallbackUrl = (type === 'prophet') 
      ? this.namesAudio.prophetFullCdnFallback 
      : this.namesAudio.allahFullCdnFallback;

    // 4. Create HTML5 Audio Object
    const audio = new Audio(trackUrl);
    this._fullAudioPlayer = audio;
    this._currentAudioType = type;

    // Update UI controls
    this.updateAudioControlsUI(type, true);

    audio.onended = () => {
      this.stopAllNames(true, "ماشاءاللہ! مکمل تلاوت اختتام پذیر ہوئی۔");
    };

    audio.onerror = () => {
      console.warn("Primary MP3 failed, trying CDN fallback:", fallbackUrl);
      if (fallbackUrl && audio.src !== fallbackUrl) {
        audio.src = fallbackUrl;
        audio.play().catch(e => {
          console.warn("CDN fallback error:", e);
          this.stopAllNames(true, "آڈیو فائل لوڈ کرنے میں دشواری پیش آئی۔ انٹرنیٹ کنکشن چیک کریں۔");
        });
      } else {
        this.stopAllNames(true, "آڈیو فائل لوڈ نہیں ہو سکی۔");
      }
    };

    audio.play().catch(err => {
      console.warn("Audio play() failed or blocked by autoplay policy:", err);
      if (fallbackUrl && audio.src !== fallbackUrl) {
        audio.src = fallbackUrl;
        audio.play().catch(e => console.warn(e));
      }
    });

    const titleText = type === 'prophet' ? '۹۹ اسماء النبی ﷺ' : '۹۹ اسماء الحسنیٰ';
    this.showWisdomToast(`تلاوت شروع ہو گئی ہے: ${titleText}`);
  },

  /**
   * Stop All: Pauses HTML5 Audio, resets currentTime to 0 and restores UI buttons
   */
  stopAllNames(notify = false, msg = "آڈیو روک دی گئی ہے۔ (Audio Stopped)") {
    // 1. Pause full audio and reset currentTime to 0
    if (this._fullAudioPlayer) {
      this._fullAudioPlayer.pause();
      this._fullAudioPlayer.currentTime = 0;
      this._fullAudioPlayer = null;
    }

    // 2. Pause single audio and reset currentTime to 0
    if (this._singleAudioPlayer) {
      this._singleAudioPlayer.pause();
      this._singleAudioPlayer.currentTime = 0;
      this._singleAudioPlayer = null;
    }

    if (this._singleActiveBtn) {
      this._singleActiveBtn.classList.remove('speaking');
      const icon = this._singleActiveBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-play';
      this._singleActiveBtn = null;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this._activeUtterance = null;

    this._currentAudioType = null;

    // Reset controls UI
    this.updateAudioControlsUI('allah', false);
    this.updateAudioControlsUI('prophet', false);
    this.clearSequenceHighlights();

    if (notify) {
      this.showWisdomToast(msg);
    }
  },

  highlightSequenceCard(type, index, item) {
    this.clearSequenceHighlights();

    const containerId = type === 'allah' ? 'allahNamesContainer' : 'prophetNamesContainer';
    const statusTextId = type === 'allah' ? 'allahAudioStatusText' : 'prophetAudioStatusText';

    const container = document.getElementById(containerId);
    if (container) {
      const cards = container.querySelectorAll('.name-card-item');
      if (cards && cards[index]) {
        cards[index].classList.add('playing-sequential');
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    const statusEl = document.getElementById(statusTextId);
    if (statusEl && item) {
      statusEl.innerHTML = `<span class="text-warning fw-bold">نام نمبر ${index + 1} از ۹۹:</span> <span class="font-arabic fs-6 text-white">${item.ar}</span> <span class="text-teal">(${item.en})</span>`;
    }
  },

  clearSequenceHighlights() {
    document.querySelectorAll('.name-card-item.playing-sequential').forEach(card => {
      card.classList.remove('playing-sequential');
    });
    document.querySelectorAll('.btn-name-audio.speaking').forEach(btn => {
      btn.classList.remove('speaking');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fas fa-play';
    });
  },

  updateAudioControlsUI(type, isPlaying) {
    const playBtnId = type === 'allah' ? 'btnPlayAllAllahNames' : 'btnPlayAllProphetNames';
    const stopBtnId = type === 'allah' ? 'btnStopAllahNames' : 'btnStopProphetNames';
    const statusTextId = type === 'allah' ? 'allahAudioStatusText' : 'prophetAudioStatusText';

    const playBtn = document.getElementById(playBtnId);
    const stopBtn = document.getElementById(stopBtnId);
    const statusText = document.getElementById(statusTextId);

    if (playBtn) {
      if (isPlaying) {
        playBtn.classList.remove('btn-play-all');
        playBtn.classList.add('btn-warning');
        playBtn.innerHTML = '<span class="spinner-grow spinner-grow-sm me-1"></span> <span>تلاوت جاری ہے... (Playing)</span>';
      } else {
        playBtn.classList.remove('btn-warning');
        playBtn.classList.add('btn-play-all');
        playBtn.innerHTML = '<i class="fas fa-play"></i> <span>سب نام ایک ساتھ سنیں (Play All)</span>';
      }
    }

    if (stopBtn) {
      if (isPlaying) {
        stopBtn.classList.remove('btn-outline-danger');
        stopBtn.classList.add('btn-danger', 'animate-pulse');
      } else {
        stopBtn.classList.remove('btn-danger', 'animate-pulse');
        stopBtn.classList.add('btn-outline-danger');
      }
    }

    if (statusText) {
      if (isPlaying) {
        const nameType = type === 'prophet' ? 'اسماء النبی ﷺ' : 'اسماء الحسنیٰ';
        statusText.innerHTML = `<span class="text-warning fw-bold"><i class="fas fa-music text-teal me-1"></i> مکمل آڈیو تلاوت جاری ہے:</span> <span class="text-white">${nameType}</span>`;
      } else {
        statusText.textContent = type === 'allah' ? '۹۹ اسماء الحسنیٰ باآوازِ عربی' : '۹۹ اسماء النبی ﷺ باآوازِ عربی';
      }
    }
  },

  // =========================================================================
  // RENDER 1: 99 NAMES OF ALLAH (With Audio Play Buttons & Top Controls)
  // =========================================================================
  renderAllahNames() {
    const container = document.getElementById("allahNamesContainer");
    if (!container) return;

    // Bind Top Play All and Stop buttons
    const btnPlayAll = document.getElementById("btnPlayAllAllahNames");
    const btnStop = document.getElementById("btnStopAllahNames");

    if (btnPlayAll && !btnPlayAll._bound) {
      btnPlayAll._bound = true;
      btnPlayAll.addEventListener("click", () => {
        this.playAllNames('allah');
      });
    }

    if (btnStop && !btnStop._bound) {
      btnStop._bound = true;
      btnStop.addEventListener("click", () => {
        this.stopAllNames(true);
      });
    }

    const renderItems = (items) => {
      container.innerHTML = items.map(item => `
        <div class="name-card-item" data-num="${item.num}">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="badge bg-dark text-warning border border-warning" style="font-size: 0.68rem;">#${item.num}</span>
            <button class="btn-name-audio" title="تلفظ سنیں (Pronounce in Arabic)" data-num="${item.num}" data-arabic="${item.ar}" aria-label="Play pronunciation for ${item.en}">
              <i class="fas fa-play"></i>
            </button>
          </div>
          <div class="name-arabic">${item.ar}</div>
          <div class="name-translit">${item.en}</div>
          <div class="name-meaning">${item.meaning}</div>
        </div>
      `).join("");

      // Bind individual speech / audio click events
      container.querySelectorAll(".btn-name-audio").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const ar = btn.getAttribute("data-arabic");
          const num = parseInt(btn.getAttribute("data-num"), 10);
          this.playSingleName({ num, ar, type: 'allah' }, btn);
        });
      });
    };

    renderItems(this.allahNames);

    // Search filter
    const searchInput = document.getElementById("searchAllahNames");
    if (searchInput && !searchInput._bound) {
      searchInput._bound = true;
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = this.allahNames.filter(n =>
          n.en.toLowerCase().includes(query) ||
          n.meaning.toLowerCase().includes(query) ||
          n.ar.includes(query)
        );
        renderItems(filtered);
      });
    }
  },

  // =========================================================================
  // RENDER 2: 99 NAMES OF PROPHET MUHAMMAD (ﷺ) (With Audio Play Buttons & Top Controls)
  // =========================================================================
  renderProphetNames() {
    const container = document.getElementById("prophetNamesContainer");
    if (!container) return;

    // Bind Top Play All and Stop buttons
    const btnPlayAll = document.getElementById("btnPlayAllProphetNames");
    const btnStop = document.getElementById("btnStopProphetNames");

    if (btnPlayAll && !btnPlayAll._bound) {
      btnPlayAll._bound = true;
      btnPlayAll.addEventListener("click", () => {
        this.playAllNames('prophet');
      });
    }

    if (btnStop && !btnStop._bound) {
      btnStop._bound = true;
      btnStop.addEventListener("click", () => {
        this.stopAllNames(true);
      });
    }

    const renderList = (list) => {
      container.innerHTML = list.map(p => `
        <div class="name-card-item" data-num="${p.num}">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="badge bg-dark text-teal border border-secondary" style="font-size: 0.68rem;">#${p.num}</span>
            <button class="btn-name-audio" title="تلفظ سنیں (Pronounce in Arabic)" data-num="${p.num}" data-arabic="${p.ar}" aria-label="Play pronunciation for ${p.en}">
              <i class="fas fa-play"></i>
            </button>
          </div>
          <div class="name-arabic">${p.ar}</div>
          <div class="name-translit">${p.en} <span class="badge bg-dark text-warning ms-1 font-urdu" style="font-size: 0.65rem;">${p.ur}</span></div>
          <div class="name-urdu-meaning">${p.meaning}</div>
        </div>
      `).join("");

      // Bind individual speech / audio click events
      container.querySelectorAll(".btn-name-audio").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const ar = btn.getAttribute("data-arabic");
          const num = parseInt(btn.getAttribute("data-num"), 10);
          this.playSingleName({ num, ar, type: 'prophet' }, btn);
        });
      });
    };

    renderList(this.prophetNames);

    const searchInput = document.getElementById("searchProphetNames");
    if (searchInput && !searchInput._bound) {
      searchInput._bound = true;
      searchInput.addEventListener("input", (e) => {
        const q = e.target.value.toLowerCase().trim();
        const filtered = this.prophetNames.filter(p =>
          p.en.toLowerCase().includes(q) ||
          p.ar.includes(q) ||
          (p.ur && p.ur.includes(q)) ||
          p.meaning.toLowerCase().includes(q)
        );
        renderList(filtered);
      });
    }
  },


  // =========================================================================
  // RENDER 3: QURAN TILAWAT AUDIO PLAYER (5 Specific Mandatory Surahs)
  // =========================================================================
  renderTilawat() {
    const listContainer = document.getElementById("tilawatListContainer");
    const audioEl = document.getElementById("quranAudioPlayer");
    const nowPlayingTitle = document.getElementById("nowPlayingSurahTitle");
    const nowPlayingReciter = document.getElementById("nowPlayingReciter");

    if (!listContainer) return;

    listContainer.innerHTML = this.tilawatSurahs.map((s, idx) => `
      <div class="p-3 mb-2 rounded d-flex align-items-center justify-content-between tilawat-playlist-item ${idx === 0 ? 'active' : ''}" 
           style="background: rgba(10, 48, 40, 0.6); border: 1px solid rgba(45, 212, 191, 0.2); cursor: pointer; transition: all 0.25s ease;"
           data-audio="${s.audio}" data-title="${s.name} (${s.ar})" data-reciter="${s.reciter}">
        <div class="d-flex align-items-center gap-3">
          <div class="btn btn-sm rounded-circle" style="background: var(--accent-emerald); color: #022018; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-play"></i>
          </div>
          <div>
            <div class="fw-bold text-white fs-6">${s.name} <span class="font-arabic text-warning ms-1">${s.ar}</span></div>
            <div class="small text-muted"><i class="fas fa-microphone me-1 text-teal"></i> ${s.reciter}</div>
          </div>
        </div>
        <div class="badge bg-dark text-teal border border-secondary">${s.duration}</div>
      </div>
    `).join("");

    listContainer.querySelectorAll("[data-audio]").forEach(item => {
      item.addEventListener("click", () => {
        const audioSrc = item.getAttribute("data-audio");
        const title = item.getAttribute("data-title");
        const reciter = item.getAttribute("data-reciter");

        listContainer.querySelectorAll(".tilawat-playlist-item").forEach(el => el.classList.remove("active"));
        item.classList.add("active");

        if (audioEl) {
          audioEl.src = audioSrc;
          audioEl.play().catch(e => console.log("Audio play allowed on user interaction:", e));
        }
        if (nowPlayingTitle) nowPlayingTitle.textContent = title;
        if (nowPlayingReciter) nowPlayingReciter.textContent = reciter;
      });
    });
  },

  // =========================================================================
  // RENDER 4: QURAN READING (5 Specific Surahs with Arabic & Urdu)
  // =========================================================================
  renderQuranReader() {
    const selector = document.getElementById("quranSurahSelect");
    const viewContainer = document.getElementById("quranTextViewer");

    if (!selector || !viewContainer) return;

    selector.innerHTML = this.quranSurahs.map((s, idx) => `
      <option value="${idx}">سورة ${s.name} - ${s.ar}</option>
    `).join("");

    const displaySurah = (idx) => {
      const s = this.quranSurahs[idx];
      if (!s) return;

      viewContainer.innerHTML = `
        <div class="text-center mb-4 p-3 rounded" style="background: rgba(8, 41, 34, 0.75); border: 1px solid rgba(52, 211, 153, 0.3);">
          <h3 class="font-arabic text-warning mb-1" style="font-size: 2.2rem;">${s.ar}</h3>
          <h5 class="text-white fw-bold">${s.name}</h5>
          <p class="font-urdu text-teal mb-0" style="font-size: 0.95rem;">${s.desc}</p>
        </div>
        <div class="d-flex flex-column gap-3">
          ${s.ayahs.map(a => `
            <div class="quran-ayah-card">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-dark border border-warning text-warning" style="font-size: 0.72rem;">آیت نمبر ${a.num}</span>
                <span class="badge bg-teal text-dark fw-bold">قرآن مجید</span>
              </div>
              <div class="quran-ayah-ar">${a.ar}</div>
              <div class="quran-ayah-ur">${a.ur}</div>
              <div class="quran-ayah-en">${a.en}</div>
            </div>
          `).join("")}
        </div>
      `;
    };

    if (!selector._bound) {
      selector._bound = true;
      selector.addEventListener("change", (e) => displaySurah(e.target.value));
    }
    displaySurah(0);
  },

  // =========================================================================
  // RENDER 5: MASNOON DUAS (With Accurate Urdu Translation Below Arabic)
  // =========================================================================
  renderMasnoonDuas() {
    const container = document.getElementById("masnoonDuasContainer");
    if (!container) return;

    container.innerHTML = this.masnoonDuas.map((d, idx) => `
      <div class="dua-card-islamic">
        <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-1">
          <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: var(--accent-gold-light); border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.75rem;">
            <i class="fas fa-tag me-1"></i> ${d.category}
          </span>
          <span class="badge bg-dark text-teal border border-secondary" style="font-size: 0.72rem;">
            <i class="fas fa-book-bookmark me-1"></i> ${d.ref}
          </span>
        </div>
        <h5 class="fw-bold text-white mb-2 font-urdu" style="font-size: 1.15rem;">
          <i class="fas fa-hands-praying text-warning me-2"></i>${idx + 1}. ${d.title}
        </h5>
        <div class="dua-arabic-text">${d.ar}</div>
        <div class="dua-urdu-translation">
          <span class="text-teal fw-bold d-block mb-1" style="font-size: 0.82rem;">اردو ترجمہ:</span>
          ${d.ur}
        </div>
        <div class="small fst-italic text-info mb-1"><i class="fas fa-volume-high me-1"></i> ${d.translit}</div>
        <div class="small text-muted">${d.en}</div>
      </div>
    `).join("");
  },

  // =========================================================================
  // RENDER 6: ISLAMIC STORIES (سبق آموز کہانیاں - Bootstrap Accordion in Urdu)
  // =========================================================================
  renderStories() {
    const container = document.getElementById("storiesContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="accordion stories-accordion" id="accordionIslamicStories">
        ${this.stories.map((st, idx) => `
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingStory${idx}">
              <button class="accordion-button ${idx === 0 ? '' : 'collapsed'}" type="button" 
                      data-bs-toggle="collapse" data-bs-target="#collapseStory${idx}" 
                      aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="collapseStory${idx}">
                <div class="d-flex align-items-center justify-content-between w-100 pe-3 flex-wrap gap-2">
                  <div class="d-flex align-items-center gap-2">
                    <span class="badge bg-warning text-dark fw-bold">کہانی نمبر ${idx + 1}</span>
                    <span class="font-urdu fw-bold text-white" style="font-size: 1.05rem;">${st.title}</span>
                  </div>
                  <span class="badge bg-dark text-teal border border-secondary">${st.badge}</span>
                </div>
              </button>
            </h2>
            <div id="collapseStory${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" 
                 aria-labelledby="headingStory${idx}" data-bs-parent="#accordionIslamicStories">
              <div class="accordion-body">
                <div class="small text-warning mb-3 font-urdu fw-semibold">
                  <i class="fas fa-circle-info ms-1"></i> ${st.summary}
                </div>
                <div class="story-content-text mb-3" style="white-space: pre-line;">
                  ${st.body}
                </div>
                <div class="story-moral-box">
                  <strong class="text-warning d-block mb-1" style="font-size: 1.02rem;">
                    <i class="fas fa-gem ms-1"></i> سبق آموز اخلاقی درس (Moral Lesson):
                  </strong>
                  <span class="text-light">${st.lesson}</span>
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  // =========================================================================
  // RENDER 7: COMPLETE NAMAZ GUIDE (طریقہ نماز، رکعتیں، دعائے قنوت، مسنون وضو)
  // =========================================================================
  renderNamazGuide() {
    const stepsContainer = document.getElementById("namazStepsTab");
    const rakatsContainer = document.getElementById("namazRakatsTab");
    const qunootContainer = document.getElementById("namazQunootTab");
    const wuduContainer = document.getElementById("namazWuduTab");

    // 1. Step-by-Step Method
    if (stepsContainer) {
      stepsContainer.innerHTML = this.namazGuide.steps.map(s => `
        <div class="namaz-step-card mb-4 p-3 rounded" style="background: rgba(7, 36, 29, 0.8); border: 1px solid rgba(52, 211, 153, 0.25); border-radius: 18px;">
          <div class="namaz-step-header d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-teal text-dark fw-bold">مرحلہ نمبر ${s.step}</span>
              <h5 class="namaz-step-title font-urdu m-0 text-warning fw-bold">${s.title}</h5>
            </div>
            <span class="badge bg-dark text-light border border-secondary" style="font-size: 0.75rem;">${s.titleEn}</span>
          </div>

          <div class="namaz-instruction-box mb-3">
            <i class="fas fa-info-circle text-warning ms-1"></i> <strong>طریقہ:</strong> ${s.instruction}
          </div>

          <div class="namaz-arabic-box mb-2">
            <div class="namaz-arabic">${s.ar}</div>
          </div>

          <div class="namaz-translit mb-2">
            <i class="fas fa-volume-high text-info me-1"></i> ${s.translit}
          </div>

          <div class="namaz-translation-urdu mb-2">
            <span class="text-teal fw-bold d-block mb-1 font-urdu" style="font-size: 0.85rem;">اردو ترجمہ:</span>
            ${s.translation}
          </div>

          ${s.note ? `
            <div class="small text-muted mt-2 fst-italic px-2 font-urdu" style="font-size: 0.88rem;">
              <i class="fas fa-lightbulb text-warning ms-1"></i> <strong>اہم نکتہ:</strong> ${s.note}
            </div>
          ` : ''}
        </div>
      `).join("");
    }

    // 2. Rakat Breakdown Table
    if (rakatsContainer) {
      rakatsContainer.innerHTML = `
        <div class="p-3 mb-3 rounded" style="background: rgba(8, 41, 34, 0.75); border: 1px solid rgba(52, 211, 153, 0.3);">
          <h5 class="font-urdu text-warning mb-1"><i class="fas fa-table-cells me-2"></i>پانچوں نمازوں کی رکعتوں کا مکمل چارٹ</h5>
          <p class="small text-muted font-urdu m-0">اہلِ سنت و الجماعت (حنفی فقہ) کے مطابق یومیہ پنج وقتہ نمازوں کی مکمل رکعتیں مع سنت و نفل</p>
        </div>

        <div class="rakat-table-container table-responsive">
          <table class="rakat-table table table-dark table-striped align-middle text-center mb-0">
            <thead>
              <tr class="font-urdu" style="background: rgba(10, 55, 45, 0.95); color: var(--accent-gold-light);">
                <th class="text-start">نماز</th>
                <th>سنتِ قبلہ</th>
                <th>فرض</th>
                <th>سنتِ بعدیہ</th>
                <th>نفل</th>
                <th>وتر واجب</th>
                <th>کل رکعتیں</th>
              </tr>
            </thead>
            <tbody>
              ${this.namazGuide.rakats.map(r => `
                <tr>
                  <td class="fw-bold text-warning font-urdu text-start fs-6">${r.name}</td>
                  <td>${r.sunnahBefore !== '-' ? `<span class="badge badge-sunnah font-urdu">${r.sunnahBefore}</span>` : '<span class="text-muted">-</span>'}</td>
                  <td><span class="badge badge-farz font-urdu">${r.farz}</span></td>
                  <td>${r.sunnahAfter !== '-' ? `<span class="badge badge-sunnah font-urdu">${r.sunnahAfter}</span>` : '<span class="text-muted">-</span>'}</td>
                  <td>${r.nafl !== '-' ? `<span class="badge badge-nafl font-urdu">${r.nafl}</span>` : '<span class="text-muted">-</span>'}</td>
                  <td>${r.witr !== '-' ? `<span class="badge badge-witr font-urdu">${r.witr}</span>` : '<span class="text-muted">-</span>'}</td>
                  <td><span class="badge bg-warning text-dark fw-bold font-urdu fs-6">${r.total}</span></td>
                </tr>
                <tr>
                  <td colspan="7" class="small text-muted font-urdu text-start py-1 px-3 border-bottom border-secondary border-opacity-25" style="background: rgba(4, 25, 20, 0.4);">
                    <i class="fas fa-info-circle text-teal me-1"></i> ${r.note}
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    // 3. Dua-e-Qunoot Tab
    if (qunootContainer) {
      const q = this.namazGuide.qunoot;
      qunootContainer.innerHTML = `
        <div class="namaz-step-card p-4 rounded" style="background: rgba(7, 36, 29, 0.85); border: 1px solid rgba(52, 211, 153, 0.3); border-radius: 20px;">
          <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h4 class="text-warning font-urdu m-0 fw-bold"><i class="fas fa-star text-warning me-2"></i>${q.title}</h4>
            <span class="badge bg-warning text-dark fw-bold py-2 px-3">نمازِ وتر کی تیسری رکعت</span>
          </div>

          <div class="namaz-instruction-box mb-3">
            <i class="fas fa-circle-exclamation text-warning ms-1"></i> <strong>پڑھنے کا طریقہ:</strong> ${q.instruction}
          </div>

          <div class="namaz-arabic-box mb-3 p-3">
            <div class="namaz-arabic text-center fs-3" style="line-height: 2.3;">${q.ar}</div>
          </div>

          <div class="namaz-translit mb-3 p-2 rounded" style="background: rgba(3, 20, 16, 0.6);">
            <i class="fas fa-volume-high text-info me-1"></i> <strong>تلفظ:</strong> ${q.translit}
          </div>

          <div class="namaz-translation-urdu mb-3 p-3 rounded">
            <span class="text-teal fw-bold d-block mb-1 font-urdu fs-6">اردو ترجمہ:</span>
            <div style="font-size: 1.05rem; line-height: 2.2;">${q.translation}</div>
          </div>
        </div>
      `;
    }

    // 4. Wudu Guide Tab
    if (wuduContainer) {
      const w = this.namazGuide.wudu;
      wuduContainer.innerHTML = `
        <div class="p-3 mb-3 rounded" style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(52, 211, 153, 0.4); border-radius: 16px;">
          <h5 class="text-warning font-urdu fw-bold mb-2"><i class="fas fa-hands-bubbles me-2"></i>وضو کے ۴ لازمی فرائض (ان کے بغیر وضو نہیں ہوتا)</h5>
          <div class="row g-2 font-urdu text-white">
            ${w.faraiz.map(f => `
              <div class="col-md-6 col-12">
                <div class="p-2 rounded bg-dark bg-opacity-50 border border-secondary border-opacity-50">${f}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <h5 class="font-urdu text-white fw-bold my-3"><i class="fas fa-list-check text-teal me-2"></i>مسنون وضو کا مکمل طریقہ (قدم بہ قدم):</h5>

        <div class="d-flex flex-column gap-3">
          ${w.steps.map(s => `
            <div class="p-3 rounded" style="background: rgba(7, 36, 29, 0.75); border-right: 4px solid var(--accent-emerald); border-radius: 14px;">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="badge bg-teal text-dark fw-bold">قدم نمبر ${s.step}</span>
                <h6 class="text-warning m-0 font-urdu fw-bold fs-6">${s.title}</h6>
              </div>
              <div class="font-urdu text-light mt-2" style="font-size: 0.98rem; line-height: 2.1;">${s.desc}</div>
            </div>
          `).join("")}
        </div>
      `;
    }
  },

  // =========================================================================
  // HELPER: Get current date key in YYYY-MM-DD format (local time)
  // =========================================================================
  getTodayDateKey() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // =========================================================================
  // DYNAMIC DAILY QURAN AYAT (AlQuran Cloud API + Midnight Cache)
  // =========================================================================
  curatedAyatList: [
    255, 286, 152, 153, 186, 195, 384, 414, 1732, 2150, 2503, 3370, 4144, 5248, 5991, 6008
  ],

  async initDailyAyat(forceRefresh = false) {
    const arabicEl = document.getElementById("dailyAyatArabic");
    const urduEl = document.getElementById("dailyAyatUrdu");
    const enEl = document.getElementById("dailyAyatEn");
    const refEl = document.getElementById("dailyAyatRefBadge");

    if (!arabicEl) return;

    const todayKey = this.getTodayDateKey();
    const cacheKey = "noor_daily_verse_cache";

    if (!forceRefresh) {
      try {
        const cachedRaw = localStorage.getItem(cacheKey);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (cached && cached.date === todayKey && cached.data) {
            this.renderAyatData(cached.data);
            this.bindAyatEvents();
            return;
          }
        }
      } catch (e) {
        console.warn("Could not read Ayat cache:", e);
      }
    }

    arabicEl.innerHTML = `<span class="spinner-border spinner-border-sm text-warning me-2"></span>تلاوت لوڈ ہو رہی ہے...`;
    if (urduEl) urduEl.textContent = "لوڈ ہو رہا ہے...";

    const randomAyahId = this.curatedAyatList[Math.floor(Math.random() * this.curatedAyatList.length)];

    try {
      const apiUrl = `https://api.alquran.cloud/v1/ayah/${randomAyahId}/editions/quran-uthmani,ur.jalandhry,en.sahih`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`AlQuran API error: ${response.status}`);

      const json = await response.json();
      if (json.code === 200 && Array.isArray(json.data) && json.data.length >= 3) {
        const arData = json.data[0];
        const urData = json.data[1];
        const enData = json.data[2];

        const ayatData = {
          ar: arData.text,
          ur: urData.text,
          en: enData.text,
          ref: `سورة ${arData.surah.name} : ${arData.numberInSurah}`,
          surahNameEn: arData.surah.englishName,
          surahNumber: arData.surah.number,
          ayahNumber: arData.numberInSurah
        };

        localStorage.setItem(cacheKey, JSON.stringify({
          date: todayKey,
          data: ayatData
        }));

        this.renderAyatData(ayatData);
        this.bindAyatEvents();
        return;
      }
    } catch (err) {
      console.warn("AlQuran API fetch failed, falling back to local dataset:", err);
    }

    const fallbackAyah = this.dailyWisdom.ayahs[Math.floor(Math.random() * this.dailyWisdom.ayahs.length)];
    const fallbackData = {
      ar: fallbackAyah.ar,
      ur: fallbackAyah.ur,
      en: fallbackAyah.en,
      ref: fallbackAyah.ref
    };

    localStorage.setItem(cacheKey, JSON.stringify({
      date: todayKey,
      data: fallbackData
    }));

    this.renderAyatData(fallbackData);
    this.bindAyatEvents();
  },

  renderAyatData(data) {
    const arabicEl = document.getElementById("dailyAyatArabic");
    const urduEl = document.getElementById("dailyAyatUrdu");
    const enEl = document.getElementById("dailyAyatEn");
    const refEl = document.getElementById("dailyAyatRefBadge");

    if (arabicEl) arabicEl.textContent = data.ar;
    if (urduEl) urduEl.textContent = data.ur;
    if (enEl) enEl.textContent = `"${data.en}"`;
    if (refEl) refEl.textContent = data.ref;
    this.currentAyatData = data;
  },

  bindAyatEvents() {
    const btnNext = document.getElementById("btnNextAyat");
    const btnCopy = document.getElementById("btnCopyAyat");
    const btnShare = document.getElementById("btnShareAyat");

    if (btnNext && !btnNext._bound) {
      btnNext._bound = true;
      btnNext.addEventListener("click", () => this.initDailyAyat(true));
    }
    if (btnCopy && !btnCopy._bound) {
      btnCopy._bound = true;
      btnCopy.addEventListener("click", () => {
        if (!this.currentAyatData) return;
        const text = `✨ آیتِ مبارکہ (Ayat of the Day) ✨\n\n${this.currentAyatData.ar}\n\n📖 اردو ترجمہ:\n${this.currentAyatData.ur}\n\nEnglish:\n"${this.currentAyatData.en}"\n\n📌 حوالہ: ${this.currentAyatData.ref}\n\nنورِ ہدایت - Islamic Lifestyle Dashboard`;
        this.copyToClipboard(text, "آیتِ مبارکہ کاپی کر لی گئی ہے!");
      });
    }
    if (btnShare && !btnShare._bound) {
      btnShare._bound = true;
      btnShare.addEventListener("click", () => {
        if (!this.currentAyatData) return;
        const text = `✨ آیتِ مبارکہ (Ayat of the Day) ✨\n\n${this.currentAyatData.ar}\n\n📖 اردو ترجمہ:\n${this.currentAyatData.ur}\n\nEnglish:\n"${this.currentAyatData.en}"\n\n📌 حوالہ: ${this.currentAyatData.ref}\n\nنورِ ہدایت - Islamic Lifestyle Dashboard`;
        this.shareViaIntent("آیتِ مبارکہ (Daily Quranic Ayah)", text);
      });
    }
  },

  // =========================================================================
  // DYNAMIC DAILY HADITH (Authentic Static JSON + Midnight Cache)
  // =========================================================================
  initDailyHadith(forceRefresh = false) {
    const arabicEl = document.getElementById("dailyHadithArabic");
    const urduEl = document.getElementById("dailyHadithUrdu");
    const enEl = document.getElementById("dailyHadithEn");
    const refEl = document.getElementById("dailyHadithRefBadge");

    if (!arabicEl) return;

    const todayKey = this.getTodayDateKey();
    const cacheKey = "noor_daily_hadith_cache";

    if (!forceRefresh) {
      try {
        const cachedRaw = localStorage.getItem(cacheKey);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (cached && cached.date === todayKey && cached.data) {
            this.renderHadithData(cached.data);
            this.bindHadithEvents();
            return;
          }
        }
      } catch (e) {
        console.warn("Could not read Hadith cache:", e);
      }
    }

    const hadiths = this.dailyWisdom.hadiths;
    let selectedHadith;

    if (forceRefresh) {
      const randIdx = Math.floor(Math.random() * hadiths.length);
      selectedHadith = hadiths[randIdx];
    } else {
      const d = new Date();
      const startOfYear = new Date(d.getFullYear(), 0, 0);
      const diff = d - startOfYear;
      const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hadithIndex = dayOfYear % hadiths.length;
      selectedHadith = hadiths[hadithIndex];
    }

    const hadithData = {
      ar: selectedHadith.ar,
      ur: selectedHadith.ur,
      en: selectedHadith.en,
      ref: selectedHadith.ref,
      refEn: selectedHadith.refEn
    };

    localStorage.setItem(cacheKey, JSON.stringify({
      date: todayKey,
      data: hadithData
    }));

    this.renderHadithData(hadithData);
    this.bindHadithEvents();
  },

  renderHadithData(data) {
    const arabicEl = document.getElementById("dailyHadithArabic");
    const urduEl = document.getElementById("dailyHadithUrdu");
    const enEl = document.getElementById("dailyHadithEn");
    const refEl = document.getElementById("dailyHadithRefBadge");

    if (arabicEl) arabicEl.textContent = data.ar;
    if (urduEl) urduEl.textContent = data.ur;
    if (enEl) enEl.textContent = `"${data.en}"`;
    if (refEl) refEl.textContent = data.ref;
    this.currentHadithData = data;
  },

  bindHadithEvents() {
    const btnNext = document.getElementById("btnNextHadith");
    const btnCopy = document.getElementById("btnCopyHadith");
    const btnShare = document.getElementById("btnShareHadith");

    if (btnNext && !btnNext._bound) {
      btnNext._bound = true;
      btnNext.addEventListener("click", () => this.initDailyHadith(true));
    }
    if (btnCopy && !btnCopy._bound) {
      btnCopy._bound = true;
      btnCopy.addEventListener("click", () => {
        if (!this.currentHadithData) return;
        const text = `✨ حدیثِ مبارکہ (Hadith of the Day) ✨\n\n${this.currentHadithData.ar}\n\n📖 اردو ترجمہ:\n${this.currentHadithData.ur}\n\nEnglish:\n"${this.currentHadithData.en}"\n\n📌 حوالہ: ${this.currentHadithData.ref}\n\nنورِ ہدایت - Islamic Lifestyle Dashboard`;
        this.copyToClipboard(text, "حدیثِ نبوی ﷺ کاپی کر لی گئی ہے!");
      });
    }
    if (btnShare && !btnShare._bound) {
      btnShare._bound = true;
      btnShare.addEventListener("click", () => {
        if (!this.currentHadithData) return;
        const text = `✨ حدیثِ مبارکہ (Hadith of the Day) ✨\n\n${this.currentHadithData.ar}\n\n📖 اردو ترجمہ:\n${this.currentHadithData.ur}\n\nEnglish:\n"${this.currentHadithData.en}"\n\n📌 حوالہ: ${this.currentHadithData.ref}\n\nنورِ ہدایت - Islamic Lifestyle Dashboard`;
        this.shareViaIntent("حدیثِ مبارکہ (Daily Sahih Hadith)", text);
      });
    }
  },

  // =========================================================================
  // DAILY HABIT TRACKER (LocalStorage + 12:00 AM Midnight Auto-Reset)
  // =========================================================================
  initHabitTracker() {
    this.loadHabitData();
    this.renderHabitTracker();
    this.scheduleMidnightReset();

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.checkAndResetHabitsOnDateChange();
      }
    });
    window.addEventListener("focus", () => this.checkAndResetHabitsOnDateChange());
    setInterval(() => this.checkAndResetHabitsOnDateChange(), 30000);
  },

  loadHabitData() {
    const todayKey = this.getTodayDateKey();
    const cacheKey = "noor_daily_habits";

    try {
      const raw = localStorage.getItem(cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.date === todayKey) {
          this.habitState = parsed;
          return;
        } else if (parsed && parsed.date !== todayKey) {
          this.handleDateRollover(parsed, todayKey);
          return;
        }
      }
    } catch (e) {
      console.warn("Error parsing habit data:", e);
    }

    this.habitState = {
      date: todayKey,
      habits: {
        fajr: false,
        zuhr: false,
        asr: false,
        maghrib: false,
        isha: false,
        mulk: false,
        durood: false
      },
      streak: 0,
      lastCompletedDate: null
    };
    this.saveHabitData();
  },

  handleDateRollover(previousState, todayKey) {
    const prevHabits = previousState.habits || {};
    const allCompleted = this.habitsList.every(h => prevHabits[h.id] === true);

    let streak = previousState.streak || 0;
    if (allCompleted) {
      streak += 1;
    }

    this.habitState = {
      date: todayKey,
      habits: {
        fajr: false,
        zuhr: false,
        asr: false,
        maghrib: false,
        isha: false,
        mulk: false,
        durood: false
      },
      streak: streak,
      lastCompletedDate: allCompleted ? previousState.date : previousState.lastCompletedDate
    };
    this.saveHabitData();
  },

  saveHabitData() {
    try {
      localStorage.setItem("noor_daily_habits", JSON.stringify(this.habitState));
    } catch (e) {
      console.warn("Could not save habit data:", e);
    }
  },

  checkAndResetHabitsOnDateChange() {
    const todayKey = this.getTodayDateKey();
    if (this.habitState && this.habitState.date !== todayKey) {
      this.handleDateRollover(this.habitState, todayKey);
      this.renderHabitTracker();
      this.initDailyAyat(false);
      this.initDailyHadith(false);
    }
  },

  scheduleMidnightReset() {
    const now = new Date();
    const tomorrowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
    const msUntilMidnight = tomorrowMidnight.getTime() - now.getTime();

    if (this._midnightTimer) clearTimeout(this._midnightTimer);

    this._midnightTimer = setTimeout(() => {
      this.checkAndResetHabitsOnDateChange();
      this.scheduleMidnightReset();
      this.showWisdomToast("صبح بخیر! معمولات کا نیا دن شروع ہو گیا ہے۔ (Reset for New Day)");
    }, Math.max(msUntilMidnight, 1000));
  },

  toggleHabit(habitId) {
    if (!this.habitState || !this.habitState.habits) {
      this.loadHabitData();
    }

    const currentVal = !!this.habitState.habits[habitId];
    this.habitState.habits[habitId] = !currentVal;
    this.saveHabitData();

    if (navigator.vibrate) {
      navigator.vibrate(40);
    }

    this.renderHabitTracker();

    const completedCount = this.habitsList.filter(h => this.habitState.habits[h.id]).length;
    if (completedCount === this.habitsList.length) {
      this.showWisdomToast("ماشاءاللہ! آج کے تمام معمولات مکمل ہو گئے۔ اللہ قبول فرمائے! 🎉");
    }
  },

  renderHabitTracker() {
    if (!this.habitState) this.loadHabitData();

    const habits = this.habitState.habits || {};
    const total = this.habitsList.length;
    const completedCount = this.habitsList.filter(h => habits[h.id]).length;
    const percent = Math.round((completedCount / total) * 100);
    const streak = this.habitState.streak || 0;

    const percentEls = [
      document.getElementById("dashHabitPercentage"),
      document.getElementById("offcanvasHabitPercentage"),
      document.getElementById("habitProgressPercent"),
      document.getElementById("habitOffcanvasPercent")
    ];
    const fractionEls = [
      document.getElementById("dashHabitCompletedText"),
      document.getElementById("offcanvasHabitRatio"),
      document.getElementById("habitProgressFraction"),
      document.getElementById("habitOffcanvasFraction")
    ];
    const barEls = [
      document.getElementById("dashHabitBar"),
      document.getElementById("offcanvasProgressBar"),
      document.getElementById("habitProgressBar"),
      document.getElementById("habitOffcanvasProgressBar")
    ];
    const streakEls = [
      document.getElementById("dashStreakCount"),
      document.getElementById("offcanvasStreakCount"),
      document.getElementById("habitStreakCount"),
      document.getElementById("habitOffcanvasStreak")
    ];

    percentEls.forEach(el => { if (el) el.textContent = `${percent}% Completed`; });
    fractionEls.forEach(el => { 
      if (el) {
        if (el.id === "offcanvasHabitRatio") {
          el.textContent = `${completedCount} of ${total} Completed`;
        } else if (el.id === "dashHabitCompletedText") {
          el.textContent = `${completedCount} of ${total} habits completed today`;
        } else {
          el.textContent = `${completedCount}/${total} مکمل`;
        }
      }
    });
    barEls.forEach(el => {
      if (el) {
        el.style.width = `${percent}%`;
        el.setAttribute("aria-valuenow", percent);
      }
    });
    streakEls.forEach(el => { if (el) el.textContent = `${streak}`; });

    const dashContainer = document.getElementById("dashHabitsList");
    if (dashContainer) {
      dashContainer.innerHTML = this.habitsList.map(h => {
        const isDone = !!habits[h.id];
        return `
          <div class="habit-card-item ${isDone ? 'completed' : ''}" data-habit-id="${h.id}">
            <div class="habit-custom-checkbox">
              <i class="fas fa-check"></i>
            </div>
            <div class="habit-item-info">
              <div class="habit-item-name">${h.name}</div>
              <div class="habit-item-sub">${h.ur}</div>
            </div>
            <span class="habit-item-badge"><i class="fas ${h.icon} me-1"></i>${h.category}</span>
          </div>
        `;
      }).join("");

      dashContainer.querySelectorAll(".habit-card-item").forEach(item => {
        item.addEventListener("click", () => {
          const habitId = item.getAttribute("data-habit-id");
          this.toggleHabit(habitId);
        });
      });
    }

    const offcanvasContainer = document.getElementById("offcanvasHabitsList");
    if (offcanvasContainer) {
      offcanvasContainer.innerHTML = this.habitsList.map(h => {
        const isDone = !!habits[h.id];
        return `
          <div class="habit-item-row ${isDone ? 'completed' : ''}" data-habit-id="${h.id}">
            <div class="habit-custom-checkbox">
              <i class="fas fa-check"></i>
            </div>
            <div class="habit-item-info">
              <div class="habit-item-name">${h.name}</div>
              <div class="habit-item-sub">${h.ur}</div>
            </div>
            <span class="habit-item-badge"><i class="fas ${h.icon} me-1"></i>${h.category}</span>
          </div>
        `;
      }).join("");

      offcanvasContainer.querySelectorAll(".habit-item-row").forEach(item => {
        item.addEventListener("click", () => {
          const habitId = item.getAttribute("data-habit-id");
          this.toggleHabit(habitId);
        });
      });
    }
  },

  // =========================================================================
  // UTILITIES: CLIPBOARD & SHARE INTENTS
  // =========================================================================
  copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.showWisdomToast(successMsg || "کاپی ہو گیا ہے! (Copied to clipboard)");
      }).catch(() => {
        this.fallbackCopyText(text, successMsg);
      });
    } else {
      this.fallbackCopyText(text, successMsg);
    }
  },

  fallbackCopyText(text, successMsg) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      this.showWisdomToast(successMsg || "کاپی ہو گیا ہے! (Copied to clipboard)");
    } catch (e) {
      this.showWisdomToast("Copy failed, please copy manually.");
    }
    document.body.removeChild(textarea);
  },

  shareViaIntent(title, text) {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: text
      }).catch(err => console.log("Share cancelled:", err));
    } else {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    }
  },

  showWisdomToast(message, type = 'info') {
    let toast = document.getElementById("wisdomToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "wisdomToast";
      toast.className = "wisdom-toast";
      document.body.appendChild(toast);
    }
    const icon = type === 'warning'
      ? '<i class="fas fa-triangle-exclamation text-warning fs-4"></i>'
      : '<i class="fas fa-check-circle text-warning fs-5"></i>';

    toast.className = `wisdom-toast ${type}`;
    toast.innerHTML = `${icon} <span class="wisdom-toast-content font-urdu">${message}</span>`;
    toast.classList.add("show");

    if (this._wisdomToastTimer) {
      clearTimeout(this._wisdomToastTimer);
    }
    const duration = type === 'warning' ? 5500 : 3200;
    this._wisdomToastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  },

  // =========================================================================
  // QIBLA COMPASS & SPHERICAL TRIGONOMETRY
  // =========================================================================
  updateQiblaBearing(lat, lng) {
    this.userCoords = { lat, lng };
    const kaabaLat = 21.422487;
    const kaabaLng = 39.826206;

    const phi1 = (lat * Math.PI) / 180;
    const phi2 = (kaabaLat * Math.PI) / 180;
    const deltaLambda = ((kaabaLng - lng) * Math.PI) / 180;

    const y = Math.sin(deltaLambda) * Math.cos(phi2);
    const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);

    let qiblaBearing = (Math.atan2(y, x) * 180) / Math.PI;
    qiblaBearing = (qiblaBearing + 360) % 360;

    this.calculatedQiblaBearing = qiblaBearing;
    const bearingRounded = Math.round(qiblaBearing * 10) / 10;

    const R = 6371;
    const dLat = phi2 - phi1;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = Math.round(R * c);

    const cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const cardIndex = Math.round(qiblaBearing / 22.5) % 16;
    const cardinalDir = cardinals[cardIndex];

    const bearingEl = document.getElementById("qiblaBearingDisplay");
    const coordsEl = document.getElementById("qiblaUserCoords");
    const needleEl = document.getElementById("qiblaCompassNeedle");

    if (bearingEl) {
      bearingEl.textContent = `${bearingRounded}° ${cardinalDir} to Kaaba`;
    }
    if (coordsEl) {
      coordsEl.textContent = `User: ${lat.toFixed(3)}° N, ${lng.toFixed(3)}° E (${distanceKm.toLocaleString()} km to Makkah)`;
    }

    if (needleEl && !this._deviceOrientationActive) {
      needleEl.style.transform = `rotate(${Math.round(qiblaBearing)}deg)`;
    }
  },

  initQiblaCompass() {
    this.updateQiblaBearing(this.userCoords.lat, this.userCoords.lng);

    const needleEl = document.getElementById("qiblaCompassNeedle");
    const wrapperEl = document.getElementById("compassOuterWrapper");
    const statusEl = document.getElementById("qiblaAlignStatus");
    const sensorAngleEl = document.getElementById("qiblaSensorAngle");
    const btnEnable = document.getElementById("btnEnableCompassSensors");

    const handleOrientation = (e) => {
      let compassHeading = null;

      if (typeof e.webkitCompassHeading !== "undefined") {
        compassHeading = e.webkitCompassHeading;
      } else if (e.alpha !== null) {
        compassHeading = (360 - e.alpha) % 360;
      }

      if (compassHeading !== null) {
        this._deviceOrientationActive = true;
        const qiblaAngle = this.calculatedQiblaBearing || 260.5;
        const needleAngle = (qiblaAngle - compassHeading + 360) % 360;

        if (needleEl) {
          needleEl.style.transform = `rotate(${Math.round(needleAngle)}deg)`;
        }
        if (sensorAngleEl) {
          sensorAngleEl.textContent = `${Math.round(compassHeading)}° Heading`;
        }

        const diff = Math.abs(needleAngle > 180 ? 360 - needleAngle : needleAngle);
        if (diff <= 6) {
          if (wrapperEl) wrapperEl.classList.add("aligned-to-qibla");
          if (statusEl) {
            statusEl.className = "qibla-align-badge aligned mb-3";
            statusEl.innerHTML = '<i class="fas fa-check-circle me-1 text-success"></i> <strong>رخ بالکل قبلہ کی جانب ہے! (Facing Kaaba)</strong>';
          }
          if (!this._hasVibrated && navigator.vibrate) {
            navigator.vibrate(60);
            this._hasVibrated = true;
          }
        } else {
          this._hasVibrated = false;
          if (wrapperEl) wrapperEl.classList.remove("aligned-to-qibla");
          if (statusEl) {
            statusEl.className = "qibla-align-badge mb-3";
            const turnDir = needleAngle > 180 ? "بائیں (Turn Left)" : "دائیں (Turn Right)";
            statusEl.innerHTML = `<i class="fas fa-compass me-1 text-teal"></i> ${Math.round(diff)}° ${turnDir} گھومیں`;
          }
        }
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientationabsolute", handleOrientation, true);
      window.addEventListener("deviceorientation", handleOrientation, true);

      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        if (btnEnable) {
          btnEnable.style.display = "inline-flex";
          btnEnable.addEventListener("click", async () => {
            try {
              const res = await DeviceOrientationEvent.requestPermission();
              if (res === "granted") {
                window.addEventListener("deviceorientation", handleOrientation, true);
                btnEnable.style.display = "none";
                this.showWisdomToast("کمپاس سنسر فعال ہو گیا ہے!");
              }
            } catch (err) {
              console.warn("DeviceOrientation error:", err);
            }
          });
        }
      } else {
        if (btnEnable) btnEnable.style.display = "none";
      }
    } else {
      if (btnEnable) btnEnable.style.display = "none";
    }
  },

  // =========================================================================
  // MODAL TRIGGER BINDINGS
  // =========================================================================
  bindCardTriggers() {
    const cardMap = {
      cardAllahNames: "modalAllahNames",
      cardTilawat: "modalTilawat",
      cardQuranRead: "modalQuranRead",
      cardTasbeeh: "tasbeehModal",
      cardQibla: "modalQibla",
      cardDuas: "modalDuas",
      cardProphetNames: "modalProphetNames",
      cardStories: "modalStories",
      cardNamazGuide: "modalNamazGuide",
      btnHeroNamazGuide: "modalNamazGuide"
    };

    Object.keys(cardMap).forEach(cardId => {
      const cardEl = document.getElementById(cardId);
      const modalId = cardMap[cardId];
      if (cardEl && modalId) {
        cardEl.addEventListener("click", () => {
          // Re-render modal content on click to ensure it is always fresh and populated
          if (modalId === "modalNamazGuide") this.renderNamazGuide();
          if (modalId === "modalStories") this.renderStories();
          if (modalId === "modalDuas") this.renderMasnoonDuas();
          if (modalId === "modalAllahNames" && !this._isSequencePlaying) this.renderAllahNames();
          if (modalId === "modalProphetNames" && !this._isSequencePlaying) this.renderProphetNames();
          if (modalId === "modalTilawat") this.renderTilawat();
          if (modalId === "modalQuranRead") this.renderQuranReader();

          const modalEl = document.getElementById(modalId);
          if (modalEl && window.bootstrap) {
            const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
            bsModal.show();
          }
        });
      }
    });

    // Auto-stop audio sequence when modal is closed
    const modalAllah = document.getElementById("modalAllahNames");
    if (modalAllah && !modalAllah._boundDismiss) {
      modalAllah._boundDismiss = true;
      modalAllah.addEventListener("hidden.bs.modal", () => {
        if (this._isSequencePlaying && this._sequenceType === 'allah') {
          this.stopAllNames(false);
        }
      });
    }

    const modalProphet = document.getElementById("modalProphetNames");
    if (modalProphet && !modalProphet._boundDismiss) {
      modalProphet._boundDismiss = true;
      modalProphet.addEventListener("hidden.bs.modal", () => {
        if (this._isSequencePlaying && this._sequenceType === 'prophet') {
          this.stopAllNames(false);
        }
      });
    }
  },

  // =========================================================================
  // MASTER BOOT INITIALIZATION
  // =========================================================================
  init() {
    this.bindCardTriggers();
    this.renderAllahNames();
    this.renderProphetNames();
    this.renderTilawat();
    this.renderQuranReader();
    this.renderMasnoonDuas();
    this.renderStories();
    this.renderNamazGuide();
    this.initDailyAyat();
    this.initDailyHadith();
    this.initHabitTracker();
    this.initQiblaCompass();

    // Cache speech synthesis voices when loaded
    if ('speechSynthesis' in window) {
      this._cachedVoices = window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this._cachedVoices = window.speechSynthesis.getVoices();
      };
    }
  }
};

// Expose on global window scope
window.DashboardModules = DashboardModules;
window.playSingleName = function(text, btn) {
  DashboardModules.playSingleName(text, btn);
};
window.playAllNames = function(type) {
  DashboardModules.playAllNames(type);
};
window.stopAllNames = function() {
  DashboardModules.stopAllNames(true);
};
window.hasArabicVoice = function() {
  return DashboardModules.hasArabicVoice();
};
