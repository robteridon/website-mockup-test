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

function Chevron({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 6 9" fill="currentColor">
      <path d="M1.4 0L0 1.4l3.2 3.1L0 7.6 1.4 9 6 4.5 1.4 0z" />
    </svg>
  );
}

export default function FeaturedStories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-10">Featured stories</h2>

        {/* Featured main story - banner card */}
        <a
          href={featuredMain.href}
          className="group block mb-8 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-7">
            <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
              <img
                src={featuredMain.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-90"
              />
              <span className="absolute top-0 left-0 px-2 py-1.5 bg-gold text-[#212e38] text-[11px] font-bold leading-none">
                {featuredMain.type}
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="my-3">
                <h3 className="text-xl lg:text-[20px] font-bold text-navy leading-7 inline bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat bg-gradient-to-r from-gold to-gold group-hover:bg-[length:100%_2px] transition-[background-size] duration-200 pb-0.5">
                  {featuredMain.title}
                </h3>
              </div>
              <p className="text-xs text-[#626b73]">{featuredMain.date}</p>
              <p className="text-[15px] font-medium text-[#212e38] mt-3 leading-6">{featuredMain.description}</p>
              <div className="mt-4 flex items-center gap-2 text-navy font-bold text-sm">
                <span>Read more</span>
                <Chevron className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </a>

        {/* Secondary stories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group block overflow-hidden"
            >
              <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-90"
                />
                <span className="absolute top-0 left-0 px-2 py-1.5 bg-gold text-[#212e38] text-[11px] font-bold leading-none">
                  {item.type}
                </span>
              </div>
              <div className="pt-2">
                <div className="my-2.5">
                  <h3 className="text-sm font-bold text-navy leading-5 inline bg-[length:0_2px] bg-[position:0_100%] bg-no-repeat bg-gradient-to-r from-gold to-gold group-hover:bg-[length:100%_2px] transition-[background-size] duration-200 pb-0.5">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#626b73]">{item.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
