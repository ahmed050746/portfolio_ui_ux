import { GraduationCap, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-primary-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-ink-900">
              Portfolio
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition hover:border-primary-300 hover:text-primary-500"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition hover:border-primary-300 hover:text-primary-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition hover:border-primary-300 hover:text-primary-500"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-ink-100 pt-6 text-center text-sm text-ink-400">
          © {new Date().getFullYear()} UI/UX Portfolio. Designed & built with care.
        </div>
      </div>
    </footer>
  );
}
