import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import ChatBot from './components/ChatBot'
import SchemeFinder from './components/SchemeFinder'
import Complaint from './components/Complaint'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <ChatBot />
      <SchemeFinder />
      <Complaint />
    </div>
  )
}

export default App
