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
    <section className="bg-ivory-light">
      {/* Full-width divider */}
      <div className="border-t border-cloud-light" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 lg:py-32">
        <h2 className="text-[clamp(1.75rem,1.5rem+1vw,2.5rem)] font-bold text-slate-dark tracking-tight mb-14">
          Featured stories
        </h2>

        {/* Main featured story — large editorial card */}
        <a
          href={featuredMain.href}
          className="group grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
        >
          <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
            <img
              src={featuredMain.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium tracking-wide uppercase text-cloud-dark">
                {featuredMain.type}
              </span>
              <span className="text-xs text-cloud-dark">&middot;</span>
              <span className="text-xs text-cloud-dark">
                {featuredMain.date}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-dark leading-snug group-hover:text-clay transition-colors duration-200">
              {featuredMain.title}
            </h3>
            <p className="text-[15px] text-slate-light mt-3 leading-relaxed">
              {featuredMain.description}
            </p>
          </div>
        </a>

        {/* Divider between featured and grid */}
        <div className="border-t border-cloud-light mb-12" />

        {/* Secondary stories — 3 column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredItems.map((item) => (
            <a key={item.title} href={item.href} className="group block">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-medium tracking-wide uppercase text-cloud-dark">
                  {item.type}
                </span>
                <span className="text-xs text-cloud-dark">&middot;</span>
                <span className="text-xs text-cloud-dark">{item.date}</span>
              </div>
              <h3 className="text-base font-bold text-slate-dark leading-snug mt-2 group-hover:text-clay transition-colors duration-200">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-14">
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
