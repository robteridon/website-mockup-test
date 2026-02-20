export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://www.idinsight.org/wp-content/uploads/2021/06/anantha-krishnan-wr6Xo06Y36k-unsplash-1-2000x1100.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay matching reference: #212e38 at 60% opacity */}
        <div className="absolute inset-0 bg-[#212e38]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-[60%]">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-4">
              We transform how the world fights poverty
            </h1>
            <h2 className="text-xl sm:text-2xl text-white/90 font-light mb-8">
              Improving lives with data and evidence
            </h2>
            <a
              href="https://www.idinsight.org/give/"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-navy font-bold text-sm hover:bg-gray-100 transition-colors group"
            >
              Donate
              <svg
                className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 6 9"
                fill="currentColor"
              >
                <path d="M1.4 0L0 1.4l3.2 3.1L0 7.6 1.4 9 6 4.5 1.4 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
