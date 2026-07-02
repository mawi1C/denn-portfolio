export const typingSentences = [
  "I'm a full-stack developer who loves building with React, Node.js, and Supabase.",
  "Clean code and good coffee are the two things I can't work without.",
  "I turn ideas into real, working products — one commit at a time.",
  "Currently exploring AI-powered tools and real-time web experiences.",
  "This portfolio was built with React, Tailwind, and a bit of stubbornness.",
]

export function getRandomSentence() {
  return typingSentences[Math.floor(Math.random() * typingSentences.length)]
}