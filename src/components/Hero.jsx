import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-7xl mb-6">🤖🇮🇳</div>
        <h1 className="text-7xl font-black leading-tight">
          India&apos;s Smart
          <br />
          <span className="gradient-text">AI Civic Companion</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-xl mt-8">
          Experience the future of citizen services with Gemini-powered AI. Find schemes, manage documents and report civic issues instantly.
        </p>
        <div className="mt-12 flex justify-center gap-6">
          <a href="#ai">
            <button className="bg-blue-600 px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 duration-300">
              Start Assistant 🚀
            </button>
          </a>
          <a href="#services">
            <button className="glass px-10 py-4 rounded-2xl text-lg hover:scale-105 duration-300">
              Explore Services
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  )
}