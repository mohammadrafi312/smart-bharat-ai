import { useState } from 'react'
import AIButton from './AIButton'

export default function Complaint() {
  const [id, setId] = useState('')

  function submit() {
    setId(`SB-${Math.floor(Math.random() * 100000)}`)
  }

  return (
    <section id="complaints" className="max-w-4xl mx-auto py-20 px-6">
      <div className="text-center mb-8">
        <p className="text-green-600 font-semibold uppercase tracking-[0.25em] text-sm">Public Grievance Portal</p>
        <h2 className="text-4xl font-bold mt-2">📝 Report and Track Civic Issues</h2>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          File a complaint quickly and receive a tracking reference for follow-up and resolution.
        </p>
      </div>

      <div className="glass p-8 rounded-3xl hover:scale-105 duration-300 shadow-xl">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input placeholder="Issue Type" className="w-full p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded" />
          <input placeholder="Location" className="w-full p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded" />
        </div>
        <textarea placeholder="Describe issue" className="w-full mb-4 p-3 bg-slate-50 border border-slate-200 text-slate-700 rounded min-h-32" />
        <div onClick={submit}>
          <AIButton>Submit Complaint</AIButton>
        </div>
        {id && (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
            Complaint Registered ✅ Tracking ID: {id}
          </div>
        )}
      </div>
    </section>
  )
}
