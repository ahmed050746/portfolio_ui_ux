import { mobileScreens } from '@/components/mockups';

export default function MobileMockups() {
  return (
    <section id="mobile" className="bg-ink-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Mobile
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-900 lg:text-5xl">
            App Store Ready Mobile Designs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Beautiful Android and iOS device mockups showcasing multiple application
            screens with a premium, consistent design language.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-10">
          {mobileScreens.map((s, i) => (
            <div
              key={s.id}
              className="group"
              style={{ transform: `translateY(${i % 2 === 0 ? '0' : '24px'})` }}
            >
              <div className="mb-4 text-center">
                <span className="text-sm font-semibold text-ink-700">{s.title}</span>
              </div>
              <div className="relative w-[200px] overflow-hidden rounded-[2.2rem] border-[7px] border-ink-900 bg-ink-900 shadow-float transition duration-500 group-hover:shadow-glow group-hover:-translate-y-2">
                <div className="mx-auto mt-1.5 h-1 w-14 rounded-full bg-ink-700" />
                <div className="absolute right-0 top-4 h-16 w-1 rounded-l-lg bg-ink-700" />
                <div className="absolute left-0 top-6 h-12 w-1 rounded-r-lg bg-ink-700" />
                <div className="aspect-[9/16] overflow-hidden rounded-b-[1.6rem]">
                  <s.Mockup />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
