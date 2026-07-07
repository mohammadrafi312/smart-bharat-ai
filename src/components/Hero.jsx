import { motion } from 'framer-motion'
import AIButton from './AIButton'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
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

        <p className="text-slate-600 max-w-3xl mx-auto text-xl mt-8">
          Experience the future of citizen services with Gemini-powered AI. Find schemes, manage documents and report civic issues instantly.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <a href="#ai">
            <AIButton>Start Assistant 🚀</AIButton>
          </a>
          <a href="#services">
            <AIButton>Explore Services</AIButton>
          </a>
        </div>
      </motion.div>
    </section>
  )
}