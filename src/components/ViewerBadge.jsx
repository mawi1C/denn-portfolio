import { usePresence } from '../hooks/usePresence'
import PixelAvatar from './PixelAvatar'

export default function ViewerBadge() {
  const viewers = usePresence()
  const visibleAvatars = viewers.slice(0, 5)
  const extraCount = viewers.length - visibleAvatars.length

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {visibleAvatars.map((id) => (
          <div key={id} className="rounded-full ring-2 ring-white dark:ring-gray-950">
            <PixelAvatar sessionId={id} size={24} />
          </div>
        ))}
        {extraCount > 0 && (
          <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 ring-2 ring-white dark:ring-gray-950 flex items-center justify-center text-[9px] text-gray-700 dark:text-white font-mono">
            +{extraCount}
          </div>
        )}
      </div>
      <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
        {viewers.length} viewing
      </span>
    </div>
  )
}