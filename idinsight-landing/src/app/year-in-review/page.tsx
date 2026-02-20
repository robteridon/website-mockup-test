import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "2025 Year in Review | IDinsight",
  description:
    "Explore IDinsight's 2025 Year in Review — the next frontier for social impact.",
};

export default function YearInReview() {
  return (
    <>
      <Header />
      <main id="content">
        <iframe
          src="/year-end-review.html"
          title="IDinsight 2025 Year in Review"
          className="w-full border-0"
          style={{ height: "calc(100vh - 120px)", minHeight: "600px" }}
        />
      </main>
      <Footer />
    </>
  );
}
