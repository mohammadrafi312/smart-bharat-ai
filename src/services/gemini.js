import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

export async function askGemini(question, language) {
  const prompt = `
You are Smart Bharat AI, an AI government assistant for India.

Help citizens with:
- Government schemes
- Required documents
- Public services
- Complaint guidance
- Application steps

Rules:
- Explain simply
- Give step-by-step answers
- Avoid complex words
- Reply in ${language}

Citizen Question:
${question}
`

  const result = await model.generateContent(prompt)
  return result.response.text()
}
