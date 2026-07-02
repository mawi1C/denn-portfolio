export const skinTones = ['#c9a98a', '#3d2b1f', '#e0b896', '#a87858', '#f0c9a0', '#8a5a3a']
export const hairColors = ['#1a1a1a', '#ffffff', '#5a4632', '#2a2a28', '#0a0a0a', '#3a3a38']
export const backgrounds = ['#1a1a1a', '#ffffff', '#8a8a82', '#e8e6dc']

export function getTraitsFromSeed(seed) {
  return {
    skin: skinTones[seed % skinTones.length],
    hair: hairColors[Math.floor(seed / skinTones.length) % hairColors.length],
    bg: backgrounds[Math.floor(seed / (skinTones.length * hairColors.length)) % backgrounds.length],
  }
}