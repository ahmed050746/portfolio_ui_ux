export default function About() {
  return (
    <section id="about" className="bg-ink-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo placeholder */}
          <div className="reveal mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-primary-500 shadow-float">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="h-48 w-48 rounded-full bg-white/10 backdrop-blur" />
              </div>
              <div className="absolute left-6 top-6 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                UI/UX Engineer
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
              About Me
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              I'm a UI/UX Engineer with 1+ year of professional experience designing SaaS
              products, Learning Management Systems, Hospital Management Systems,
              dashboards, and responsive web applications. I enjoy solving usability
              problems, creating scalable design systems, and building interfaces that
              are simple, intuitive, and developer-friendly.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { l: 'Experience', v: '1+ Year' },
                { l: 'Focus', v: 'SaaS & LMS' },
                { l: 'Design Tool', v: 'Figma' },
                { l: 'Location', v: 'Remote / India' },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-ink-100 bg-white p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {s.l}
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-ink-900">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
