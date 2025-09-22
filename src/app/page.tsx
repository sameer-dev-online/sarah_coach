"use client";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/contact/ContactPage";
export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactPage />
      <Process />
      <CTABanner />
      <Footer />
    </div>
  );
}
