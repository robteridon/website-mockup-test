import AnthropicHeader from "@/components/anthropic/AnthropicHeader";
import AnthropicHero from "@/components/anthropic/AnthropicHero";
import AnthropicFeaturedStories from "@/components/anthropic/AnthropicFeaturedStories";
import AnthropicCallToAction from "@/components/anthropic/AnthropicCallToAction";
import AnthropicSectorGrid from "@/components/anthropic/AnthropicSectorGrid";
import AnthropicCapabilitiesGrid from "@/components/anthropic/AnthropicCapabilitiesGrid";
import AnthropicTeamSection from "@/components/anthropic/AnthropicTeamSection";
import AnthropicFooter from "@/components/anthropic/AnthropicFooter";

export default function Home() {
  return (
    <div className="bg-ivory-light text-slate-dark antialiased">
      <AnthropicHeader />
      <main id="content">
        <AnthropicHero />
        <AnthropicFeaturedStories />
        <AnthropicCallToAction
          title="2025 Year in Review"
          description="Explore our 2025 Year-in-review focused on the next frontier for social impact."
          linkText="Dive into our 2025 Year in Review"
          linkHref="/website-mockup-test/year-in-review"
          imageUrl="https://www.idinsight.org/wp-content/uploads/2025/12/3-4.jpg"
        />
        <AnthropicSectorGrid />
        <AnthropicCapabilitiesGrid />
        <AnthropicTeamSection />
      </main>
      <AnthropicFooter />
    </div>
  );
}
