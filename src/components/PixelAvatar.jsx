import { seedFromId } from '../lib/avatarSeed'
import { getTraitsFromSeed } from '../lib/avatarTraits'

export default function PixelAvatar({ sessionId, size = 32 }) {
  const seed = seedFromId(sessionId)
  const { skin, hair, bg } = getTraitsFromSeed(seed)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      shapeRendering="crispEdges"
      style={{ borderRadius: '50%', background: bg, flexShrink: 0, display: 'block' }}
    >
      <rect x="6" y="3" width="8" height="2" fill={hair} />
      <rect x="5" y="5" width="2" height="2" fill={hair} />
      <rect x="13" y="5" width="2" height="2" fill={hair} />
      <rect x="6" y="5" width="8" height="8" fill={skin} />
      <rect x="6" y="13" width="8" height="1" fill={hair} />
      <rect x="7" y="8" width="2" height="2" fill="#1a1a1a" />
      <rect x="11" y="8" width="2" height="2" fill="#1a1a1a" />
      <rect x="8" y="9" width="1" height="1" fill="#ffffff" />
      <rect x="12" y="9" width="1" height="1" fill="#ffffff" />
      <rect x="9" y="11" width="2" height="1" fill={hair} />
    </svg>
  )
}