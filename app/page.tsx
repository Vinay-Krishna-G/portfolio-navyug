import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import StatsSection from "@/components/stats/StatsSection";
import ServicesSection from "@/components/services/ServicesSection";
import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import ProcessSection from "@/components/process/ProcessSection";
import TeamSection from "@/components/team/TeamSection";
import WhyNavyugSection from "@/components/why-navyug/WhyNavyugSection";
import FAQSection from "@/components/faq/FAQSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ShowcaseSection />
      <ProcessSection />
      <TeamSection />
      <WhyNavyugSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
