import { Link } from 'react-router-dom'
import { ArrowLeft, Database, Cloud, Terminal, Laptop, GitBranch, Cpu, Layout, Globe, FileText } from 'lucide-react'
import { languagesFrameworks, databasesBackend, softwareTools, technicalSkills } from '../lib/portfolioData'

// Inline SVG Map for brand consistency without file downloads
function SkillIcon({ name }) {
  const iconProps = { className: "w-3.5 h-3.5 transition-colors duration-300" }

  switch (name) {
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M3 3h18v18H3V3zm11.525 11.233c-.426-.254-.833-.497-1.222-.731-.388-.235-.615-.436-.681-.605-.067-.168-.1-.383-.1-.644 0-.244.04-.447.118-.607.079-.16.208-.287.387-.38.18-.092.421-.139.724-.139.324 0 .584.061.777.182.193.12.337.291.433.511.096.22.149.522.158.905h2.15c-.012-.806-.192-1.464-.537-1.975-.346-.51-.84-.897-1.482-1.159-.642-.262-1.425-.393-2.348-.393-.935 0-1.724.14-2.366.42-.642.28-1.118.694-1.429 1.242-.31.547-.466 1.218-.466 2.014 0 .91.196 1.637.587 2.18.392.544.974.981 1.748 1.31.773.33 1.696.657 2.766.983.82.253 1.385.488 1.696.707.311.219.52.476.626.77.106.294.159.658.159 1.093 0 .438-.073.804-.219 1.099-.146.294-.383.518-.71.67-.327.153-.748.23-1.264.23-.624 0-1.118-.112-1.482-.337-.364-.225-.61-.531-.737-.919-.127-.388-.198-.9-.214-1.537H7c.015.943.238 1.724.67 2.344.432.619 1.053 1.082 1.861 1.389.808.307 1.796.46 2.964.46 1.157 0 2.114-.155 2.873-.464.758-.31 1.31-.767 1.653-1.373.344-.605.516-1.341.516-2.207 0-.74-.118-1.365-.355-1.876-.237-.512-.614-.942-1.13-1.292zM7.005 13.2h2.18v4.44c0 .46.06.79.18 1 .12.21.32.31.6.31.27 0 .47-.1.61-.31.14-.21.2-.54.2-1V7.05h2.18v10.74c0 1.21-.32 2.13-.97 2.75-.65.62-1.59.93-2.82.93-1.19 0-2.11-.31-2.76-.93-.65-.62-.97-1.54-.97-2.75V13.2z"/>
        </svg>
      )
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M3 3h18v18H3V3zm8.324 15.06c-.952 0-1.782-.228-2.488-.684-.707-.457-1.211-1.12-1.514-1.993l2.254-1.32c.19.46.474.817.85 1.07.377.254.823.38 1.342.38.484 0 .872-.102 1.164-.307.291-.205.437-.515.437-.929 0-.312-.1-.56-.301-.741-.2-.183-.568-.36-1.102-.533l-1.385-.443c-.951-.302-1.678-.763-2.18-1.384-.503-.62-.754-1.427-.754-2.42 0-1.114.394-1.984 1.183-2.61.79-.627 1.836-.94 3.139-.94 1.121 0 2.043.257 2.766.772.723.515 1.223 1.255 1.5 2.22l-2.27 1c-.156-.431-.4-.764-.731-1-.33-.236-.754-.354-1.27-.354-.443 0-.801.094-1.072.28-.271.188-.407.456-.407.805 0 .262.097.476.291.643.194.166.586.326 1.176.48l1.373.381c1.134.312 1.97.805 2.51 1.48.54.674.81 1.544.81 2.61 0 1.213-.42 2.166-1.26 2.858-.84.693-1.988 1.04-3.444 1.04zm10.743-.228h-2.583V7.12H11.2V4.933h8.33v2.187h-2.474v10.72z"/>
        </svg>
      )
    case 'React':
    case 'React Native':
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1.2" {...iconProps}>
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g>
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      )
    case 'Firebase':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M3.89 15.75L5.12 7.95l6.53 12.07c.13.25.04.56-.21.69-.09.05-.19.07-.29.07-.17 0-.34-.09-.43-.25l-6.83-4.78zM18.78 8.44l-2.09-4.22c-.22-.45-.77-.63-1.22-.41-.16.08-.29.21-.37.37L12.7 8.94l6.08-.5zM20.25 15.34l-2.5-12.2c-.1-.49-.58-.8-1.07-.7-.18.04-.34.14-.45.29L4.66 16.03l13.11 7.49c.31.18.7.07.88-.24.06-.1.09-.22.09-.34l1.51-7.6z"/>
        </svg>
      )
    case 'Supabase':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M21.4 11.6l-8.3 9.7c-.5.6-1.5.2-1.4-.6l1-6.2H5.1c-.7 0-1.2-.8-.8-1.4l8.3-9.7c.5-.6 1.5-.2 1.4.6l-1 6.2h7.6c.7 0 1.2.8.8 1.4z"/>
        </svg>
      )
    case 'Vercel':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M12 2L2 22h20L12 2z"/>
        </svg>
      )
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    case 'Figma':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...iconProps}>
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
          <path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"/>
          <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5a3.5 3.5 0 1 1-7 0z"/>
        </svg>
      )
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...iconProps}>
          <path d="M12 2L3.5 6.9v9.8L12 22l8.5-4.9v-9.8L12 2z"/>
          <path d="M12 22V12"/>
          <path d="M12 12L3.5 6.9"/>
          <path d="M12 12l8.5-4.9"/>
        </svg>
      )
    case 'PHP':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...iconProps}>
          <ellipse cx="12" cy="12" rx="10" ry="5"/>
          <path d="M12 9.5V14.5"/>
        </svg>
      )
    case 'MySQL':
    case 'Database Design':
      return <Database {...iconProps} strokeWidth={2} />
    case 'Cloudinary':
    case 'Cloud Integration':
      return <Cloud {...iconProps} strokeWidth={2} />
    case 'Laravel':
    case 'CodeIgniter':
    case 'XAMPP':
      return <Terminal {...iconProps} strokeWidth={2} />
    case 'Microsoft Office':
      return <FileText {...iconProps} strokeWidth={2} />
    case 'Web & Mobile Development':
      return <Laptop {...iconProps} strokeWidth={2} />
    case 'API Development':
      return <Cpu {...iconProps} strokeWidth={2} />
    case 'Version Control (Git)':
      return <GitBranch {...iconProps} strokeWidth={2} />
    default:
      return <Terminal {...iconProps} strokeWidth={2} />
  }
}

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

      <div className="space-y-10">
        {/* LANGUAGES & FRAMEWORKS */}
        <div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3 tracking-wider">LANGUAGES & FRAMEWORKS</p>
          <div className="flex flex-wrap gap-2.5">
            {languagesFrameworks.map((s) => (
              <span 
                key={s} 
                className="group flex items-center gap-2 text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3.5 py-1.5 text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default select-none"
              >
                <SkillIcon name={s} />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* DATABASES & BACKEND */}
        <div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3 tracking-wider">DATABASES & BACKEND</p>
          <div className="flex flex-wrap gap-2.5">
            {databasesBackend.map((s) => (
              <span 
                key={s} 
                className="group flex items-center gap-2 text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3.5 py-1.5 text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default select-none"
              >
                <SkillIcon name={s} />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* SOFTWARE & TOOLS */}
        <div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3 tracking-wider">SOFTWARE & TOOLS</p>
          <div className="flex flex-wrap gap-2.5">
            {softwareTools.map((s) => (
              <span 
                key={s} 
                className="group flex items-center gap-2 text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3.5 py-1.5 text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default select-none"
              >
                <SkillIcon name={s} />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3 tracking-wider">TECHNICAL</p>
          <div className="flex flex-wrap gap-2.5">
            {technicalSkills.map((s) => (
              <span 
                key={s} 
                className="group flex items-center gap-2 text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3.5 py-1.5 text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default select-none"
              >
                <SkillIcon name={s} />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}