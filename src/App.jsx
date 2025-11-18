import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'

function App() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero onCTAClick={scrollToForm} />
      <Features />
      <div ref={formRef} className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the free preview</h2>
            <p className="text-blue-100/90 mb-6">Drop your email to get the first chapter and the launch checklist. No spam.</p>
            <ul className="space-y-3 text-blue-100/90 list-disc list-inside">
              <li>Chapter 1 PDF + video walkthrough</li>
              <li>Launch checklist (Notion + PDF)</li>
              <li>10 social post prompts</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </div>
      <Testimonials />
      <footer className="py-10 text-center text-blue-200/70 border-t border-white/10">
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
