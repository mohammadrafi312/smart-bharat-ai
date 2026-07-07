import { useState } from 'react'

export default function Dashboard() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const askAI = () => {
    if (!question) return

    setAnswer(
      `Smart Bharat AI response for: ${question}\n\nRequired documents and related government services will be shown here.`
    )
  }

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const suggestions = [
    'How to get a Birth Certificate?',
    'Documents required for PM Awas Yojana?',
    'How to report a broken street light?',
    'Check status of my complaint',
  ]

  const services = [
    ['🏛️', 'Popular Services', 'Explore government services', 'services'],
    ['⚠️', 'Report an Issue', 'Report civic issues nearby', 'complaints'],
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
            Hello! 👋
            <br />
            How can I help you today?
          </h1>

          <p className="text-2xl text-gray-600 mt-8">Ask about schemes, documents and services.</p>

          <div className="mt-12 bg-white rounded-3xl shadow-xl p-5 flex">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
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
            <p className="font-bold">Try asking:</p>
            {suggestions.map((s) => (
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
                <p className="text-blue-600 mt-5">Open →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="complaints" className="p-16">
        <h1 className="text-4xl font-black">📝 Complaint Portal</h1>
        <textarea className="mt-8 w-full p-8 rounded-3xl shadow" placeholder="Describe your civic issue..." />
        <button className="mt-5 bg-blue-600 text-white px-10 py-4 rounded-xl">Submit Complaint</button>
      </section>

      <section id="resources" className="bg-blue-200 m-16 rounded-3xl p-10">
        <h1 className="text-3xl font-bold">🌐 Multilingual Support</h1>
        <div className="flex gap-6 mt-8">
          {['English', 'हिंदी', 'తెలుగు', 'தமிழ்', 'मराठी'].map((lang) => (
            <button key={lang} className="bg-white px-8 py-3 rounded-full shadow hover:scale-110 transition">
              {lang}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
