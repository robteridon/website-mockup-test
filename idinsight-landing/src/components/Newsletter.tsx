export default function Newsletter() {
  return (
    <section className="bg-gray-warm py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy">
            Stay up-to-date with IDinsight
          </h2>
          <form
            action="https://idinsight.us13.list-manage.com/subscribe/post?u=46bfc186dc532dcdcf4199166&id=98f0f257f7&f_id=002a05e3f0"
            method="post"
            target="_blank"
            className="flex w-full sm:w-auto gap-3"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Email"
              required
              className="flex-1 sm:w-72 px-5 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
            />
            {/* Honeypot */}
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name="b_46bfc186dc532dcdcf4199166_98f0f257f7" tabIndex={-1} defaultValue="" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-navy text-white font-semibold text-sm hover:bg-navy-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
