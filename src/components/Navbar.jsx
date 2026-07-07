export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50 glass rounded-2xl px-8 py-4 flex justify-between items-center shadow-xl">
      <h1 className="text-2xl font-black gradient-text">🇮🇳 Smart Bharat AI</h1>
      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#">Home</a>
        <a href="#ai">AI Assistant</a>
        <a href="#services">Services</a>
        <a href="#complaints">Complaints</a>
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-xl font-semibold shadow-lg">
        Launch AI
      </button>
    </nav>
  )
}