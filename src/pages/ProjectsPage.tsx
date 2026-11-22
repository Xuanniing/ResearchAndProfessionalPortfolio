import { useState } from 'react'
import { EditorialFigure } from '../components/EditorialFigure'
import type { Route } from '../components/Layout'
import {
  projectCategories,
  projects,
  type ProjectCategoryCode,
  type ProjectItem,
} from '../data/portfolio'

interface ProjectsPageProps {
  onNavigate: (route: Route) => void
}

type FilterValue = 'ALL' | ProjectCategoryCode

function StatusTag({ status }: { status: ProjectItem['status'] }) {
  if (status === 'Planned / In Development') {
    return (
      <span className="inline-block border border-[#7B1E2B] px-2.5 py-0.5 font-mono-meta text-[10px] uppercase tracking-[0.12em] text-[#7B1E2B]">
        Planned / In Development
      </span>
    )
  }
  return (
    <span className="font-mono-meta text-[10px] uppercase tracking-[0.12em] text-[#5D5A54]">
      {status}
    </span>
  )
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('ALL')

  const visibleCategories =
    activeFilter === 'ALL'
      ? projectCategories
      : projectCategories.filter((c) => c.code === activeFilter)

  const getCategoryProjects = (code: ProjectCategoryCode) =>
    projects.filter(
      (p) => p.categoryCode === code || p.secondaryCategories?.includes(code),
    )

  return (
    <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14">
      {/* Header */}
      <header className="pb-10 sm:pb-14 border-b border-[rgba(20,20,19,0.85)]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="editorial-kicker">Archive / Projects Index</span>
          <span className="editorial-kicker text-[#7B1E2B]">
            A — Marketing · B — Social · C — Research · D — Computational
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h1 className="lg:col-span-8 font-display text-[48px] sm:text-[68px] lg:text-[84px] leading-[0.95] tracking-[-0.03em]">
            Projects <span className="italic text-[#7B1E2B]">&amp;</span> Case Studies
          </h1>
          <p className="lg:col-span-4 text-[15px] text-[#5D5A54] leading-relaxed">
            An interdisciplinary body of academic research, computational inquiry, brand
            campaigns, and platform communication work.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="mt-10 pt-6 border-t border-[rgba(20,20,19,0.16)] flex flex-wrap items-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter projects by category"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'ALL'}
            onClick={() => setActiveFilter('ALL')}
            className={`px-3.5 py-2 font-mono-meta text-[11px] uppercase tracking-[0.12em] border transition-colors ${
              activeFilter === 'ALL'
                ? 'bg-[#141413] text-[#F6F3EC] border-[#141413]'
                : 'bg-transparent text-[#141413] border-[rgba(20,20,19,0.22)] hover:border-[#141413]'
            }`}
          >
            All Sections
          </button>

          {projectCategories.map((cat) => {
            const isActive = activeFilter === cat.code
            return (
              <button
                key={cat.code}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat.code)}
                className={`px-3.5 py-2 font-mono-meta text-[11px] uppercase tracking-[0.12em] border transition-colors ${
                  isActive
                    ? 'bg-[#7B1E2B] text-[#FBF9F4] border-[#7B1E2B]'
                    : 'bg-transparent text-[#141413] border-[rgba(20,20,19,0.22)] hover:border-[#141413]'
                }`}
              >
                {cat.code}. {cat.shortTitle}
              </button>
            )
          })}
        </div>
      </header>

      {/* Editorial Category Sections */}
      <div className="divide-y divide-[rgba(20,20,19,0.85)]">
        {visibleCategories.map((cat) => {
          const items = getCategoryProjects(cat.code)

          return (
            <section key={cat.code} className="py-14 sm:py-20">
              {/* Section Intro */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 items-baseline">
                <div className="lg:col-span-5">
                  <span className="font-mono-meta text-xs uppercase tracking-[0.16em] text-[#7B1E2B]">
                    Section {cat.code}
                  </span>
                  <h2 className="mt-2 font-display text-4xl sm:text-5xl leading-[1.02] tracking-[-0.02em]">
                    {cat.title}
                  </h2>
                </div>
                <p className="lg:col-span-7 text-[15px] sm:text-base text-[#5D5A54] leading-relaxed max-w-2xl">
                  {cat.description}
                </p>
              </div>

              {/* Varied Editorial Grid per Category */}
              {cat.code === 'A' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                  {items.map((item, idx) => (
                    <article
                      key={item.slug}
                      onClick={() => onNavigate({ page: 'project', slug: item.slug })}
                      className={`group cursor-pointer ${
                        idx === 0
                          ? 'lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[rgba(20,20,19,0.16)] items-center'
                          : 'lg:col-span-6 flex flex-col justify-between'
                      }`}
                    >
                      <div className={idx === 0 ? 'lg:col-span-7' : ''}>
                        <EditorialFigure
                          aspect={idx === 0 ? '16/10' : '3/2'}
                          motif={item.motif}
                          figureLabel={`${item.issueNumber} · ${item.institutionOrOrg}`}
                          imageSrc={item.imageSrc}
                          tone={idx === 2 ? 'charcoal' : 'ivory'}
                        />
                      </div>
                      <div className={idx === 0 ? 'lg:col-span-5' : 'mt-5'}>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                            {item.institutionOrOrg} · {item.date}
                          </span>
                          <StatusTag status={item.status} />
                        </div>
                        <h3
                          className={`font-display leading-[1.06] group-hover:text-[#7B1E2B] transition-colors ${
                            idx === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm sm:text-[15px] text-[#5D5A54] leading-relaxed">
                          {item.summary}
                        </p>
                        <span className="mt-4 inline-block font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#141413] group-hover:text-[#7B1E2B]">
                          Read Case Study →
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {cat.code === 'B' && (
                <div className="space-y-10">
                  {items.map((item) => (
                    <article
                      key={item.slug}
                      onClick={() => onNavigate({ page: 'project', slug: item.slug })}
                      className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[rgba(20,20,19,0.18)] bg-[#FBF9F4] p-6 sm:p-10"
                    >
                      <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                            {item.issueNumber} · {item.institutionOrOrg}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl sm:text-4xl leading-[1.06] group-hover:text-[#7B1E2B] transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-[15px] text-[#5D5A54] leading-relaxed">
                          {item.summary}
                        </p>
                        <span className="mt-6 inline-block font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#141413] group-hover:text-[#7B1E2B]">
                          Open Feature →
                        </span>
                      </div>
                      <div className="lg:col-span-7">
                        <EditorialFigure
                          aspect="16/10"
                          motif={item.motif}
                          figureLabel={`${item.issueNumber} · ${item.date}`}
                          imageSrc={item.imageSrc}
                        />
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {cat.code === 'C' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                  {items.map((item, idx) => (
                    <article
                      key={item.slug}
                      onClick={() => onNavigate({ page: 'project', slug: item.slug })}
                      className={`group cursor-pointer flex flex-col ${
                        idx === 0
                          ? 'lg:col-span-4'
                          : idx === 1
                            ? 'lg:col-span-4 lg:border-l lg:border-[rgba(20,20,19,0.16)] lg:pl-8'
                            : 'lg:col-span-4 lg:border-l lg:border-[rgba(20,20,19,0.16)] lg:pl-8'
                      }`}
                    >
                      <EditorialFigure
                        aspect={idx === 1 ? '3/2' : '4/5'}
                        motif={item.motif}
                        figureLabel={`${item.issueNumber} · ${item.date}`}
                        imageSrc={item.imageSrc}
                        tone={idx === 1 ? 'charcoal' : 'ivory'}
                      />
                      <div className="mt-5 flex items-center justify-between gap-2">
                        <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                          {item.institutionOrOrg} · {item.date}
                        </span>
                      </div>
                      <h3 className="mt-2 font-editorial text-2xl leading-[1.2] group-hover:text-[#7B1E2B] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#5D5A54] leading-relaxed flex-1">
                        {item.summary}
                      </p>
                      <div className="mt-5 pt-4 border-t border-[rgba(20,20,19,0.14)] flex items-center justify-between font-mono-meta text-[11px] uppercase tracking-[0.12em]">
                        <span className="text-[#858077]">{item.methodsAndTools.slice(0, 2).join(' · ')}</span>
                        <span className="text-[#141413] group-hover:text-[#7B1E2B]">Read →</span>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {cat.code === 'D' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                  {items.map((item, idx) => {
                    const isPlanned = item.status === 'Planned / In Development'
                    return (
                      <article
                        key={item.slug}
                        onClick={() => onNavigate({ page: 'project', slug: item.slug })}
                        className={`group cursor-pointer ${
                          idx === 0
                            ? 'lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[rgba(20,20,19,0.16)] items-center'
                            : 'lg:col-span-6 border border-dashed border-[rgba(20,20,19,0.3)] p-6 sm:p-8 bg-[#FBF9F4]/60'
                        }`}
                      >
                        {idx === 0 ? (
                          <>
                            <div className="lg:col-span-7">
                              <EditorialFigure
                                aspect="16/10"
                                motif={item.motif}
                                figureLabel={`${item.issueNumber} · ${item.institutionOrOrg}`}
                                imageSrc={item.imageSrc}
                                tone="charcoal"
                              />
                            </div>
                            <div className="lg:col-span-5">
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                                  {item.institutionOrOrg} · {item.date}
                                </span>
                                <StatusTag status={item.status} />
                              </div>
                              <h3 className="font-display text-3xl sm:text-4xl leading-[1.06] group-hover:text-[#7B1E2B] transition-colors">
                                {item.title}
                              </h3>
                              <p className="mt-3 text-[15px] text-[#5D5A54] leading-relaxed">
                                {item.summary}
                              </p>
                              <span className="mt-5 inline-block font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#141413] group-hover:text-[#7B1E2B]">
                                Open Case Study →
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col h-full justify-between">
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#5D5A54]">
                                  {item.issueNumber}
                                </span>
                                <StatusTag status={item.status} />
                              </div>
                              <EditorialFigure
                                aspect="16/10"
                                motif={item.motif}
                                figureLabel={isPlanned ? 'IN DEVELOPMENT' : item.issueNumber}
                                imageSrc={item.imageSrc}
                              />
                              <h3 className="mt-5 font-editorial text-2xl leading-[1.2] group-hover:text-[#7B1E2B] transition-colors">
                                {item.title}
                              </h3>
                              <p className="mt-3 text-sm text-[#5D5A54] leading-relaxed">
                                {item.summary}
                              </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[rgba(20,20,19,0.14)] font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                              View Project Scope →
                            </div>
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
