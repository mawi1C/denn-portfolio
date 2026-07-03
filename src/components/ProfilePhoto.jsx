import { useState } from "react"

export default function ProfilePhoto({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative inline-block">
      {/* Loading Skeleton */}
      {!loaded && (
        <div
          className={`${className} absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse`}
        />
      )}
      
      {/* Main Profile Image */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-all duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Vignette Overlay (Dimmed corners) */}
      <div 
        className={`${className} absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.45) 100%)"
        }}
      />
    </div>
  )
}