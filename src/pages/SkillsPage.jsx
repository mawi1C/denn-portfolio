import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { languagesFrameworks, softwareTools, technicalSkills } from '../lib/portfolioData'

export default function SkillsPage() {
  return (
    <section className="py-20">
      <Link to="/" className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition mb-8">
        <ArrowLeft size={14} /> back
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">tech stack</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-md">
        The tools, languages, and frameworks I use to design, build, and ship web and mobile applications.
      </p>

      <div className="space-y-8">
        <div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3">LANGUAGES & FRAMEWORKS</p>
          <div className="flex flex-wrap gap-2">
            {languagesFrameworks.map((s) => (
              <span key={s} className="text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 text-gray-600 dark:text-gray-300">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3">SOFTWARE & TOOLS</p>
          <div className="flex flex-wrap gap-2">
            {softwareTools.map((s) => (
              <span key={s} className="text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 text-gray-600 dark:text-gray-300">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3">TECHNICAL</p>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.map((s) => (
              <span key={s} className="text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 text-gray-600 dark:text-gray-300">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}