import { motion } from 'framer-motion'

const data = [
  {
    icon: '🤖',
    title: 'AI Assistant',
    desc: 'Get instant guidance for civic questions, public services, and everyday government support.',
  },
  {
    icon: '🏛',
    title: 'Government Services',
    desc: 'Explore essential services and step-by-step help for schemes, permits, and welfare support.',
  },
  {
    icon: '📝',
    title: 'Report Issues',
    desc: 'Raise complaints and track civic problems with a clear, simple digital workflow.',
  },
  {
    icon: '📊',
    title: 'Track Complaints',
    desc: 'Monitor issue status and stay informed with a transparent government-style dashboard experience.',
  },
  {
    icon: '🌐',
    title: 'Multilingual Support',
    desc: 'Access information in multiple Indian languages for broader inclusion and accessibility.',
  },
]

export default function Features() {
  return (
    <section id="services" className="max-w-6xl mx-auto grid gap-6 px-8 py-20 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ duration: 0.4 }}
          className="
            glass
            hover:-translate-y-3
            hover:scale-105
            duration-300
            rounded-3xl
            p-8
            text-center
            cursor-pointer
            shadow-xl
          "
        >
          <div className="text-5xl mb-5">{item.icon}</div>
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-slate-500 mt-3">{item.desc}</p>
        </motion.div>
      ))}
    </section>
  )
}
