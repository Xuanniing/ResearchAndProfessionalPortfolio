import { EditorialFigure } from '../components/EditorialFigure'
import type { Route } from '../components/Layout'
import { education, profile, skillGroups } from '../data/portfolio'

interface AboutPageProps {
  onNavigate: (route: Route) => void
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <article className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14">
      {/* Editorial Feature Header */}
      <header className="pb-12 sm:pb-16 border-b border-[rgba(20,20,19,0.85)]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <span className="editorial-kicker">Profile Feature / About</span>
          <span className="editorial-kicker text-[#7B1E2B]">Yannan Zhang</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-[48px] sm:text-[68px] lg:text-[84px] leading-[0.95] tracking-[-0.03em]">
              Between <span className="italic text-[#7B1E2B]">inquiry</span> and practice.
            </h1>
            <p className="mt-7 font-editorial text-xl sm:text-2xl leading-[1.45] text-[#141413]/90 max-w-2xl">
              I am a researcher and brand strategist trained in communication and social data
              science—drawn to the ways platform architectures, information cues, and cultural
              narratives shape human judgment.
            </p>
          </div>
          <div className="lg:col-span-4">
            <EditorialFigure
              aspect="4/5"
              motif="discourse"
              figureLabel="PORTRAIT / EDITORIAL SLOT"
              caption="Portrait placeholder — replace with editorial photograph."
            />
          </div>
        </div>
      </header>

      {/* Long-Form Introduction & Academic–Industry Connection */}
      <section className="py-14 sm:py-20 border-b border-[rgba(20,20,19,0.16)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="editorial-kicker text-[#7B1E2B] mb-2">01 / Perspective</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.08]">
            Connecting Research &amp; Professional Practice
          </h2>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] sm:text-base leading-[1.75] text-[#141413]/85">
          <p>
            My academic training began in communication at Renmin University of China and continued
            into digital sociology and social data science at the University of Edinburgh. Across
            both environments, I learned to treat communication not as isolated messages, but as
            interactions embedded in social networks, visual grammars, and platform incentives.
          </p>
          <p>
            In professional settings—spanning brand marketing at JD Logistics, AI industry
            communication at MiniMax, market research at Xiaohongshu (RED), public relations at
            Tesla, and account work at Dentsu—those same analytical habits translate into clearer
            audience understanding, grounded positioning, and more deliberate storytelling.
          </p>
        </div>
      </section>

      {/* Education Background */}
      <section className="py-14 sm:py-20 border-b border-[rgba(20,20,19,0.16)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="editorial-kicker text-[#7B1E2B] mb-2">02 / Academic Training</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.08]">Education</h2>
        </div>

        <div className="lg:col-span-8 divide-y divide-[rgba(20,20,19,0.16)] border-t border-[rgba(20,20,19,0.85)]">
          {education.map((edu) => (
            <div key={edu.institution} className="py-8 first:pt-7">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="font-display text-3xl sm:text-[34px] leading-tight">
                  {edu.institution}
                </h3>
                <span className="font-mono-meta text-xs uppercase tracking-[0.12em] text-[#7B1E2B]">
                  {edu.period} | {edu.distinction}
                </span>
              </div>
              <p className="mt-2 font-editorial italic text-xl text-[#141413]">{edu.degree}</p>
              <p className="mt-3 text-sm sm:text-[15px] text-[#5D5A54] leading-relaxed max-w-2xl">
                {edu.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-14 sm:py-20 border-b border-[rgba(20,20,19,0.16)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="editorial-kicker text-[#7B1E2B] mb-2">03 / Inquiry</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.08]">Research Interests</h2>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {profile.interests.map((item) => (
            <div key={item.index} className="pt-4 border-t border-[rgba(20,20,19,0.25)]">
              <span className="font-mono-meta text-[11px] text-[#7B1E2B]">{item.index}</span>
              <h3 className="mt-2 font-editorial text-xl text-[#141413]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#5D5A54] leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Methods & Technical Skills (Structured Editorial Typography, No Badge Soup) */}
      <section className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="editorial-kicker text-[#7B1E2B] mb-2">04 / Toolkit</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.08]">
            Methods, Tools &amp; Languages
          </h2>
          <p className="mt-4 text-sm text-[#5D5A54] leading-relaxed">
            A plural methodological foundation spanning statistical modeling, computational social
            science, and interpretive multimodal analysis.
          </p>
        </div>

        <div className="lg:col-span-8 border-t border-[rgba(20,20,19,0.85)]">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 py-6 border-b border-[rgba(20,20,19,0.16)] items-baseline"
            >
              <h3 className="sm:col-span-4 font-mono-meta text-[11px] uppercase tracking-[0.14em] text-[#5D5A54]">
                {group.category}
              </h3>
              <p className="sm:col-span-8 font-editorial text-lg sm:text-[19px] leading-relaxed text-[#141413]">
                {group.items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation Prompt */}
      <section className="mt-6 pt-10 border-t border-[rgba(20,20,19,0.85)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="font-editorial italic text-xl text-[#5D5A54]">
          Continue to the curated archive of research and brand case studies.
        </p>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => onNavigate({ page: 'projects' })}
            className="editorial-link font-mono-meta text-xs uppercase tracking-[0.12em] text-[#141413] hover:text-[#7B1E2B]"
          >
            Explore Projects →
          </button>
          <button
            type="button"
            onClick={() => onNavigate({ page: 'resume' })}
            className="editorial-link font-mono-meta text-xs uppercase tracking-[0.12em] text-[#5D5A54] hover:text-[#7B1E2B]"
          >
            Resume &amp; Contact →
          </button>
        </div>
      </section>
    </article>
  )
}
