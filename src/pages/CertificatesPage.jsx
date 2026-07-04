import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronDown, Award, GraduationCap, Trophy, Briefcase, Maximize2 } from 'lucide-react'

// 1. IMPORT YOUR CERTIFICATE IMAGES HERE
import bitscon from '../assets/bitscon-2023.png'
import bitscon2024 from '../assets/bitscon-2024.png'
import psaOjt from '../assets/psa-ojt.jpg'
import programmingChallenge from '../assets/programming-challenge.png'
import deansListSem2_2425 from '../assets/deans-list-2nd-2024-2025.jpg'
import deansListSem1_2324 from '../assets/deans-list-1st-2023-2024.jpg'
import deansListSem1_2425 from '../assets/deans-list-1st-2024-2025.jpg'

// Add more certificates here as you earn them
const certificates = [
  {
    title: "Dean's List Award",
    issuer: 'The Lewis College — College of Computer Studies',
    date: 'Feb 6, 2026',
    category: 'Academic',
    description:
      "Recognized for exemplary academic achievement, Second Semester A.Y. 2024–2025. Presented during the Computer Society General Assembly.",
    image: deansListSem2_2425,
  },
  {
    title: "Dean's List Award",
    issuer: 'The Lewis College — College of Computer Studies',
    date: 'May 23, 2025',
    category: 'Academic',
    description:
      'Recognized for exemplary academic achievement, First Semester A.Y. 2024–2025, during the Higher Education Department Recognition Day.',
    image: deansListSem1_2425,
  },
  {
    title: "Dean's List Award",
    issuer: 'The Lewis College — College of Computer Studies',
    date: 'May 21, 2024',
    category: 'Academic',
    description:
      'Recognized for exemplary academic achievement, First Semester A.Y. 2023–2024, during the HED Recognition Day.',
    image: deansListSem1_2324,
  },
  {
    title: 'Certificate of Achievement — 1st Place, Programming Challenge',
    issuer: 'The Lewis College — Computer Society',
    date: 'Feb 28, 2023',
    category: 'Competition',
    description:
      "Won 1st place in the College Week's Computer Society Programming Challenge.",
    image: programmingChallenge,
  },
  {
    title: 'Certificate of Participation — On-the-Job Training',
    issuer: 'Philippine Statistics Authority, Sorsogon Provincial Office',
    date: 'Aug 2025 – Jan 2026',
    category: 'Internship',
    description:
      'Satisfactorily completed 486 hours of On-the-Job Training at the PSA Sorsogon Provincial Statistical Office.',
    image: psaOjt,
  },
  {
    title: 'Certificate of Appreciation — BITSCON 2024',
    issuer: 'Council of Deans for Information Technology Education, Inc. / CHED Region V',
    date: 'Apr 25 – 26, 2024',
    category: 'Conference',
    description:
      'For actively participating in the Bicol IT Students Congress (BITSCON) 2024, themed "Digital Horizons: Navigating the Future of Technology" held at Camarines Norte State College, Daet, Camarines Norte.',
    image: bitscon2024,
  },
  {
    title: 'Certificate of Appreciation — BITSCON 2023',
    issuer: 'Council of Deans for Information Technology Education, Inc. / CHED Region V',
    date: 'Feb 23, 2023',
    category: 'Conference',
    description:
      'For actively participating in the Bicol IT Students Congress (BITSCON) 2023, themed "Transforming Education in Bicol Region: Exploring Emerging Trends Towards ASEAN Connectivity 2025."',
    image: bitscon,
  },
]

const categoryMeta = {
  Conference: { icon: Award, label: 'Conference' },
  Internship: { icon: Briefcase, label: 'Internship' },
  Academic: { icon: GraduationCap, label: 'Academic' },
  Competition: { icon: Trophy, label: 'Competition' },
}

export default function CertificatesPage() {
  const [expandedId, setExpandedId] = useState(null)

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const grouped = Object.keys(categoryMeta)
    .map((key) => ({
      key,
      ...categoryMeta[key],
      items: certificates.filter((c) => c.category === key),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section className="py-20">
      <Link to="/" className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition mb-8">
        <ArrowLeft size={14} /> back
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
        certificates & awards
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-md">
        Certifications, academic awards, and recognitions I've earned along the way.
      </p>

      {certificates.length === 0 ? (
        <p className="text-sm text-gray-400 dark:text-gray-600 font-mono">
          No certificates added yet — check back soon.
        </p>
      ) : (
        <div className="space-y-12">
          {grouped.map((group) => (
            <div key={group.key}>
              {/* Section header */}
              <div className="flex items-center gap-2 mb-4">
                <group.icon size={12} className="text-gray-400 dark:text-gray-600" />
                <p className="text-[10px] font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest">
                  {group.label}
                </p>
                <span className="text-[10px] font-mono text-gray-300 dark:text-gray-700">
                  {group.items.length}
                </span>
                <div className="flex-1 h-px bg-gray-100 dark:bg-white/5" />
              </div>

              {/* Rows List */}
              <div className="space-y-3">
                {group.items.map((cert) => {
                  const certId = cert.title + cert.date
                  const isExpanded = expandedId === certId

                  return (
                    <div
                      key={certId}
                      className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-colors hover:border-gray-300 dark:hover:border-white/20"
                    >
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleAccordion(certId)}
                        className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-left"
                      >
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {cert.title}
                          </h3>
                          <p className="text-xs font-mono text-gray-500 mt-1">
                            {cert.date}
                          </p>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* Accordion Content */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="p-4 pt-0">
                            <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row gap-6">

                              {/* Clickable Image Link */}
                              <div className="md:w-1/2 shrink-0">
                                <a
                                  href={cert.image}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  data-cursor="zoom" /* <-- ADD THIS */
                                  className="group/img relative block overflow-hidden rounded-lg border border-gray-100 dark:border-white/10 cursor-zoom-in"
                                  title="View full image in new tab"
                                >
                                  <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-auto transition-transform duration-300 group-hover/img:scale-[1.015]"
                                  />
                                  {/* Hover overlay hint */}
                                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="bg-black/60 text-white rounded-full p-2 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-sm flex items-center gap-1.5 text-xs font-mono px-3">
                                      <Maximize2 size={12} />
                                      view full view
                                    </div>
                                  </div>
                                </a>
                              </div>

                              {/* Extended Details */}
                              <div className="md:w-1/2 flex flex-col justify-center">
                                <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                  {cert.issuer}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                  {cert.description}
                                </p>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}