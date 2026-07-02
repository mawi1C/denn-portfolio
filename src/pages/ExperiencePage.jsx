import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { experience } from '../lib/portfolioData'

export default function ExperiencePage() {
  return (
    <section className="py-20">
      <Link to="/" className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition mb-8">
        <ArrowLeft size={14} /> back
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">experience</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-md">
        Where I've applied what I've learned in real, professional settings.
      </p>

      <div className="space-y-10">
        {experience.map((e) => (
          <div key={e.org} className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-mono text-gray-500 dark:text-gray-400 flex-shrink-0">
              {e.initials}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">{e.org}</h3>
              <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3">{e.role} · {e.date}</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                {e.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}