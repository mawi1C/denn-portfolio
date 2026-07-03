import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import BinaryPattern from './BinaryPattern'

export default function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Fixed, top-right decorative layer — stays put while the page
          scrolls. Rendered outside <main> as a sibling, so it isn't tied
          to the hero's height or clipped by the content column's padding.
          Home route only. */}
      {isHome && <BinaryPattern />}

      {/* Everything else sits in its own stacking context above the wave,
          regardless of DOM order, so Sidebar/main always paint on top. */}
      <div className="relative z-10">
        <Sidebar />
        <main className="pt-20 md:pt-12 pb-32 md:pb-12 px-6 md:px-16 md:ml-64">
          <div className="max-w-2xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}