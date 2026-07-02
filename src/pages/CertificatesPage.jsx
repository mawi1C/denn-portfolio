import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

// Add your certificates here as you earn them
const certificates = [
  // {
  //   title: 'Certificate Name',
  //   issuer: 'Issuing Organization',
  //   date: '2026',
  //   link: 'https://...' // optional, link to view/verify
  // },
]

export default function CertificatesPage() {
  return (
    <section className="py-20">
      <Link to="/" className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition mb-8">
        <ArrowLeft size={14} /> back
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">certificates</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-md">
        Certifications and courses I've completed to keep building my skills.
      </p>

      {certificates.length === 0 ? (
        <p className="text-sm text-gray-400 dark:text-gray-600 font-mono">
          No certificates added yet — check back soon.
        </p>
      ) : (
        <div className="space-y-4">
          {certificates.map((cert) => (
            <div key={cert.title} className="border border-gray-200 dark:border-white/10 rounded-2xl p-6">
              <p className="text-[10px] font-mono text-gray-400 dark:text-gray-600 mb-2">{cert.date}</p>
              <h3 className="font-medium text-gray-900 dark:text-white text-lg mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{cert.issuer}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-gray-500 dark:text-gray-400 underline underline-offset-2 hover:text-gray-900 dark:hover:text-white transition">
                  view certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}