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

export default function CapabilitiesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-gray-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">
          Our capabilities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <a
              key={cap.title}
              href={cap.href}
              className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-navy group-hover:text-gold transition-colors">
                  {cap.title}
                </h3>
                <svg
                  className="w-4 h-4 flex-shrink-0 text-navy opacity-50 group-hover:opacity-100 group-hover:text-gold transition-all group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {cap.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
