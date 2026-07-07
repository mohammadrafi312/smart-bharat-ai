export default function Hero() {
  const questions = [
    'How to get a Birth Certificate?',
    'Documents required for PM Awas Yojana?',
    'How to report a broken street light?',
    'Check status of my complaint',
  ]

  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-gradient-to-br
        from-blue-50
        via-white
        to-orange-50
        px-10
        py-10
        text-gray-900
      "
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-10 shadow-xl border hover:-translate-y-2 transition duration-500">
          <h1 className="text-5xl font-black mb-5">
            Hello! 👋
            <br />
            How can I help you today?
          </h1>

          <p className="text-gray-600 text-xl mb-10">
            Ask me anything about government services, schemes, documents or report an issue.
          </p>

          <div className="flex items-center bg-white shadow-lg rounded-2xl p-5 mb-10">
            <input className="flex-1 outline-none text-lg" placeholder="Type your question..." />
            <button className="text-3xl">🚀</button>
          </div>

          <h3 className="mb-5 font-semibold">Try asking:</h3>

          <div className="space-y-4">
            {questions.map((q) => (
              <button
                key={q}
                className="block bg-blue-50 px-5 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-3xl overflow-hidden shadow-xl mb-10 relative">
            <img src="/india-gate.avif" className="h-80 w-full object-cover" />

            <div className="absolute top-10 left-10 text-white">
              <h1 className="text-4xl font-black">
                Empowering Citizens.
                <br />
                Simplifying Governance.
              </h1>

              <p className="mt-5 text-xl">AI-powered assistance for smarter India 🇮🇳</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ['🏛', 'Popular Services'],
              ['⚠️', 'Report Issue'],
              ['📋', 'Track Complaints'],
              ['👥', 'Schemes For You'],
            ].map((item) => (
              <div
                key={item[1]}
                className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-500 cursor-pointer"
              >
                <div className="text-6xl">{item[0]}</div>
                <h2 className="font-bold text-xl mt-5">{item[1]}</h2>
                <p className="text-blue-600 mt-5">Explore →</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 bg-blue-100 rounded-3xl p-8 flex gap-6 items-center justify-center">
        🌐 Multilingual Support
        {['English', 'हिंदी', 'తెలుగు', 'தமிழ்'].map((lang) => (
          <button key={lang} className="bg-white px-8 py-3 rounded-full shadow hover:scale-110 transition">
            {lang}
          </button>
        ))}
      </div>
    </section>
  )
}