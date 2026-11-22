import { EditorialFigure } from '../components/EditorialFigure'
import type { Route } from '../components/Layout'
import { experiences, profile, projects } from '../data/portfolio'

interface HomePageProps {
  onNavigate: (route: Route) => void
}

function CoverNetworkGraphic() {
  return (
    <div className="relative border border-[rgba(20,20,19,0.2)] bg-[#EFECE3] p-5 sm:p-7">
      <div className="flex items-center justify-between font-mono-meta text-[10px] uppercase tracking-[0.14em] text-[#5D5A54] mb-4">
        <span>FIG. 00 / SIGNAL TOPOLOGY</span>
        <span className="text-[#7B1E2B]">INFORMATION · PLATFORM · AUDIENCE</span>
      </div>
      <svg
        viewBox="0 0 420 340"
        className="w-full h-auto"
        fill="none"
        aria-label="Abstract diagram of information networks and communication pathways"
      >
        {/* Coordinate grid */}
        <line x1="20" y1="70" x2="400" y2="70" stroke="rgba(20,20,19,0.08)" strokeWidth="1" />
        <line x1="20" y1="170" x2="400" y2="170" stroke="rgba(20,20,19,0.08)" strokeWidth="1" />
        <line x1="20" y1="270" x2="400" y2="270" stroke="rgba(20,20,19,0.08)" strokeWidth="1" />
        <line x1="110" y1="20" x2="110" y2="320" stroke="rgba(20,20,19,0.08)" strokeWidth="1" />
        <line x1="210" y1="20" x2="210" y2="320" stroke="rgba(20,20,19,0.08)" strokeWidth="1" />
        <line x1="310" y1="20" x2="310" y2="320" stroke="rgba(20,20,19,0.08)" strokeWidth="1" />

        {/* Orbital rings */}
        <circle cx="210" cy="170" r="112" stroke="rgba(20,20,19,0.18)" strokeWidth="1" />
        <circle
          cx="210"
          cy="170"
          r="68"
          stroke="#7B1E2B"
          strokeWidth="1"
          strokeDasharray="3 4"
        />

        {/* Network edges */}
        <line x1="88" y1="92" x2="210" y2="170" stroke="#141413" strokeWidth="1" />
        <line x1="210" y1="170" x2="332" y2="108" stroke="#7B1E2B" strokeWidth="1.3" />
        <line x1="210" y1="170" x2="288" y2="262" stroke="#141413" strokeWidth="1" />
        <line x1="88" y1="92" x2="132" y2="256" stroke="rgba(20,20,19,0.4)" strokeWidth="1" />
        <line x1="132" y1="256" x2="288" y2="262" stroke="rgba(20,20,19,0.4)" strokeWidth="1" />
        <line x1="332" y1="108" x2="288" y2="262" stroke="rgba(20,20,19,0.35)" strokeWidth="1" />

        {/* Nodes */}
        <circle cx="210" cy="170" r="7" fill="#7B1E2B" />
        <circle cx="88" cy="92" r="5" fill="#141413" />
        <circle cx="332" cy="108" r="5" fill="#F6F3EC" stroke="#7B1E2B" strokeWidth="1.5" />
        <circle cx="288" cy="262" r="5" fill="#141413" />
        <circle cx="132" cy="256" r="4" fill="#F6F3EC" stroke="#141413" strokeWidth="1.5" />

        {/* Editorial node annotations */}
        <text x="64" y="76" fill="#5D5A54" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          SOURCE
        </text>
        <text x="224" y="164" fill="#7B1E2B" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          PLATFORM
        </text>
        <text x="300" y="94" fill="#5D5A54" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          SIGNAL
        </text>
        <text x="266" y="284" fill="#5D5A54" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          RESPONSE
        </text>
      </svg>
      <div className="mt-4 pt-3 border-t border-[rgba(20,20,19,0.14)] flex items-center justify-between font-mono-meta text-[10px] text-[#5D5A54]">
        <span>COMPUTATIONAL SOCIAL SCIENCE</span>
        <span>BRAND &amp; COMMUNICATION</span>
      </div>
    </div>
  )
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featured = projects
    .filter((p) => p.featuredOnHome)
    .sort((a, b) => (a.homeOrder ?? 99) - (b.homeOrder ?? 99))

  const [p1, p2, p3, p4, p5, p6] = featured

  return (
    <div>
      {/* MAGAZINE COVER / HERO SPREAD */}
      <section className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-16 sm:pb-24 border-b border-[rgba(20,20,19,0.85)]">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[rgba(20,20,19,0.16)]">
          <span className="editorial-kicker">
            {profile.publicationName} — {profile.editionLabel}
          </span>
          <span className="editorial-kicker text-[#7B1E2B]">
            COMMUNICATION · DATA SCIENCE · STRATEGY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 sm:pt-14 items-start">
          {/* Left 7 Columns: Cover Headline & Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="font-mono-meta text-[11px] uppercase tracking-[0.16em] text-[#7B1E2B] mb-5">
              Cover Feature · {profile.name}
            </p>
            <h1 className="font-display text-[52px] sm:text-[74px] lg:text-[92px] leading-[0.94] tracking-[-0.03em] font-normal text-[#141413]">
              Information, Platforms <span className="italic text-[#7B1E2B]">&amp;</span> Human
              Behavior
            </h1>

            <p className="mt-8 sm:mt-10 font-editorial italic text-xl sm:text-2xl lg:text-[27px] leading-[1.35] text-[#141413] max-w-2xl">
              “{profile.supportingStatement}”
            </p>

            <div className="mt-8 sm:mt-10 pt-6 border-t border-[rgba(20,20,19,0.16)] grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
              <p className="sm:col-span-8 text-[15px] sm:text-base leading-relaxed text-[#5D5A54]">
                {profile.shortIntro}
              </p>
              <div className="sm:col-span-4 flex sm:justify-end gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'projects' })}
                  className="editorial-link font-mono-meta text-xs uppercase tracking-[0.12em] text-[#141413] hover:text-[#7B1E2B]"
                >
                  Read Archive →
                </button>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Art-Directed Network Plate */}
          <div className="lg:col-span-5 lg:pt-4">
            <CoverNetworkGraphic />
          </div>
        </div>
      </section>

      {/* SECTION 01: SELECTED INTERESTS */}
      <section className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-[rgba(20,20,19,0.16)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="editorial-kicker mb-2">Section 01 / Inquiry</p>
            <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.02em]">
              Selected Interests
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ page: 'about' })}
            className="editorial-link font-mono-meta text-xs uppercase tracking-[0.12em] text-[#5D5A54] hover:text-[#7B1E2B]"
          >
            Read Personal Feature →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[rgba(20,20,19,0.85)]">
          {profile.interests.map((interest, idx) => (
            <div
              key={interest.index}
              className={`py-7 sm:py-8 lg:px-6 ${
                idx === 0 ? 'lg:pl-0' : ''
              } ${
                idx < profile.interests.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r border-[rgba(20,20,19,0.16)]'
                  : ''
              }`}
            >
              <span className="font-mono-meta text-[11px] text-[#7B1E2B] tracking-[0.14em]">
                {interest.index}
              </span>
              <h3 className="mt-3 font-editorial text-xl sm:text-[22px] leading-[1.25] text-[#141413]">
                {interest.title}
              </h3>
              <p className="mt-3 text-sm text-[#5D5A54] leading-relaxed">{interest.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 02: SELECTED PROJECTS — ASYMMETRIC MAGAZINE SPREAD */}
      <section className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-b border-[rgba(20,20,19,0.16)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[rgba(20,20,19,0.85)]">
          <div>
            <p className="editorial-kicker mb-2">Section 02 / Curated Index</p>
            <h2 className="font-display text-4xl sm:text-6xl tracking-[-0.025em]">
              Selected Projects
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ page: 'projects' })}
            className="editorial-link font-mono-meta text-xs uppercase tracking-[0.12em] text-[#141413] hover:text-[#7B1E2B]"
          >
            View All Projects &amp; Filters →
          </button>
        </div>

        {/* Spread Row 1: Lead 7-col feature + Secondary 5-col feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[rgba(20,20,19,0.16)]">
          {p1 && (
            <article
              onClick={() => onNavigate({ page: 'project', slug: p1.slug })}
              className="lg:col-span-7 group cursor-pointer"
            >
              <EditorialFigure
                aspect="16/10"
                motif={p1.motif}
                figureLabel={`${p1.issueNumber} · ${p1.date}`}
                imageSrc={p1.imageSrc}
              />
              <div className="mt-5 flex flex-wrap items-center gap-3 font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#5D5A54]">
                <span className="text-[#7B1E2B]">{p1.categoryLabel}</span>
                <span>·</span>
                <span>{p1.institutionOrOrg}</span>
              </div>
              <h3 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.05] tracking-[-0.02em] group-hover:text-[#7B1E2B] transition-colors">
                {p1.title}
              </h3>
              <p className="mt-3 text-[15px] text-[#5D5A54] leading-relaxed max-w-2xl">
                {p1.summary}
              </p>
            </article>
          )}

          {p2 && (
            <article
              onClick={() => onNavigate({ page: 'project', slug: p2.slug })}
              className="lg:col-span-5 lg:border-l lg:border-[rgba(20,20,19,0.16)] lg:pl-10 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <EditorialFigure
                  aspect="3/2"
                  motif={p2.motif}
                  figureLabel={`${p2.issueNumber} · ${p2.date}`}
                  imageSrc={p2.imageSrc}
                  tone="charcoal"
                />
                <div className="mt-5 flex flex-wrap items-center gap-3 font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#5D5A54]">
                  <span className="text-[#7B1E2B]">{p2.categoryLabel}</span>
                  <span>·</span>
                  <span>{p2.institutionOrOrg}</span>
                </div>
                <h3 className="mt-2.5 font-editorial text-2xl sm:text-[28px] leading-[1.18] group-hover:text-[#7B1E2B] transition-colors">
                  {p2.title}
                </h3>
                <p className="mt-3 text-sm text-[#5D5A54] leading-relaxed">{p2.summary}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[rgba(20,20,19,0.12)] font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#141413] group-hover:text-[#7B1E2B]">
                Open Case Study →
              </div>
            </article>
          )}
        </div>

        {/* Spread Row 2: Tall 4:5 Portrait + Typographic/Campaign Pairing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 py-14 border-b border-[rgba(20,20,19,0.16)] items-start">
          {p3 && (
            <article
              onClick={() => onNavigate({ page: 'project', slug: p3.slug })}
              className="md:col-span-5 group cursor-pointer"
            >
              <EditorialFigure
                aspect="4/5"
                motif={p3.motif}
                figureLabel={`${p3.issueNumber} · ${p3.date}`}
                imageSrc={p3.imageSrc}
              />
              <div className="mt-4 font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                {p3.categoryLabel} · {p3.institutionOrOrg}
              </div>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl leading-[1.08] group-hover:text-[#7B1E2B] transition-colors">
                {p3.shortTitle}
              </h3>
              <p className="mt-2.5 text-sm text-[#5D5A54] leading-relaxed">{p3.summary}</p>
            </article>
          )}

          <div className="md:col-span-7 flex flex-col gap-12 md:border-l md:border-[rgba(20,20,19,0.16)] md:pl-10">
            {p4 && (
              <article
                onClick={() => onNavigate({ page: 'project', slug: p4.slug })}
                className="group cursor-pointer pb-10 border-b border-[rgba(20,20,19,0.16)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-6">
                    <EditorialFigure
                      aspect="3/2"
                      motif={p4.motif}
                      figureLabel={`${p4.issueNumber} · ${p4.institutionOrOrg}`}
                      imageSrc={p4.imageSrc}
                    />
                  </div>
                  <div className="sm:col-span-6">
                    <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                      {p4.categoryLabel}
                    </span>
                    <h3 className="mt-2 font-editorial text-2xl leading-[1.18] group-hover:text-[#7B1E2B] transition-colors">
                      {p4.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#5D5A54] leading-relaxed">{p4.summary}</p>
                  </div>
                </div>
              </article>
            )}

            {p5 && (
              <article
                onClick={() => onNavigate({ page: 'project', slug: p5.slug })}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-7 order-2 sm:order-1">
                    <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                      {p5.categoryLabel}
                    </span>
                    <h3 className="mt-2 font-editorial text-2xl leading-[1.18] group-hover:text-[#7B1E2B] transition-colors">
                      {p5.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#5D5A54] leading-relaxed">{p5.summary}</p>
                  </div>
                  <div className="sm:col-span-5 order-1 sm:order-2">
                    <EditorialFigure
                      aspect="1/1"
                      motif={p5.motif}
                      figureLabel={`${p5.issueNumber} · ${p5.institutionOrOrg}`}
                      imageSrc={p5.imageSrc}
                      tone="burgundy"
                    />
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>

        {/* Spread Row 3: Full-Width Horizontal Feature */}
        {p6 && (
          <article
            onClick={() => onNavigate({ page: 'project', slug: p6.slug })}
            className="pt-14 group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                  {p6.issueNumber} · {p6.categoryLabel}
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl leading-[1.06] group-hover:text-[#7B1E2B] transition-colors">
                  {p6.title}
                </h3>
                <p className="mt-4 text-[15px] text-[#5D5A54] leading-relaxed">{p6.summary}</p>
                <span className="mt-6 inline-block font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#141413] group-hover:text-[#7B1E2B]">
                  Examine Feature →
                </span>
              </div>
              <div className="lg:col-span-7">
                <EditorialFigure
                  aspect="21/9"
                  motif={p6.motif}
                  figureLabel={`${p6.issueNumber} · ${p6.institutionOrOrg}`}
                  imageSrc={p6.imageSrc}
                />
              </div>
            </div>
          </article>
        )}
      </section>

      {/* SECTION 03: PROFESSIONAL EXPERIENCE OVERVIEW */}
      <section className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <p className="editorial-kicker mb-2">Section 03 / Practice</p>
            <h2 className="font-display text-4xl sm:text-5xl tracking-[-0.02em]">
              Professional Experience
            </h2>
            <p className="mt-4 text-sm text-[#5D5A54] leading-relaxed">
              Applied experience across brand marketing, AI industry communication, platform
              market research, public relations, and advertising.
            </p>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'experience' })}
              className="mt-6 editorial-link font-mono-meta text-xs uppercase tracking-[0.12em] text-[#141413] hover:text-[#7B1E2B]"
            >
              Full Career Timeline →
            </button>
          </div>

          <div className="lg:col-span-8 border-t border-[rgba(20,20,19,0.85)]">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-5 border-b border-[rgba(20,20,19,0.16)] items-baseline"
              >
                <div className="sm:col-span-4 font-editorial text-xl text-[#141413]">
                  {exp.organization}
                </div>
                <div className="sm:col-span-5 text-sm text-[#141413]/85">{exp.role}</div>
                <div className="sm:col-span-3 sm:text-right font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[#5D5A54]">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
