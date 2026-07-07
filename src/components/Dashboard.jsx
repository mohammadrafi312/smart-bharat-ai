import { useState } from 'react'

export default function Dashboard() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [lang, setLang] = useState('en')

  const text = {
    en: {
      hello: 'Hello! 👋',
      help: 'How can I help you today?',
      desc: 'Ask me anything about government services, schemes, documents, or report an issue.',
      placeholder: 'Type your question...',
      assistant: 'Smart Bharat AI response',
      services: 'Popular Services',
      complaint: 'Report an Issue',
      complaintTitle: '📝 Complaint Portal',
      complaintPlaceholder: 'Describe your civic issue...',
      complaintButton: 'Submit Complaint',
      resourcesTitle: '🌐 Multilingual Support',
      tryAsking: 'Try asking:',
      navHome: 'Home',
      navServices: 'Services',
      navComplaints: 'My Complaints',
      navResources: 'Resources',
      open: 'Open →',
      heroSub: 'Ask about schemes, documents and services.',
      langLabel: '🌐 English',
    },
    hi: {
      hello: 'नमस्ते! 👋',
      help: 'मैं आपकी कैसे मदद कर सकता हूँ?',
      desc: 'सरकारी सेवाओं, योजनाओं, दस्तावेजों या शिकायतों के बारे में पूछें।',
      placeholder: 'अपना प्रश्न लिखें...',
      assistant: 'स्मार्ट भारत AI उत्तर',
      services: 'लोकप्रिय सेवाएँ',
      complaint: 'समस्या रिपोर्ट करें',
      complaintTitle: '📝 शिकायत पोर्टल',
      complaintPlaceholder: 'अपनी नागरिक समस्या का विवरण दें...',
      complaintButton: 'शिकायत सबमिट करें',
      resourcesTitle: '🌐 बहुभाषी समर्थन',
      tryAsking: 'इसे आज़माएँ:',
      navHome: 'होम',
      navServices: 'सेवाएँ',
      navComplaints: 'मेरी शिकायतें',
      navResources: 'संसाधन',
      open: 'खोलें →',
      heroSub: 'योजनाओं, दस्तावेजों और सेवाओं के बारे में पूछें।',
      langLabel: '🌐 हिंदी',
    },
    te: {
      hello: 'నమస్తే! 👋',
      help: 'నేను మీకు ఎలా సహాయం చేయగలను?',
      desc: 'ప్రభుత్వ సేవలు, పథకాలు, పత్రాలు లేదా సమస్యల గురించి అడగండి.',
      placeholder: 'మీ ప్రశ్నను టైప్ చేయండి...',
      assistant: 'స్మార్ట్ భారత్ AI సమాధానం',
      services: 'ప్రముఖ సేవలు',
      complaint: 'సమస్య తెలియజేయండి',
      complaintTitle: '📝 ఫిర్యాదు పోర్టల్',
      complaintPlaceholder: 'మీ పౌర సమస్యను వివరించండి...',
      complaintButton: 'ఫిర్యాదు సమర్పించండి',
      resourcesTitle: '🌐 బహుభాషా మద్దతు',
      tryAsking: 'దీనిని ప్రయత్నించండి:',
      navHome: 'హోమ్',
      navServices: 'సేవలు',
      navComplaints: 'నా ఫిర్యాదులు',
      navResources: 'వనరులు',
      open: 'తెరవండి →',
      heroSub: 'పథకాలు, పత్రాలు మరియు సేవల గురించి అడగండి.',
      langLabel: '🌐 తెలుగు',
    },
    ta: {
      hello: 'வணக்கம்! 👋',
      help: 'நான் உங்களுக்கு எப்படி உதவலாம்?',
      desc: 'அரசு சேவைகள், திட்டங்கள், ஆவணங்கள் அல்லது புகார்களைப் பற்றி கேளுங்கள்.',
      placeholder: 'உங்கள் கேள்வியை உள்ளிடவும்...',
      assistant: 'ஸ்மார்ட் பாரத் AI பதில்',
      services: 'பிரபல சேவைகள்',
      complaint: 'புகார் அளிக்கவும்',
      complaintTitle: '📝 புகார் போர்டல்',
      complaintPlaceholder: 'உங்கள் சிவில் பிரச்சினையை விவரிக்கவும்...',
      complaintButton: 'புகாரை சமர்ப்பிக்கவும்',
      resourcesTitle: '🌐 பலமொழி ஆதரவு',
      tryAsking: 'இதை முயற்சிக்கவும்:',
      navHome: 'முகப்பு',
      navServices: 'சேவைகள்',
      navComplaints: 'எனது புகார்கள்',
      navResources: 'வளங்கள்',
      open: 'திற →',
      heroSub: 'திட்டங்கள், ஆவணங்கள் மற்றும் சேவைகள் பற்றி கேளுங்கள்.',
      langLabel: '🌐 தமிழ்',
    },
  }

  const t = text[lang]

  const askAI = () => {
    if (!question) return

    setAnswer(`${t.assistant} for: ${question}\n\nRequired documents and related government services will be shown here.`)
  }

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const suggestions = {
    en: [
      'How to get a Birth Certificate?',
      'Documents required for PM Awas Yojana?',
      'How to report a broken street light?',
      'Check status of my complaint',
    ],
    hi: [
      'जन्म प्रमाणपत्र कैसे प्राप्त करें?',
      'पीएम आवास योजना के लिए किन दस्तावेजों की आवश्यकता है?',
      'टूटी हुई स्ट्रीट लाइट की रिपोर्ट कैसे करें?',
      'मेरी शिकायत की स्थिति देखें',
    ],
    te: [
      'జననశాసనం ఎలా పొందాలి?',
      'PM ఆవాస్ యోజనాకు కావలసిన పత్రాలు ఏవి?',
      'పగిలిన స్ట్రీట్ లైట్ను ఎలా నివేదించాలి?',
      'నా ఫిర్యాదుల స్థితిని తనిఖీ చేయండి',
    ],
    ta: [
      'பிறப்பு சான்றிதழை எப்படி பெறுவது?',
      'PM அவாஸ் யோஜனா için தேவையான ஆவணங்கள் யாவை?',
      'உடைந்த தெரு விளக்கை எப்படி தெரிவிப்பது?',
      'எனது புகாரின் நிலையை சரிபார்க்கவும்',
    ],
  }

  const services = [
    ['🏛️', t.services, 'Explore government services', 'services'],
    ['⚠️', t.complaint, 'Report civic issues nearby', 'complaints'],
    ['📋', 'Track Complaints', 'View complaint progress', 'complaints'],
    ['👥', 'Schemes For You', 'AI scheme recommendations', 'assistant'],
  ]

  return (
    <div className="bg-[#f4f9ff] text-blue-950 min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur h-24 flex items-center justify-between px-14 shadow">
        <div>
          <h1 className="text-3xl font-black">🏛️ Smart Bharat</h1>
          <p>AI-Powered Civic Companion</p>
        </div>

        <div className="flex gap-14 text-xl">
          {[
            ['Home', 'home'],
            ['Services', 'services'],
            ['My Complaints', 'complaints'],
            ['Resources', 'resources'],
          ].map((item) => (
            <button key={item[0]} onClick={() => scroll(item[1])} className="hover:text-blue-600 transition">
              {item[0]}
            </button>
          ))}
        </div>

        <div>🌐 English 👤</div>
      </nav>

      <section id="home" className="grid grid-cols-2 gap-16 p-16">
        <div>
          <h1 className="text-6xl font-black">
            {t.hello}
            <br />
            {t.help}
          </h1>

          <p className="text-2xl text-gray-600 mt-8">{t.desc}</p>

          <div className="mt-12 bg-white rounded-3xl shadow-xl p-5 flex">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 text-xl outline-none"
            />

            <button onClick={askAI} className="text-4xl hover:scale-125 transition">
              🚀
            </button>
          </div>

          {answer && (
            <div className="mt-6 bg-white p-6 rounded-2xl shadow">
              {answer}
            </div>
          )}

          <div className="mt-12 space-y-5">
            <p className="font-bold">{t.tryAsking}</p>
            {suggestions[lang].map((s) => (
              <button
                key={s}
                onClick={() => setQuestion(s)}
                className="block bg-blue-100 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <img
            src="/india-gate.avif"
            className="rounded-3xl shadow-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
          />

          <div id="services" className="grid grid-cols-2 gap-8 mt-10">
            {services.map((s) => (
              <div
                key={s[1]}
                onClick={() => scroll(s[3])}
                className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer hover:-translate-y-4 transition duration-500"
              >
                <div className="text-6xl">{s[0]}</div>
                <h2 className="text-2xl font-bold">{s[1]}</h2>
                <p className="text-gray-500 mt-3">{s[2]}</p>
                <p className="text-blue-600 mt-5">{t.open}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="complaints" className="p-16">
        <h1 className="text-4xl font-black">{t.complaintTitle}</h1>
        <textarea className="mt-8 w-full p-8 rounded-3xl shadow" placeholder={t.complaintPlaceholder} />
        <button className="mt-5 bg-blue-600 text-white px-10 py-4 rounded-xl">{t.complaintButton}</button>
      </section>

      <section id="resources" className="bg-blue-200 m-16 rounded-3xl p-10">
        <h1 className="text-3xl font-bold">{t.resourcesTitle}</h1>
        <div className="flex gap-6 mt-8">
          {[
            { code: 'en', label: 'English' },
            { code: 'hi', label: 'हिंदी' },
            { code: 'te', label: 'తెలుగు' },
            { code: 'ta', label: 'தமிழ்' },
          ].map((option) => (
            <button
              key={option.code}
              onClick={() => setLang(option.code)}
              className={`px-8 py-3 rounded-full shadow transition ${lang === option.code ? 'bg-blue-600 text-white' : 'bg-white hover:scale-110'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
