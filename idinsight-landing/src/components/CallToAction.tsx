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
  const bgClass = variant === "blue" ? "bg-blue-light" : "bg-[#ffe087]";

  return (
    <section className={`${bgClass} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Text content - left side */}
          <div className="py-8 lg:py-[72px] relative z-10">
            <div className="lg:w-5/12">
              <h2 className="text-2xl lg:text-[30px] font-bold text-[#212e38] leading-tight">
                {title}
              </h2>
              <p className="text-sm lg:text-[17px] font-bold text-[#212e38] mt-6 leading-6">
                {description}
              </p>
              <div className="mt-6">
                <a
                  href={buttonHref}
                  className="inline-flex items-center gap-3 px-5 py-3 bg-[#212e38] text-white text-sm font-bold hover:bg-[#2d3d4d] transition-colors group"
                >
                  <span>{buttonText}</span>
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

          {/* Image - right side, absolutely positioned on desktop */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full h-[205px] relative overflow-hidden -mx-4 sm:-mx-6 lg:mx-0">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover grayscale opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
