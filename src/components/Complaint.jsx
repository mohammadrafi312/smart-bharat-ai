import { useState } from 'react'

export default function Complaint() {
  const [id, setId] = useState('')

  function submit() {
    setId(`SB-${Math.floor(Math.random() * 100000)}`)
  }

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-4xl text-center font-bold mb-10">📝 Report Civic Issue</h2>
      <div className="glass p-8 rounded-3xl hover:scale-105 duration-300 shadow-xl">
        <input placeholder="Issue Type" className="w-full mb-4 p-3 bg-slate-800 rounded" />
        <input placeholder="Location" className="w-full mb-4 p-3 bg-slate-800 rounded" />
        <textarea placeholder="Describe issue" className="w-full mb-4 p-3 bg-slate-800 rounded" />
        <button onClick={submit} className="bg-blue-600 px-6 py-3 rounded-xl">
          Submit Complaint
        </button>
        {id && (
          <p className="mt-5 text-green-400">
            Complaint Registered ✅ Tracking ID: {id}
          </p>
        )}
      </div>
    </section>
  )
}
