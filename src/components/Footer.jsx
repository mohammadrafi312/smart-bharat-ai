export default function Footer() {
  return (
    <footer className="mt-20 px-8 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto glass rounded-3xl p-10 grid md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-3xl font-black gradient-text mb-4">🇮🇳 Smart Bharat AI</h1>
          <p className="text-gray-400">
            A Gemini-powered civic companion making government services simpler, smarter and accessible for every citizen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <ul className="space-y-3 text-gray-400">
            <li>🤖 AI Assistant</li>
            <li>🏛 Scheme Finder</li>
            <li>📄 Document Help</li>
            <li>📝 Issue Reporting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Platform</h2>
          <ul className="space-y-3 text-gray-400">
            <li>Transparency</li>
            <li>Accessibility</li>
            <li>Digital India</li>
            <li>Multilingual AI</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Powered By</h2>
          <p className="text-gray-400">
            ⚛ React
            <br />
            🤖 Google Gemini AI
            <br />
            🎨 Tailwind CSS
            <br />
            ☁ Vercel
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10">
        Built with ❤️ for PromptWars x Global Prompt Challenge 2026
        <br />
        #BuildWithAI | Google For Developers
      </div>
    </footer>
  )
}
