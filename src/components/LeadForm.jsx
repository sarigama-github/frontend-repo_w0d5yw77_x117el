import { useState } from 'react'

export default function LeadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, source: 'landing' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
      <h3 className="text-white text-xl font-semibold mb-4">Get the free preview</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Your email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={3} placeholder="What are you hoping to build? (optional)" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button disabled={status==='loading'} className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold">
          {status==='loading' ? 'Submitting...' : 'Send me the preview'}
        </button>
        {status==='success' && <p className="text-green-300 text-sm">Thanks! Check your inbox.</p>}
        {status==='error' && <p className="text-red-300 text-sm">{error}</p>}
      </form>
      <p className="mt-3 text-xs text-blue-100/70">We respect your privacy. Unsubscribe anytime.</p>
    </div>
  )
}
