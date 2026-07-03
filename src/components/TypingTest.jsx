import { useEffect, useRef, useState, useCallback } from 'react'
import { getRandomSentence } from '../lib/typingSentences'
import { getHighScore, updateHighScore } from '../lib/supabaseClient'

const victorySayings = [
  'Wait... are you a robot? Incredible speed!',
  'Den John is sweating! New champion in the house.',
  'Stop. You\'re making the keyboard melt!',
  'Unreal. Someone call the typing Olympics.',
  'Absolutely cracked. That\'s humanly impossible!',
  'Bow down to the new Typing Deity.',
]

export default function TypingTest() {
  const [isOpen, setIsOpen] = useState(false)
  const [sentence, setSentence] = useState(getRandomSentence())
  const [input, setInput] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [highScore, setHighScore] = useState(112)
  const [isNewRecord, setIsNewRecord] = useState(false)
  const inputRef = useRef(null)

  const isFinished = input.length >= sentence.length
  const wpm = startTime && endTime
    ? Math.round((sentence.split(' ').length / ((endTime - startTime) / 1000)) * 60)
    : null
  const accuracy = input.length
    ? Math.round(
      (input.split('').filter((char, i) => char === sentence[i]).length / input.length) * 100
    )
    : 100

  useEffect(() => {
    async function fetchScore() {
      const dbScore = await getHighScore()
      if (dbScore) setHighScore(dbScore)
    }
    fetchScore()
  }, [])

  useEffect(() => {
    if (isFinished && !endTime) {
      setEndTime(Date.now())
      const currentWpm = Math.round((sentence.split(' ').length / ((Date.now() - startTime) / 1000)) * 60)
      if (currentWpm > highScore) {
        setHighScore(currentWpm)
        setIsNewRecord(true)
        updateHighScore(currentWpm)
      } else {
        setIsNewRecord(false)
      }
    }
  }, [isFinished, endTime, startTime, sentence, highScore])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'g') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  const handleChange = (e) => {
    if (isFinished) return
    if (!startTime) setStartTime(Date.now())
    setInput(e.target.value)
  }

  const handleRestart = useCallback(() => {
    setSentence(getRandomSentence())
    setInput('')
    setStartTime(null)
    setEndTime(null)
    setIsNewRecord(false)
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [])

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="hidden md:flex fixed bottom-18 right-6 items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs font-mono px-4 py-2 rounded-full shadow-lg hover:text-gray-900 dark:hover:text-white transition z-30"
        >
          Typing test
          <span className="text-gray-400">Ctrl + G</span>
        </button>
      )}

      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />}

      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="max-w-xl w-full mx-4 p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-mono text-gray-500">typoterror — challenge den john's speed</p>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xs font-mono">esc</button>
          </div>

          <div className="font-mono text-lg leading-relaxed mb-4 select-none">
            {sentence.split('').map((char, i) => {
              let color = 'text-gray-400 dark:text-gray-500'
              if (i < input.length) {
                color = char === input[i] ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }
              return <span key={i} className={color}>{char}</span>
            })}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            disabled={isFinished}
            placeholder="start typing..."
            className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm rounded-lg px-3 py-2 outline-none disabled:opacity-50 placeholder:text-gray-400 dark:placeholder:text-gray-600"
          />

          {isFinished ? (
            <div className="mt-4 p-4 border border-dashed border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-gray-950/30">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200 dark:border-white/5">
                <div className="flex gap-4 font-mono text-sm">
                  <span className={`font-bold ${isNewRecord ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-900 dark:text-white'}`}>{wpm} WPM</span>
                  <span className="text-gray-500">{accuracy}% accuracy</span>
                </div>
                <button onClick={handleRestart} className="text-xs font-mono text-gray-500 hover:text-gray-900 dark:hover:text-white flex gap-1 items-center">go again ↻</button>
              </div>
              <div className="font-mono text-xs text-center pt-1">
                {isNewRecord ? (
                  <div className="text-yellow-600 dark:text-yellow-400 flex flex-col gap-1.5 items-center">
                    <span className="text-xl">🏆 NEW RECORD! 🏆</span>
                    <span className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{wpm} WPM</span>
                    <span className="italic text-gray-600 dark:text-gray-200">"{victorySayings[Math.floor(Math.random() * victorySayings.length)]}"</span>
                  </div>
                ) : (
                  <div className="text-red-600 dark:text-red-400 flex flex-col gap-1 items-center">
                    <span>You didn't win against den john's current record...</span>
                    <span className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-1.5">{highScore} WPM</span>
                    <span className="text-gray-500 mt-0.5">Try again. Beat the machine!</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-4 flex items-center justify-center pt-2">
              <span className="text-xs font-mono text-gray-500">Current High Score: <span className="text-gray-900 dark:text-gray-400">{highScore} WPM</span></span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}