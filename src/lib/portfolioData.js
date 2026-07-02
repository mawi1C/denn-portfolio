// Import the real image logos from your src/assets folder
import typoTerrorLogo from '../assets/typo-terror.webp'
import quaestioLogo from '../assets/quaestio.png'
import pawfindLogo from '../assets/pawfind.png'

export const languagesFrameworks = ['JavaScript', 'TypeScript', 'PHP', 'React', 'React Native', 'Node.js', 'Laravel', 'CodeIgniter', 'MySQL', 'Tailwind CSS']
export const softwareTools = ['VS Code', 'Figma', 'XAMPP', 'Vercel', 'Firebase', 'GitHub', 'Microsoft Office']
export const technicalSkills = ['Web & Mobile Development', 'Database Design', 'Cloud Integration', 'API Development', 'Version Control (Git)']

export const projects = [
  {
    title: 'Typo Terror — Gamified Speed Typing App',
    tag: 'FEATURED PROJECT',
    date: '2026',
    link: 'https://typo-terror.vercel.app/',
    featured: true,
    logo: typoTerrorLogo,
    points: [
      'Developed a high-performance typing speed and accuracy utility web app to measure and improve metrics',
      'Implemented real-time text rendering, instantaneous word-per-minute (WPM) calculations, and error counters',
      'Designed a keyboard-driven minimalist interface supporting dynamic text generation and theme configurations',
    ],
  },
  {
    title: 'Quaestio — Interactive Mobile Learning Platform',
    tag: 'FEATURED APP',
    date: '2026',
    link: 'https://play.google.com/store/apps/details?id=com.quaestio.app.a1b2c3d4',
    featured: true,
    logo: quaestioLogo,
    points: [
      'Designed and deployed a production-ready Android mobile application built for seamless knowledge assessment and dynamic interactions',
      'Engineered smooth client-side data rendering with highly optimized, low-latency layout state cycles',
      'Published successfully to the Google Play Store, managing application bundle distribution and performance benchmarking parameters',
    ],
  },
  {
    title: 'PawFind — AI-Based Pet Search Mobile App',
    tag: 'CAPSTONE PROJECT',
    date: '2025 – 2026',
    link: 'https://pawfindapp.vercel.app/', // <-- Added your live Vercel link here!
    featured: true,
    logo: pawfindLogo,
    points: [
      'Designed and built a cross-platform mobile app as lead developer for a team project',
      'Integrated AI-assisted features to analyze animal behavior and help locate lost pets',
      'Coordinated team workflow through Git and GitHub for clean version control',
    ],
  },
  {
    title: 'Icy Notes — Minimalist Text Workspace',
    tag: 'PERSONAL PROJECT',
    date: '2026',
    link: 'https://icynotes.vercel.app/',
    points: [
      'Designed and engineered a distraction-free digital notepad for quick formatting and note tracking',
      'Utilized robust client-side state synchronization with local storage systems for seamless, offline persistence',
      'Adopted an elegant modern glassmorphism UI layout optimized for ultra-smooth fluid user interactions',
    ],
  },
  {
    title: 'NapStop — Smart Rest & Focus Timer',
    tag: 'PERSONAL PROJECT',
    date: '2026',
    link: 'https://napstop.vercel.app/',
    points: [
      'Built a clean productivity and custom rest scheduler application geared toward developer wellness routine intervals',
      'Engineered precise interval countdown algorithms, browser window event listeners, and toggleable audio indicators',
      'Optimized layout constraints for perfect mobile responsiveness and fast, single-action triggers',
    ],
  },
  {
    title: 'Dental Clinic Management System',
    tag: 'PERSONAL PROJECT',
    date: '2026',
    points: [
      'Developed a complete clinic management web app independently, from design to deployment',
      'Built modules for appointment scheduling, patient records, payment tracking, and automated reminders',
      'Delivered a real-world business solution using modern web technologies',
    ],
  },
 ]

export const experience = [
  {
    org: 'Philippine Statistics Authority',
    role: 'Data Encoder Intern',
    date: 'Aug 2025 – Dec 2025',
    initials: 'PSA',
    points: [
      'Handled confidential data in compliance with government data privacy standards',
      'Developed efficient workflows for daily encoding tasks, reducing processing time and errors',
      'Collaborated with supervisors and colleagues to ensure data integrity and timely submission',
    ],
  },
]