import { useState, type ReactNode } from 'react'

export type Route =
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'projects' }
  | { page: 'experience' }
  | { page: 'resume' }
  | { page: 'project'; slug: string }

interface LayoutProps {
  route: Route
  onNavigate: (route: Route) => void
  children: ReactNode
}

const navItems: { label: string; page: Exclude<Route['page'], 'project'>; num: string }[] = [
  { label: 'Home', page: 'home', num: '01' },
  { label: 'About', page: 'about', num: '02' },
  { label: 'Projects', page: 'projects', num: '03' },
  { label: 'Experience', page: 'experience', num: '04' },
  { label: 'Resume & Contact', page: 'resume', num: '05' },
]

export function Layout({ route, onNavigate, children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (page: Exclude<Route['page'], 'project'>) => {
    setMenuOpen(false)
    onNavigate({ page })
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#141413]">
      {/* Compact Editorial Masthead */}
      <header className="sticky top-0 z-40 border-b border-[rgba(20,20,19,0.16)] bg-[#F6F3EC]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12 h-16 sm:h-[72px]">
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="group flex items-baseline gap-3 text-left focus:outline-none"
          >
            <span className="font-display text-2xl sm:text-[26px] tracking-[-0.02em] leading-none">
              Yannan Zhang
            </span>
            <span className="hidden md:inline font-mono-meta text-[10px] uppercase tracking-[0.16em] text-[#5D5A54] group-hover:text-[#7B1E2B] transition-colors">
              / Research &amp; Practice
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Primary">
            {navItems.map((item) => {
              const isActive =
                route.page === item.page ||
                (route.page === 'project' && item.page === 'projects')
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNav(item.page)}
                  className={`relative py-1 text-[13px] tracking-[0.02em] transition-colors ${
                    isActive
                      ? 'text-[#7B1E2B] font-medium'
                      : 'text-[#141413]/80 hover:text-[#141413]'
                  }`}
                >
                  <span className="font-mono-meta text-[10px] text-[#858077] mr-1.5">
                    {item.num}
                  </span>
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-[2px] h-[1px] bg-[#7B1E2B]" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center gap-2 font-mono-meta text-[11px] uppercase tracking-[0.14em] border border-[rgba(20,20,19,0.28)] px-3 py-1.5"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? 'Close' : 'Index'}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-[rgba(20,20,19,0.16)] bg-[#F6F3EC] px-5 py-6">
            <nav className="flex flex-col divide-y divide-[rgba(20,20,19,0.12)]" aria-label="Mobile">
              {navItems.map((item) => {
                const isActive =
                  route.page === item.page ||
                  (route.page === 'project' && item.page === 'projects')
                return (
                  <button
                    key={item.page}
                    type="button"
                    onClick={() => handleNav(item.page)}
                    className="flex items-center justify-between py-3.5 text-left"
                  >
                    <span
                      className={`font-display text-2xl ${
                        isActive ? 'text-[#7B1E2B] italic' : 'text-[#141413]'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="font-mono-meta text-[11px] text-[#858077]">{item.num}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Editorial Colophon Footer */}
      <footer className="border-t border-[rgba(20,20,19,0.85)] bg-[#F6F3EC] mt-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[rgba(20,20,19,0.16)]">
            <div className="md:col-span-5">
              <p className="editorial-kicker mb-3">Colophon</p>
              <p className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.02em]">
                Yannan Zhang
              </p>
              <p className="mt-3 text-sm text-[#5D5A54] max-w-sm leading-relaxed">
                Interdisciplinary portfolio spanning communication research, computational social
                science, brand strategy, and digital platforms.
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="editorial-kicker mb-3">Sections</p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.page}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.page)}
                      className="editorial-link text-[#141413]/85 hover:text-[#7B1E2B]"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="editorial-kicker mb-3">Inquiries &amp; Profiles</p>
              <p className="text-sm text-[#5D5A54] leading-relaxed">
                Direct contact details, CV PDF, LinkedIn, and GitHub links are staged on the{' '}
                <button
                  type="button"
                  onClick={() => handleNav('resume')}
                  className="underline decoration-[rgba(20,20,19,0.35)] underline-offset-4 hover:text-[#7B1E2B]"
                >
                  Resume &amp; Contact
                </button>{' '}
                page.
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#858077]">
            <span>Yannan Zhang — Portfolio &amp; Research Archive</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-left hover:text-[#141413] transition-colors"
            >
              Return to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
