import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import About from "../components/About";
import Programs from "../components/Programs";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main id="main-content">
      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Verified Highlights & Key Stats */}
      <Stats />
      <Features />

      {/* 5. About Us Preview */}
      <About />

      {/* 6. Academic Programs Cards */}
      <Programs />

      {/* 7. Full-width Facilities & Campus Highlights */}
      <Facilities />

      {/* 8. Activities & Student Life Gallery with Lightbox */}
      <Gallery limit={6} showFilter={true} showViewAll={true} />

      {/* 9. News & Announcements */}
      <News showViewAll={true} />

      {/* 10. Admission Enquiry & Campus Visit */}
      <Contact />
    </main>
  );
}