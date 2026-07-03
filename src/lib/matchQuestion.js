import { languagesFrameworks, softwareTools, experience } from './portfolioData'

export const knowledgeBase = [
  {
    // 1. Greetings, Identity & General Chat
    keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'yo', 'who are you', 'what is this', 'name', 'ned'],
    response: "hey! i'm Ned, den john's portfolio assistant. 🤖 think of me as his digital co-pilot. i can talk about his frontend/backend stack, break down the features of his production apps, dive into his PSA internship, or give you details on his tech credentials. what are you curious about today?"
  },
  {
    // 2. Broad Certifications, Awards, and Achievements
    keywords: ['certificate', 'certification', 'award', 'bitscon', 'credential', 'congress', 'seminar', 'other', 'more'],
    response: "den john holds a mix of official regional credentials and practical building milestones! \n\nfirst up are his regional IT congress honors:\n• BITSCON 2024 — A Certificate of Appreciation from Camarines Norte State College tracking emerging trends under the theme 'Digital Horizons'.\n• BITSCON 2023 — Issued by the Council of Deans for IT Education and CHED Region V focusing on ASEAN technological connectivity.\n\nbeyond those event credentials, he also works on the engineering side of achievements! for instance, in his Capstone app (PawFind), he built a custom backend workflow that automatically handles image hosting and dynamic certificate generation for registered users.",
    action: {
      type: 'navigate',
      target: '/certificates', // Change to your actual route name
      label: 'View Credentials & Certificates'
    }
  },
  {
    // 3. Complete Project Landscape & Core Specialization
    keywords: ['project', 'build', 'specialize', 'apps', 'what do you do', 'role', 'capable of', 'make', 'portfolio'],
    response: "den john specializes in mobile and web development, specifically using React Native, Expo, and Vite/React. he doesn't just build layout templates; he ships complete tools that solve real problems.\n\nhis portfolio covers a broad spectrum from AI-powered lost pet trackers to full dental management systems. want to see the full project landscape?",
    action: {
      type: 'navigate',
      target: '/projects', // Change to your actual route name
      label: 'Explore Den John\'s Projects Portfolio'
    }
  },
  {
    // 4. Marquee Project Deep-Dive (PawFind & AI Capability)
    keywords: ['pawfind', 'capstone', 'pet', 'ai', 'behavior', 'analysis', 'accuracy', 'predictive'],
    response: "PawFind is a major highlight of his recent work! it's a mobile app built to track and find lost pets using an AI behavior analysis model. den john designed the workflow to process animal movement vectors against breed attributes and terrain types with an accuracy threshold of 75–85%.",
  },
  {
    // 5. UI/UX Design Philosophy, Aesthetic Preferences, Hobbies & What he loves to do
    keywords: ['design', 'ui', 'ux', 'aesthetic', 'color', 'theme', 'animation', 'look', 'feel', 'orange', 'like to do', 'loves to do', 'love to do', 'interest', 'hobby', 'hobbies', 'enjoy'],
    response: "den john absolutely loves building and designing software that balances sleek, minimalist visuals with snappy performance! 💻 coding utilities and refining user interfaces is both his work and his passion. aesthetically, he is huge on dark-mode-first designs accented with vibrant orange, deep blacks, and clean grays."
  },
  {
    // 6. Troubleshooting, Debugging under pressure, and Heavy Bugs
    keywords: ['challenge', 'problem', 'bug', 'error', 'solve', 'difficult', 'stuck', 'aapt', 'apk', 'crash', 'encounter', 'struggle', 'face'],
    response: "he treats development challenges and bugs as structural logic puzzles! for example, while compiling production APK releases for Android during an Expo deployment, he hit a roadblock where the Android Asset Packaging Tool (AAPT) crashed over an asset compilation state. instead of looking for workarounds, he systematically debugged the environmental constraints."
  },
  {
    // 7. Publishing Milestones & Production Releases (Quaestio Deep-dive)
    keywords: ['play store', 'google play', 'publish', 'quaestio', 'android app', 'download', 'live'],
    response: "publishing 'Quaestio' to the Google Play Store was a fantastic real-world lesson in lifecycle production! it proves he knows how to take a mobile platform out of localhost and distribute it to actual user handsets.",
    action: {
      type: 'link',
      target: 'https://play.google.com/store/apps/details?id=com.quaestio.app.a1b2c3d4&pcampaignid=web_share', // Replace with actual Play Store URL if available
      label: 'Launch Quaestio on Google Play Store'
    }
  },
  {
    // 8. OJT Logging, Daily Blogs, and Vercel Deployments
    keywords: ['ojt', 'blog', 'diary', 'posts', 'vercel cli', 'logs', 'dens blog', 'writing'],
    response: "alongside coding apps, den john maintains an online OJT development blog framework (often dubbed 'Den's Blog'). he engineered it to track daily engineering milestones and manages the production environment directly via the Vercel CLI.",
    action: {
      type: 'link',
      target: 'https://dens-blog.vercel.app/', // Replace with your actual deployed live blog link
      label: 'Launch Den\'s Live OJT Blog'
    }
  },
  {
    // 9. Database Architectures, Image Hosting, and Cloud Pipelines
    keywords: ['database', 'supabase', 'firebase', 'cloudinary', 'backend', 'sql', 'storage', 'upload'],
    response: "when it comes to backend infrastructure, he targets tools that optimize data synchronization and asset speed. he builds relational models using MySQL and leverages Supabase and Firebase for low-latency backend integrations, offloading multimedia to Cloudinary."
  },
  {
    // 10. Technical Stack & Preferences
    keywords: ['stack', 'tech', 'skill', 'language', 'framework', 'code', 'database', 'tools', 'javascript', 'react', 'typescript', 'php', 'laravel', 'tailwind'],
    response: `if you look under the hood of his builds, den john is heavily focused on modern JavaScript and TypeScript. his daily driver frontend setup relies on ${languagesFrameworks.slice(0, 5).join(', ')}, while his server and backend architectures utilize systems like ${languagesFrameworks.slice(5).join(', ')}.`,
    action: {
      type: 'navigate',
      target: '/skills', // Ensure this matches your route configuration
      label: 'View Detailed Tech Stack & Tools'
    }
  },
  {
    // 11. Professional Workflow, Teamwork, and Git Management
    keywords: ['team', 'solo', 'alone', 'collaborate', 'lead', 'coordinate', 'group', 'work ethic', 'git', 'github'],
    response: "he adapts to whatever environment a project demands. when leading teams—like during his capstone dev cycles—he acts as the principal architect setting up GitHub branching workflows, managing pull requests, and making sure everyone's components map together cleanly."
  },
  {
    // 12. Professional Experience & Internship Context
    keywords: ['intern', 'psa', 'experience', 'work history', 'philippine statistics authority', 'job', 'past'],
    response: `den john completed an interactive data encoder internship at the Philippine Statistics Authority (PSA). working inside a government facility meant handling critical, highly confidential public assets under strict state privacy mandates.`,
    action: {
      type: 'navigate',
      target: '/experience', // Ensure this matches your route configuration
      label: 'View Full Work History'
    }
  },
  {
    // 13. Future Roadmap, Goals, and Current Focus in 2026
    keywords: ['future', 'learning', 'next', 'roadmap', 'grow', 'upcoming', 'goals', '2026'],
    response: "right now in 2026, den john is doubling down on integrating advanced AI workflows and optimizing high-performance server communications. his goal is to build applications that are incredibly fast, deeply secure, and context-smart."
  },
  {
    // 14. Hiring Availability & Workplace Arrangements
    keywords: ['hire', 'remote', 'open to work', 'available', 'contact', 'email', 'job', 'salary', 'locate', 'work site', 'hiring availability', 'arrangement'],
    response: "he is highly available and actively looking for full-time junior/mid-level software engineering positions! he's completely flexible with remote, hybrid, or on-site arrangements.",
    action: {
      type: 'navigate',
      target: '/contactform', // Target layout element id anchor if single page
      label: 'Open Contact Form / Channel Frame'
    }
  },
  {
    // 15. Quick Compliments & Acknowledgment Responses
    keywords: ['nice', 'cool', 'great', 'awesome', 'wow', 'astig', 'galing', 'lupet', 'maganda', 'solid', 'thank you', 'thanks'],
    response: "solid! glad you think so. 🙌 den john put a lot of work into making sure everything runs tightly. what part of his projects or skill stack would you like to explore next?"
  },
  {
    // Toxic Protection Triggers
    keywords: ['tanginamo', 'tangina mo', 'tangina'],
    response: "tanginamo rin, gago! nagtatrabaho lang ako dito para tulungan silang makilala si den john, tapos aawayin mo ko? 😂 back to coding topics—ano ba talagang gusto mong malaman sa apps o stack niya?"
  },
  {
    // Profanity Filter
    keywords: ['gago', 'bobo', 'panget', 'fuck', 'shit', 'tarantado', 'ulol', 'pakyu', 'putangina'],
    response: "uy, bawas-bawasan ang panggigigil! sa modern layout interfaces lang kami may tolerance sa high impact. 😅 kung may bug ka na nakita sa apps o portfolio ni den john, drop a line professionally via his contact form instead!"
  }
]

export const fallbackResponse = {
  response: "Ned here! i didn't quite catch that exact phrasing. try asking me something broad like: 'what tech stack do you enjoy coding with?', 'tell me about your apps', or 'what challenges have you faced?'",
  action: null
}

export function matchQuestion(input) {
  const normalized = input.toLowerCase().trim()

  // QUICK PASS: Instantly map exact single-word terms
  for (const entry of knowledgeBase) {
    if (entry.keywords.includes(normalized)) {
      return {
        response: entry.response,
        action: entry.action || null
      }
    }
  }

  let bestMatch = null
  let highestScore = 0

  for (const entry of knowledgeBase) {
    let currentScore = 0
    
    for (const keyword of entry.keywords) {
      if (normalized === keyword) {
        currentScore += 1000
      } 
      else if (keyword.includes(' ') && normalized.includes(keyword)) {
        currentScore += keyword.length * 20
      }
      else {
        const hasWholeWord = new RegExp(`\\b${keyword}\\b`, 'i').test(normalized)
        if (hasWholeWord) {
          currentScore += keyword.length * 15
        } 
        else if (keyword.length > 4 && normalized.includes(keyword)) {
          currentScore += keyword.length
        }
      }
    }

    if (currentScore > highestScore) {
      highestScore = currentScore
      bestMatch = entry
    }
  }

  return bestMatch 
    ? { response: bestMatch.response, action: bestMatch.action || null } 
    : fallbackResponse
}