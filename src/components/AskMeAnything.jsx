import { useEffect, useState, useRef } from 'react'
import { matchQuestion } from '../lib/matchQuestion'

export default function AskMeAnything() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState([]) // { type: 'question' | 'answer', text }
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const inputRef = useRef(null)
  const logEndRef = useRef(null)

  // Quick action tags matching your exact keywords
  const suggestions = [
    { label: 'team vs solo work?', query: 'do you prefer working in a team or solo?' },
    { label: 'what do you build?', query: 'what type of apps do you specialize in?' },
    { label: 'internship experience', query: 'tell me about your workflow at the psa' }
  ]

  // 1. Keyboard Shortcuts (Toggle with Cmd/Ctrl+K, close with Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // 2. iOS-Safe Background Scroll Lock
  useEffect(() => {
    if (isOpen) {
      // iOS requires locking both html and body to truly stop scrolling
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none' // Prevents bounce effect
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.overscrollBehavior = ''
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.overscrollBehavior = ''
    }
  }, [isOpen])

  // 3. Auto-scroll chat view as content updates
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatLog, isAnalyzing])

  // 4. Focus input when drawer opens
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  const executeQuery = (questionText) => {
    if (!questionText.trim() || isAnalyzing) return

    setChatLog((prev) => [...prev, { type: 'question', text: questionText }])
    setInput('')
    setIsAnalyzing(true)

    setTimeout(() => {
      const answer = matchQuestion(questionText)
      setChatLog((prev) => [...prev, { type: 'answer', text: answer }])
      setIsAnalyzing(false)
    }, 700)
  }

  const handleAsk = (e) => {
    e.preventDefault()
    executeQuery(input)
  }

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs font-mono px-4 py-2.5 rounded-full shadow-lg hover:text-black dark:hover:text-white transition z-30 group"
        >
          <span>Ask me anything</span>
          <span className="hidden sm:inline text-gray-400 group-hover:text-gray-500 transition">Ctrl + K</span>
        </button>
      )}

      {/* Backdrop overlay filter */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-md z-40 touch-none"
          onClick={() => setIsOpen(false)}
          onTouchMove={(e) => e.preventDefault()} // Stops scroll-bleed on mobile
        />
      )}

      {/* Sidebar Panel Drawer Container */}
      {/* FIXED: Changed h-full to h-[100dvh] so it resizes properly when iOS keyboard opens */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-full sm:w-[440px] bg-white dark:bg-gray-950 border-l border-gray-100 dark:border-white/5 z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 sm:p-8">
          {/* Header Action Row */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600 tracking-wider">portfolio assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-black dark:hover:text-white text-xs font-mono border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition"
            >
              esc
            </button>
          </div>

          {/* Active Logs Messaging Screen Container */}
          <div className="flex-1 overflow-y-auto space-y-6 pr-1 scrollbar-none flex flex-col">
            {chatLog.length === 0 && (
              <div className="mt-4 space-y-8">
                <div className="font-mono text-2xl text-gray-800 dark:text-gray-200 tracking-tight leading-snug">
                  what do you want to ask?
                  <span className="inline-block w-[2px] h-6 bg-gray-800 dark:bg-gray-200 ml-1 animate-pulse align-middle" />
                </div>

                {/* Embedded dynamic quick suggestions panel */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest">Suggested Queries</p>
                  <div className="flex flex-col gap-1.5 items-start">
                    {suggestions.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => executeQuery(s.query)}
                        className="text-xs font-mono text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline transition text-left"
                      >
                        → {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Maps current conversational thread entries */}
            {chatLog.map((entry, i) =>
              entry.type === 'question' ? (
                <div key={i} className="self-end max-w-[85%]">
                  <div className="bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-mono text-xs rounded-2xl rounded-tr-none px-4 py-3">
                    {entry.text}
                  </div>
                </div>
              ) : (
                <div key={i} className="self-start max-w-[90%] font-mono text-xs text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-4 rounded-2xl rounded-tl-none">
                  {entry.text}
                </div>
              )
            )}

            {/* Waiting feedback indicator frame */}
            {isAnalyzing && (
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400 dark:text-gray-500 self-start">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" />
                </span>
                analyzing profile matrix...
              </div>
            )}
            <div ref={logEndRef} />
          </div>

          {/* Interactive Core Form Input Tray */}
          <form onSubmit={handleAsk} className="mt-4 pt-4 pb-2 border-t border-gray-200 dark:border-white/10 shrink-0">
            <input
              ref={inputRef}
              type="text"
              placeholder={isAnalyzing ? "Analyzing statement..." : "type your question and press enter..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isAnalyzing}
              className="w-full bg-transparent text-gray-900 dark:text-white font-mono text-base sm:text-xs placeholder-gray-400 dark:placeholder-gray-600 outline-none disabled:opacity-50 py-1"
            />
          </form>
        </div>
      </div>
    </>
  )
}