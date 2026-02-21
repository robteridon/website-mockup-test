const sectors = [
  {
    title: "Agriculture",
    description:
      "We have deep agricultural sector experience and help clients design, target, enhance, and measure agricultural programs and services.",
    href: "https://www.idinsight.org/our-work/sectors/agriculture/",
  },
  {
    title: "Education and training",
    description:
      "We combine global evidence and local data to strengthen education and training programs with public, NGO, and low-cost private education providers.",
    href: "https://www.idinsight.org/our-work/sectors/education-and-training/",
  },
  {
    title: "Environment and energy",
    description:
      "We support leaders faced with consequential questions about how to protect the planet while creating opportunities for climate-affected communities.",
    href: "https://www.idinsight.org/our-work/sectors/environment-and-energy/",
  },
  {
    title: "Financial inclusion",
    description:
      "We bring a strong track record supporting design, targeting, and evaluation of programs that serve people who are unbanked.",
    href: "https://www.idinsight.org/our-work/sectors/financial-inclusion/",
  },
  {
    title: "Gender equity",
    description:
      "We help partners advance gender equity through the use of data and evidence.",
    href: "https://www.idinsight.org/our-work/sectors/gender-equity/",
  },
  {
    title: "Governance",
    description:
      "We work to improve public sector performance through close partnerships to address diverse problems from tax administration to training civil servants.",
    href: "https://www.idinsight.org/our-work/sectors/governance/",
  },
  {
    title: "Health and nutrition",
    description:
      "We help clients design, target, enhance, and measure the impact of health and nutrition interventions, services, and systems.",
    href: "https://www.idinsight.org/our-work/sectors/health-and-nutrition/",
  },
  {
    title: "Livelihoods and basic income",
    description:
      "We help optimize cash transfer programs by measuring impact and using data-driven insights to improve the efficiency of targeting and transactions.",
    href: "https://www.idinsight.org/our-work/sectors/livelihoods-and-basic-income/",
  },
  {
    title: "WASH",
    description:
      "We support service providers to strengthen water, sanitation, and hygiene programs that improve people's health and wellbeing.",
    href: "https://www.idinsight.org/our-work/sectors/wash/",
  },
];

export default function AnthropicSectorGrid() {
  return (
    <section className="border-t border-cloud-light/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
        <h2 className="text-2xl sm:text-3xl font-light text-slate-dark tracking-tight mb-12">
          Sectors in which we work
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {sectors.map((sector) => (
            <a
              key={sector.title}
              href={sector.href}
              className="group block"
            >
              <h3 className="text-[17px] font-medium text-slate-dark group-hover:text-clay transition-colors duration-200">
                {sector.title}
              </h3>
              <p className="text-sm text-slate-light leading-relaxed mt-2">
                {sector.description}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-3 text-sm text-clay opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more
                <svg
                  className="w-3 h-3"
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
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
