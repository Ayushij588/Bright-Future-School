
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import About from "../components/About";
import Programs from "../components/Programs";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import CampusTourCTA from "../components/CampusTourCTA";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main id="main-content">
      {/* 1. Hero + Enquiry Form + Highlights Bar */}
      <Hero />

      {/* 2. Animated Stats Bar */}
      <Stats />

      {/* 3. School Pillars / Why Choose Us */}
      <Features />

      {/* 4. About Us — Two-column with campus image */}
      <About />

      {/* 5. Academic Programmes — Gradient cards */}
      <Programs />

      {/* 6. Co-curricular Activities grid + Facilities strip */}
      <Facilities />

      {/* 7. Photo Gallery */}
      <Gallery limit={6} showFilter={true} showViewAll={true} />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. News & Announcements */}
      <News showViewAll={true} />

      {/* 10. Campus Tour CTA Banner */}
      <CampusTourCTA />

      {/* 11. Admission Enquiry / Contact */}
      <Contact />
    </main>
  );
}