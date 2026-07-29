import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { hospitalScreens, cctvScreens, type ProjectCardData } from '@/components/mockups';

function ProjectCard({ project }: { project: ProjectCardData }) {
  const [active, setActive] = useState(0);
  const screen = project.screens[active];

  return (
    <div className="group overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card transition duration-500 hover:shadow-float">
      {/* Mockup preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-50">
        <div className="absolute inset-0 transition duration-500">
          <screen.Mockup />
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-ink-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.tag}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-ink-900">{project.title}</h3>

        {/* Screen tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                i === active
                  ? 'bg-primary-400 text-white'
                  : 'bg-ink-50 text-ink-500 hover:bg-ink-100'
              }`}
            >
              <s.icon className="h-3.5 w-3.5" />
              {s.label}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition hover:gap-2.5"
        >
          View Project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function OtherProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Other Projects
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            More Work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Additional SaaS platforms designed with the same focus on usability,
            scalability, and clean visual systems.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProjectCard project={hospitalScreens} />
          <ProjectCard project={cctvScreens} />
        </div>
      </div>
    </section>
  );
}
