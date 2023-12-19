"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero-section";
import WorkSection from "@/components/ui/work-section";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
