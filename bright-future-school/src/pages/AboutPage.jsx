import React from "react";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import Stats from "../components/Stats";
import "./AboutPage.css";

export default function AboutPage() {
  const values = [
    { icon: "🧭", title: "Discipline & Integrity", desc: "Instilling moral grounding, punctuality, and self-governance in every student." },
    { icon: "💡", title: "Intellectual Curiosity", desc: "Encouraging thoughtful questioning, exploration, and experiential scientific discovery." },
    { icon: "🤝", title: "Respect & Empathy", desc: "Fostering mutual appreciation, diversity, cultural harmony, and community kindness." },
    { icon: "⚽", title: "Teamwork & Sportsmanship", desc: "Building perseverance, collaboration, and resilience through group activities and sports." },
    { icon: "🎨", title: "Creativity & Innovation", desc: "Nurturing imaginative thinking through arts, performance, literature, and technology." },
    { icon: "🌱", title: "Lifelong Growth", desc: "Equipping every child with adaptable knowledge and confidence to thrive in the modern world." },
  ];

  const highlights = [
    "25+ continuous years of academic excellence and value-based schooling in Bhopal",
    "Qualified, passionate educators with regular teacher-training and pedagogical enrichment",
    "Affiliated with CBSE, ensuring rigorous national academic benchmarking",
    "Balanced curriculum integrating sports, scientific laboratories, IT, and performing arts",
    "Modern, safe campus equipped with 24/7 CCTV surveillance and verified GPS transport",
    "Transparent parent-teacher collaboration and regular progress evaluation",
  ];

  return (
    <main className="about-page">
      <PageHero
        badge="About Us"
        title="About Bright Future School"
        subtitle="Dedicated to nurturing confident, capable, and compassionate leaders with 25+ years of excellence in Bhopal."
        breadcrumbCurrent="About Us"
      />

      {/* Stats Counter Overlay */}
      <Stats />

      {/* Story & Philosophy Section */}
      <section className="about-narrative-section">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-text">
              <span className="section-tag">Our Heritage & Story</span>
              <h2 className="section-title">25 Years of Nurturing Young Minds</h2>
              <p className="narrative-lead">
                Bright Future School began in Bhopal with a singular, steadfast belief: that when provided with the right mentorship, ethical grounding, and inspiring facilities, every single child can uncover their unique potential and shine.
              </p>
              <p className="narrative-body">
                Over the past two and a half decades, we have evolved into one of Bhopal’s most respected learning institutions. While educational techniques and digital classrooms have advanced, our fundamental dedication remains unchanged — cultivating genuine curiosity, academic rigor, and human compassion.
              </p>
              <p className="narrative-body">
                Today, our alumni excel across engineering, medical, administrative, entrepreneurial, and creative fields, carrying forward the values forged in our classrooms.
              </p>
            </div>

            <div className="narrative-visual">
              <div className="narrative-img-wrap">
                <img
                  src="/images/school.jpg"
                  alt="Bright Future School Campus Building"
                  className="narrative-img"
                />
                <div className="narrative-caption">
                  <h4>Bright Future School Campus</h4>
                  <p>Bhopal, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="vm-icon" aria-hidden="true">🎯</div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-text">
                To be a premier school of choice in Central India that fosters inquisitive learners, ethical innovators, and globally responsible citizens equipped to make meaningful contributions to society.
              </p>
            </div>

            <div className="mission-card">
              <div className="vm-icon" aria-hidden="true">🚀</div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-text">
                To provide accessible, high-caliber education combining CBSE curriculum standards with holistic co-curricular development, cutting-edge technology, individual attention, and enduring human values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="values-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Our Core Principles</span>
            <h2 className="section-title">The Values That Guide Every Step</h2>
            <p className="section-subtitle">
              Education at Bright Future School transcends textbooks. These foundational principles guide our students in classroom learning and personal conduct.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon" aria-hidden="true">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us Checklist */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-box">
            <div className="trust-header">
              <span className="section-tag navy">School Highlights</span>
              <h2 className="section-title">Why Families Choose Bright Future School</h2>
              <p className="section-subtitle">
                A steadfast track record of student achievement, pastoral care, and modern infrastructure.
              </p>
            </div>

            <div className="trust-checklist">
              {highlights.map((item, idx) => (
                <div className="trust-check-item" key={idx}>
                  <span className="check-bullet" aria-hidden="true">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="trust-cta-row">
              <Button to="/admissions" variant="primary" size="lg">
                Apply for Admission 2026-27 →
              </Button>
              <Button to="/contact" variant="outline-navy" size="lg">
                Schedule a Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}