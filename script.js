const levels = [
  {
    question: "Saint Dr. MSG का पूरा नाम क्या है?",
    options: ["Baba Ramdev", "Dr. APJ Abdul Kalam", "Saint Dr. Gurmeet Ram Rahim Singh Ji Insan", "Guru Nanak Dev Ji"],
    answer: "Saint Dr. Gurmeet Ram Rahim Singh Ji Insan"
  },
  {
    question: "MSG The Messenger किसका नाम है?",
    options: ["एक वेबसाइट", "एक फिल्म", "एक पुस्तक", "एक मोबाइल ऐप"],
    answer: "एक फिल्म"
  },
  {
    question: "Saint Dr. MSG ने कितने सोशल वर्क शुरू किए हैं?",
    options: ["25", "75", "100", "150"],
    answer: "150"
  },
  {
    question: "Saint Dr. MSG का जन्म कहाँ हुआ था?",
    options: ["Delhi", "Sri Gurusar Modia", "Mumbai", "Sirsa"],
    answer: "Sri Gurusar Modia"
  },
  {
    question: "Saint Dr. MSG किस संस्था के प्रमुख हैं?",
    options: ["Art of Living", "Radha Soami", "Dera Sacha Sauda", "ISKCON"],
    answer: "Dera Sacha Sauda"
  },
  {
    question: "MSG का फुल फॉर्म क्या है (फिल्म नाम में)?",
    options: ["Messenger of Saints God", "Messenger Saint Guru", "Messenger of God", "Main Sadhu Guru"],
    answer: "Messenger of God"
  },
  {
    question: "Saint Dr. MSG ने किस क्षेत्र में वर्ल्ड रिकॉर्ड बनाए हैं?",
    options: ["सोशल वर्क", "स्पोर्ट्स", "फिल्म मेकिंग", "इन सब में"],
    answer: "इन सब में"
  },
  {
    question: "Saint Dr. MSG द्वारा बनाए गए गेम का नाम क्या है?",
    options: ["MSG The Warrior", "MSG Game World", "MSG Game Rock", "MSG Truth Game"],
    answer: "MSG The Warrior"
  },
  {
    question: "Saint Dr. MSG ने कितनी फिल्में डायरेक्ट की हैं?",
    options: ["3", "5", "7", "8+"],
    answer: "8+"
  },
  {
    question: "Saint Dr. MSG का पहला म्यूजिक एल्बम कौन सा था?",
    options: ["Lions of the Lord", "Love Charger", "Highway Love Charger", "MSG Beats"],
    answer: "Love Charger"
  },
  {
    question: "Saint Dr. MSG का फेवरेट स्पोर्ट कौन सा है?",
    options: ["क्रिकेट", "बास्केटबॉल", "फुटबॉल", "शूटिंग बॉल"],
    answer: "शूटिंग बॉल"
  },
  {
    question: "Saint Dr. MSG द्वारा बनाए गए सबसे पहले सोशल वर्क मिशन का नाम?",
    options: ["शुद्ध जल अभियान", "शिक्षा मिशन", "श्रमदान", "स्वच्छता अभियान"],
    answer: "स्वच्छता अभियान"
  },
  {
    question: "Saint Dr. MSG किस प्रकार की फिल्में बनाते हैं?",
    options: ["कॉमेडी", "हॉरर", "स्पिरिचुअल + सोशल", "साइंस फिक्शन"],
    answer: "स्पिरिचुअल + सोशल"
  },
  {
    question: "Saint Dr. MSG किस साल में पहली बार फिल्म में आए?",
    options: ["2012", "2014", "2015", "2016"],
    answer: "2015"
  },
  {
    question: "Saint Dr. MSG ने कौन सा अवॉर्ड जीता है?",
    options: ["Padma Bhushan", "Dadasaheb Phalke Icon Award", "Grammy", "Oscar"],
    answer: "Dadasaheb Phalke Icon Award"
  },
  {
    question: "Saint Dr. MSG ने किस फसल पर रिसर्च की है?",
    options: ["धान", "गेहूं", "सरसों", "जौ"],
    answer: "सरसों"
  },
  {
    question: "Saint Dr. MSG ने कौन सी किताब लिखी है?",
    options: ["The Secret", "Jeene Ki Rah", "MSG's Life Lessons", "Revolution in Humanity"],
    answer: "Jeene Ki Rah"
  },
  {
    question: "Saint Dr. MSG ने किस मूवमेंट की शुरुआत की?",
    options: ["Beti Bachao", "Say No to Drugs", "Fit India", "Plant More Trees"],
    answer: "Say No to Drugs"
  },
  {
    question: "Saint Dr. MSG द्वारा जारी की गई लोकप्रिय हेल्थ ड्रिंक का नाम क्या है?",
    options: ["MSG Energy", "MSG Gluco Boost", "MSG Herbal Tonic", "MSG Vita Drink"],
    answer: "MSG Gluco Boost"
  },
  {
    question: "Saint Dr. MSG के भक्त किस नाम से जाने जाते हैं?",
    options: ["साधक", "शिष्य", "इंसान", "भक्त"],
    answer: "इंसान"
  }
];

let currentLevel = 0;

function loadQuestion() {
  const qBox = document.getElementById("question");
  const optionsBox = document.getElementById("options");
  const feedback = document.getElementById("feedback");

  if (currentLevel < levels.length) {
    const level = levels[currentLevel];
    qBox.textContent = `Level ${currentLevel + 1}: ${level.question}`;
    optionsBox.innerHTML = "";
    feedback.textContent = "";

    level.options.forEach(option => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsBox.appendChild(btn);
    });
  } else {
    document.getElementById("game").style.display = "none";
    document.getElementById("congrats").style.display = "block";
  }
}

function checkAnswer(selected) {
  const correct = levels[currentLevel].answer;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    currentLevel++;
    loadQuestion();
  } else {
    feedback.textContent = "गलत उत्तर! कृपया सही विकल्प चुनें।";
  }
}

loadQuestion();
