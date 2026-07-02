export default function TechMarquee({ items }) {
  return (
    <div className="w-full max-w-full">
      <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-3">
        tech I work with
      </p>
      <div className="group relative py-4 border-y border-gray-200 dark:border-white/10" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10" />
        <div
          className="flex gap-10 group-hover:[animation-play-state:paused]"
          style={{
            width: 'max-content',
            animation: 'marquee 25s linear infinite',
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm font-mono text-gray-400 dark:text-gray-600 whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}