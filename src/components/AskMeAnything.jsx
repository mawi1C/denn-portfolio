import { useEffect, useState, useRef } from 'react'
import { matchQuestion } from '../lib/matchQuestion'
import { Bot, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import MicButton from './MicButton'

export default function AskMeAnything() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [chatLog, setChatLog] = useState([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const inputRef = useRef(null)
  const logEndRef = useRef(null)
  const navigate = useNavigate()

  const suggestions = [
    { label: 'tell me about your certifications', query: 'tell me about your bitscon certificates' },
    { label: 'what is pawfind app accuracy?', query: 'what is the accuracy percentage of pawfind?' },
    { label: 'team vs solo coding?', query: 'do you prefer working in a team or solo?' }
  ]

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

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatLog, isAnalyzing])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  const executeQuery = (questionText) => {
    if (!questionText.trim() || isAnalyzing) return

    setChatLog((prev) => [...prev, { type: 'question', text: questionText }])
    setInput('')
    setIsAnalyzing(true)

    setTimeout(() => {
      const result = matchQuestion(questionText)
      setChatLog((prev) => [...prev, {
        type: 'answer',
        text: result.response,
        action: result.action
      }])
      setIsAnalyzing(false)
    }, 700)
  }

  const handleActionClick = (action) => {
    if (action.type === 'navigate') {
      navigate(action.target)
      setIsOpen(false)
    } else if (action.type === 'link') {
      window.open(action.target, '_blank', 'noopener,noreferrer')
    }
  }

  const handleAsk = (e) => {
    e.preventDefault()
    executeQuery(input)
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs font-mono px-4 py-2.5 rounded-full shadow-lg hover:text-black dark:hover:text-white transition z-30 group"
        >
          <span>Ask Ned anything</span>
          <span className="hidden sm:inline text-gray-400 group-hover:text-gray-500 transition">Ctrl + K</span>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-md z-40 touch-none"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 h-[100dvh] w-full sm:w-[440px] bg-white dark:bg-gray-950 border-l border-gray-100 dark:border-white/5 z-50 transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6 sm:p-8">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600 tracking-wider">Ned — portfolio assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-black dark:hover:text-white text-xs font-mono border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition"
            >
              esc
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-1 scrollbar-none flex flex-col">
            {chatLog.length === 0 && (
              <div className="mt-4 space-y-8">
                <div className="font-mono text-2xl text-gray-800 dark:text-gray-200 tracking-tight leading-snug">
                  ask Ned a question...
                </div>
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

            {chatLog.map((entry, i) =>
              entry.type === 'question' ? (
                <div key={i} className="self-end max-w-[85%]">
                  <div className="bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-mono text-xs rounded-2xl rounded-tr-none px-4 py-3">
                    {entry.text}
                  </div>
                </div>
              ) : (
                <div key={i} className="self-start max-w-[90%] space-y-2">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider pl-1">
                    <Bot size={12} />
                    <span className="font-bold">Ned</span>
                  </div>
                  <div className="font-mono text-xs text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-4 rounded-2xl rounded-tl-none whitespace-pre-line">
                    {entry.text}
                  </div>
                  {entry.action && (
                    <button
                      onClick={() => handleActionClick(entry.action)}
                      className="flex items-center justify-between w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-gray-600 transition-all group"
                    >
                      <span className="text-[11px] font-mono text-gray-900 dark:text-gray-200">{entry.action.label}</span>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                    </button>
                  )}
                </div>
              )
            )}
            <div ref={logEndRef} />
          </div>

          <form onSubmit={handleAsk} className="mt-4 pt-4 pb-2 border-t border-gray-200 dark:border-white/10 shrink-0 flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ask Ned a question..."
              className="flex-1 min-w-0 bg-transparent text-gray-900 dark:text-white font-mono text-xs outline-none"
            />
            <MicButton
              onResult={(transcript) => {
                setInput(transcript)
                inputRef.current?.focus()
              }}
            />
          </form>
        </div>
      </div>
    </>
  )
}