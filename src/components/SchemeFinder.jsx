export default function SchemeFinder() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">🏛 Government Scheme Finder</h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="glass p-8 rounded-3xl hover:scale-105 duration-300 shadow-xl">
          <h3 className="text-xl font-bold">Students</h3>
          <p className="text-gray-400 mt-3">Find scholarships, Skill India programs and education support.</p>
        </div>
        <div className="glass p-8 rounded-3xl hover:scale-105 duration-300 shadow-xl">
          <h3 className="text-xl font-bold">Farmers</h3>
          <p className="text-gray-400 mt-3">Discover PM-Kisan and agriculture related schemes.</p>
        </div>
        <div className="glass p-8 rounded-3xl hover:scale-105 duration-300 shadow-xl">
          <h3 className="text-xl font-bold">Citizens</h3>
          <p className="text-gray-400 mt-3">Access Aadhaar, Passport and government services.</p>
        </div>
      </div>
    </section>
  )
}
