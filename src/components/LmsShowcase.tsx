import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { lmsSlides } from '@/components/mockups';

const AUTOPLAY_MS = 5000;

export default function LmsShowcase() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = lmsSlides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  const goTo = useCallback((i: number) => setIndex(i), []);

  // Autoplay
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [playing, count]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    setPlaying(false);
    startX.current = e.clientX;
    dragDelta.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    dragDelta.current = e.clientX - startX.current;
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    const threshold = 60;
    if (dragDelta.current > threshold) go(-1);
    else if (dragDelta.current < -threshold) go(1);
    dragDelta.current = 0;
  };

  const current = lmsSlides[index];

  return (
    <section id="lms" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Featured Project
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            Learning Management System
          </h2>
          <p className="mt-2 text-lg font-medium text-ink-400">Complete Product Design</p>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            A complete product design covering user flows, dashboards, responsive layouts,
            mobile screens, student portal, teacher portal, admin panel, and management
            dashboards — built for scalability and usability.
          </p>
        </div>

        {/* Case study meta */}
        <div className="reveal reveal-delay-1 mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Problem', value: 'Fragmented learning tools with poor usability across devices.' },
            { label: 'Process', value: 'Research, wireframes, design system, prototypes, testing.' },
            { label: 'Solution', value: 'Unified LMS with role-based portals and responsive layouts.' },
            { label: 'Impact', value: '50+ screens designed, responsive redesign, dev handoff.' },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border border-ink-100 bg-ink-50/50 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-primary-500">
                {m.label}
              </div>
              <div className="mt-1.5 text-sm leading-relaxed text-ink-600">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="reveal reveal-delay-2 mt-14">
          <div
            className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-2 shadow-card drag-cursor select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transitionDuration: dragging ? '0ms' : undefined,
              }}
            >
              {lmsSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 px-2">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
                    {/* Mockup */}
                    <div className="lg:col-span-3">
                      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-ink-50">
                        <div className="flex items-center gap-1.5 border-b border-ink-100 bg-white px-4 py-2.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                          <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                          <div className="ml-3 text-xs font-medium text-ink-400">
                            LMS — {slide.title}
                          </div>
                        </div>
                        <div className="aspect-[16/10]">
                          <slide.Mockup />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center lg:col-span-2">
                      <div className="font-display text-6xl font-extrabold text-ink-100">
                        {slide.number}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-bold text-ink-900">
                        {slide.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-ink-500">
                        {slide.description}
                      </p>
                      <div className="mt-5 flex items-center gap-2">
                        <div className="h-1 w-12 rounded-full bg-primary-400" />
                        <span className="text-xs font-semibold text-ink-400">
                          Screen {slide.number} of {String(count).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition hover:border-primary-300 hover:text-primary-500"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition hover:border-primary-300 hover:text-primary-500"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setPlaying((p) => !p)}
                className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition hover:border-primary-300 hover:text-primary-500"
                aria-label={playing ? 'Pause autoplay' : 'Play autoplay'}
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {lmsSlides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${s.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-ink-200 hover:bg-ink-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide title indicator */}
          <div className="mt-4 text-center text-sm font-medium text-ink-400">
            {current.title} — drag, swipe, or use arrows to navigate
          </div>
        </div>
      </div>
    </section>
  );
}
