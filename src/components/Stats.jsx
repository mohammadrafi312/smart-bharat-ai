const stats = [
  { value: '10K+', label: 'Citizens Helped' },
  { value: '24/7', label: 'AI Support' },
  { value: '12+', label: 'Languages' },
  { value: '100%', label: 'Digital Guidance' },
]

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-8 pb-20">
      {stats.map((item, index) => (
        <div key={index} className="glass rounded-3xl p-6 text-center">
          <div className="text-3xl font-black gradient-text">{item.value}</div>
          <p className="text-gray-400 mt-2">{item.label}</p>
        </div>
      ))}
    </section>
  )
}
