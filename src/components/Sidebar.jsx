import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Sun, Moon, Monitor, Code2, FolderGit2, Briefcase, MessageCircle, Award, Mail, Phone, Menu, X, Sparkles, Keyboard } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useMobileMenu } from '../hooks/useMobileMenu'
import ViewerBadge from './ViewerBadge'

// 1. IMPORT YOUR LOGO GRAPHIC VARIATIONS HERE
import logoDark from '../assets/favicon.png'
import logoWhite from '../assets/favicon-white.png'

export default function Sidebar() {
  const { mode, setMode, resolvedTheme } = useTheme() // Added resolvedTheme here
  const location = useLocation()
  const isHome = location.pathname === '/'
  const scrollProgress = useScrollProgress()
  const { isOpen, setIsOpen } = useMobileMenu()

  const homeSectionIds = ['hero', 'about']
  const activeSection = useActiveSection(isHome ? homeSectionIds : [])

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'system', icon: Monitor, label: 'System' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ]

  const navItems = [
    { to: '/skills', icon: Code2, label: 'Skills', index: '01' },
    { to: '/projects', icon: FolderGit2, label: 'Projects', index: '02' },
    { to: '/experience', icon: Briefcase, label: 'Experience', index: '03' },
    { to: '/certificates', icon: Award, label: 'Certificates', index: '04' },
    { to: '/chat', icon: MessageCircle, label: 'Chat', index: '05' },
  ]

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [isOpen])

  const triggerAMA = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
  }
  const triggerTypingTest = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', ctrlKey: true }))
  }

  // DYNAMIC RESPONSIVE LOGO RENDERER (Fixed vertical spacing gap)
  const renderLogo = (isMobile = false) => (
    <Link
      to="/#hero"
      className={`flex items-center gap-2.5 text-gray-900 dark:text-white hover:opacity-80 transition-opacity select-none ${isMobile ? '' : 'mb-8'}`}
    >
      {/* Dynamic graphic emblem */}
      <img
        src={resolvedTheme === 'dark' ? logoWhite : logoDark}
        alt="DJ Monogram"
        className={isMobile ? "w-8 h-8 object-contain" : "w-10 h-10 object-contain"}
      />

      {/* Vertical divider line */}
      <div className={`w-[1px] bg-gray-200 dark:bg-white/10 ${isMobile ? 'h-6' : 'h-8'}`} />

      {/* Dual line layout text branding */}
      {/* FIX: Dropped leading from 1.05 to 0.85 to collapse font padding boxes */}
      <div className="flex flex-col justify-center font-sans font-bold tracking-tight text-left leading-[0.85]">
        <span className={isMobile ? "text-sm" : "text-base"}>Den</span>
        {/* FIX: Applied a small negative margin to perfectly pull John upward */}
        <span className={isMobile ? "text-sm -mt-0.5" : "text-base -mt-2"}>John</span>
      </div>
    </Link>
  )

  const renderNavList = () => (
    <nav className="flex flex-col gap-1 flex-1">
      {navItems.map((item) => {
        const isHashActive = item.hash ? isHome && activeSection === item.hash : false
        return (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => {
              const active = item.hash ? isHashActive : isActive
              const base = 'group relative flex items-center gap-3 pr-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] '
              const activeClasses = 'text-gray-900 dark:text-white bg-gray-100 dark:bg-white/5 pl-4'
              const inactiveClasses = 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:translate-x-0.5 pl-0'
              return base + (active ? activeClasses : inactiveClasses)
            }}
          >
            {({ isActive }) => {
              const active = item.hash ? isHashActive : isActive
              const barClasses = active ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              return (
                <>
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full bg-gray-900 dark:bg-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${barClasses}`} />
                  <item.icon size={14} className="flex-shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  <span className="text-[10px] text-gray-300 dark:text-gray-700">{item.index}</span>
                </>
              )
            }}
          </NavLink>
        )
      })}
    </nav>
  )

  const renderFooterContent = () => (
    <div className="space-y-4">
      <div className="pb-4 border-b border-gray-200 dark:border-white/10">
        <ViewerBadge />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-gray-400 dark:text-gray-500">Theme</span>
        <div className="flex items-center gap-0.5 bg-gray-100 dark:bg-gray-800 rounded-full p-0.5">
          {themeOptions.map(({ value, icon: Icon, label }) => (
            <button
              key={value}
              onClick={() => setMode(value)}
              aria-label={label}
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${mode === value
                ? 'bg-white dark:bg-gray-950 text-gray-900 dark:text-white shadow-sm scale-100'
                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 scale-95'
                }`}
            >
              <Icon size={12} />
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="mailto:denjohncabria@gmail.com" aria-label="Email" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:-translate-y-0.5 transition-all">
          <Mail size={15} />
        </a>
        <a href="tel:09515477844" aria-label="Phone" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:-translate-y-0.5 transition-all">
          <Phone size={15} />
        </a>
        <a href="https://linkedin.com/in/denjohn-cabria-6221ab401" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:-translate-y-0.5 transition-all">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="https://github.com/mawi1C" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:-translate-y-0.5 transition-all">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] font-mono text-gray-400 dark:text-gray-500">
          For work &amp; freelance, reach me at
        </p>

        <a href="mailto:denjohncabria@gmail.com"
          className="flex items-center gap-2 text-[10px] font-mono font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-white/20 transition-all"
        >
          <Mail size={15} className="flex-shrink-0" />
          <span className="truncate">denjohncabria@gmail.com</span>
        </a>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10 flex items-center justify-between px-4 z-40">
        {/* FIX: Replaced custom text element with the modular responsive logo component */}
        {renderLogo(true)}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="text-gray-600 dark:text-gray-300"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile drawer backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white dark:bg-gray-950 z-50 p-6 overflow-y-auto overflow-x-hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-sm text-gray-900 dark:text-white">Menu</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-gray-500 dark:text-gray-400">
            <X size={20} />
          </button>
        </div>

        {renderNavList()}

        <div className="flex flex-col gap-1 mt-2">
          <button
            onClick={() => { triggerAMA(); setIsOpen(false) }}
            className="flex items-center gap-3 pl-4 pr-3 py-2 rounded-lg text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:translate-x-0.5 transition-all duration-200"
          >
            <Sparkles size={14} className="flex-shrink-0" />
            <span className="flex-1 text-left">Ask anything</span>
          </button>
          <button
            onClick={() => { triggerTypingTest(); setIsOpen(false) }}
            className="flex items-center gap-3 pl-4 pr-3 py-2 rounded-lg text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:translate-x-0.5 transition-all duration-200"
          >
            <Keyboard size={14} className="flex-shrink-0" />
            <span className="flex-1 text-left">Typing test</span>
          </button>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-white/5 mb-6">
          <p className="text-[10px] font-mono text-gray-300 dark:text-gray-700 mb-1">currently</p>
          <p className="text-xs font-mono text-gray-500 dark:text-gray-400">building this portfolio</p>
        </div>

        {renderFooterContent()}
      </div>

      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex fixed top-0 left-0 h-screen w-64 border-r border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 flex-col p-6 transition-colors"
        style={{ animation: 'fadeInUp 0.4s ease-out' }}
      >
        {/* FIX: Replaced desktop layout branding header with standard logo component */}
        {renderLogo(false)}

        <div className="flex gap-3">
          {renderNavList()}
          <div className="relative w-1 bg-gray-100 dark:bg-white/5 rounded-full flex-shrink-0">
            <div
              className="absolute top-0 left-0 w-full bg-gray-900 dark:bg-white rounded-full transition-[height] duration-150 ease-out"
              style={{ height: isHome ? `${scrollProgress}%` : '0%' }}
            />
          </div>
        </div>

        <div className="mt-10 pt-4 border-t border-gray-100 dark:border-white/5">
          <p className="text-[10px] font-mono text-gray-300 dark:text-gray-700 mb-1">currently</p>
          <div className="flex items-center gap-1.5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-gray-400 dark:bg-gray-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
            </span>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400">building this portfolio</p>
          </div>
        </div>

        <div className="mt-auto">
          {renderFooterContent()}
        </div>
      </aside>
    </>
  )
}