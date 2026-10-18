import React from "react";
import "./Features.css";

export default function Features() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Teachers",
      text: "Experienced and caring mentors who guide every child with personal attention and positive reinforcement.",
      highlight: "80+ Dedicated Faculty",
    },
    {
      icon: "💻",
      title: "Smart Classrooms",
      text: "Digital interactive boards, modern multimedia lessons, and technology-enabled learning spaces.",
      highlight: "Modern Digital Learning",
    },
    {
      icon: "⚽",
      title: "Sports & Holistic Growth",
      text: "Spacious sports grounds, athletics, indoor games, music, dance, and creative art clubs for all-round growth.",
      highlight: "Co-curricular Excellence",
    },
    {
      icon: "🛡️",
      title: "Safe & Secure Campus",
      text: "Complete 24/7 CCTV coverage, GPS-tracked school buses, vetted support staff, and a friendly, nurturing atmosphere.",
      highlight: "100% Child-Safe Campus",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">Why Families Trust Us</span>
          <h2 className="section-title">The Pillars of Bright Future School</h2>
          <p className="section-subtitle">
            We provide a balanced ecosystem where high academic standards meet personal care, creativity, and modern infrastructure.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.title}>
              <div className="feature-icon" aria-hidden="true">{item.icon}</div>
              <span className="feature-highlight-badge">{item.highlight}</span>
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}