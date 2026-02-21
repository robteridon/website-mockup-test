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
    <section className="bg-ivory-medium">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-dark tracking-tight">
              {title}
            </h2>
            <p className="text-base text-slate-light mt-4 leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="mt-8">
              <a
                href={linkHref}
                className="group inline-flex items-center gap-2 text-[15px] text-clay hover:text-accent transition-colors"
              >
                <span>{linkText}</span>
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
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
