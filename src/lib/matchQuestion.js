import { languagesFrameworks, softwareTools, technicalSkills, projects, experience } from './portfolioData'

export const knowledgeBase = [
  {
    // Specific direct comeback for toxic behavior
    keywords: ['tanginamo', 'tangina mo', 'tangina'],
    response: "tanginamo rin, gago! wag mo kong ma-tangina tangina dito, nagtatrabaho lang ako. back to business: may tatanungin ka ba tungkol sa portfolio ni den john o trip mo lang mang-away?"
  },
  {
    // Professional handling for other common profanities/insults
    keywords: ['gago', 'bobo', 'panget', 'fuck', 'shit', 'asshole', 'tarantado', 'ulol', 'pakyu', 'putangina'],
    response: "hey, let's keep it clean! 😅 i'm just an ai running on loops here, but if you have feedback about den john's web designs or features, you can drop him a professional message via the email form below. anyway, what actually brought you here today?"
  },
  {
    // Human responses for compliments & positive feedback
    keywords: ['nice', 'cool', 'great', 'awesome', 'wow', 'astig', 'galing', 'lupet', 'maganda', 'solid', 'thank you', 'thanks'],
    response: "appreciate the good vibes! ✨ den john put a lot of work into optimizing these layout constraints and features. let me know if you want to know how he built a specific app or if you're looking to hire him!"
  },
  {
    // Greetings & Introductions
    keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'yo', 'good morning', 'good afternoon', 'who are you', 'what is this'],
    response: "hey there! 👋 i'm den john's custom portfolio assistant. i can break down his tech stack, give you the scoop on his latest production apps, explain his role in team capstones, or tell you about his data encoding internship. what's on your mind?"
  },
  {
    // "What does den love" / Passion / Interests
    keywords: ['love', 'passion', 'like to', 'interest', 'hobby', 'enjoy', 'motivation', 'favorite'],
    response: "den john loves building apps that aren't just functional, but engaging and smooth to use! he's highly interested in gamified mechanics (like typo terror), interactive mobile environments (like quaestio), and integrating smart tools like ai to solve daily problems (like pawfind). overall, he loves clean design, minimizing latency, and coding wellness tools that keep developers productive."
  },
  {
    // "Coding background" / Education / How he started
    keywords: ['coding background', 'background', 'education', 'how long', 'history', 'experience level', 'study', 'student', 'graduate'],
    response: `den john has built a solid foundations in web and mobile engineering across recent years. his practical background includes building indie systems independently, leading a team capstone project as the principal engineer, and completing a professional data encoder internship at the philippine statistics authority.`
  },
  {
    // "What can you build?" / Core capabilities
    keywords: ['build', 'specialize', 'type of apps', 'what do you do', 'role', 'capable of', 'make'],
    response: `he specializes in cross-platform mobile environments and responsive web design. his portfolio shows he can ship anything from minimalist utility toolkits (icy notes, napstop) to complex business ecosystems (dental clinic management system) and distributed play store mobile platforms (quaestio).`
  },
  {
    // Tech Stack & Programming Languages
    keywords: ['stack', 'tech', 'skill', 'language', 'framework', 'code', 'database', 'tools', 'javascript', 'react', 'php', 'laravel'],
    response: `his engineering stack includes ${languagesFrameworks.slice(0, 6).join(', ')}, with additional expertise in ${languagesFrameworks.slice(6).join(', ')}. he manages deployments and code organization utilizing tools like ${softwareTools.slice(0, 6).join(', ')}.`
  },
  {
    // Teamwork vs Solo Work
    keywords: ['team', 'solo', 'alone', 'collaborate', 'lead developer', 'coor', 'group'],
    response: "he thrives in both environments! as the lead developer for 'pawfind', he orchestrated git workflows and kept team modules organized. on the other hand, he built his entire dental clinic management system completely solo, showing he doesn't need hand-holding to take a product from design to deployment."
  },
  {
    // Internship / PSA
    keywords: ['intern', 'psa', 'work history', 'philippine statistics authority', 'job'],
    response: `den john interned as a ${experience[0].role} at the ${experience[0].org} (${experience[0].date}). he handled highly confidential public information while designing data entry workflows that optimized processing speeds and eliminated standard human logging errors.`
  },
  {
    // Hiring / Availability
    keywords: ['hire', 'remote', 'open to work', 'available', 'contact', 'email', 'job', 'work with you'],
    response: "yes, den john is actively looking for new opportunities! he's open to full-time junior or mid-level developer roles across on-site, hybrid, or remote environments. you can click his contact buttons or shoot him an email directly from the main page to start chatting!"
  }
]

export const fallbackResponse = "i'm not entirely sure I caught that! try asking me things like: 'what does den love to build?', 'what is his tech stack?', 'tell me about his team capstone', or 'is he open to remote work?'"

export function matchQuestion(input) {
  const normalized = input.toLowerCase().trim()

  let bestMatch = null
  let highestScore = 0

  for (const entry of knowledgeBase) {
    let currentScore = 0
    
    for (const keyword of entry.keywords) {
      // Direct exact match gets massive priority boost
      if (normalized === keyword) {
        currentScore += 1000
      }
      // Substring match gets standard scoring based on matched keyword lengths
      else if (normalized.includes(keyword)) {
        currentScore += keyword.length
      }
    }

    if (currentScore > highestScore) {
      highestScore = currentScore
      bestMatch = entry.response
    }
  }

  return bestMatch ? bestMatch : fallbackResponse
}