import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { LmsDashboardMockup, AnalyticsMockup, MobileDashboardMockup } from '@/components/mockups';

function FloatingCard({
  children,
  className = '',
  delay = '',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-ink-100 bg-white p-3 shadow-float ${className} ${delay}`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-ink-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-600">
            <Sparkles className="h-3.5 w-3.5" />
            UI/UX Engineer
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Designing SaaS Products
            <br />
            That Users <span className="text-gradient">Love</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            I design modern dashboards, Learning Management Systems (LMS), Hospital
            Management Systems, responsive websites, and mobile experiences focused on
            usability, scalability, and business goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#lms"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-500 hover:shadow-glow"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 transition hover:border-primary-300 hover:text-primary-600"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-100 pt-8">
            {[
              { v: '50+', l: 'Screens Designed' },
              { v: '1+', l: 'Years Experience' },
              { v: '10+', l: 'Projects Shipped' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-ink-900">{s.v}</div>
                <div className="mt-1 text-xs font-medium text-ink-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating laptop mockup */}
        <div className="reveal reveal-delay-2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            {/* Laptop */}
            <div className="animate-float-slow rounded-2xl border border-ink-100 bg-white p-3 shadow-float">
              <div className="mb-2 flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <div className="ml-2 h-2 w-24 rounded bg-ink-100" />
              </div>
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <LmsDashboardMockup />
              </div>
            </div>
            {/* Laptop base */}
            <div className="mx-auto h-2 w-3/4 rounded-b-2xl bg-ink-200" />

            {/* Floating cards */}
            <FloatingCard className="-left-4 top-8 w-36 animate-float sm:-left-8" delay="">
              <div className="mb-1.5 flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-md bg-primary-400" />
                <div className="h-1.5 w-16 rounded bg-ink-200" />
              </div>
              <div className="text-[9px] font-semibold text-ink-400">Dashboard</div>
              <div className="mt-1 h-8 overflow-hidden rounded">
                <AnalyticsMockup />
              </div>
            </FloatingCard>

            <FloatingCard
              className="-right-2 top-4 w-32 animate-float-delay sm:-right-6"
            >
              <div className="mb-1.5 flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-md bg-ink-900" />
                <div className="h-1.5 w-12 rounded bg-ink-200" />
              </div>
              <div className="text-[9px] font-semibold text-ink-400">Mobile UI</div>
              <div className="mt-1 h-16 overflow-hidden rounded">
                <MobileDashboardMockup />
              </div>
            </FloatingCard>

            <FloatingCard
              className="-left-2 bottom-8 w-32 animate-float-delay sm:left-4"
            >
              <div className="mb-1.5 flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-md bg-primary-300" />
                <div className="h-1.5 w-14 rounded bg-ink-200" />
              </div>
              <div className="text-[9px] font-semibold text-ink-400">Analytics</div>
              <div className="mt-1 flex h-12 items-end gap-1">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary-300 to-primary-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </FloatingCard>

            <FloatingCard
              className="-right-4 bottom-4 w-28 animate-float-slow sm:-right-10"
            >
              <div className="mb-1.5 flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-md bg-ink-700" />
                <div className="h-1.5 w-10 rounded bg-ink-200" />
              </div>
              <div className="text-[9px] font-semibold text-ink-400">Components</div>
              <div className="mt-1 grid grid-cols-2 gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-5 rounded bg-ink-100" />
                ))}
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
