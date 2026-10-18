import { useState } from "react";
import Button from "./ui/Button";
import "./Hero.css";

export default function Hero() {
  const [quickForm, setQuickForm] = useState({ name: "", phone: "", grade: "" });
  const [quickSent, setQuickSent] = useState(false);

  function handleQuickChange(e) {
    setQuickForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleQuickSubmit(e) {
    e.preventDefault();
    setQuickSent(true);
  }

  const highlights = [
    { icon: "🎓", label: "Holistic Education" },
    { icon: "👩‍🏫", label: "Experienced Faculty" },
    { icon: "🌍", label: "Global Perspective" },
    { icon: "🛡️", label: "Safe & Nurturing" },
    { icon: "💻", label: "Modern Infrastructure" },
  ];

  return (
    <div className="hero-wrapper">
      <section className="hero" id="home" aria-label="Welcome to Bright Future School">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          {/* LEFT: Headline + Buttons */}
          <div className="hero-content">
            <div className="hero-tag-badge">
              <span className="hero-tag-dot" aria-hidden="true"></span>
              <span>Admissions Open 2026-27 • Nursery to Class XII</span>
            </div>

            <div className="hero-headline-block">
              <p className="hero-pre-headline">WHERE YOUNG MINDS</p>
              <h1 className="hero-headline">
                Learn. Grow.<br />
                <span className="hero-headline-gold">Succeed.</span>
              </h1>
            </div>

            <p className="hero-lead">
              Empowering students with knowledge, values and skills to thrive in a changing world. Bright Future School, Bhopal.
            </p>

            <div className="hero-buttons">
              <Button to="/admissions" variant="primary" size="lg">
                Admissions Open 2026-27
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Take a Campus Tour
              </Button>
            </div>
          </div>

          {/* RIGHT: Quick Enquiry Form Panel */}
          <div className="hero-enquiry-panel">
            {quickSent ? (
              <div className="enquiry-success">
                <div className="enquiry-success-icon">✓</div>
                <h3>We'll get in touch with you!</h3>
                <p>Our team will call you back soon.</p>
                <button className="enquiry-reset-btn" onClick={() => setQuickSent(false)}>
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <div className="enquiry-panel-header">
                  <h3>ENQUIRE NOW</h3>
                  <p>We will get in touch with you!</p>
                </div>
                <form className="enquiry-quick-form" onSubmit={handleQuickSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Parent's Name"
                    value={quickForm.name}
                    onChange={handleQuickChange}
                    required
                    aria-label="Parent's Name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    onChange={handleQuickChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={quickForm.phone}
                    onChange={handleQuickChange}
                    required
                    aria-label="Phone Number"
                  />
                  <select
                    name="grade"
                    value={quickForm.grade}
                    onChange={handleQuickChange}
                    required
                    aria-label="Grade Applying For"
                  >
                    <option value="">Grade Applying For</option>
                    <option value="Primary (Class 1-5)">Primary (Class 1–5)</option>
                    <option value="Middle (Class 6-8)">Middle (Class 6–8)</option>
                    <option value="Secondary (Class 9-10)">Secondary (Class 9–10)</option>
                    <option value="Senior Secondary (Class 11-12)">Senior Secondary (Class 11–12)</option>
                  </select>
                  <button type="submit" className="enquiry-submit-btn">
                    SUBMIT ENQUIRY
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT ICONS ROW — below hero, overlapping */}
      <div className="hero-highlights-bar">
        <div className="container hero-highlights-container">
          {highlights.map((h, i) => (
            <div className="hero-highlight-pill" key={i}>
              <span className="highlight-pill-icon" aria-hidden="true">{h.icon}</span>
              <span className="highlight-pill-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}