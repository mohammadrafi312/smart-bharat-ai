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
        <div key={index} className="glass rounded-3xl p-8 text-center hover:-translate-y-3 duration-300">
          <div className="text-5xl mb-5">{item.icon}</div>
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-400 mt-3">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}
