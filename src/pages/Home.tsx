import Hero from "@/components/features/Hero";
import Banner from "@/components/features/Banner";
import Collection from "@/components/features/Collection";
import About from "@/components/features/About";
import ScentNotes from "@/components/features/ScentNotes";
import Testimonials from "@/components/features/Testimonials";
import Contact from "@/components/features/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Collection />
      <About />
      <ScentNotes />
      <Testimonials />
      <Contact />
    </main>
  );
}
