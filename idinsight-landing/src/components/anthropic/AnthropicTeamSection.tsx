const team: { name: string; title: string; image: string; href: string; grayscale?: boolean }[] = [
  {
    name: "Rebecca Gong Sharp",
    title: "Chief Executive Officer",
    image: "/website-mockup-test/Beccas-headshot-328x328.jpeg",
    href: "https://www.idinsight.org/person/rebecca-gong-sharp/",
  },
  {
    name: "Karan Nagpal",
    title: "Regional Director, India",
    image: "/website-mockup-test/Untitled-design-15-328x328.png",
    href: "https://www.idinsight.org/person/karan-nagpal/",
  },
  {
    name: "Rivandra Royono",
    title: "Regional Director, Southeast Asia",
    image: "/website-mockup-test/Untitled-design-17-328x328.png",
    href: "https://www.idinsight.org/person/rivandra-royono/",
  },
  {
    name: "Samer Elchahabi",
    title: "Regional Director, West and North Africa",
    image: "/website-mockup-test/Headshot-4-328x328.png",
    href: "https://www.idinsight.org/person/samer-elchahabi/",
  },
  {
    name: "Marc Shotland",
    title: "Chief Technical and Learning Officer",
    image: "/website-mockup-test/Marc-Shortland-328x328.png",
    href: "https://www.idinsight.org/person/marc-shotland/",
  },
  {
    name: "Alison Connor",
    title: "Chief Impact Officer",
    image: "/website-mockup-test/Alison-328x328.png",
    href: "https://www.idinsight.org/person/alison-connor/",
  },
  {
    name: "Nicholas Parker",
    title: "Chief Operating Officer",
    image: "/website-mockup-test/Untitled-design-8-328x328.png",
    href: "https://www.idinsight.org/person/nicholas-parker-2/",
  },
  {
    name: "Garvita Chawla",
    title: "Chief Financial Officer, Global Finance Operations",
    image: "/website-mockup-test/Untitled-design-5-328x328.png",
    href: "https://www.idinsight.org/person/garvita-chawla/",
    grayscale: true,
  },
];

export default function AnthropicTeamSection() {
  return (
    <section className="bg-ivory-light">
      <div className="border-t border-cloud-light" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <h2 className="text-[clamp(1.5rem,1.3rem+0.8vw,2.25rem)] font-bold text-slate-dark tracking-tight mb-10">
          Meet our leadership
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {team.map((person) => (
            <a
              key={person.name}
              href={person.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-full aspect-square w-full max-w-[180px] mx-auto">
                <img
                  src={person.image}
                  alt={person.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]${person.grayscale ? " grayscale" : ""}`}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-[15px] font-bold text-slate-dark group-hover:text-clay transition-colors duration-200">
                  {person.name}
                </h3>
                <span className="text-sm text-slate-medium mt-1 block leading-snug">
                  {person.title}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.idinsight.org/about/our-people/"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-dark text-ivory-light text-sm font-medium hover:bg-slate-medium transition-colors"
          >
            <span>View all team members</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
