import { useState } from 'react'
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
    <section id="ai" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">🤖 AI Civic Assistant</h2>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-slate-800 p-3 rounded-xl mb-5"
      >
        <option>English</option>
        <option>Hindi</option>
        <option>Telugu</option>
        <option>Tamil</option>
      </select>
      <div className="glass p-8 rounded-3xl hover:scale-105 duration-300 shadow-xl">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about schemes, documents, government services..."
          className="w-full h-40 p-5 rounded-xl bg-slate-800"
        />
        <button onClick={handleAsk} className="mt-5 bg-blue-600 px-6 py-3 rounded-xl">
          {loading ? 'Thinking...' : 'Ask Smart Bharat AI'}
        </button>
        {answer && (
          <div className="mt-6 bg-slate-800 p-5 rounded-xl whitespace-pre-line">{answer}</div>
        )}
      </div>
    </section>
  )
}
