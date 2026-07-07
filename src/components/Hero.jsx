import { motion } from 'framer-motion'
import AIButton from './AIButton'

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        grid
        md:grid-cols-2
        items-center
        gap-10
        px-20
        py-24
        relative
        overflow-hidden
      "
    >
      <div className="absolute top-40 left-20 text-6xl animate-bounce opacity-30">⚙️</div>
      <div className="absolute bottom-40 right-20 text-7xl animate-pulse opacity-30">✨</div>
      <div className="absolute top-1/2 right-40 text-5xl animate-bounce opacity-30">🔷</div>

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
        className="text-left z-10"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-7xl mb-6"
        >
          🤖🇮🇳
        </motion.div>

        <div className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-bold mb-6">
          🇮🇳 Digital India powered by AI
        </div>

        <h1 className="text-6xl md:text-7xl font-black leading-tight">
          Empowering Citizens
          <br />
          <span className="gradient-text">with Smart Bharat AI</span>
        </h1>

        <p className="text-slate-600 max-w-2xl text-xl mt-8">
          Your intelligent AI companion for government services, schemes, documents and civic support.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">
          <a href="#ai">
            <AIButton>Ask AI</AIButton>
          </a>
          <a href="#services">
            <AIButton>Explore Services</AIButton>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <div className="glass rounded-3xl p-8 shadow-2xl">
          <h2 className="font-bold text-2xl mb-5">🤖 Smart Bharat Assistant</h2>

          <div className="bg-blue-50 p-5 rounded-2xl mb-4 text-slate-700">
            How can I apply for a passport?
          </div>

          <div className="bg-white p-5 rounded-2xl shadow text-slate-700">
            You need:
            <br />
            ✅ Aadhaar Card
            <br />
            ✅ Address Proof
            <br />
            ✅ Passport Portal Registration
          </div>
        </div>
      </motion.div>
    </section>
  )
}