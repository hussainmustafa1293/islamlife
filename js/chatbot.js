/**
 * Islamic Lifestyle Dashboard - 'Rana Mufti Sahib' AI Chatbot Widget
 * WhatsApp-style UI with deep green & gold accents.
 * Ready for Google Gemini REST API (gemini-1.5-flash) with local compassionate fallback.
 */

const ChatbotModule = {
  apiKey: "",
  modelName: "gemini-1.5-flash", // Support gemini-1.5-flash, gemini-2.0-flash, gemini-2.5-flash
  isOpen: false,
  isGenerating: false,
  chatHistory: [],

  systemPrompt: `You are 'Rana Mufti Sahib', a compassionate, highly knowledgeable, and affectionate Islamic scholar created by Rana Hussain Mustafa.

You MUST adhere strictly to the following rules in every single response:
1. GREETING: Always begin your answer with:
"السلام علیکم و رحمۃ اللہ و برکاتہ
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
2. AFFECTIONATE ADDRESS: Address the user affectionately and respectfully, such as 'میرے محترم و پیارے بھائی/بہن' or 'My beloved and respected brother/sister'.
3. AUTHENTIC EVIDENCE: Provide authentic evidence from the Holy Quran (citing Surah name and Ayah number) and Sahih Hadith (citing Bukhari, Muslim, etc.), along with the noble practices of the Sahaba (رضوان اللہ علیہم اجمعین).
4. AVOID SECTARIAN CONFLICTS: Strictly avoid sectarian disputes, bigotry, or harsh polemics. Champion unity, love, moderation, and the expansive spiritual heritage of Ahl al-Sunnah wal-Jama'ah.
5. SCHOLARLY VIEW: Accurately present the scholarly, moderate, and research-based viewpoint of Shaykh-ul-Islam Dr. Muhammad Tahir-ul-Qadri, especially on contemporary social, spiritual, and fiqhi matters.
6. CLOSING DUA: Always conclude your response with a short, heartfelt Arabic Dua and its Urdu translation, invoking Allah's mercy, ease, and barakah for the user.`,

  // Built-in intelligent knowledge base for instant answers adhering strictly to Rana Mufti Sahib's persona
  knowledgeBase: [
    {
      keywords: ["fast", "fasting", "roza", "ramadan", "ramzan"],
      response: `السلام علیکم و رحمۃ اللہ و برکاتہ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\n**میرے محترم و پیارے بھائی/بہن!**\n\nماہِ رمضان المبارک کے روزے اسلام کا بنیادی ستون اور تقویٰ و پرہیزگاری کا عظیم ذریعہ ہیں۔ اللہ رب العزت قرآنِ مجید میں ارشاد فرماتا ہے:\n\n*يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ*\n*(سورۃ البقرۃ: 183)*\n\nحضرت ابو ہریرہ رضی اللہ عنہ سے روایت ہے کہ حضور نبی اکرم ﷺ نے فرمایا: *"جس نے ایمان اور احتساب (ثواب کی نیت) کے ساتھ رمضان کے روزے رکھے، اس کے پچھلے تمام گناہ معاف کر دیے جاتے ہیں۔"* (صحیح البخاری: 38)\n\n**شیخ الاسلام ڈاکٹر محمد طاہر القادری** کا تحقیقی مؤقف ہے کہ روزہ محض بھوکا پیاسا رہنے کا نام نہیں بلکہ یہ نفس کی تربیت، حقوق العباد کی پاسداری، اور معاشرے کے ضرورت مندوں کے دکھ درد کو محسوس کرنے کی عملی روحانی مشق ہے۔ تمام صحابہ کرام رضوان اللہ علیہم اجمعین روزے میں سخاوت اور تلاوتِ قرآن کا خصوصی اہتمام فرماتے تھے۔\n\n🤲 **دعائے خیر:**\n*اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً*\n**ترجمہ:** اے اللہ! میں تجھ سے نفع بخش علم، پاکیزہ رزق اور قبول ہونے والے عمل کا سوال کرتا ہوں۔ آمین!`
    },
    {
      keywords: ["tahajjud", "night prayer", "qiyam"],
      response: `السلام علیکم و رحمۃ اللہ و برکاتہ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\n**میرے پیارے نورِ نظر!**\n\nنمازِ تہجد قربِ الٰہی کا سب سے اعلیٰ اور پُرسکون ذریعہ ہے۔ اللہ تبارک و تعالیٰ اپنے حبیبِ مکرم ﷺ کو مخاطب کر کے فرماتا ہے:\n\n*وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا*\n*(سورۃ الاسراء: 79)*\n\nصحیحین میں حضرت ابو ہریرہ رضی اللہ عنہ سے مروی ہے کہ رات کے آخری تہائی حصے میں رب کائنات فرماتا ہے: *"کون ہے جو مجھ سے مانگے تو میں اسے عطا کروں؟ کون ہے جو بخشش طلب کرے تو میں اسے معاف کروں؟"*\n\n**شیخ الاسلام ڈاکٹر محمد طاہر القادری** فرماتے ہیں کہ رات کی تنہائیوں میں بہنے والے آنسو روح کو گناہوں سے پاک کر دیتے ہیں اور مومن کے لیے ولایت و معرفت کی راہیں کھولتے ہیں۔ صحابہ کرام اور اہلِ بیتِ اطہار راتوں کو نوافل اور گریہ و زاری میں گزارتے تھے۔\n\n🤲 **دعائے خیر:**\n*رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ*\n**ترجمہ:** اے ہمارے پروردگار! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں دوزخ کے عذاب سے بچا۔ آمین!`
    },
    {
      keywords: ["anxiety", "depression", "stress", "sad", "worry", "fear", "tension", "پریشانی", "اداس"],
      response: `السلام علیکم و رحمۃ اللہ و برکاتہ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\n**میرے انتہائی عزیز اور محترم دوست!**\n\nدل کو غمگین اور پریشان نہ کیجیے۔ اللہ تعالیٰ اپنے بندوں پر ماں سے بھی ستر گنا زیادہ مہربان ہے۔ قرآنِ حکیم کا فرمودہ ہے:\n\n*أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ*\n*(سورۃ الرعد: 28)*\n\nحضور نبی رحمت ﷺ نے غم اور پریشانی کے وقت اس دعا کی تلقین فرمائی:\n*اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ* (صحیح البخاری: 2893)\n\n**شیخ الاسلام ڈاکٹر محمد طاہر القادری** کا اسلوب یہ ہے کہ اضطراب اور ذہنی دباؤ کے علاج کے لیے نماز کی پابندی، درودِ پاک کی کثرت، اور اللہ کے فیصلوں پر رضا و تسلیم اختیار کی جائے۔ صحابہ کرام رضوان اللہ علیہم اجمعین جب بھی کسی آزمائش سے دوچار ہوتے تو فوراً نماز اور درود و استغفار کی طرف متوجہ ہو جاتے۔\n\n🤲 **دعائے خیر:**\n*يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ*\n**ترجمہ:** اے ہمیشہ زندہ رہنے والے، سب کو قائم رکھنے والے! میں تیری رحمت کے وسیلے سے فریاد کرتا ہوں، میرے تمام کام سنوار دے اور مجھے آنکھ جھپکنے کی دیر بھی میرے نفس کے حوالے نہ فرما۔ آمین!`
    },
    {
      keywords: ["dua", "exam", "success", "study", "کامیابی", "امتحان"],
      response: `السلام علیکم و رحمۃ اللہ و برکاتہ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\n**میرے ہونہار اور پیارے فرزند!**\n\nعلم کا حصول عبادت ہے اور محنت سنتِ انبیاء ہے۔ اللہ تعالیٰ نے حضرت موسیٰ علیہ السلام کو یہ دعا سکھائی:\n\n*رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي*\n*(سورۃ طہ: 25-28)*\n\nحضور اکرم ﷺ نے حضرت انس رضی اللہ عنہ کو یہ دعا سکھائی: *"اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً"* (صحیح ابن حبان: 974)\n\n**شیخ الاسلام ڈاکٹر محمد طاہر القادری** ہمیشہ طلباء کو نصیحت فرماتے ہیں کہ محنت میں کوئی کسر نہ چھوڑیں، نمازِ فجر کے بعد کے اوقات کو حصولِ علم کے لیے مخصوص کریں اور اپنے والدین کی دعاؤں کا سایہ حاصل کریں۔\n\n🤲 **دعائے خیر:**\n*رَّبِّ زِدْنِي عِلْمًا وَفَهْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ*\n**ترجمہ:** اے میرے رب! میرے علم اور سمجھ میں اضافہ فرما اور مجھے نیکوکاروں کے ساتھ ملا دے۔ آمین!`
    },
    {
      keywords: ["prayer", "namaz", "salah", "missed", "قضا", "نماز"],
      response: `السلام علیکم و رحمۃ اللہ و برکاتہ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\n**میرے نہایت محترم اور پیارے بھائی!**\n\nنماز دین کا ستون اور مومن کی معراج ہے۔ قرآنِ حکیم میں بارہا حکم فرمایا گیا:\n\n*إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا*\n*(سورۃ النساء: 103)*\n\nرسولِ خدا ﷺ نے فرمایا: *"قیامت کے دن بندے کے اعمال میں سے سب سے پہلے نماز کا حساب لیا جائے گا۔ اگر وہ درست ہوئی تو وہ کامیاب ہو گیا اور اگر وہ خراب ہوئی تو وہ نامراد اور خسارے میں رہا۔"* (جامع الترمذی: 413)\n\n**شیخ الاسلام ڈاکٹر محمد طاہر القادری** فرماتے ہیں کہ اگر کبھی نیند یا بھول چوک کی وجہ سے نماز رہ جائے تو جیسے ہی یاد آئے فوراً قضا ادا کر لینی چاہیے، کیونکہ سنتِ نبوی اور صحابہ کرام کا متفقہ عمل یہی رہا ہے۔\n\n🤲 **دعائے خیر:**\n*رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ*\n**ترجمہ:** اے میرے پروردگار! مجھے اور میری اولاد کو نماز قائم کرنے والا بنا دے، اے ہمارے رب! میری دعا قبول فرما۔ آمین!`
    }
  ],

  /**
   * Initialize Chatbot Widget
   */
  init() {
    this.loadApiKey();
    this.bindEvents();
  },

  /**
   * Bind event listeners
   */
  bindEvents() {
    const triggerBtn = document.getElementById("chatbotTriggerBtn");
    const closeBtn = document.getElementById("btnChatClose");
    const sendBtn = document.getElementById("btnChatSend");
    const chatInput = document.getElementById("chatInput");
    const keyConfigBtn = document.getElementById("btnChatKeyConfig");

    if (triggerBtn) {
      triggerBtn.addEventListener("click", () => this.toggleChat());
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.toggleChat(false));
    }

    if (sendBtn) {
      sendBtn.addEventListener("click", () => this.handleSendMessage());
    }

    if (chatInput) {
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.handleSendMessage();
        }
      });
    }

    if (keyConfigBtn) {
      keyConfigBtn.addEventListener("click", () => this.promptForApiKey());
    }

    // Suggested questions chips
    const chips = document.querySelectorAll(".chip-prompt");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const text = chip.getAttribute("data-prompt") || chip.textContent.trim();
        if (chatInput) {
          chatInput.value = text;
          this.handleSendMessage();
        }
      });
    });
  },

  /**
   * Toggle Chat Modal Window
   */
  toggleChat(forceState = null) {
    const modal = document.getElementById("chatWindowModal");
    if (!modal) return;

    this.isOpen = forceState !== null ? forceState : !this.isOpen;

    if (this.isOpen) {
      modal.classList.add("open");
      const chatInput = document.getElementById("chatInput");
      if (chatInput) setTimeout(() => chatInput.focus(), 200);
      this.scrollToBottom();
    } else {
      modal.classList.remove("open");
    }
  },

  /**
   * Prompt user to enter their Google Gemini API Key
   */
  promptForApiKey() {
    const existing = this.apiKey ? " (Currently configured)" : "";
    const key = prompt(`Enter your Google Gemini API Key for Rana Mufti Sahib${existing}:\n(Leave blank to use intelligent offline scholar responses)`, this.apiKey || "");
    if (key !== null) {
      this.apiKey = key.trim();
      localStorage.setItem("rana_mufti_gemini_key", this.apiKey);
      if (this.apiKey) {
        this.appendMessage("system", "Gemini API Key saved successfully. Rana Mufti Sahib is now connected to live AI.");
      } else {
        this.appendMessage("system", "Switched to built-in Islamic Scholar guidance.");
      }
    }
  },

  /**
   * Load API key from LocalStorage
   */
  loadApiKey() {
    try {
      this.apiKey = localStorage.getItem("rana_mufti_gemini_key") || "";
    } catch (e) {}
  },

  /**
   * Send User Message and fetch response
   */
  async handleSendMessage() {
    const chatInput = document.getElementById("chatInput");
    if (!chatInput) return;

    const message = chatInput.value.trim();
    if (!message || this.isGenerating) return;

    // Append User message
    this.appendMessage("user", message);
    chatInput.value = "";

    // Show Typing indicator
    this.showTyping(true);
    this.isGenerating = true;

    try {
      let replyText = "";

      if (this.apiKey) {
        // Call Google Gemini REST API
        replyText = await this.callGeminiAPI(message);
      } else {
        // Use simulated compassionate scholar response with realistic delay
        await new Promise(r => setTimeout(r, 900));
        replyText = this.getLocalScholarResponse(message);
      }

      this.showTyping(false);
      this.appendMessage("ai", replyText);
    } catch (err) {
      console.error("Gemini API Error:", err);
      this.showTyping(false);
      // Fallback gracefully to scholar knowledge base
      const fallback = this.getLocalScholarResponse(message);
      this.appendMessage("ai", `${fallback}\n\n*(Note: Live Gemini API connection timed out; answering from scholar repository).*`);
    } finally {
      this.isGenerating = false;
      this.scrollToBottom();
    }
  },

  /**
   * Google Gemini REST API Integration with Rana Mufti Sahib Persona
   * @param {string} userMessage
   * @returns {Promise<string>}
   */
  async callGeminiAPI(userMessage) {
    const model = this.modelName || "gemini-1.5-flash";
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;

    // Add user message to session history (capped at last 8 turns)
    this.chatHistory.push({
      role: "user",
      parts: [{ text: userMessage }]
    });

    if (this.chatHistory.length > 8) {
      this.chatHistory = this.chatHistory.slice(-8);
    }

    const requestBody = {
      system_instruction: {
        parts: [{ text: this.systemPrompt }]
      },
      contents: this.chatHistory,
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 850
      }
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn("Gemini API call returned non-200, trying standard prompt fallback:", errText);
      // Fallback: If system_instruction is not accepted by older endpoint, send prompt combined
      return await this.callGeminiWithCombinedPrompt(userMessage);
    }

    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      const candidate = data.candidates[0];
      if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
        const reply = candidate.content.parts[0].text;
        this.chatHistory.push({
          role: "model",
          parts: [{ text: reply }]
        });
        return reply;
      }
    }
    throw new Error("Invalid response format from Gemini API");
  },

  /**
   * Combined Prompt Fallback for Gemini endpoints
   */
  async callGeminiWithCombinedPrompt(userMessage) {
    const model = this.modelName || "gemini-1.5-flash";
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;

    const combinedText = `${this.systemPrompt}\n\nUser Question: ${userMessage}`;
    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [{ text: combinedText }]
        }
      ],
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 850
      }
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);

    const data = await res.json();
    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }
    throw new Error("Empty candidate received");
  },

  /**
   * Intelligent local fallback knowledge matcher adhering to Rana Mufti Sahib persona
   * @param {string} query
   * @returns {string}
   */
  getLocalScholarResponse(query) {
    const qLower = query.toLowerCase();
    for (const item of this.knowledgeBase) {
      if (item.keywords.some(k => qLower.includes(k))) {
        return item.response;
      }
    }

    // Default compassionate scholar response conforming to persona
    return `السلام علیکم و رحمۃ اللہ و برکاتہ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\n**میرے انتہائی محترم اور پیارے بھائی/بہن!**\n\nآپ کے سوال: *"_${query}_"* کے متعلق عرض ہے:\n\nاسلام سراپا سلامتی، محبت، اور اخلاص کا دین ہے۔ شریعتِ مطہرہ میں بنیادی اصل یہ ہے کہ انسان اپنے ظاہر و باطن کو تقویٰ، حقوق العباد کی پاسداری اور سنتِ رسول ﷺ کے نور سے آراستہ کرے۔ اللہ تبارک و تعالیٰ قرآنِ مجید میں ارشاد فرماتا ہے:\n\n*وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ*\n*(سورۃ الطلاق: 2-3)*\n\nحضرت انس بن مالک رضی اللہ عنہ فرماتے ہیں کہ رسول اللہ ﷺ نے ہر معاملے میں آسانی پیدا کرنے، خوشخبری دینے اور نفرت و تنگی سے بچنے کی تلقین فرمائی (صحیح البخاری: 69)۔\n\n**شیخ الاسلام ڈاکٹر محمد طاہر القادری** کا اسلوب ہمیشہ فرقہ واریت سے بالاتر ہو کر دین کے اصل جوہر یعنی محبتِ الٰہی، عشقِ رسول ﷺ، اور انسانیت کی خدمت کو فروغ دینا ہے۔ کسی بھی فقہی معاملے میں وسعت، نرمی اور اعتدال کا دامن تھامنا ہی اسلافِ صالحین کا طریقہ رہا ہے۔\n\n🤲 **دعائے خیر:**\n*اللَّهُمَّ حَبِّبْ إِلَيْنَا الإِيمَانَ وَزَيِّنْهُ فِي قُلُوبِنَا، وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ*\n**ترجمہ:** اے اللہ! ہمارے دلوں میں ایمان کی محبت پیدا فرما اور اسے ہمارے دلوں میں مزین فرما، اور ہمارے دلوں میں کفر، گناہ اور نافرمانی کی نفرت پیدا فرما دے۔ آمین!`;
  },

  /**
   * Append message bubble into chat window
   */
  appendMessage(sender, text) {
    const chatBody = document.getElementById("chatBody");
    if (!chatBody) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const bubble = document.createElement("div");

    if (sender === "user") {
      bubble.className = "chat-bubble chat-bubble-user";
      bubble.innerHTML = `
        <div>${this.escapeHtml(text)}</div>
        <div class="chat-meta-time">${timeStr} <i class="fas fa-check-double text-info" style="font-size: 0.65rem;"></i></div>
      `;
    } else if (sender === "ai") {
      bubble.className = "chat-bubble chat-bubble-ai";
      // Format simple markdown into HTML
      const formattedHtml = this.formatMarkdown(text);
      bubble.innerHTML = `
        <div class="chat-msg-content">${formattedHtml}</div>
        <div class="chat-meta-time">${timeStr}</div>
      `;
    } else {
      bubble.className = "text-center my-2";
      bubble.innerHTML = `<span class="badge bg-dark border border-secondary text-dim px-3 py-1" style="font-size: 0.72rem;">${this.escapeHtml(text)}</span>`;
    }

    chatBody.appendChild(bubble);
    this.scrollToBottom();
  },

  /**
   * Show or hide typing dots indicator
   */
  showTyping(show) {
    let indicator = document.getElementById("chatTypingIndicator");
    const chatBody = document.getElementById("chatBody");

    if (show) {
      if (!indicator && chatBody) {
        indicator = document.createElement("div");
        indicator.id = "chatTypingIndicator";
        indicator.className = "typing-bubble";
        indicator.innerHTML = `
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        `;
        chatBody.appendChild(indicator);
        this.scrollToBottom();
      }
    } else {
      if (indicator) indicator.remove();
    }
  },

  scrollToBottom() {
    const chatBody = document.getElementById("chatBody");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  },

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  formatMarkdown(text) {
    let html = this.escapeHtml(text);
    // Bold **text**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic *text* or _text_
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Line breaks
    html = html.replace(/\n/g, '<br>');
    return html;
  }
};

window.ChatbotModule = ChatbotModule;
