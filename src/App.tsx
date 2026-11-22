import { useEffect, useState } from 'react'
import { Layout, type Route } from './components/Layout'
import { projects } from './data/portfolio'
import { AboutPage } from './pages/AboutPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumeContactPage } from './pages/ResumeContactPage'

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '').trim()
  if (!raw || raw === 'home') return { page: 'home' }
  if (raw === 'about') return { page: 'about' }
  if (raw === 'projects') return { page: 'projects' }
  if (raw === 'experience') return { page: 'experience' }
  if (raw === 'resume' || raw === 'contact') return { page: 'resume' }
  if (raw.startsWith('project/')) {
    const slug = raw.slice('project/'.length)
    if (slug) return { page: 'project', slug }
  }
  return { page: 'home' }
}

function toHash(route: Route): string {
  if (route.page === 'home') return ''
  if (route.page === 'project') return `#project/${route.slug}`
  return `#${route.page}`
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const titles: Record<Route['page'], string> = {
      home: 'Yannan Zhang — Information, Platforms & Human Behavior',
      about: 'About — Yannan Zhang',
      projects: 'Projects & Case Studies — Yannan Zhang',
      experience: 'Experience — Yannan Zhang',
      resume: 'Resume & Contact — Yannan Zhang',
      project: 'Project — Yannan Zhang',
    }
    if (route.page === 'project') {
      const found = projects.find((p) => p.slug === route.slug)
      document.title = found ? `${found.shortTitle} — Yannan Zhang` : titles.project
    } else {
      document.title = titles[route.page]
    }
  }, [route])

  const navigate = (nextRoute: Route) => {
    const targetHash = toHash(nextRoute)
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash
    } else {
      setRoute(nextRoute)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout route={route} onNavigate={navigate}>
      {route.page === 'home' && <HomePage onNavigate={navigate} />}
      {route.page === 'about' && <AboutPage onNavigate={navigate} />}
      {route.page === 'projects' && <ProjectsPage onNavigate={navigate} />}
      {route.page === 'experience' && <ExperiencePage onNavigate={navigate} />}
      {route.page === 'resume' && <ResumeContactPage />}
      {route.page === 'project' && (
        <ProjectDetailPage slug={route.slug} onNavigate={navigate} />
      )}
    </Layout>
  )
}
