import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Alex P.', text: 'I went from idea to launch in 3 weeks. The templates alone saved me days.' },
  { name: 'Maya R.', text: 'Clear, practical, and motivating. Best resource I bought this year.' },
  { name: 'Jordan K.', text: 'Finally a guide that tells you exactly what to do and when.' },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Loved by creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 border border-white/10 rounded-2xl p-6 text-blue-100">
              <div className="flex items-center gap-1 text-yellow-300 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-blue-50">{t.text}</p>
              <p className="mt-4 text-sm text-blue-200">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
