// app/page.tsx
import Link from "next/link";
import Navbar from "@/app/components/landing/Navbar";
import Hero from "@/app/components/landing/Hero";
import Features from "@/app/components/landing/Features";
import Services from "@/app/components/landing/Services";
import Testimonials from "@/app/components/landing/Testimonials";
import CTASection from "@/app/components/landing/CTASection";
import Footer from "@/app/components/landing/Footer";
import ImageShowcase from "./components/landing/ImageShowcaseHero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      <div className="hidden sm:block bg-[#e0e7ff]">
        <ImageShowcase />
      </div>
      <Features />
      <Services />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
