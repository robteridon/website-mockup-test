const featuredMain = {
  title: "Adapting for impact: Reflecting on a year of uncertainty and reinvention",
  date: "3 December 2025",
  description: "IDinsight CEO's reflections on 2025.",
  href: "https://www.idinsight.org/article/adapting-for-impact-reflecting-on-a-year-of-uncertainty-and-reinvention/",
  image: "https://www.idinsight.org/wp-content/uploads/2025/12/Website-Thumbnails-2-526x296.jpg",
  type: "News",
};

const featuredItems = [
  {
    title: "IDinsight welcomes Charlene Migwe as East and Southern Africa Lead",
    date: "22 January 2026",
    href: "https://www.idinsight.org/article/idinsight-welcomes-charlene-migwe-as-east-and-southern-africa-lead/",
    image: "https://www.idinsight.org/wp-content/uploads/2026/01/Website-Thumbnails-526x296.jpg",
    type: "News",
  },
  {
    title: "The middle-income moment: Navigating evidence-based development in Southeast Asia",
    date: "24 December 2025",
    href: "https://www.idinsight.org/article/the-middle-income-moment-navigating-evidence-based-development-in-southeast-asia/",
    image: "https://www.idinsight.org/wp-content/uploads/2025/12/Website-Thumbnails-3-526x296.jpg",
    type: "News",
  },
  {
    title: "Navigating the next frontier: Doing more with less in West and North Africa",
    date: "18 December 2025",
    href: "https://www.idinsight.org/article/navigating-the-next-frontier-doing-more-with-less-in-west-and-north-africa/",
    image: "https://www.idinsight.org/wp-content/uploads/2025/11/2-526x296.jpg",
    type: "News",
  },
  {
    title: "Bicycles buffer crisis\u2014then accelerate recovery",
    date: "25 November 2025",
    href: "https://www.idinsight.org/article/bicycles-buffer-crisis-then-accelerate-recovery/",
    image: "https://www.idinsight.org/wp-content/uploads/2025/11/Untitled-design-13-526x296.png",
    type: "News",
  },
];

function ChevronRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function FeaturedStories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">Featured stories</h2>

        {/* Featured main story */}
        <a
          href={featuredMain.href}
          className="group block mb-10 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <img
                src={featuredMain.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-navy text-white text-xs font-semibold rounded-full">
                {featuredMain.type}
              </span>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {featuredMain.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{featuredMain.date}</p>
              <p className="text-gray-600 mb-6">{featuredMain.description}</p>
              <span className="inline-flex items-center gap-2 text-navy font-semibold group-hover:text-gold transition-colors">
                Read more
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </a>

        {/* Secondary stories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group block rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-navy text-white text-xs font-semibold rounded-full">
                  {item.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
