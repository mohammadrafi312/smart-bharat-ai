import { motion } from 'framer-motion'

const data = [
  {
    icon: '🤖',
    title: 'AI Assistant',
    desc: 'Ask questions about government services using Gemini AI',
  },
  {
    icon: '🏛️',
    title: 'Scheme Finder',
    desc: 'Discover eligible schemes and public services',
  },
  {
    icon: '📄',
    title: 'Document Help',
    desc: 'Know required documents instantly',
  },
  {
    icon: '🌎',
    title: 'Multilingual',
    desc: 'Access civic help in regional languages',
  },
]

export default function Features() {
  return (
    <section id="services" className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-8 py-20">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-3xl p-8 text-center cursor-pointer shadow-xl"
        >
          <div className="text-5xl mb-5">{item.icon}</div>
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-slate-500 mt-3">{item.desc}</p>
        </motion.div>
      ))}
    </section>
  )
}
