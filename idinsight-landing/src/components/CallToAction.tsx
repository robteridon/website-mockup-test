interface CallToActionProps {
  variant: "blue" | "gold";
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageUrl: string;
}

export default function CallToAction({
  variant,
  title,
  description,
  buttonText,
  buttonHref,
  imageUrl,
}: CallToActionProps) {
  const bgClass = variant === "blue" ? "bg-navy" : "bg-gold";
  const textClass = "text-white";

  return (
    <section className={`${bgClass} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* Text content */}
          <div className="px-8 py-16 lg:px-16 lg:py-24 flex flex-col justify-center relative z-10">
            <h2 className={`text-3xl lg:text-4xl font-bold ${textClass} mb-4`}>
              {title}
            </h2>
            <p className={`text-lg ${textClass} opacity-90 mb-8 max-w-lg`}>
              {description}
            </p>
            <div>
              <a
                href={buttonHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border-2 border-white text-white font-semibold hover:bg-white hover:text-navy transition-all group"
              >
                {buttonText}
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

          {/* Image */}
          <div className="relative min-h-[300px] lg:min-h-0">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Decorative overlay */}
            <div className="absolute bottom-4 right-4 w-20 h-20 opacity-20">
              <svg viewBox="0 0 80 80" fill="white">
                <circle cx="20" cy="20" r="16" />
                <rect x="44" y="4" width="32" height="32" rx="4" />
                <polygon points="20,48 52,64 20,80" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
