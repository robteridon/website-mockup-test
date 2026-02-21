const stories = [
  {
    title: "Adapting for impact: Reflecting on a year of uncertainty and reinvention",
    date: "December 3, 2025",
    description: "IDinsight CEO's reflections on 2025.",
    href: "https://www.idinsight.org/article/adapting-for-impact-reflecting-on-a-year-of-uncertainty-and-reinvention/",
    category: "News",
    buttonText: "Read the post",
  },
  {
    title: "IDinsight welcomes Charlene Migwe as East and Southern Africa Lead",
    date: "January 22, 2026",
    description: "A new regional leader joins the IDinsight team to drive impact in East and Southern Africa.",
    href: "https://www.idinsight.org/article/idinsight-welcomes-charlene-migwe-as-east-and-southern-africa-lead/",
    category: "News",
    buttonText: "Read the post",
  },
  {
    title: "The middle-income moment: Navigating evidence-based development in Southeast Asia",
    date: "December 24, 2025",
    description: "How Southeast Asian nations are using evidence to navigate unique development challenges.",
    href: "https://www.idinsight.org/article/the-middle-income-moment-navigating-evidence-based-development-in-southeast-asia/",
    category: "Insights",
    buttonText: "Read the post",
  },
];

export default function AnthropicFeaturedStories() {
  return (
    <section className="bg-ivory-light">
      <div className="border-t border-cloud-light" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((story) => (
            <a
              key={story.title}
              href={story.href}
              className="group block bg-ivory-dark rounded-2xl p-7 lg:p-8 flex flex-col"
            >
              {/* Title and description */}
              <h3 className="text-lg lg:text-xl font-bold text-slate-dark leading-snug">
                {story.title}
              </h3>
              <p className="text-sm text-slate-medium leading-relaxed mt-3">
                {story.description}
              </p>

              {/* Spacer */}
              <div className="flex-1 min-h-12" />

              {/* Metadata rows */}
              <div className="border-t border-cloud-light pt-4 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-dark uppercase tracking-wide text-xs">Date</span>
                  <span className="text-slate-medium">{story.date}</span>
                </div>
              </div>
              <div className="border-t border-cloud-light pt-4 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-dark uppercase tracking-wide text-xs">Category</span>
                  <span className="text-slate-medium">{story.category}</span>
                </div>
              </div>

              {/* Dark button */}
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-dark text-ivory-light text-sm font-medium group-hover:bg-slate-medium transition-colors">
                  {story.buttonText}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
