import { EditorialFigure } from '../components/EditorialFigure'
import type { Route } from '../components/Layout'
import { projects } from '../data/portfolio'

interface ProjectDetailPageProps {
  slug: string
  onNavigate: (route: Route) => void
}

export function ProjectDetailPage({ slug, onNavigate }: ProjectDetailPageProps) {
  const index = projects.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? projects[index] : projects[0]
  const prevProject = index > 0 ? projects[index - 1] : null
  const nextProject = index >= 0 && index < projects.length - 1 ? projects[index + 1] : null

  const isPlanned = project.status === 'Planned / In Development'

  return (
    <article className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12">
      {/* Top Breadcrumb & Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[rgba(20,20,19,0.16)]">
        <button
          type="button"
          onClick={() => onNavigate({ page: 'projects' })}
          className="font-mono-meta text-[11px] uppercase tracking-[0.14em] text-[#5D5A54] hover:text-[#7B1E2B] transition-colors"
        >
          ← Back to Projects Archive
        </button>
        <div className="flex items-center gap-3">
          <span className="font-mono-meta text-[11px] uppercase tracking-[0.14em] text-[#5D5A54]">
            {project.issueNumber}
          </span>
          {isPlanned && (
            <span className="border border-[#7B1E2B] px-2.5 py-0.5 font-mono-meta text-[10px] uppercase tracking-[0.12em] text-[#7B1E2B]">
              Planned / In Development
            </span>
          )}
        </div>
      </div>

      {/* Feature Header */}
      <header className="pt-10 sm:pt-14 pb-12 border-b border-[rgba(20,20,19,0.85)]">
        <p className="font-mono-meta text-xs uppercase tracking-[0.14em] text-[#7B1E2B] mb-4">
          {project.categoryLabel}
        </p>
        <h1 className="font-display text-[40px] sm:text-[58px] lg:text-[74px] leading-[0.98] tracking-[-0.025em] max-w-5xl">
          {project.title}
        </h1>

        {/* Metadata Strip */}
        <dl className="mt-10 pt-6 border-t border-[rgba(20,20,19,0.16)] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <dt className="editorial-kicker mb-1">Institution / Org</dt>
            <dd className="text-sm font-medium text-[#141413]">{project.institutionOrOrg}</dd>
          </div>
          <div>
            <dt className="editorial-kicker mb-1">Timeline</dt>
            <dd className="text-sm font-medium text-[#141413]">{project.date}</dd>
          </div>
          <div>
            <dt className="editorial-kicker mb-1">Category</dt>
            <dd className="text-sm font-medium text-[#141413]">Section {project.categoryCode}</dd>
          </div>
          <div>
            <dt className="editorial-kicker mb-1">Status</dt>
            <dd className="text-sm font-medium text-[#7B1E2B]">{project.status}</dd>
          </div>
        </dl>
      </header>

      {/* Strong Opening Visual */}
      <section className="py-10 sm:py-14 border-b border-[rgba(20,20,19,0.16)]">
        <EditorialFigure
          aspect="21/9"
          motif={project.motif}
          figureLabel={`${project.issueNumber} / COVER PLATE`}
          caption={project.coverCaption}
          imageSrc={project.imageSrc}
          tone={project.categoryCode === 'D' ? 'charcoal' : 'ivory'}
        />
      </section>

      {/* Overview & Research Question / Business Challenge */}
      <section className="py-14 sm:py-16 border-b border-[rgba(20,20,19,0.16)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="editorial-kicker text-[#7B1E2B] mb-3">01 / Project Overview</p>
          <p className="font-editorial text-xl sm:text-2xl leading-[1.45] text-[#141413]">
            {project.overview}
          </p>
          <div className="mt-8 pt-8 border-t border-[rgba(20,20,19,0.16)]">
            <p className="editorial-kicker mb-3">02 / Context &amp; Motivation</p>
            <p className="text-[15px] sm:text-base leading-[1.75] text-[#5D5A54]">
              {project.contextAndMotivation}
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5 bg-[#EFECE3] border border-[rgba(20,20,19,0.18)] p-7 sm:p-9 self-start">
          <p className="editorial-kicker text-[#7B1E2B] mb-3">
            {project.categoryCode === 'A' || project.categoryCode === 'B'
              ? 'Core Communication Challenge'
              : 'Central Research Question'}
          </p>
          <p className="font-editorial italic text-xl sm:text-[22px] leading-[1.4] text-[#141413]">
            {project.researchQuestionOrChallenge}
          </p>
        </aside>
      </section>

      {/* Pull Quote */}
      <section className="py-12 sm:py-16 border-b border-[rgba(20,20,19,0.16)]">
        <blockquote className="max-w-4xl mx-auto text-center">
          <p className="font-display italic text-3xl sm:text-5xl leading-[1.12] text-[#141413]">
            “{project.pullQuote}”
          </p>
        </blockquote>
      </section>

      {/* Role, Approach, Methods & Tools */}
      <section className="py-14 sm:py-16 border-b border-[rgba(20,20,19,0.16)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="editorial-kicker text-[#7B1E2B] mb-3">03 / Role &amp; Responsibilities</p>
          <ul className="space-y-3 border-t border-[rgba(20,20,19,0.85)] pt-4">
            {project.roleAndResponsibilities.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-relaxed text-[#141413]/90 pb-3 border-b border-[rgba(20,20,19,0.12)]"
              >
                <span className="font-mono-meta text-[11px] text-[#7B1E2B] pt-1">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:border-l lg:border-[rgba(20,20,19,0.16)] lg:pl-10">
          <p className="editorial-kicker text-[#7B1E2B] mb-3">04 / Research or Campaign Approach</p>
          <p className="text-[15px] sm:text-base leading-[1.75] text-[#141413]/85">
            {project.approach}
          </p>

          <div className="mt-10 pt-8 border-t border-[rgba(20,20,19,0.16)]">
            <p className="editorial-kicker mb-3">05 / Methods &amp; Tools</p>
            <p className="font-editorial text-lg sm:text-xl leading-relaxed text-[#141413]">
              {project.methodsAndTools.join(' · ')}
            </p>
          </div>
        </div>
      </section>

      {/* Visual Evidence & Deliverables */}
      <section className="py-14 sm:py-16 border-b border-[rgba(20,20,19,0.16)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="editorial-kicker text-[#7B1E2B] mb-2">06 / Visual Evidence</p>
            <h2 className="font-display text-3xl sm:text-4xl">Deliverables &amp; Documentation</h2>
          </div>
          <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#5D5A54]">
            Asset Replacement Slots
          </span>
        </div>

        <div
          className={`grid grid-cols-1 ${
            project.deliverables.length > 1 ? 'md:grid-cols-12' : ''
          } gap-8 lg:gap-10 items-start`}
        >
          {project.deliverables.map((del, idx) => (
            <div
              key={del.label}
              className={
                project.deliverables.length > 1
                  ? idx === 0
                    ? 'md:col-span-7'
                    : 'md:col-span-5'
                  : 'max-w-4xl'
              }
            >
              <EditorialFigure
                aspect={del.aspect}
                motif={del.motif}
                figureLabel={`DELIVERABLE 0${idx + 1} · ${del.label}`}
                caption={del.caption}
                imageSrc={del.imageSrc}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Findings / Status & Reflection */}
      <section className="py-14 sm:py-16 border-b border-[rgba(20,20,19,0.85)] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        <div>
          <p className="editorial-kicker text-[#7B1E2B] mb-3">
            07 / Findings, Outcomes &amp; Documentation
          </p>
          <p className="text-[15px] sm:text-base leading-[1.75] text-[#141413]/90">
            {project.outcomesOrStatusNote}
          </p>
        </div>
        <div>
          <p className="editorial-kicker mb-3">08 / Reflection &amp; Further Development</p>
          <p className="text-[15px] sm:text-base leading-[1.75] text-[#5D5A54]">
            {project.reflectionAndNextSteps}
          </p>
        </div>
      </section>

      {/* Previous / Next Case Study Navigation */}
      <nav
        className="py-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
        aria-label="Adjacent case studies"
      >
        <div>
          {prevProject && (
            <button
              type="button"
              onClick={() => onNavigate({ page: 'project', slug: prevProject.slug })}
              className="group text-left"
            >
              <span className="editorial-kicker block mb-1.5">← Previous Feature</span>
              <span className="font-editorial text-xl text-[#141413] group-hover:text-[#7B1E2B] transition-colors">
                {prevProject.shortTitle}
              </span>
            </button>
          )}
        </div>
        <div className="sm:text-right">
          {nextProject && (
            <button
              type="button"
              onClick={() => onNavigate({ page: 'project', slug: nextProject.slug })}
              className="group text-left sm:text-right"
            >
              <span className="editorial-kicker block mb-1.5">Next Feature →</span>
              <span className="font-editorial text-xl text-[#141413] group-hover:text-[#7B1E2B] transition-colors">
                {nextProject.shortTitle}
              </span>
            </button>
          )}
        </div>
      </nav>
    </article>
  )
}
