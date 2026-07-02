import { languagesFrameworks, softwareTools, technicalSkills, projects, experience } from './portfolioData'

export const knowledgeBase = [
  {
    // Greetings & Warmth
    keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'yo', 'good morning', 'good afternoon'],
    response: "hey there! 👋 glad you stopped by. i'm den john's portfolio assistant. feel free to ask me anything about his coding background, what he loves building, his team capstones, or how his internship went!"
  },
  {
    // "What can you build?" / Focus on specialization & capability
    keywords: ['build', 'specialize', 'type of apps', 'what do you do', 'role', 'capable of'],
    response: `den john specializes in web and mobile development, specifically bridging clean frontend interfaces with solid database logic. he has experience engineering high-performance client architectures, cross-platform mobile apps, and business-focused dashboards like his dental clinic management system.`
  },
  {
    // Teamwork vs Solo Capability (Crucial recruiter question)
    keywords: ['team', 'solo', 'alone', 'collaborate', 'lead developer', 'coor'],
    response: `he can handle both seamlessly. as the lead developer for his capstone project, PawFind, he coordinated workflows over git and github to build an ai-assisted system. but he's equally strong independently—he designed and coded a complete dental clinic management system and a responsive web environment like typo terror all by himself.`
  },
  {
    // Real-world value & problem solving focus
    keywords: ['value', 'problem', 'impact', 'production ready', 'real world'],
    response: `den john focuses on shipping applications that solve actual user pain points. for example, his learning app 'quaestio' is fully published on the google play store with optimized layout cycles. his utility apps like 'napstop' prioritize user wellness intervals, and his 'typo terror' build uses strict real-time metrics to calculate input efficiency.`
  },
  {
    // Tech Stack & Framework preferences
    keywords: ['stack', 'tech', 'skill', 'language', 'framework', 'code', 'database', 'tools'],
    response: `his primary languages and libraries are ${languagesFrameworks.slice(0, 7).join(', ')}, backed by secondary tools like ${languagesFrameworks.slice(7).join(', ')}. on the devops/software side, he sets up workflows with ${softwareTools.slice(0, 6).join(', ')}.`
  },
  {
    // Internship experience & professional background
    keywords: ['intern', 'experience', 'job', 'psa', 'work history', 'philippine statistics authority'],
    response: `den john worked as a ${experience[0].role} at the ${experience[0].org} (${experience[0].date}). while there, he handled sensitive public assets under strict privacy laws and designed automated workflows that directly reduced processing time and daily entry errors.`
  },
  {
    // Availability & hiring mechanics
    keywords: ['hire', 'remote', 'open to work', 'job', 'contact', 'email', 'location', 'work with you'],
    response: `he is actively open to full-time junior/mid engineering positions, including remote, hybrid, or on-site arrangements! you can grab his contact channels right here on the layout page or email him directly.`
  }
]

export const fallbackResponse = "i don't have an exact answer for that phrase, but try asking something conversational like: 'do you prefer working in a team or solo?', 'what technologies do you use?', 'tell me about your psa internship', or 'what kind of apps do you build?'"

export function matchQuestion(input) {
  const normalized = input.toLowerCase().trim()

  for (const entry of knowledgeBase) {
    const matched = entry.keywords.some((keyword) => normalized.includes(keyword))
    if (matched) return entry.response
  }

  return fallbackResponse
}