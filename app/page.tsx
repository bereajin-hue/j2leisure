import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Partners from '@/components/Partners';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Partners />
      <ContactCTA />
      <Footer />
    </main>
  );
}
