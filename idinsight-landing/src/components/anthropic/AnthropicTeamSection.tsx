const team = [
  {
    name: "Rebecca Gong Sharp",
    title: "Chief Executive Officer",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/08/Beccas-headshot-328x328.jpeg",
    href: "https://www.idinsight.org/person/rebecca-gong-sharp/",
  },
  {
    name: "Karan Nagpal",
    title: "Regional Director, India",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/10/Untitled-design-15-328x328.png",
    href: "https://www.idinsight.org/person/karan-nagpal/",
  },
  {
    name: "Rivandra Royono",
    title: "Regional Director, Southeast Asia",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/10/Untitled-design-17-328x328.png",
    href: "https://www.idinsight.org/person/rivandra-royono/",
  },
  {
    name: "Samer Elchahabi",
    title: "Regional Director, West and North Africa",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/08/Headshot-4-328x328.png",
    href: "https://www.idinsight.org/person/samer-elchahabi/",
  },
  {
    name: "Marc Shotland",
    title: "Chief Technical and Learning Officer",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/08/Marc-Shortland-328x328.png",
    href: "https://www.idinsight.org/person/marc-shotland/",
  },
  {
    name: "Alison Connor",
    title: "Chief Impact Officer",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/08/Alison-328x328.png",
    href: "https://www.idinsight.org/person/alison-connor/",
  },
  {
    name: "Nicholas Parker",
    title: "Chief Operating Officer",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/09/Untitled-design-8-328x328.png",
    href: "https://www.idinsight.org/person/nicholas-parker-2/",
  },
  {
    name: "Garvita Chawla",
    title: "Chief Financial Officer, Global Finance Operations",
    image:
      "https://www.idinsight.org/wp-content/uploads/2024/09/Untitled-design-5-328x328.png",
    href: "https://www.idinsight.org/person/garvita-chawla/",
  },
];

export default function AnthropicTeamSection() {
  return (
    <section className="border-t border-cloud-light/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
        <h2 className="text-2xl sm:text-3xl font-light text-slate-dark tracking-tight mb-12">
          Meet our leadership
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {team.map((person) => (
            <a
              key={person.name}
              href={person.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-full aspect-square w-full max-w-[200px] mx-auto">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-[15px] font-medium text-slate-dark group-hover:text-clay transition-colors duration-200">
                  {person.name}
                </h3>
                <span className="text-sm text-slate-light mt-1 block leading-snug">
                  {person.title}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.idinsight.org/about/our-people/"
            className="group inline-flex items-center gap-2 text-sm text-clay hover:text-accent transition-colors"
          >
            <span>View all team members</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
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
          </a>
        </div>
      </div>
    </section>
  );
}
