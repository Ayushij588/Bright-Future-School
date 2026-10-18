import React from "react";
import Button from "./ui/Button";
import "./About.css";

export default function About() {
  const points = [
    { title: "25+ Years of Proven Excellence", desc: "Trusted by thousands of families in Bhopal since establishment." },
    { title: "Student-Centric Care", desc: "Passionate, approachable mentors focusing on individual child potential." },
    { title: "Holistic Development", desc: "Balanced emphasis on academics, athletics, cultural arts, and ethics." },
    { title: "Strong Moral Values & Discipline", desc: "Fostering respect, integrity, teamwork, and responsible citizenship." },
  ];

  return (
    <section className="about-section" id="about" aria-label="About Bright Future School">
      <div className="container">
        <div className="about-wrapper">
          {/* Left Column: Image with Experience Badge */}
          <div className="about-visual">
            <div className="about-image-card">
              <img
                src="/images/about.jpg"
                alt="Bright Future School students engaged in collaborative classroom learning"
                className="about-main-img"
                loading="lazy"
              />
              <div className="about-experience-stamp">
                <span className="stamp-number">25+</span>
                <span className="stamp-text">Years of Quality Education</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Verified Points */}
          <div className="about-content">
            <span className="section-tag">About Our School</span>
            <h2 className="section-title">A Place Where Every Child Grows & Succeeds</h2>
            
            <p className="about-lead">
              Bright Future School is dedicated to giving every student the confidence, knowledge, and lifelong values needed to thrive in an ever-changing world.
            </p>

            <p className="about-description">
              Our campus in Bhopal provides a warm, disciplined, and intellectually stimulating environment where students are motivated to explore their curiosity, achieve academic heights, and develop leadership qualities.
            </p>

            <div className="about-checklist">
              {points.map((pt, idx) => (
                <div className="about-check-item" key={idx}>
                  <div className="about-check-icon" aria-hidden="true">✓</div>
                  <div>
                    <h4 className="about-check-title">{pt.title}</h4>
                    <p className="about-check-desc">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-action-row">
              <Button to="/about" variant="navy" size="md">
                Read Our Full Story →
              </Button>
              <Button to="/admissions" variant="primary" size="md">
                Admission Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}