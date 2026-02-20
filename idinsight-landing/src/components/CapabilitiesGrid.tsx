const capabilities = [
  {
    title: "Impact evaluations",
    description: "An impact evaluation estimates the impact of a policy, program, or intervention on one or more outcomes.",
    href: "https://www.idinsight.org/methodology/decision-focused-impact-evaluations/",
  },
  {
    title: "Data science and engineering",
    description: "Our Data Science team builds and deploys software and AI solutions to some of the biggest challenges in the social sector.",
    href: "https://www.idinsight.org/methodology/data-science/",
  },
  {
    title: "Learning partnerships",
    description: "Learning partnerships are long-term often embedded engagements to answer important questions as they arise using a broad methodological toolkit.",
    href: "https://www.idinsight.org/methodology/learning-partnerships/",
  },
  {
    title: "Monitoring systems",
    description: "Monitoring systems efficiently capture reliable data, providing visualization and analysis to identify triggers for action.",
    href: "https://www.idinsight.org/methodology/monitoring-systems/",
  },
  {
    title: "Process evaluation",
    description: "Process evaluations can help decision-makers understand if their program is running as expected.",
    href: "https://www.idinsight.org/methodology/process-evaluation/",
  },
  {
    title: "Preference elicitation",
    description: "Preference elicitation in household surveys and lab-in-the-field experiments are designed to understand core beliefs and preferences.",
    href: "#",
  },
  {
    title: "Quick turnaround surveys",
    description: "IDinsight recruits, trains, and supervises survey data collectors to conduct rapid telephone or in-person surveys.",
    href: "https://www.idinsight.org/methodology/quick-turnaround-surveys/",
  },
  {
    title: "Capacity building",
    description: "Capacity building bolsters clients' skills and knowledge to strategically use evidence and data to meet their goals.",
    href: "https://www.idinsight.org/methodology/capacity-building/",
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

export default function CapabilitiesGrid() {
  return (
    <section className="py-12 lg:py-14 bg-[#f2f2f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">
          Our capabilities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8">
          {capabilities.map((cap) => (
            <a
              key={cap.title}
              href={cap.href}
              className="group block"
            >
              <div className="inline">
                <h3 className="text-[17px] lg:text-xl font-bold text-navy leading-7 inline bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat bg-gradient-to-r from-gold to-gold group-hover:bg-[length:100%_2px] transition-[background-size] duration-300 pb-0.5">
                  {cap.title}
                </h3>
                <ChevronCircle />
              </div>
              <p className="text-sm lg:text-[15px] font-medium text-[#212e38] leading-6 pt-4">
                {cap.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
