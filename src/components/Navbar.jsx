export default function Navbar() {
  return (

    <nav className="flex justify-between items-center px-10 py-5 border-b border-white/10">


      <h1 className="text-2xl font-bold text-blue-400">
        🤖 Smart Bharat AI
      </h1>


      <div className="hidden md:flex gap-8 text-gray-300">

        <a href="#">
          Home
        </a>

        <a href="#">
          AI Assistant
        </a>

        <a href="#">
          Services
        </a>

        <a href="#">
          Complaints
        </a>

      </div>


      <button className="bg-blue-600 px-5 py-2 rounded-xl">

        Get Started

      </button>


    </nav>

  );
}