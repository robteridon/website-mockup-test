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
    <section className="bg-ivory-medium">
      {/* Full-width divider */}
      <div className="border-t border-cloud-light" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 lg:py-32">
        <h2 className="text-[clamp(1.75rem,1.5rem+1vw,2.5rem)] font-bold text-slate-dark tracking-tight mb-14">
          Our capabilities
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => (
            <a
              key={cap.title}
              href={cap.href}
              className="group block p-6 rounded-xl bg-ivory-dark hover:bg-ivory-dark/80 transition-colors duration-200"
            >
              <h3 className="text-[15px] font-semibold text-slate-dark group-hover:text-clay transition-colors duration-200">
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
