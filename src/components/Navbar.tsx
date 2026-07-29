import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const links = [
  { label: 'Work', href: '#lms' },
  { label: 'Case Studies', href: '#case-study' },
  { label: 'Mobile', href: '#mobile' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-primary-400">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900">
            Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-ink-600 transition hover:text-primary-500"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-500 hover:shadow-glow"
          >
            Let's Talk
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6 text-ink-800" /> : <Menu className="h-6 w-6 text-ink-800" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-ink-100 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-ink-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink-900 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
