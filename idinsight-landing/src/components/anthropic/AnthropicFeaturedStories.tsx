const featuredMain = {
  title:
    "Adapting for impact: Reflecting on a year of uncertainty and reinvention",
  date: "3 December 2025",
  description: "IDinsight CEO's reflections on 2025.",
  href: "https://www.idinsight.org/article/adapting-for-impact-reflecting-on-a-year-of-uncertainty-and-reinvention/",
  image:
    "https://www.idinsight.org/wp-content/uploads/2025/12/Website-Thumbnails-2-526x296.jpg",
  type: "News",
};

const featuredItems = [
  {
    title:
      "IDinsight welcomes Charlene Migwe as East and Southern Africa Lead",
    date: "22 January 2026",
    href: "https://www.idinsight.org/article/idinsight-welcomes-charlene-migwe-as-east-and-southern-africa-lead/",
    image:
      "https://www.idinsight.org/wp-content/uploads/2026/01/Website-Thumbnails-526x296.jpg",
    type: "News",
  },
  {
    title:
      "The middle-income moment: Navigating evidence-based development in Southeast Asia",
    date: "24 December 2025",
    href: "https://www.idinsight.org/article/the-middle-income-moment-navigating-evidence-based-development-in-southeast-asia/",
    image:
      "https://www.idinsight.org/wp-content/uploads/2025/12/Website-Thumbnails-3-526x296.jpg",
    type: "News",
  },
  {
    title:
      "Navigating the next frontier: Doing more with less in West and North Africa",
    date: "18 December 2025",
    href: "https://www.idinsight.org/article/navigating-the-next-frontier-doing-more-with-less-in-west-and-north-africa/",
    image:
      "https://www.idinsight.org/wp-content/uploads/2025/11/2-526x296.jpg",
    type: "News",
  },
];

export default function AnthropicFeaturedStories() {
  return (
    <section className="border-t border-cloud-light/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
        <h2 className="text-2xl sm:text-3xl font-light text-slate-dark tracking-tight mb-12">
          Featured stories
        </h2>

        {/* 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Featured main story - spans full width on mobile, first card */}
          <a
            href={featuredMain.href}
            className="group block sm:col-span-2 lg:col-span-1"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src={featuredMain.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4">
              <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-cloud-dark">
                {featuredMain.type}
              </span>
              <span className="text-[11px] text-cloud-dark mx-2">&middot;</span>
              <span className="text-[11px] text-cloud-dark">
                {featuredMain.date}
              </span>
            </div>
            <h3 className="text-lg font-normal text-slate-dark leading-snug mt-2 group-hover:text-clay transition-colors duration-200">
              {featuredMain.title}
            </h3>
            <p className="text-sm text-slate-light mt-2 leading-relaxed">
              {featuredMain.description}
            </p>
          </a>

          {/* Secondary stories */}
          {featuredItems.map((item) => (
            <a key={item.title} href={item.href} className="group block">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4">
                <span className="inline-block text-[11px] font-medium tracking-wide uppercase text-cloud-dark">
                  {item.type}
                </span>
                <span className="text-[11px] text-cloud-dark mx-2">
                  &middot;
                </span>
                <span className="text-[11px] text-cloud-dark">{item.date}</span>
              </div>
              <h3 className="text-[15px] font-normal text-slate-dark leading-snug mt-2 group-hover:text-clay transition-colors duration-200">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12">
          <a
            href="https://www.idinsight.org/about/news/"
            className="group inline-flex items-center gap-2 text-sm text-clay hover:text-accent transition-colors"
          >
            <span>View all stories</span>
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
