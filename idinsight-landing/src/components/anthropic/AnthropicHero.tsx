export default function AnthropicHero() {
  return (
    <section className="bg-ivory-medium">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-32 lg:py-44">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-light text-slate-dark leading-[1.1] tracking-tight">
            We transform how the world fights poverty
          </h1>
          <p className="text-lg sm:text-xl text-slate-light mt-6 leading-relaxed font-light max-w-2xl">
            Improving lives through data, evidence, and AI — helping
            decision-makers allocate resources more effectively across the
            developing world.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://www.idinsight.org/about/"
              className="group inline-flex items-center gap-2 text-[15px] text-clay hover:text-accent transition-colors"
            >
              <span>Learn about our work</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/website-mockup-test/year-in-review"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-cloud-light text-[15px] text-slate-medium hover:border-slate-medium hover:text-slate-dark transition-colors"
            >
              2025 Year in Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
