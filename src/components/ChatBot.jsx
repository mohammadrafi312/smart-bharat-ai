import { useState } from 'react'
import AIButton from './AIButton'
import { askGemini } from '../services/gemini'

export default function ChatBot() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [language, setLanguage] = useState('English')

  async function handleAsk() {
    if (!question.trim()) return

    setLoading(true)
    try {
      const response = await askGemini(question, language)
      setAnswer(response)
    } catch (error) {
      console.log(error)
      setAnswer('AI service unavailable')
    }
    setLoading(false)
  }

  return (
    <section id="ai" className="max-w-5xl mx-auto py-20 px-6">
      <div className="text-center mb-8">
        <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">Citizen Support Portal</p>
        <h2 className="text-4xl font-bold mt-2">🤖 AI Assistant for Government Services</h2>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          Ask in English, Hindi, Telugu or Tamil and get guided help for schemes, documentation and public services.
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-slate-50 border border-slate-200 text-slate-700 p-3 rounded-xl"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
          <option>Tamil</option>
        </select>
      </div>

      <div className="glass max-w-4xl mx-auto rounded-3xl p-10 shadow-2xl">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 mb-4 text-sm text-blue-700 font-medium">
          Example: “How do I apply for a pension scheme?”
        </div>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about schemes, documents, government services..."
          className="
            w-full
            h-40
            rounded-2xl
            p-6
            bg-white/80
            border
            border-blue-100
            outline-none
            text-slate-800
            focus:border-blue-500
            focus:shadow-xl
            duration-300
          "
        />
        <div className="mt-5">
          <AIButton>{loading ? 'Thinking...' : 'Ask Smart Bharat AI'}</AIButton>
        </div>
        {answer && (
          <div className="mt-6 bg-slate-100 p-5 rounded-xl whitespace-pre-line text-slate-700 border border-slate-200">
            {answer}
          </div>
        )}
      </div>
    </section>
  )
}
