import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager, EdTech Startup',
    text: 'Exceptional eye for detail. The LMS redesign improved our user engagement significantly. Delivered on time with a complete design system.',
  },
  {
    name: 'James Carter',
    role: 'CTO, Healthcare Platform',
    text: 'Took our hospital management system from a rough concept to a polished, responsive product. The developer handoff was the cleanest we have seen.',
  },
  {
    name: 'Priya Nair',
    role: 'Design Lead, SaaS Company',
    text: 'A rare designer who balances aesthetics with real product thinking. Every screen had a clear purpose and solved a real user problem.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            What Collaborators Say
          </h2>
        </div>

        <div className="reveal reveal-delay-1 mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <Quote className="h-8 w-8 text-primary-200" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary-400 text-primary-400" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{t.text}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-ink-700 text-sm font-bold text-white">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink-900">{t.name}</div>
                  <div className="text-xs text-ink-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
