import { useState } from 'react'

export default function ShowMoreTags({ items, limit = 10 }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? items : items.slice(0, limit)
  const hasMore = items.length > limit

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {visible.map((s) => (
        <span
          key={s}
          className="text-xs font-mono border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 text-gray-600 dark:text-gray-300"
        >
          {s}
        </span>
      ))}
      {hasMore && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-xs font-mono text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition underline underline-offset-2"
        >
          {expanded ? 'show less' : `+${items.length - limit} more`}
        </button>
      )}
    </div>
  )
}