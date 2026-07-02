import { useState } from "react"

/**
 * Renders a profile photo with a subtle grayscale/duotone treatment
 * so it sits naturally in the monochrome, mono-font UI — no dithering,
 * no pixelation, just a clean desaturated look with a soft skeleton
 * while it loads.
 */
export default function ProfilePhoto({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative">
      {!loaded && (
        <div
          className={`${className} absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse`}
        />
      )}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-all duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          filter: "grayscale(1) contrast(1.08) brightness(1.02)"
        }}
      />
    </div>
  )
}