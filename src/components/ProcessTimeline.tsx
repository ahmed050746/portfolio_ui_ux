import {
  Search,
  PenTool,
  Layers,
  MousePointerClick,
  TestTube,
  Code2,
} from 'lucide-react';

const steps = [
  { icon: Search, label: 'Research', desc: 'User interviews, competitive analysis, problem framing.' },
  { icon: PenTool, label: 'Wireframes', desc: 'Low-fidelity layouts and information architecture.' },
  { icon: Layers, label: 'UI Design', desc: 'High-fidelity screens with design system and components.' },
  { icon: MousePointerClick, label: 'Prototype', desc: 'Interactive prototypes for validation and demos.' },
  { icon: TestTube, label: 'Testing', desc: 'Usability testing, iteration, and refinement.' },
  { icon: Code2, label: 'Dev Handoff', desc: 'Specs, tokens, and documentation for developers.' },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-ink-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Workflow
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            Design Process Timeline
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            A structured, repeatable process from research to developer handoff.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="reveal reveal-delay-1 mt-16 hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-10 h-0.5 bg-ink-200" />
            <div className="absolute left-0 top-10 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500" style={{ width: '100%' }} />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((s, i) => (
                <div key={s.label} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-ink-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-glow">
                    <s.icon className="h-8 w-8 text-primary-500" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-900">{s.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="reveal reveal-delay-1 mt-12 md:hidden">
          <div className="relative">
            <div className="absolute bottom-0 left-10 top-0 w-0.5 bg-ink-200" />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={s.label} className="relative flex items-start gap-4">
                  <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-ink-100 bg-white shadow-card">
                    <s.icon className="h-8 w-8 text-primary-500" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-base font-bold text-ink-900">{s.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
