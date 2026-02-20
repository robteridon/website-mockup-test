export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://www.idinsight.org/wp-content/uploads/2021/06/anantha-krishnan-wr6Xo06Y36k-unsplash-1-2000x1100.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
      </div>

      {/* Decorative shape */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" fill="white">
          <circle cx="100" cy="100" r="80" />
          <rect x="60" y="60" width="40" height="40" rx="4" />
          <polygon points="120,60 160,80 120,100" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              We transform how the world fights poverty
            </h1>
            <h2 className="text-xl sm:text-2xl text-white/90 font-light mb-8">
              Improving lives with data and evidence
            </h2>
            <a
              href="https://www.idinsight.org/give/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-navy font-semibold text-lg hover:bg-gray-100 transition-colors group"
            >
              Donate
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
