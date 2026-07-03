// Large, faint watermark icon for the bottom-right corner of a section.
// Works with any lucide-react icon component, or a custom SVG component
// built the same way (accepts className, renders an <svg>).
// Purely decorative — hidden from assistive tech, never intercepts clicks.
//
// Usage: the parent <section> needs `relative overflow-hidden` for this
// to clip and position correctly:
//   <section className="relative overflow-hidden ...">
//     ...content...
//     <SectionIcon icon={Code2} />
//   </section>
export default function SectionIcon({
  icon: Icon,
  position = 'bottom-2 -right-4 sm:bottom-2 sm:-right-5',
  className = '',
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute ${position}
                  text-gray-100 dark:text-white/[0.05] ${className}`}
    >
      <Icon className="w-20 h-20 sm:w-36 sm:h-26 md:w-34 md:h-34" strokeWidth={3} />
    </div>
  )
}