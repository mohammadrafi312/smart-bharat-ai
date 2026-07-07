import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-7xl mb-6"
        >
          🤖🇮🇳
        </motion.div>

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
            <button className="bg-blue-600 px-10 py-4 rounded-2xl text-lg font-bold transition duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
              Start Assistant 🚀
            </button>
          </a>
          <a href="#services">
            <button className="glass px-10 py-4 rounded-2xl text-lg transition duration-300 hover:scale-110 hover:bg-white/10">
              Explore Services
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  )
}