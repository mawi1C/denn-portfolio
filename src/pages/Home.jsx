import { Link } from 'react-router-dom'
import TechMarquee from '../components/TechMarquee'
import CommunityChat from '../components/CommunityChat'
import { Mail, Phone, ExternalLink } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
// 1. Import your CV file here
import cvFile from '../assets/denjohn_cv.pdf' 
import { languagesFrameworks, projects, experience } from '../lib/portfolioData'
import ProfilePhoto from '../components/ProfilePhoto'

const techStack = ['JavaScript', 'TypeScript', 'PHP', 'React', 'React Native', 'Node.js', 'Laravel', 'CodeIgniter', 'MySQL', 'Tailwind CSS', 'Firebase', 'Git']

export default function Home() {
    // Filter featured entries for our custom layout
    const featuredProjects = projects.filter(p => p.featured)

    return (
        <>
            <section id="hero" className="min-h-screen flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
                <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-6">01 — hero</p>

                <div className="flex flex-col sm:flex-row sm:items-end items-center gap-6 sm:gap-8 mb-6">
                    <div className="relative flex-shrink-0">
                        <span className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-gray-300 dark:border-white/20 z-10" />
                        <span className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-gray-300 dark:border-white/20 z-10" />
                        <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-gray-300 dark:border-white/20 z-10" />
                        <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-gray-300 dark:border-white/20 z-10" />

                        <ProfilePhoto
                            src={profileImg}
                            alt="Den John Emmanuel Cabria"
                            className="w-56 h-56 sm:w-60 sm:h-60 object-cover object-top"
                        />

                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400">open to work</span>
                        </div>
                    </div>

                    <div className="pb-2">
                        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-[0.95] tracking-tight mb-4">
                            Den John
                            <br />
                            Cabria
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mb-1">
                            IT Graduate · Full-Stack & Mobile Developer
                        </p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs">
                            Sorsogon City, Philippines
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm mb-8">
                    Open to on-site, hybrid, or remote opportunities — currently focused on full-stack
                    web and mobile development, with a growing interest in IT support.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-10">
                    <Link
                        to="/projects"
                        className="text-sm font-mono bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full px-5 py-2.5 hover:opacity-85 transition"
                    >
                        View projects →
                    </Link>

                    {/* 2. Updated the href to use the imported cvFile variable */}
                    <a href={cvFile}
                        download="DenJohn_Emmanuel_Cabria_CV.pdf"
                        className="text-sm font-mono border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full px-5 py-2.5 hover:border-gray-400 dark:hover:border-white/30 transition"
                    >
                        Download CV
                    </a>
                </div>

                <TechMarquee items={techStack} />
            </section>

            {/* About */}
            <section id="about" className="py-20 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-2">02 — about</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">about</h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-4">
                    An Information Technology graduate with hands-on experience in web and mobile
                    application development, database management, and technical troubleshooting. I
                    gained real workplace experience as a Data Encoder Intern at the Philippine
                    Statistics Authority – Sorsogon City, where I developed strong data accuracy,
                    attention to detail, and professional work ethics.
                </p>
                <p className="text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
                    Beyond software development, I have a growing interest in IT Support and technical
                    operations, where I can apply my troubleshooting and problem-solving skills to
                    assist users and optimize systems. I'm passionate about learning new technologies,
                    collaborating with teams, and contributing to projects that create meaningful impact.
                </p>
            </section>

            {/* Skills preview */}
            <section id="skills" className="py-20 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-mono text-gray-400 dark:text-gray-600">03 — skills</p>
                    <Link to="/skills" className="text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition underline underline-offset-2">
                        view all →
                    </Link>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">tech stack</h2>
                <div className="flex flex-wrap gap-2">
                    {languagesFrameworks.slice(0, 8).map((s) => (
                        <span key={s} className="text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 text-gray-600 dark:text-gray-300">
                            {s}
                        </span>
                    ))}
                </div>
            </section>

            {/* Projects preview */}
            <section id="projects" className="py-20 border-t border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-mono text-gray-400 dark:text-gray-600">04 — projects</p>
                    <Link to="/projects" className="text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition underline underline-offset-2">
                        view all →
                    </Link>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">projects</h2>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-12 max-w-md">
                    A spotlight on my top production-ready web and mobile deployments.
                </p>

                {/* Layered Deck Container */}
                <div className="relative min-h-[380px] sm:min-h-[420px] w-full max-w-3xl mx-auto flex items-center justify-center select-none">
                    {(() => {
                        const orderedProjects = [...featuredProjects.slice(0, 3)];
                        const typoTerrorIdx = orderedProjects.findIndex(p => p.title.toLowerCase().includes('typo terror'));

                        if (typoTerrorIdx !== -1 && typoTerrorIdx !== 1) {
                            const temp = orderedProjects[1];
                            orderedProjects[1] = orderedProjects[typoTerrorIdx];
                            orderedProjects[typoTerrorIdx] = temp;
                        }

                        return orderedProjects.map((p, index) => {
                            const [name, subtitle] = p.title.split(' — ')
                            const isPlayStore = p.link?.includes('play.google.com')

                            let layoutClasses = ""
                            if (index === 0) {
                                layoutClasses = "absolute left-[2%] sm:left-[10%] top-2 -rotate-[10deg] z-10 scale-[0.85] sm:scale-95 origin-bottom-right"
                            } else if (index === 1) {
                                layoutClasses = "relative z-30 scale-[0.92] sm:scale-100 shadow-xl border-gray-300/70 dark:border-white/20"
                            } else if (index === 2) {
                                layoutClasses = "absolute right-[2%] sm:right-[10%] top-2 rotate-[10deg] z-10 scale-[0.85] sm:scale-95 origin-bottom-left"
                            }

                            return (
                                <div
                                    key={p.title}
                                    className={`w-full max-w-[240px] sm:max-w-[260px] flex flex-col justify-between min-h-[220px] sm:min-h-[240px] border border-gray-200 dark:border-white/10 rounded-[28px] p-5 bg-white dark:bg-gray-950 shadow-lg transition-all duration-500 ease-out hover:z-40 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:border-gray-900/30 dark:hover:border-white/40 ${layoutClasses}`}
                                >
                                    <div>
                                        <div className="flex items-start justify-between gap-2 mb-5">
                                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden border border-gray-200/60 dark:border-white/5">
                                                {p.logo ? (
                                                    <img
                                                        src={p.logo}
                                                        alt={`${name} logo`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
                                                )}
                                            </div>

                                            <div className="flex flex-col items-end gap-0.5">
                                                <span className="text-[8px] font-mono font-bold uppercase tracking-wider bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded">
                                                    {p.tag === 'FEATURED APP' || p.tag === 'CAPSTONE PROJECT' ? 'App' : 'Project'}
                                                </span>
                                                <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500">{p.date}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lga tracking-tight lowercase">
                                            {name}
                                        </h3>
                                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 mb-4 line-clamp-3 leading-relaxed">
                                            {subtitle}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        {p.link ? (
                                            <a
                                                href={p.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full inline-flex items-center justify-center gap-1 text-[11px] font-mono border py-2.5 rounded-xl shadow-sm transition-all duration-300 font-medium ${index === 1
                                                        ? 'bg-gray-950 text-white border-transparent hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100'
                                                        : 'border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-transparent hover:bg-gray-950 hover:text-white dark:hover:bg-white dark:hover:text-gray-950'
                                                    }`}
                                            >
                                                {isPlayStore ? 'get app' : 'launch app'}{' '}
                                                <ExternalLink size={10} />
                                            </a>
                                        ) : (
                                            <div className="w-full text-center text-[10px] font-mono border border-dashed border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500 py-2.5 rounded-xl select-none">
                                                deployment incoming
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })
                    })()}
                </div>
            </section>
            
            {/* Experience preview */}
            <section id="experience" className="py-20 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-mono text-gray-400 dark:text-gray-600">05 — experience</p>
                    <Link to="/experience" className="text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition underline underline-offset-2">
                        view all →
                    </Link>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">experience</h2>
                {experience.slice(0, 1).map((e) => (
                    <div key={e.org} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-mono text-gray-500 dark:text-gray-400 flex-shrink-0">
                            {e.initials}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">{e.org}</h3>
                            <p className="text-xs font-mono text-gray-400 dark:text-gray-600">{e.role} · {e.date}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Closing CTA */}
            <section id="closing" className="py-24 border-t border-gray-200 dark:border-white/10 text-center sm:text-left">
                <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-6">07 — closing</p>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-4 max-w-lg">
                    Looking for a developer who ships and keeps learning?
                </h2>

                <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm mb-8 mx-auto sm:mx-0">
                    I'm a Information Technology graduate actively seeking full-time opportunities — on-site,
                    hybrid, or remote. If my work looks like a fit, I'd love to hear from you.
                </p>

                <a
                    href="mailto:denjohncabria@gmail.com?subject=Let's talk"
                    className="inline-flex items-center gap-2 text-sm font-mono bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full px-6 py-3 hover:opacity-85 transition"
                >
                    <Mail size={16} />
                    denjohncabria@gmail.com
                </a>
            </section>
        </>
    )
}