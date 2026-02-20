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
  const visibleCount = 2;
  const maxIndex = partners.length - visibleCount;

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">
          How we work with partners:
        </h2>

        {/* Desktop carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount + 2)}%)` }}
            >
              {partners.map((partner) => (
                <a
                  key={partner.title}
                  href={partner.href}
                  className="group block flex-shrink-0 w-full sm:w-[calc(50%-12px)] rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video">
                    <img
                      src={partner.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                      {partner.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
