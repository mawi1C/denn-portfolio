import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import CommunityChat from '../components/CommunityChat'

export default function ChatPage() {
  return (
    <section className="py-20">
      <Link to="/" className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition mb-8">
        <ArrowLeft size={14} /> back
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
        community chat
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-md">
        Say hi, leave a note, or just see who else is checking out the site right now.
      </p>

      <CommunityChat />
    </section>
  )
}