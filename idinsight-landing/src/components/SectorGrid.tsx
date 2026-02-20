const sectors = [
  {
    title: "Agriculture",
    description: "We have deep agricultural sector experience and help clients design, target, enhance, and measure agricultural programs and services.",
    href: "https://www.idinsight.org/our-work/sectors/agriculture/",
  },
  {
    title: "Education and training",
    description: "We combine global evidence and local data to strengthen education and training programs with public, NGO, and low-cost private education providers.",
    href: "https://www.idinsight.org/our-work/sectors/education-and-training/",
  },
  {
    title: "Environment and energy",
    description: "We support leaders faced with consequential questions about how to protect the planet while creating opportunities for climate-affected communities.",
    href: "https://www.idinsight.org/our-work/sectors/environment-and-energy/",
  },
  {
    title: "Financial inclusion",
    description: "We bring a strong track record supporting design, targeting, and evaluation of programs that serve people who are unbanked.",
    href: "https://www.idinsight.org/our-work/sectors/financial-inclusion/",
  },
  {
    title: "Gender equity",
    description: "We help partners advance gender equity through the use of data and evidence.",
    href: "https://www.idinsight.org/our-work/sectors/gender-equity/",
  },
  {
    title: "Governance",
    description: "We work to improve public sector performance through close partnerships to address diverse problems from tax administration to training civil servants.",
    href: "https://www.idinsight.org/our-work/sectors/governance/",
  },
  {
    title: "Health and nutrition",
    description: "We help clients design, target, enhance, and measure the impact of health and nutrition interventions, services, and systems.",
    href: "https://www.idinsight.org/our-work/sectors/health-and-nutrition/",
  },
  {
    title: "Livelihoods and basic income",
    description: "We help optimize cash transfer programs by measuring impact and using data-driven insights to improve the efficiency of targeting and transactions.",
    href: "https://www.idinsight.org/our-work/sectors/livelihoods-and-basic-income/",
  },
  {
    title: "WASH",
    description: "We support service providers to strengthen water, sanitation, and hygiene programs that improve people's health and wellbeing.",
    href: "https://www.idinsight.org/our-work/sectors/wash/",
  },
];

export default function SectorGrid() {
  return (
    <section className="py-16 lg:py-24 bg-gray-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">
          Sectors in which we work
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <a
              key={sector.title}
              href={sector.href}
              className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">
                  {sector.title}
                </h3>
                <svg
                  className="w-5 h-5 text-navy opacity-50 group-hover:opacity-100 group-hover:text-gold transition-all group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {sector.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
