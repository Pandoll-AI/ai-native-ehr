import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Timeline from "@/components/Timeline";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Timeline />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
