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

function ChevronCircle() {
  return (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-navy text-white ml-2 -translate-y-0.5 group-hover:bg-gold transition-colors flex-shrink-0">
      <svg className="w-2 h-2" viewBox="0 0 6 9" fill="currentColor">
        <path d="M1.4 0L0 1.4l3.2 3.1L0 7.6 1.4 9 6 4.5 1.4 0z" />
      </svg>
    </span>
  );
}

export default function SectorGrid() {
  return (
    <section className="py-12 lg:py-14 bg-[#f2f2f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">
          Sectors in which we work
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
          {sectors.map((sector) => (
            <a
              key={sector.title}
              href={sector.href}
              className="group block"
            >
              <div className="inline">
                <h3 className="text-[17px] lg:text-xl font-bold text-navy leading-7 inline bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat bg-gradient-to-r from-gold to-gold group-hover:bg-[length:100%_2px] transition-[background-size] duration-300 pb-0.5">
                  {sector.title}
                </h3>
                <ChevronCircle />
              </div>
              <p className="text-sm lg:text-[15px] font-medium text-[#212e38] leading-6 pt-4">
                {sector.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
