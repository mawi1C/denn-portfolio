import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Wraps the browser's native Web Speech API (SpeechRecognition /
 * webkitSpeechRecognition). No external dependencies, no API keys —
 * this runs entirely client-side in supported browsers (Chrome, Edge,
 * Safari; Firefox does not currently support it natively).
 *
 * @param {object} options
 * @param {string} options.lang - BCP-47 language tag, e.g. 'en-US' or 'fil-PH'
 * @param {(text: string) => void} options.onFinalResult - called once per
 *   finished utterance with the recognized text
 */
export function useSpeechRecognition({ lang = 'en-US', onFinalResult } = {}) {
  const recognitionRef = useRef(null)
  const [isSupported, setIsSupported] = useState(true)
  const [isListening, setIsListening] = useState(false)
  const [interimTranscript, setInterimTranscript] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const SpeechRecognitionImpl =
      typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition)

    if (!SpeechRecognitionImpl) {
      setIsSupported(false)
      return
    }

    const recognition = new SpeechRecognitionImpl()
    recognition.lang = lang
    recognition.continuous = false
    recognition.interimResults = true
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      setIsListening(true)
      setError(null)
    }

    recognition.onresult = (event) => {
      let interim = ''
      let final = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          final += transcript
        } else {
          interim += transcript
        }
      }
      setInterimTranscript(interim)
      if (final.trim()) {
        onFinalResult?.(final.trim())
        setInterimTranscript('')
      }
    }

    recognition.onerror = (event) => {
      const messages = {
        'no-speech': "didn't catch that — try again",
        'audio-capture': 'no microphone found',
        'not-allowed': 'microphone access was blocked',
        network: 'network error during voice input',
      }
      setError(messages[event.error] || 'voice input error')
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
      setInterimTranscript('')
    }

    recognitionRef.current = recognition

    return () => {
      recognition.onstart = null
      recognition.onresult = null
      recognition.onerror = null
      recognition.onend = null
      try {
        recognition.abort()
      } catch {
        // already stopped — safe to ignore
      }
    }
  }, [lang, onFinalResult])

  const start = useCallback(() => {
    if (!recognitionRef.current || isListening) return
    setError(null)
    try {
      recognitionRef.current.start()
    } catch {
      // start() throws if a recognition session is already active — ignore
    }
  }, [isListening])

  const stop = useCallback(() => {
    recognitionRef.current?.stop()
  }, [])

  const toggle = useCallback(() => {
    if (isListening) {
      stop()
    } else {
      start()
    }
  }, [isListening, start, stop])

  return { isSupported, isListening, interimTranscript, error, start, stop, toggle }
}