import { Routes, Route, useLocation } from 'react-router-dom' // FIX: Imported useLocation
import { useEffect } from 'react'                           // FIX: Imported useEffect
import Layout from './components/Layout'
import Home from './pages/Home'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ChatPage from './pages/ChatPage'
import AskMeAnything from './components/AskMeAnything'
import TypingTest from './components/TypingTest'
import { useScrollToHash } from './hooks/useScrollToHash'
import CertificatesPage from './pages/CertificatesPage'

function App() {
  useScrollToHash()
  const location = useLocation() // Track path changes

  // Dynamic Tab Title Updater
  useEffect(() => {
    const routeTitles = {
      '/': 'Den John — Portfolio',
      '/skills': 'Den John — Tech Stack',
      '/projects': 'Den John — Projects',
      '/experience': 'Den John — Experience',
      '/chat': 'Den John — Community Chat',
      '/certificates': 'Den John — Certificates'
    }

    // Fallback to baseline if path isn't explicitly listed
    document.title = routeTitles[location.pathname] || 'Den John — Portfolio'
  }, [location])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>

      <AskMeAnything />
      <TypingTest />
    </Layout>
  )
}

export default App