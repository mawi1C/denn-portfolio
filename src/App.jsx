import { Routes, Route } from 'react-router-dom'
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