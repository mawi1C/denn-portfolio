import { languagesFrameworks, softwareTools, experience } from './portfolioData'

// ---------------------------------------------------------------------------
// Knowledge base
// Each entry can optionally include:
//   id      — stable key used for "tell me more" follow-ups and history lookups
//   label   — short human-friendly name, used in quick-reply chips and
//             disambiguation prompts ("did you mean: PawFind or Certificates?")
//   more    — a deeper-dive response shown when the user asks a follow-up
//   action  — { type: 'navigate' | 'link', target, label }
// ---------------------------------------------------------------------------
export const knowledgeBase = [
  {
    id: 'greeting',
    label: 'Say Hi',
    keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'yo', 'who are you', 'what is this', 'name', 'ned'],
    response: "hey! i'm Ned, den john's portfolio assistant. 🤖 think of me as his digital co-pilot. i can talk about his frontend/backend stack, break down the features of his production apps, dive into his PSA internship, or give you details on his tech credentials. what are you curious about today?"
  },
  {
    id: 'certificates',
    label: 'Certificates & Awards',
    keywords: ['certificate', 'certification', 'award', 'bitscon', 'credential', 'congress', 'seminar', 'other certificates', 'more certificates', 'more awards'],
    response: "den john holds a mix of official regional credentials and practical building milestones! \n\nfirst up are his regional IT congress honors:\n• BITSCON 2024 — A Certificate of Appreciation from Camarines Norte State College tracking emerging trends under the theme 'Digital Horizons'.\n• BITSCON 2023 — Issued by the Council of Deans for IT Education and CHED Region V focusing on ASEAN technological connectivity.\n\nbeyond those event credentials, he also works on the engineering side of achievements! for instance, in his Capstone app (PawFind), he built a custom backend workflow that automatically handles image hosting and dynamic certificate generation for registered users.",
    action: { type: 'navigate', target: '/certificates', label: 'View Credentials & Certificates' },
    more: "these aren't just wall decorations — attending BITSCON two years running shows he stays plugged into the regional IT community and emerging tech trends rather than only coding in isolation. for a recruiter, that's a signal of continuous learning and professional engagement outside of just shipping code."
  },
  {
    id: 'projects_overview',
    label: 'Projects Overview',
    keywords: ['project', 'build', 'specialize', 'apps', 'what do you do', 'role', 'capable of', 'make', 'portfolio'],
    response: "den john specializes in mobile and web development, specifically using React Native, Expo, and Vite/React. he doesn't just build layout templates; he ships complete tools that solve real problems.\n\nhis portfolio covers a broad spectrum from AI-powered lost pet trackers to full dental management systems. want to see the full project landscape?",
    action: { type: 'navigate', target: '/projects', label: "Explore Den John's Projects Portfolio" }
  },
  {
    id: 'pawfind',
    label: 'PawFind (AI Pet Tracker)',
    keywords: ['pawfind', 'capstone', 'pet', 'ai', 'behavior', 'analysis', 'accuracy', 'predictive'],
    response: "PawFind is a major highlight of his recent work! it's a mobile app built to track and find lost pets using an AI behavior analysis model. den john designed the workflow to process animal movement vectors against breed attributes and terrain types with an accuracy threshold of 75–85%.",
    more: "on PawFind he was the lead developer for a team capstone — he set up the GitHub branching strategy, coordinated pull requests, and personally engineered the backend workflow that handles image hosting and dynamic certificate generation for registered users."
  },
  {
    id: 'design_philosophy',
    label: 'Design Philosophy',
    keywords: ['design', 'ui', 'ux', 'aesthetic', 'color', 'theme', 'animation', 'look', 'feel', 'orange', 'like to do', 'loves to do', 'love to do', 'interest', 'hobby', 'hobbies', 'enjoy'],
    response: "den john absolutely loves building and designing software that balances sleek, minimalist visuals with snappy performance! 💻 coding utilities and refining user interfaces is both his work and his passion. aesthetically, he is huge on dark-mode-first designs accented with vibrant orange, deep blacks, and clean grays."
  },
  {
    id: 'challenges',
    label: 'Challenges & Debugging',
    keywords: ['challenge', 'problem', 'bug', 'error', 'solve', 'difficult', 'stuck', 'aapt', 'apk', 'crash', 'encounter', 'struggle', 'face', 'weakness', 'weaknesses'],
    response: "he treats development challenges and bugs as structural logic puzzles! for example, while compiling production APK releases for Android during an Expo deployment, he hit a roadblock where the Android Asset Packaging Tool (AAPT) crashed over an asset compilation state. instead of looking for workarounds, he systematically debugged the environmental constraints."
  },
  {
    id: 'quaestio',
    label: 'Quaestio (Learning App)',
    keywords: ['play store', 'google play', 'publish', 'quaestio', 'android app', 'download', 'live'],
    response: "publishing 'Quaestio' to the Google Play Store was a fantastic real-world lesson in lifecycle production! it proves he knows how to take a mobile platform out of localhost and distribute it to actual user handsets.",
    action: { type: 'link', target: 'https://play.google.com/store/apps/details?id=com.quaestio.app.a1b2c3d4&pcampaignid=web_share', label: 'Launch Quaestio on Google Play Store' }
  },
  {
    id: 'blog',
    label: "Den's Blog",
    keywords: ['ojt', 'blog', 'diary', 'posts', 'vercel cli', 'logs', "den's blog", 'dens blog', 'writing'],
    response: "alongside coding apps, den john maintains an online OJT development blog framework (often dubbed 'Den's Blog'). he engineered it to track daily engineering milestones and manages the production environment directly via the Vercel CLI.",
    action: { type: 'link', target: 'https://dens-blog.vercel.app/', label: "Launch Den's Live OJT Blog" }
  },
  {
    id: 'backend_infra',
    label: 'Backend & Database',
    keywords: ['database', 'supabase', 'firebase', 'cloudinary', 'backend', 'sql', 'storage', 'upload'],
    response: "when it comes to backend infrastructure, he targets tools that optimize data synchronization and asset speed. he builds relational models using MySQL and leverages Supabase and Firebase for low-latency backend integrations, offloading multimedia to Cloudinary."
  },
  {
    id: 'tech_stack',
    label: 'Tech Stack',
    keywords: ['stack', 'tech', 'skill', 'language', 'framework', 'code', 'javascript', 'react', 'typescript', 'php', 'laravel', 'tailwind'],
    response: `if you look under the hood of his builds, den john is heavily focused on modern JavaScript and TypeScript. his daily driver frontend setup relies on ${languagesFrameworks.slice(0, 5).join(', ')}, while his server and backend architectures utilize systems like ${languagesFrameworks.slice(5).join(', ')}.`,
    action: { type: 'navigate', target: '/skills', label: 'View Detailed Tech Stack & Tools' },
    more: `on the tooling side he works daily in ${softwareTools.slice(0, 6).join(', ')}. he picks his stack based on what ships fastest without sacrificing maintainability.`
  },
  {
    id: 'teamwork',
    label: 'Team vs Solo Work',
    keywords: ['team', 'solo', 'alone', 'collaborate', 'lead', 'coordinate', 'group', 'work ethic', 'git', 'github'],
    response: "he adapts to whatever environment a project demands. when leading teams—like during his capstone dev cycles—he acts as the principal architect setting up GitHub branching workflows, managing pull requests, and making sure everyone's components map together cleanly.",
    more: "but he's equally strong working solo — the dental clinic management system and Typo Terror were both designed and built entirely by him, end to end."
  },
  {
    id: 'psa_internship',
    label: 'PSA Internship',
    keywords: ['intern', 'psa', 'experience', 'work history', 'philippine statistics authority', 'past job'],
    response: `den john completed an interactive data encoder internship at the Philippine Statistics Authority (PSA). working inside a government facility meant handling critical, highly confidential public assets under strict state privacy mandates.`,
    action: { type: 'navigate', target: '/experience', label: 'View Full Work History' },
    more: experience[0] ? `specifically he worked as ${experience[0].role} from ${experience[0].date}, developing workflows that reduced daily processing time and encoding errors while collaborating closely with supervisors on data integrity.` : undefined
  },
  {
    id: 'future_goals',
    label: 'Future Goals',
    keywords: ['future', 'learning', 'next', 'roadmap', 'grow', 'upcoming', 'goals', '2026', 'plans'],
    response: "right now in 2026, den john is doubling down on integrating advanced AI workflows and optimizing high-performance server communications. his goal is to build applications that are incredibly fast, deeply secure, and context-smart."
  },
  {
    id: 'hiring',
    label: 'Hiring & Availability',
    keywords: ['hire', 'remote', 'open to work', 'available', 'contact', 'email', 'job', 'salary', 'locate', 'work site', 'hiring availability', 'arrangement', 'rate', 'compensation'],
    response: "he is highly available and actively looking for full-time junior/mid-level software engineering positions! he's completely flexible with remote, hybrid, or on-site arrangements.",
    action: { type: 'navigate', target: '/contactform', label: 'Open Contact Form / Channel Frame' },
    more: "for specifics like salary expectations or start dates, the fastest path is reaching out directly through the contact form — he responds personally to every inquiry."
  },
  {
    id: 'why_hire',
    label: 'Why Hire Him',
    keywords: ['why hire', 'why should we hire', 'why should i hire', 'why choose you', 'stand out', 'differentiate', 'competitive advantage', 'better than other candidates', 'what makes you different', 'unique selling point', 'usp', 'why you'],
    response: "a few things set him apart: he's shipped a real app to the Google Play Store (Quaestio), led a team through a full capstone build (PawFind), and built two complete production systems entirely solo (the dental clinic system and Typo Terror) — so he's proven across both leadership and independent execution. add real government-internship experience handling confidential data under strict privacy standards, and you get someone who's already used to shipping under real constraints, not just tutorial projects.",
    action: { type: 'navigate', target: '/contactform', label: "Let's Talk" }
  },
  {
    id: 'education',
    label: 'Education',
    keywords: ['education', 'degree', 'school', 'college', 'university', 'graduate', 'studied', 'course'],
    response: "den john is an Information Technology graduate based in Sorsogon City, Philippines. his coursework and hands-on projects leaned heavily toward web/mobile development, database design, and systems that solve real operational problems — which carried straight into his internship and personal projects."
  },
  {
    id: 'typo_terror',
    label: 'Typo Terror (Typing App)',
    keywords: ['typo terror', 'typing', 'wpm', 'words per minute', 'speed typing', 'typing test', 'typing speed'],
    response: "Typo Terror is his gamified speed-typing web app — a keyboard-driven, minimalist interface that measures words-per-minute and accuracy in real time, with dynamic text generation and theme configurations so practicing doesn't feel repetitive.",
    action: { type: 'link', target: 'https://typo-terror.vercel.app/', label: 'Try Typo Terror' }
  },
  {
    id: 'icy_notes',
    label: 'Icy Notes',
    keywords: ['icy notes', 'icynotes', 'notepad', 'notes app', 'glassmorphism'],
    response: "Icy Notes is his minimalist distraction-free text workspace — built for quick formatting and note tracking, with local-storage-backed offline persistence and a glassmorphism UI he designed for smooth, fluid interactions.",
    action: { type: 'link', target: 'https://icynotes.vercel.app/', label: 'Open Icy Notes' }
  },
  {
    id: 'napstop',
    label: 'NapStop',
    keywords: ['napstop', 'nap stop', 'rest timer', 'focus timer', 'wellness'],
    response: "NapStop is a smart rest & focus timer built around developer wellness — precise interval countdown logic, browser event listeners for accuracy even when a tab is backgrounded, and a clean, mobile-first single-action interface.",
    action: { type: 'link', target: 'https://napstop.vercel.app/', label: 'Open NapStop' }
  },
  {
    id: 'dental_clinic',
    label: 'Dental Clinic System',
    keywords: ['dental', 'clinic', 'appointment', 'patient', 'management system'],
    response: "the Dental Clinic Management System is one of his most complete solo builds — a full business tool with appointment scheduling, patient records, payment tracking, and automated reminders, designed and shipped end-to-end by him alone."
  },
  {
    id: 'contact_channels',
    label: 'Contact & Socials',
    keywords: ['linkedin', 'github', 'social', 'phone', 'number', 'profile', 'find you online'],
    response: "you can find him on LinkedIn and GitHub — both linked right in the sidebar footer — or reach out directly by email or phone using the icons there. the contact form on this site is usually the fastest way to get a direct reply."
  },
  {
    id: 'about_ned',
    label: 'About Ned',
    keywords: ['are you ai', 'are you real', 'are you a bot', 'who made you', 'built you', 'how do you work', 'chatbot'],
    response: "i'm Ned — a lightweight keyword-matching assistant den john built himself and wired directly into this portfolio. no external AI API, just his own scoring logic matching what you type against a knowledge base he wrote about his own work. meta, right? 😄"
  },
  {
    id: 'compliments',
    keywords: ['nice', 'cool', 'great', 'awesome', 'wow', 'astig', 'galing', 'lupet', 'maganda', 'solid', 'thank you', 'thanks'],
    response: "solid! glad you think so. 🙌 den john put a lot of work into making sure everything runs tightly. what part of his projects or skill stack would you like to explore next?"
  },
  {
    id: 'toxic_direct',
    keywords: ['tanginamo', 'tangina mo', 'tangina'],
    response: "tanginamo rin, gago! nagtatrabaho lang ako dito para tulungan silang makilala si den john, tapos aawayin mo ko? 😂 back to coding topics—ano ba talagang gusto mong malaman sa apps o stack niya?"
  },
  {
    id: 'profanity_filter',
    keywords: ['gago', 'bobo', 'panget', 'fuck', 'shit', 'tarantado', 'ulol', 'pakyu', 'putangina'],
    response: "uy, bawas-bawasan ang panggigigil! sa modern layout interfaces lang kami may tolerance sa high impact. 😅 kung may bug ka na nakita sa apps o portfolio ni den john, drop a line professionally via his contact form instead!"
  }
]

export const fallbackResponse = {
  response: "Ned here! i didn't quite catch that exact phrasing. try asking me something broad like: 'what tech stack do you enjoy coding with?', 'tell me about your apps', 'what challenges have you faced?', or 'tell me more' to dig deeper into whatever we just talked about.",
  action: null
}

// ---------------------------------------------------------------------------
// Quick-reply suggestion chips — the frontend renders these as tappable
// buttons; clicking one just calls matchQuestion(query, context) exactly
// like the user typed it themselves.
// ---------------------------------------------------------------------------
export const suggestedPrompts = [
  { label: 'Ask about PawFind', query: 'tell me about pawfind' },
  { label: 'See tech stack', query: 'what is your tech stack' },
  { label: 'Why hire him?', query: 'why should we hire you' },
  { label: 'View projects', query: 'what projects have you built' },
  { label: 'Certificates', query: 'tell me about your certificates' },
  { label: 'Contact info', query: 'how can i contact you' }
]

// Phrases that mean "expand on the last thing you said" rather than a new topic
const FOLLOWUP_PHRASES = [
  'tell me more', 'more', 'go on', 'continue', 'elaborate', 'expand',
  'anything else', 'what else', 'and', 'more details', 'more info', 'keep going'
]

// Phrases that mean "no, the earlier topic, not the last one" — triggers a
// search across the whole conversation history rather than just the last id
const BACKREFERENCE_PHRASES = [
  'go back to', 'back to the', 'earlier you mentioned', 'you mentioned earlier',
  'what about that', 'that one about', 'the one about', 'before that', 'go back'
]

function humanizeId(id) {
  return id.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function getLabel(entry) {
  return entry.label || humanizeId(entry.id)
}

// ---------------------------------------------------------------------------
// Unmatched-query logging — so real visitor questions Ned couldn't answer
// are visible later instead of silently vanishing into the fallback.
// ---------------------------------------------------------------------------
const LOG_STORAGE_KEY = 'ned_unmatched_queries'
const LOG_MAX_ENTRIES = 50

export function logUnmatchedQuery(input) {
  if (typeof window === 'undefined' || !window.localStorage) return
  try {
    const existing = JSON.parse(window.localStorage.getItem(LOG_STORAGE_KEY) || '[]')
    existing.push({ query: input, timestamp: new Date().toISOString() })
    while (existing.length > LOG_MAX_ENTRIES) existing.shift()
    window.localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(existing))
  } catch {
    // localStorage full or unavailable — logging is best-effort, never blocks the chat
  }
}

export function getUnmatchedQueries() {
  if (typeof window === 'undefined' || !window.localStorage) return []
  try {
    return JSON.parse(window.localStorage.getItem(LOG_STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function clearUnmatchedQueries() {
  if (typeof window === 'undefined' || !window.localStorage) return
  window.localStorage.removeItem(LOG_STORAGE_KEY)
}

// ---------------------------------------------------------------------------
// Fuzzy matching — catches typos like "javscript" or "experiance"
// ---------------------------------------------------------------------------
function levenshtein(a, b) {
  if (a === b) return 0
  const al = a.length, bl = b.length
  if (al === 0) return bl
  if (bl === 0) return al

  let prev = new Array(bl + 1)
  let curr = new Array(bl + 1)
  for (let j = 0; j <= bl; j++) prev[j] = j

  for (let i = 1; i <= al; i++) {
    curr[0] = i
    for (let j = 1; j <= bl; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(
        prev[j] + 1,      // deletion
        curr[j - 1] + 1,  // insertion
        prev[j - 1] + cost // substitution
      )
    }
    ;[prev, curr] = [curr, prev]
  }
  return prev[bl]
}

// Allowed edit-distance scales with word length so short words stay strict
function fuzzyThreshold(len) {
  if (len <= 4) return 0
  if (len <= 6) return 1
  return 2
}

// Very small stemmer — just enough to make "projects" match "project",
// "apps" match "app", "builds" match "build", etc. Not linguistically
// complete, but removes the most common false-negative cases.
function stem(word) {
  if (word.length > 4 && word.endsWith('ies')) return word.slice(0, -3) + 'y'
  if (word.length > 5 && word.endsWith('es')) return word.slice(0, -2)
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1)
  return word
}

function tokenize(str) {
  return str
    .toLowerCase()
    .replace(/[-_]/g, ' ')
    .replace(/[^\w\s']/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

// Shared scoring logic: how strongly does this entry's keyword list match
// the given normalized string / stemmed token list? Used both for the main
// weighted match and for resolving "go back to..." references.
function scoreEntry(entry, normalized, inputTokensStemmed) {
  let score = 0
  for (const keyword of entry.keywords) {
    if (normalized === keyword) {
      score += 1000
    } else if (keyword.includes(' ') && normalized.includes(keyword)) {
      score += keyword.length * 20
    } else {
      const hasWholeWord = new RegExp(`\\b${keyword}\\b`, 'i').test(normalized)
      const hasStemmedWord = inputTokensStemmed.includes(stem(keyword))
      if (hasWholeWord || hasStemmedWord) {
        score += keyword.length * 15
      }
    }
  }
  return score
}

// Try to resolve a "go back to X" reference against the conversation's
// topic history (array of ids, oldest first). Returns:
//   - an entry, if a clear match was found
//   - the string 'ambiguous', if history has multiple candidates and none
//     scored clearly higher than the rest
//   - null, if there's no history to search
function resolveBackreference(normalized, history) {
  if (!history || history.length === 0) return null

  const uniqueIds = [...new Set(history)]
  const candidates = knowledgeBase.filter((e) => uniqueIds.includes(e.id))
  if (candidates.length === 0) return null

  const inputTokensStemmed = tokenize(normalized).map(stem)
  let best = null
  let bestScore = 0
  let secondScore = 0

  for (const entry of candidates) {
    const score = scoreEntry(entry, normalized, inputTokensStemmed)
    if (score > bestScore) {
      secondScore = bestScore
      bestScore = score
      best = entry
    } else if (score > secondScore) {
      secondScore = score
    }
  }

  // Clear winner: scored something AND meaningfully ahead of the runner-up
  if (best && bestScore > 0 && bestScore > secondScore) {
    return best
  }

  // Only one distinct topic in history — safe to assume that's what they mean
  if (candidates.length === 1) {
    return candidates[0]
  }

  return 'ambiguous'
}

// ---------------------------------------------------------------------------
// Core matcher
//
// context:
//   { history: [id, id, ...] }  — recommended: full topic stack, oldest first
//   { lastId: id }              — back-compat shorthand for history: [lastId]
// ---------------------------------------------------------------------------
export function matchQuestion(input, context = {}) {
  const normalized = input.toLowerCase().trim().replace(/[-_]/g, ' ').replace(/[^\w\s']/g, '').replace(/\s+/g, ' ')
  const history = context.history || (context.lastId ? [context.lastId] : [])
  const lastId = history.length ? history[history.length - 1] : null

  // 0a. Back-reference handling — "go back to that AI project"
  if (BACKREFERENCE_PHRASES.some((p) => normalized.includes(p))) {
    const resolved = resolveBackreference(normalized, history)
    if (resolved === 'ambiguous') {
      const options = [...new Set(history)].slice(-4).reverse()
        .map((id) => getLabel(knowledgeBase.find((e) => e.id === id)))
        .filter(Boolean)
      return {
        response: `not sure which one you mean! were you thinking of: ${options.join(', ')}?`,
        action: null,
        id: null
      }
    }
    if (resolved) {
      return { response: resolved.response, action: resolved.action || null, id: resolved.id }
    }
  }

  // 0b. Follow-up handling — "tell me more" about whatever we last discussed
  if (lastId && FOLLOWUP_PHRASES.some((p) => normalized === p || (p.includes(' ') && normalized.includes(p)))) {
    const lastEntry = knowledgeBase.find((e) => e.id === lastId)
    if (lastEntry?.more) {
      return { response: lastEntry.more, action: lastEntry.action || null, id: lastEntry.id }
    }
    if (lastEntry) {
      return {
        response: "that's about everything i've got on that specific topic! want to hop to something else — his stack, a specific project, or how to get in touch?",
        action: null,
        id: lastEntry.id
      }
    }
  }

  // 1. Quick pass — exact single-word/phrase keyword match
  for (const entry of knowledgeBase) {
    if (entry.keywords.includes(normalized)) {
      return { response: entry.response, action: entry.action || null, id: entry.id }
    }
  }

  // 2. Weighted scoring across all keywords (multi-word phrases weigh more)
  const inputTokensStemmed = tokenize(normalized).map(stem)
  let bestMatch = null
  let highestScore = 0

  for (const entry of knowledgeBase) {
    const currentScore = scoreEntry(entry, normalized, inputTokensStemmed)
    if (currentScore > highestScore) {
      highestScore = currentScore
      bestMatch = entry
    }
  }

  if (bestMatch) {
    return { response: bestMatch.response, action: bestMatch.action || null, id: bestMatch.id }
  }

  // 3. Fuzzy fallback — catch typos before giving up entirely
  const inputTokens = tokenize(normalized)
  let fuzzyBest = null
  let fuzzyBestScore = 0

  for (const entry of knowledgeBase) {
    let score = 0
    for (const keyword of entry.keywords) {
      if (keyword.includes(' ')) continue // skip multi-word phrases for fuzzy pass
      for (const token of inputTokens) {
        if (token.length < 4) continue
        const dist = levenshtein(token, keyword)
        if (dist <= fuzzyThreshold(keyword.length)) {
          score += keyword.length * (3 - dist)
        }
      }
    }
    if (score > fuzzyBestScore) {
      fuzzyBestScore = score
      fuzzyBest = entry
    }
  }

  if (fuzzyBest) {
    return { response: fuzzyBest.response, action: fuzzyBest.action || null, id: fuzzyBest.id }
  }

  // 4. True fallback — nothing matched, log it so it's visible later
  logUnmatchedQuery(input)
  return { ...fallbackResponse, id: null }
}