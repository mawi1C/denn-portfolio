import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '../lib/portfolioData'

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section className="py-20 px-4 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition mb-8">
        <ArrowLeft size={14} /> back
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">projects</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-md">
        A collection of things I've designed and built — from a capstone mobile app to full-stack business tools.
      </p>

      {/* --- FEATURED PROJECTS STACK --- */}
      <div className="space-y-12">
        {featuredProjects.map((p) => {
          const [name, subtitle] = p.title.split(' — ')
          const isPlayStore = p.link?.includes('play.google.com')

          return (
            <div key={p.title} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-900/10 dark:border-white/10 rounded-2xl p-6 bg-gradient-to-br from-gray-50 via-white to-white dark:from-white/[0.02] dark:to-transparent shadow-sm mb-4">
                <div className="flex items-center gap-4">
                  
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden border border-gray-200/50 dark:border-white/5">
                    {p.logo ? (
                      <img src={p.logo} alt={`${name} logo`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight lowercase">
                        {name}
                      </h2>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 px-2 py-0.5 rounded">
                        Featured
                      </span>
                    </div>
                    <p className="text-xs font-mono text-gray-400 dark:text-gray-500">
                      {subtitle} · {p.date}
                    </p>
                  </div>
                </div>

                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-mono bg-gray-900 text-white dark:bg-white dark:text-gray-950 px-4 py-2 rounded-xl shadow-sm hover:opacity-90 transition-all font-medium self-start sm:self-center"
                  >
                    {isPlayStore ? 'get app' : 'launch app'} <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <div className="pl-2">
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5 list-disc list-inside">
                  {p.points.map((point) => (
                    <li key={point} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      {/* --- SEPARATOR LABEL --- */}
      <div className="relative flex items-center my-14">
        <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-950 pr-4 z-10">
          other projects
        </span>
        <div className="absolute inset-x-0 h-[1px] bg-gray-200 dark:bg-white/10" />
      </div>

      {/* --- OTHER STANDARD PROJECTS SECTION --- */}
      <div className="space-y-4">
        {otherProjects.map((p) => (
          <div key={p.title} className="border border-gray-200 dark:border-white/10 rounded-2xl p-6 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-full px-2.5 py-1">
                {p.tag}
              </span>
              <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600">{p.date}</span>
            </div>

            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-medium text-gray-900 dark:text-white text-lg">
                {p.title}
              </h3>
              {p.link && (
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mt-1 flex-shrink-0"
                >
                  live demo <ExternalLink size={12} />
                </a>
              )}
            </div>

            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5 list-disc list-inside">
              {p.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}