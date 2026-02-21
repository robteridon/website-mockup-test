const capabilities = [
  {
    title: "Impact evaluations",
    description:
      "An impact evaluation estimates the impact of a policy, program, or intervention on one or more outcomes.",
    href: "https://www.idinsight.org/methodology/decision-focused-impact-evaluations/",
  },
  {
    title: "Data science and engineering",
    description:
      "Our Data Science team builds and deploys software and AI solutions to some of the biggest challenges in the social sector.",
    href: "https://www.idinsight.org/methodology/data-science/",
  },
  {
    title: "Learning partnerships",
    description:
      "Learning partnerships are long-term often embedded engagements to answer important questions as they arise using a broad methodological toolkit.",
    href: "https://www.idinsight.org/methodology/learning-partnerships/",
  },
  {
    title: "Monitoring systems",
    description:
      "Monitoring systems efficiently capture reliable data, providing visualization and analysis to identify triggers for action.",
    href: "https://www.idinsight.org/methodology/monitoring-systems/",
  },
  {
    title: "Process evaluation",
    description:
      "Process evaluations can help decision-makers understand if their program is running as expected.",
    href: "https://www.idinsight.org/methodology/process-evaluation/",
  },
  {
    title: "Preference elicitation",
    description:
      "Preference elicitation in household surveys and lab-in-the-field experiments are designed to understand core beliefs and preferences.",
    href: "#",
  },
  {
    title: "Quick turnaround surveys",
    description:
      "IDinsight recruits, trains, and supervises survey data collectors to conduct rapid telephone or in-person surveys.",
    href: "https://www.idinsight.org/methodology/quick-turnaround-surveys/",
  },
  {
    title: "Capacity building",
    description:
      "Capacity building bolsters clients' skills and knowledge to strategically use evidence and data to meet their goals.",
    href: "https://www.idinsight.org/methodology/capacity-building/",
  },
];

export default function AnthropicCapabilitiesGrid() {
  return (
    <section className="bg-ivory-medium border-t border-cloud-light/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
        <h2 className="text-2xl sm:text-3xl font-light text-slate-dark tracking-tight mb-12">
          Our capabilities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <a
              key={cap.title}
              href={cap.href}
              className="group block p-6 rounded-xl border border-cloud-light/80 hover:border-cloud-dark/40 bg-ivory-light transition-all duration-200"
            >
              <h3 className="text-[15px] font-medium text-slate-dark group-hover:text-clay transition-colors duration-200">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-light leading-relaxed mt-2">
                {cap.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
