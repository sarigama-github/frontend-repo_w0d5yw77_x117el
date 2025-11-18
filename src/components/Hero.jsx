import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/40 to-indigo-500/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm mb-6">
            <Sparkles size={16} />
            New: Interactive lessons + actionable templates
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Turn your expertise into a product people love
          </h1>
          <p className="mt-5 text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
            A step-by-step playbook with videos, worksheets, and prompts to help you plan, build, and launch your info product fast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onCTAClick} className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-colors w-full sm:w-auto">
              Get the Guide
            </button>
            <a href="#features" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-blue-100 font-medium border border-white/20 transition-colors w-full sm:w-auto">
              See what's inside
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
