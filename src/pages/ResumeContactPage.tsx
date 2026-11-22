import { education, experiences, skillGroups } from '../data/portfolio'

export function ResumeContactPage() {
  return (
    <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14">
      {/* Header */}
      <header className="pb-12 border-b border-[rgba(20,20,19,0.85)]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="editorial-kicker">Curriculum Vitae &amp; Correspondence</span>
          <span className="editorial-kicker text-[#7B1E2B]">Yannan Zhang</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h1 className="lg:col-span-7 font-display text-[48px] sm:text-[68px] lg:text-[82px] leading-[0.95] tracking-[-0.03em]">
            Resume <span className="italic text-[#7B1E2B]">&amp;</span> Contact
          </h1>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3 no-print">
            <div className="border border-dashed border-[rgba(20,20,19,0.35)] bg-[#FBF9F4] px-5 py-3.5 flex flex-col justify-center">
              <span className="font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#7B1E2B]">
                CV PDF — Placeholder
              </span>
              <span className="text-xs text-[#5D5A54] mt-0.5">
                Attach downloadable PDF file here
              </span>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="border border-[#141413] bg-[#141413] text-[#F6F3EC] px-5 py-3.5 font-mono-meta text-[11px] uppercase tracking-[0.12em] hover:bg-[#7B1E2B] hover:border-[#7B1E2B] transition-colors"
            >
              Print Summary
            </button>
          </div>
        </div>
      </header>

      {/* Two-Column Editorial CV + Contact Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 sm:pt-16">
        {/* Left 8 Columns: Structured CV */}
        <div className="lg:col-span-8 space-y-14">
          {/* Education */}
          <section>
            <p className="editorial-kicker text-[#7B1E2B] mb-4">01 / Education</p>
            <div className="border-t border-[rgba(20,20,19,0.85)] divide-y divide-[rgba(20,20,19,0.16)]">
              {education.map((edu) => (
                <div key={edu.institution} className="py-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h2 className="font-editorial text-2xl text-[#141413]">{edu.institution}</h2>
                    <span className="font-mono-meta text-xs text-[#5D5A54]">
                      {edu.period} · {edu.distinction}
                    </span>
                  </div>
                  <p className="mt-1 text-[15px] font-medium text-[#141413]/85">{edu.degree}</p>
                  <p className="mt-2 text-sm text-[#5D5A54]">{edu.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Summary */}
          <section>
            <p className="editorial-kicker text-[#7B1E2B] mb-4">
              02 / Professional Experience Summary
            </p>
            <div className="border-t border-[rgba(20,20,19,0.85)] divide-y divide-[rgba(20,20,19,0.16)]">
              {experiences.map((exp) => (
                <div key={exp.id} className="py-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h2 className="font-editorial text-xl text-[#141413]">
                      {exp.organization} —{' '}
                      <span className="italic text-[#5D5A54]">{exp.role}</span>
                    </h2>
                    <span className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[#5D5A54]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#5D5A54] leading-relaxed">{exp.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Technical Skills */}
          <section>
            <p className="editorial-kicker text-[#7B1E2B] mb-4">
              03 / Research &amp; Technical Skills
            </p>
            <div className="border-t border-[rgba(20,20,19,0.85)] divide-y divide-[rgba(20,20,19,0.16)]">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                >
                  <h3 className="sm:col-span-4 font-mono-meta text-[11px] uppercase tracking-[0.12em] text-[#5D5A54]">
                    {group.category}
                  </h3>
                  <p className="sm:col-span-8 text-sm sm:text-[15px] text-[#141413]">
                    {group.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right 4 Columns: Contact & External Profile Placeholders */}
        <aside className="lg:col-span-4">
          <div className="border border-[rgba(20,20,19,0.22)] bg-[#EFECE3] p-7 sm:p-8 sticky top-24">
            <p className="editorial-kicker text-[#7B1E2B] mb-2">Correspondence</p>
            <h2 className="font-display text-3xl leading-tight">Direct Contact &amp; Links</h2>
            <p className="mt-3 text-sm text-[#5D5A54] leading-relaxed">
              Open to academic research collaborations, graduate program inquiries, and roles in
              research, brand strategy, and digital communication.
            </p>

            <dl className="mt-8 space-y-6 pt-6 border-t border-[rgba(20,20,19,0.16)]">
              <div>
                <dt className="editorial-kicker mb-1">Email</dt>
                <dd className="font-mono-meta text-xs text-[#141413] border-b border-dashed border-[rgba(20,20,19,0.3)] pb-2">
                  [Email address placeholder — add verified email]
                </dd>
              </div>

              <div>
                <dt className="editorial-kicker mb-1">LinkedIn</dt>
                <dd className="font-mono-meta text-xs text-[#141413] border-b border-dashed border-[rgba(20,20,19,0.3)] pb-2">
                  [LinkedIn profile URL placeholder]
                </dd>
              </div>

              <div>
                <dt className="editorial-kicker mb-1">GitHub</dt>
                <dd className="font-mono-meta text-xs text-[#141413] border-b border-dashed border-[rgba(20,20,19,0.3)] pb-2">
                  [GitHub profile URL placeholder]
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  )
}
