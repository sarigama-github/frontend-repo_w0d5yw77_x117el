import { CheckCircle2, Clock, Rocket, Shield } from 'lucide-react'

const features = [
  {
    icon: CheckCircle2,
    title: 'Proven framework',
    desc: 'Repeatable system to validate ideas, craft offers, and structure your content.'
  },
  {
    icon: Rocket,
    title: 'Launch roadmap',
    desc: 'Tactical plan with scripts, emails, and posts to promote effectively.'
  },
  {
    icon: Clock,
    title: 'Save weeks of time',
    desc: 'Templates and prompts remove guesswork so you move fast with clarity.'
  },
  {
    icon: Shield,
    title: 'Lifetime access',
    desc: 'Get updates as new lessons and resources are added over time.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What's inside</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/10 border border-white/10 rounded-2xl p-6 text-blue-100">
              <Icon className="text-blue-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
