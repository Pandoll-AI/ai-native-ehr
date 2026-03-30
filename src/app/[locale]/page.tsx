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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-zinc-900 focus:rounded-full"
      >
        Skip to main content
      </a>
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
