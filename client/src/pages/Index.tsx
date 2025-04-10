
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import DashboardPreview from "@/components/DashboardPreview";
import AIAdvisor from "@/components/AIAdvisor";
import PrivacySection from "@/components/PrivacySection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <DashboardPreview />
        <AIAdvisor />
        <PrivacySection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
