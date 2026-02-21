interface AnthropicCallToActionProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageUrl: string;
}

export default function AnthropicCallToAction({
  title,
  description,
  linkText,
  linkHref,
  imageUrl,
}: AnthropicCallToActionProps) {
  return (
    <section className="bg-ivory-light">
      <div className="border-t border-cloud-light" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-[clamp(1.5rem,1.3rem+0.8vw,2.25rem)] font-bold text-slate-dark tracking-tight">
              {title}
            </h2>
            <p className="text-base text-slate-medium mt-4 leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="mt-6">
              <a
                href={linkHref}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-dark text-ivory-light text-sm font-medium hover:bg-slate-medium transition-colors"
              >
                <span>{linkText}</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
