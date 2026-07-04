import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import BinaryPattern from './BinaryPattern'
import CustomCursor from '../components/CustomCursor'

export default function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      
      {/* Global Custom Cursor */}
      <CustomCursor />

      {/* Fixed, top-right decorative layer */}
      {isHome && <BinaryPattern />}

      {/* Main Content */}
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