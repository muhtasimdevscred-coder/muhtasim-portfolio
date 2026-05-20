import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="pt-24">
        <Hero />
        <Experience />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
