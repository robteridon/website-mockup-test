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
    <section className="py-10 lg:py-12 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10">
          Meet our team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          {team.map((person) => (
            <a
              key={person.name}
              href={person.href}
              className="group block"
            >
              <div className="relative overflow-hidden" style={{ paddingTop: "100%" }}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-sm lg:text-[17px] font-bold text-white leading-snug group-hover:text-gold transition-colors duration-200">
                  {person.name}
                </h3>
                <span className="text-sm lg:text-[15px] text-white/80 mt-1 block leading-6">
                  {person.title}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 lg:mt-12">
          <a
            href="https://www.idinsight.org/about/our-people/"
            className="inline-flex items-center gap-3 px-5 py-3 bg-[#212e38] text-white text-sm font-bold hover:bg-[#2d3d4d] transition-colors group"
          >
            <span>View All</span>
            <svg
              className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 6 9"
              fill="currentColor"
            >
              <path d="M1.4 0L0 1.4l3.2 3.1L0 7.6 1.4 9 6 4.5 1.4 0z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
