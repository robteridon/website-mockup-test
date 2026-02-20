"use client";

import { useState } from "react";

const partners = [
  {
    title: "Businesses and social enterprises",
    description: "We work with business and social enterprise leaders to streamline operations, quantify social impact, and to pilot, perfect, and scale-up programs.",
    image: "https://www.idinsight.org/wp-content/uploads/2021/04/chuttersnap-MZkeAUKRD4o-unsplash-526x296.jpg",
    href: "https://www.idinsight.org/our-work/partners/businesses-and-social-enterprises/",
  },
  {
    title: "Government agencies",
    description: "We collaborate with government leaders to develop and roll out data-driven policy solutions aligned with their priorities and within their budgets.",
    image: "https://www.idinsight.org/wp-content/uploads/2021/04/reuben-hayfron-RjkZHESUuPw-unsplash-526x296.jpg",
    href: "https://www.idinsight.org/our-work/partners/government-agencies/",
  },
  {
    title: "International agencies",
    description: "We work with international agencies to ensure their agendas and operations are founded on the best available data and evidence.",
    image: "https://www.idinsight.org/wp-content/uploads/2021/04/mathias-p-r-reding-yfXhqAW5X0c-unsplash-526x296.jpg",
    href: "https://www.idinsight.org/our-work/partners/international-agencies/",
  },
  {
    title: "Non-governmental organizations",
    description: "We support NGO partners to improve program design, streamline implementation, evaluate impact, and accelerate scale-up.",
    image: "https://www.idinsight.org/wp-content/uploads/2021/04/abhijeet-gaikwad-55eKNltkznk-unsplash-526x296.jpg",
    href: "https://www.idinsight.org/our-work/partners/non-governmental-organizations/",
  },
  {
    title: "Philanthropic foundations",
    description: "We support philanthropic organizations to measure their impact, assess new ventures, identify optimal social investments, and support their grantees.",
    image: "https://www.idinsight.org/wp-content/uploads/2021/04/brett-zeck-eyfMgGvo9PA-unsplash-526x296.jpg",
    href: "https://www.idinsight.org/our-work/partners/philanthropic-organizations/",
  },
];

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 2;
  const totalSlides = partners.length;
  const maxIndex = totalSlides - slidesPerView;

  const prev = () => setCurrentIndex(Math.max(0, currentIndex - 1));
  const next = () => setCurrentIndex(Math.min(maxIndex, currentIndex + 1));

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">
          How we work with partners:
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Previous button */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute -left-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slides container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.title}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <a
                    href={partner.href}
                    className="group block overflow-hidden"
                  >
                    <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
                      <img
                        src={partner.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-4">
                      <div className="mb-2">
                        <h3 className="text-lg font-bold text-navy inline bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat bg-gradient-to-r from-gold to-gold group-hover:bg-[length:100%_2px] transition-[background-size] duration-200 pb-0.5">
                          {partner.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#212e38] leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-navy" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
