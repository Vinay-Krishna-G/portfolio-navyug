import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import StatsSection from "@/components/stats/StatsSection";
import ServicesSection from "@/components/services/ServicesSection";
import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import ProcessSection from "@/components/process/ProcessSection";
import WhyNavyugSection from "@/components/why-navyug/WhyNavyugSection";
import ConversationEngine from "@/components/conversation-engine/ConversationEngine";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ShowcaseSection />
      <ProcessSection />
      <WhyNavyugSection />
      <ConversationEngine />
      <ContactSection />
      <Footer />
    </main>
  );
}
