import { useMemo } from 'react'

const COLS = 20
const ROWS = 14

// A few gray/opacity steps so the digits read as mottled static noise
// (like the reference image) instead of a flat, uniform block. Each
// entry pairs a light-mode shade with its dark-mode counterpart.
const SHADES = [
  'text-gray-200 dark:text-white/[0.06]',
  'text-gray-300 dark:text-white/[0.10]',
  'text-gray-400 dark:text-white/[0.16]',
]

export default function BinaryPattern() {
  // Precompute once per mount so the digits don't reshuffle on re-render.
  const cells = useMemo(() => {
    const grid = []
    for (let i = 0; i < COLS * ROWS; i++) {
      grid.push({
        char: Math.random() > 0.5 ? '1' : '0',
        shade: SHADES[Math.floor(Math.random() * SHADES.length)],
      })
    }
    return grid
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none fixed top-0 right-0 hidden md:block
                 w-[260px] h-[200px] lg:w-[320px] lg:h-[240px]"
      style={{
        WebkitMaskImage:
          'linear-gradient(225deg, black 0%, black 30%, transparent 78%)',
        maskImage:
          'linear-gradient(225deg, black 0%, black 30%, transparent 78%)',
      }}
    >
      <div
        className="grid w-full h-full font-mono text-[10px] leading-none"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {cells.map((cell, i) => (
          <span key={i} className={`flex items-center justify-center ${cell.shade}`}>
            {cell.char}
          </span>
        ))}
      </div>
    </div>
  )
}