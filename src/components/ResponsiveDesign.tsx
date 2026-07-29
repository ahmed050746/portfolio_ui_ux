import { Monitor, Smartphone, ArrowDown } from 'lucide-react';
import { ResponsiveDesktopMockup, ResponsiveMobileMockup } from '@/components/mockups';

const optimizations = [
  'Optimized Layout',
  'Improved Navigation',
  'Better Touch Experience',
  'Responsive Components',
];

export default function ResponsiveDesign() {
  return (
    <section id="responsive" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Responsive
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            Responsive Design Optimization
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Existing desktop applications were redesigned for mobile responsiveness while
            maintaining usability and visual consistency.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-16">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
            {/* Desktop */}
            <div className="w-full max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary-500" />
                <span className="text-sm font-semibold text-ink-700">Desktop</span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-card">
                <div className="mb-1.5 flex items-center gap-1.5 px-2 pt-1">
                  <div className="h-2 w-2 rounded-full bg-rose-300" />
                  <div className="h-2 w-2 rounded-full bg-amber-300" />
                  <div className="h-2 w-2 rounded-full bg-emerald-300" />
                </div>
                <div className="aspect-[16/10] overflow-hidden rounded-lg">
                  <ResponsiveDesktopMockup />
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-400 text-white shadow-glow lg:rotate-90">
              <ArrowDown className="h-6 w-6" />
            </div>

            {/* Mobile */}
            <div className="w-full max-w-[200px]">
              <div className="mb-3 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary-500" />
                <span className="text-sm font-semibold text-ink-700">Mobile</span>
              </div>
              <div className="overflow-hidden rounded-[2rem] border-[6px] border-ink-900 bg-ink-900 shadow-float">
                <div className="mx-auto mt-1 h-1 w-12 rounded-full bg-ink-700" />
                <div className="aspect-[9/16] overflow-hidden rounded-b-[1.5rem]">
                  <ResponsiveMobileMockup />
                </div>
              </div>
            </div>
          </div>

          {/* Optimization pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {optimizations.map((o) => (
              <span
                key={o}
                className="rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-soft transition hover:border-primary-300 hover:text-primary-600"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
