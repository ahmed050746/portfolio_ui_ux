import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BeforeMockupOld, AfterMockupNew } from '@/components/mockups';

const cases = [
  {
    title: 'Dashboard Redesign',
    problem: 'Cluttered layout with no visual hierarchy, low contrast, and poor information density.',
    fixes: [
      'Clear visual hierarchy with spacing system',
      'Improved contrast and readability',
      'Data-driven chart components',
      'Consistent card-based layout',
    ],
  },
  {
    title: 'Course Catalog Redesign',
    problem: 'Generic grid with no engagement cues, inconsistent card sizing, and weak CTAs.',
    fixes: [
      'Gradient cover art for visual interest',
      'Progress indicators and lesson counts',
      'Prominent, consistent call-to-action',
      'Responsive grid with proper breakpoints',
    ],
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-ink-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Case Study
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            UI Redesign Case Studies
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Before vs after comparisons showing how usability issues were identified and
            resolved through structured redesign.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {cases.map((c, idx) => (
            <div key={c.title} className="reveal">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-2 max-w-xl text-ink-500">{c.problem}</p>
                </div>
                <span className="rounded-full bg-ink-900 px-4 py-1.5 text-xs font-semibold text-white">
                  Case {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
                {/* Before */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-600">
                      BEFORE
                    </span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-ink-100 shadow-soft">
                    <BeforeMockupOld />
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-400 text-white shadow-glow">
                    <ArrowRight className="h-6 w-6 md:rotate-0 rotate-90" />
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-600">
                      AFTER
                    </span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-primary-200 shadow-card">
                    <AfterMockupNew />
                  </div>
                </div>
              </div>

              {/* Fixes */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {c.fixes.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2 rounded-xl border border-ink-100 bg-white p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                    <span className="text-sm text-ink-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
