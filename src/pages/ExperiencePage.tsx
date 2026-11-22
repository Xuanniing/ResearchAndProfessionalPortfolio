import type { Route } from '../components/Layout'
import { experiences } from '../data/portfolio'

interface ExperiencePageProps {
  onNavigate: (route: Route) => void
}

export function ExperiencePage({ onNavigate }: ExperiencePageProps) {
  return (
    <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14">
      <header className="pb-12 sm:pb-16 border-b border-[rgba(20,20,19,0.85)]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="editorial-kicker">Career Timeline / Practice</span>
          <span className="editorial-kicker text-[#7B1E2B]">2022 — Present</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h1 className="lg:col-span-8 font-display text-[48px] sm:text-[68px] lg:text-[82px] leading-[0.95] tracking-[-0.03em]">
            Professional Experience
          </h1>
          <p className="lg:col-span-4 text-[15px] text-[#5D5A54] leading-relaxed">
            An editorial chronology of roles across brand marketing, AI industry communication,
            platform market research, public relations, and advertising.
          </p>
        </div>
      </header>

      {/* Editorial Career Timeline */}
      <section className="divide-y divide-[rgba(20,20,19,0.18)]">
        {experiences.map((exp, idx) => (
          <article
            key={exp.id}
            className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
          >
            {/* Left column: Index & Period */}
            <div className="lg:col-span-3 flex lg:flex-col justify-between gap-2">
              <span className="font-mono-meta text-xs text-[#7B1E2B] tracking-[0.14em]">
                0{idx + 1}
              </span>
              <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#5D5A54]">
                {exp.period}
              </span>
            </div>

            {/* Middle column: Organization & Role */}
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl sm:text-4xl leading-tight text-[#141413]">
                {exp.organization}
              </h2>
              <p className="mt-2 font-editorial italic text-lg sm:text-xl text-[#141413]/85">
                {exp.role}
              </p>
            </div>

            {/* Right column: Concise Description & Scope */}
            <div className="lg:col-span-5">
              <p className="text-[15px] text-[#5D5A54] leading-[1.7]">{exp.summary}</p>
              <p className="mt-4 font-mono-meta text-[11px] uppercase tracking-[0.1em] text-[#858077]">
                {exp.tags.join('  ·  ')}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* Related Case Studies Link */}
      <section className="mt-4 pt-10 border-t border-[rgba(20,20,19,0.85)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="font-editorial italic text-xl text-[#5D5A54]">
          See how these roles translate into documented campaigns and research initiatives.
        </p>
        <button
          type="button"
          onClick={() => onNavigate({ page: 'projects' })}
          className="editorial-link font-mono-meta text-xs uppercase tracking-[0.12em] text-[#141413] hover:text-[#7B1E2B]"
        >
          View Projects Archive →
        </button>
      </section>
    </div>
  )
}
