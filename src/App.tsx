import Header from "./secoes/Header";
import Hero from "./secoes/Hero";
import About from "./secoes/About";
import Specialties from "./secoes/Specialties";
import Stats from "./secoes/Stats";
import Results from "./secoes/Results";
import Testimonials from "./secoes/Testimonials";
import Faq from "./secoes/Faq";
import Contact from "./secoes/Contact";
import Footer from "./secoes/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-(--brand-neutral) text-(--brand-ink)">
      <Header />

      <main>
        <Hero />
        <About />
        <Specialties />
        <Stats />
        <Results />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
