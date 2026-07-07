import { useState } from 'react'
import AIButton from './AIButton'

export default function Complaint() {
  const [id, setId] = useState('')

  function submit() {
    setId(`SB-${Math.floor(Math.random() * 100000)}`)
  }

  return (
    <section id="complaints" className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-4xl text-center font-bold mb-10">📝 Report Civic Issue</h2>
      <div className="glass p-8 rounded-3xl hover:scale-105 duration-300 shadow-xl">
        <input placeholder="Issue Type" className="w-full mb-4 p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded" />
        <input placeholder="Location" className="w-full mb-4 p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded" />
        <textarea placeholder="Describe issue" className="w-full mb-4 p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded" />
        <div onClick={submit}>
          <AIButton>Submit Complaint</AIButton>
        </div>
        {id && (
          <p className="mt-5 text-emerald-600">
            Complaint Registered ✅ Tracking ID: {id}
          </p>
        )}
      </div>
    </section>
  )
}
