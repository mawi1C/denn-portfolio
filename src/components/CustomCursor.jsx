import { useEffect, useState } from 'react'
import { Navigation, Hand, TextCursor, ExternalLink, Maximize2 } from 'lucide-react'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorType, setCursorType] = useState('default')

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const target = e.target
      
      const cursorElement = target.closest('[data-cursor]')
      
      if (cursorElement) {
        setCursorType(cursorElement.getAttribute('data-cursor'))
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setCursorType('pointer')
      } else if (
        target.tagName.toLowerCase() === 'p' ||
        target.tagName.toLowerCase() === 'h1' ||
        target.tagName.toLowerCase() === 'h2' ||
        target.tagName.toLowerCase() === 'h3' ||
        target.tagName.toLowerCase() === 'span'
      ) {
        setCursorType('text')
      } else {
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  const renderIcon = () => {
    // Keep the core icon color static
    const iconClass = "text-gray-900 dark:text-white"

    switch (cursorType) {
      case 'pointer':
        return <Hand size={15} className={iconClass} strokeWidth={1.5} fill="currentColor" />
      case 'external':
        return <ExternalLink size={17} className={iconClass} strokeWidth={2.5} />
      case 'zoom':
        return <Maximize2 size={17} className={iconClass} strokeWidth={2.5} />
      case 'text':
        return <TextCursor size={15} className={iconClass} strokeWidth={2} />
      default:
        return <Navigation size={15} className={`${iconClass} -rotate-90`} strokeWidth={2} fill="currentColor" />
    }
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      <div
        className="absolute flex items-center justify-center transition-opacity duration-200 ease-in-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-20%, -20%)`,
        }}
      >
        <div 
          key={cursorType} 
          // The magic happens here: A tight white drop-shadow for light mode, black for dark mode
          className="animate-in fade-in zoom-in-75 duration-200 drop-shadow-[0_0_3px_rgba(255,255,255,1)] dark:drop-shadow-[0_0_3px_rgba(0,0,0,1)]"
        >
          {renderIcon()}
        </div>
      </div>
    </div>
  )
}