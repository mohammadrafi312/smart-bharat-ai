export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50 glass rounded-2xl px-8 py-4 flex justify-between items-center shadow-xl">
      <a href="#home">
        <h1 className="text-2xl font-black gradient-text cursor-pointer">🇮🇳 Smart Bharat AI</h1>
      </a>
      <div className="hidden md:flex gap-8 text-gray-300">
        <a className="hover:text-blue-400 duration-300" href="#home">Home</a>
        <a className="hover:text-blue-400 duration-300" href="#ai">AI Assistant</a>
        <a className="hover:text-blue-400 duration-300" href="#services">Services</a>
        <a className="hover:text-blue-400 duration-300" href="#complaints">Complaints</a>
      </div>
      <a href="#ai">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-xl font-semibold hover:scale-105 duration-300">
          Launch AI
        </button>
      </a>
    </nav>
  )
}