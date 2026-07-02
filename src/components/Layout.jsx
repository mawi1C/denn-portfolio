import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Sidebar />
      <main className="pt-20 md:pt-12 pb-32 md:pb-12 px-6 md:px-16 md:ml-64">
        <div className="max-w-2xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}