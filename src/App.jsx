import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChatBot from './components/ChatBot'
import SchemeFinder from './components/SchemeFinder'
import Complaint from './components/Complaint'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <ChatBot />
      <SchemeFinder />
      <Complaint />
    </div>
  )
}

export default App
