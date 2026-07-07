import { motion } from 'framer-motion'
import AIButton from './AIButton'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50 glass rounded-2xl px-8 py-4 flex justify-between items-center shadow-xl"
    >
      <a href="#home">
        <h1 className="text-2xl font-black gradient-text cursor-pointer">🇮🇳 Smart Bharat AI</h1>
      </a>
      <div className="hidden md:flex gap-8 text-slate-600">
        <a className="hover:text-blue-400 duration-300" href="#home">Home</a>
        <a className="hover:text-blue-400 duration-300" href="#ai">AI Assistant</a>
        <a className="hover:text-blue-400 duration-300" href="#services">Services</a>
        <a className="hover:text-blue-400 duration-300" href="#complaints">Complaints</a>
      </div>
      <a href="#ai">
        <AIButton>Launch AI</AIButton>
      </a>
    </motion.nav>
  )
}