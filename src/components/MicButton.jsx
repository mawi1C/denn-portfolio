import { Mic, MicOff } from 'lucide-react'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'

/**
 * Drop-in mic button for voice input. Matches the portfolio's existing
 * pill-button / mono-caption visual language (see Sidebar's theme toggle
 * and "currently building" status dot for the same conventions).
 *
 * Usage:
 *   <MicButton onResult={(text) => setInput(text)} />
 *
 * Pass `autoSend` if you want the recognized text submitted immediately
 * instead of just populating the input for the user to review first.
 */
export default function MicButton({ onResult, lang = 'en-US', className = '' }) {
  const { isSupported, isListening, interimTranscript, error, toggle } = useSpeechRecognition({
    lang,
    onFinalResult: onResult,
  })

  if (!isSupported) {
    return (
      <button
        type="button"
        disabled
        title="voice input isn't supported in this browser — try Chrome, Edge, or Safari"
        className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 text-gray-300 dark:text-gray-700 flex items-center justify-center cursor-not-allowed flex-shrink-0"
      >
        <MicOff size={15} />
      </button>
    )
  }

  return (
    <div className={`relative inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={toggle}
        aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
        aria-pressed={isListening}
        className={`relative flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 flex-shrink-0 ${
          isListening
            ? 'border-gray-900 dark:border-white bg-gray-900 dark:bg-white text-white dark:text-gray-900'
            : 'border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30'
        }`}
      >
        {isListening && (
          <span className="absolute inline-flex w-full h-full rounded-full bg-gray-900/30 dark:bg-white/30 animate-ping" />
        )}
        <Mic size={15} className="relative" />
      </button>

      {isListening && (
        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 max-w-[200px] truncate">
          {interimTranscript || 'listening…'}
        </span>
      )}

      {error && !isListening && (
        <span className="text-[10px] font-mono text-red-500 dark:text-red-400 max-w-[200px] truncate">
          {error}
        </span>
      )}
    </div>
  )
}