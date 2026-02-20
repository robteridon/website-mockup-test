export default function Newsletter() {
  return (
    <section className="bg-blue-light py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          <h2 className="text-[17px] lg:text-xl font-bold text-navy lg:col-span-4">
            Stay up-to-date with IDinsight
          </h2>
          <div className="lg:col-span-6 lg:col-start-6">
            <form
              action="https://idinsight.us13.list-manage.com/subscribe/post?u=46bfc186dc532dcdcf4199166&id=98f0f257f7&f_id=002a05e3f0"
              method="post"
              target="_blank"
              className="flex gap-3"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Email"
                required
                className="flex-1 px-4 py-2.5 border border-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
              />
              {/* Honeypot */}
              <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input type="text" name="b_46bfc186dc532dcdcf4199166_98f0f257f7" tabIndex={-1} defaultValue="" />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-navy text-white font-bold text-sm hover:bg-navy-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
