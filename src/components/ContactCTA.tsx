import { Mail, Linkedin, Download, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 text-center shadow-float lg:px-16 lg:py-24">
          {/* Decorative */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-400/10 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-5" />

          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white lg:text-5xl">
              Let's Build Something
              <br />
              <span className="text-primary-400">Great Together</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
              Have a product that needs a thoughtful, usable design? I'm open to new
              opportunities and collaborations. Let's talk.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-2 rounded-full bg-primary-400 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-300 hover:shadow-glow"
              >
                <Mail className="h-4 w-4" />
                Email Me
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
