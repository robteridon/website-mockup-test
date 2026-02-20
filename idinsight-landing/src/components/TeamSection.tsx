const team = [
  {
    name: "Rebecca Gong Sharp",
    title: "Chief Executive Officer",
    image: "https://www.idinsight.org/wp-content/uploads/2024/08/Beccas-headshot-328x328.jpeg",
    href: "https://www.idinsight.org/person/rebecca-gong-sharp/",
  },
  {
    name: "Karan Nagpal",
    title: "Regional Director, India",
    image: "https://www.idinsight.org/wp-content/uploads/2024/10/Untitled-design-15-328x328.png",
    href: "https://www.idinsight.org/person/karan-nagpal/",
  },
  {
    name: "Rivandra Royono",
    title: "Regional Director, Southeast Asia",
    image: "https://www.idinsight.org/wp-content/uploads/2024/10/Untitled-design-17-328x328.png",
    href: "https://www.idinsight.org/person/rivandra-royono/",
  },
  {
    name: "Samer Elchahabi",
    title: "Regional Director, West and North Africa",
    image: "https://www.idinsight.org/wp-content/uploads/2024/08/Headshot-4-328x328.png",
    href: "https://www.idinsight.org/person/samer-elchahabi/",
  },
  {
    name: "Marc Shotland",
    title: "Chief Technical and Learning Officer",
    image: "https://www.idinsight.org/wp-content/uploads/2024/08/Marc-Shortland-328x328.png",
    href: "https://www.idinsight.org/person/marc-shotland/",
  },
  {
    name: "Alison Connor",
    title: "Chief Impact Officer",
    image: "https://www.idinsight.org/wp-content/uploads/2024/08/Alison-328x328.png",
    href: "https://www.idinsight.org/person/alison-connor/",
  },
  {
    name: "Nicholas Parker",
    title: "Chief Operating Officer",
    image: "https://www.idinsight.org/wp-content/uploads/2024/09/Untitled-design-8-328x328.png",
    href: "https://www.idinsight.org/person/nicholas-parker-2/",
  },
  {
    name: "Garvita Chawla",
    title: "Chief Financial Officer, Global Finance Operations",
    image: "https://www.idinsight.org/wp-content/uploads/2024/09/Untitled-design-5-328x328.png",
    href: "https://www.idinsight.org/person/garvita-chawla/",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10">
          Meet our team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((person) => (
            <a
              key={person.name}
              href={person.href}
              className="group block text-center"
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-white/10 ring-2 ring-white/20 group-hover:ring-gold transition-all">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-sm lg:text-base group-hover:text-gold transition-colors">
                {person.name}
              </h3>
              <p className="text-white/70 text-xs lg:text-sm mt-1">
                {person.title}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.idinsight.org/about/our-people/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-navy transition-all group"
          >
            View All
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
