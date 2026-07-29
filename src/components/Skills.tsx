const skills = [
  'Figma', 'UI Design', 'UX Design', 'Wireframing', 'Design Systems',
  'Auto Layout', 'Responsive Design', 'Prototyping', 'Dashboard Design',
  'SaaS Design', 'LMS Design', 'Hospital Management', 'Mobile App Design',
  'Interaction Design', 'User Flows', 'Design Thinking',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Toolkit
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            A focused toolkit for designing and shipping SaaS products end-to-end.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-12 flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
