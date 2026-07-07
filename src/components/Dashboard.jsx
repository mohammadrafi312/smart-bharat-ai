import { useState } from 'react'

export default function Dashboard() {
  const [question, setQuestion] = useState('')

  const suggestions = [
    'How to get a Birth Certificate?',
    'Documents required for PM Awas Yojana?',
    'How to report a broken street light?',
    'Check status of my complaint',
  ]

  const services = [
    {
      icon: '🏛️',
      title: 'Popular Services',
      text: 'Explore and apply for various government services',
      btn: 'Explore',
    },
    {
      icon: '⚠️',
      title: 'Report an Issue',
      text: 'Report civic issues in your area and help your community',
      btn: 'Report Now',
    },
    {
      icon: '📋',
      title: 'Track Complaints',
      text: 'Track the status of your complaints in real-time',
      btn: 'Track Now',
    },
    {
      icon: '👥',
      title: 'Schemes for You',
      text: 'Get personalized scheme recommendations that fit your needs',
      btn: 'View Schemes',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#06133d]">
      <nav className="h-24 bg-white flex items-center justify-between px-14 shadow-sm border-b">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🏛️</div>
          <div>
            <h1 className="text-3xl font-bold">Smart Bharat</h1>
            <p className="text-gray-500">AI-Powered Civic Companion</p>
          </div>
        </div>

        <div className="flex gap-16 text-xl">
          <a className="font-bold border-b-4 border-blue-700 pb-2">Home</a>
          <a>Services</a>
          <a>My Complaints</a>
          <a>Resources</a>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-xl">🌐 English⌄</span>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">👤</div>
        </div>
      </nav>

      <section className="grid grid-cols-2 gap-10 p-14">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Hello! 👋
            <br />
            How can I help you today?
          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed mb-10">
            Ask me anything about government services, schemes, documents, or report an issue.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center mb-12">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 text-xl outline-none p-4"
            />

            <button className="text-4xl">🚀</button>
          </div>

          <p className="font-semibold mb-5">Try asking:</p>

          <div className="space-y-5">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="block bg-blue-50 px-6 py-4 rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition duration-300"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl mb-10">
            <img src="/india-gate.avif" className="w-full h-80 object-cover" />

            <div className="absolute top-12 left-12">
              <h1 className="text-4xl font-bold">
                Empowering Citizens.
                <br />
                Simplifying Governance.
              </h1>

              <p className="mt-5 text-xl">AI-powered assistance for a smarter and transparent India.</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500 cursor-pointer"
              >
                <div className="text-6xl">{s.icon}</div>
                <h2 className="font-bold text-xl mt-6">{s.title}</h2>
                <p className="text-gray-500 mt-4">{s.text}</p>
                <p className="text-blue-600 font-bold mt-8">{s.btn} →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-14 mb-10 bg-blue-100 rounded-3xl p-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">🌐 Multilingual Support</h2>
          <p>Get assistance in your preferred language</p>
        </div>

        <div className="flex gap-5">
          {['English', 'हिंदी', 'తెలుగు', 'தமிழ்', 'বাংলা', 'मराठी', '+ More'].map((l) => (
            <button key={l} className="bg-white px-8 py-3 rounded-full shadow hover:scale-110 transition">
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
