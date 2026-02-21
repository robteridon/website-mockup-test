import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import CallToAction from "@/components/CallToAction";
import SectorGrid from "@/components/SectorGrid";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <FeaturedStories />
        <CallToAction
          variant="blue"
          title="2025 Year in Review"
          description="Explore our 2025 Year-in-review focused on the next frontier for social impact."
          buttonText="Dive into our 2025 Year in Review"
          buttonHref="/website-mockup-test/year-in-review"
          imageUrl="https://www.idinsight.org/wp-content/uploads/2025/12/3-4.jpg"
        />
        <SectorGrid />
        <CallToAction
          variant="gold"
          title="Data Science solutions for social challenges"
          description="IDinsight is using AI to help social sector partners create chatbots, optimize resources, target beneficiaries and more."
          buttonText="Data science and engineering"
          buttonHref="https://www.idinsight.org/methodology/data-science/"
          imageUrl="https://www.idinsight.org/wp-content/uploads/2021/02/Healthworkers-using-healthworkerconnect-1-1640x840.jpg"
        />
        <CapabilitiesGrid />
        <TeamSection />
        <PartnersSection />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
