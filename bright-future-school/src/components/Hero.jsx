
import Button from "./ui/Button";
import "./Hero.css";

export default function Hero() {
  const quickBadges = [
    { icon: "🎓", text: "25+ Years of Academic Excellence" },
    { icon: "🏆", text: "98% Board Results" },
    { icon: "🛡️", text: "Safe & CCTV Campus" },
    { icon: "🌟", text: "CBSE Curriculum" },
  ];

  return (
    <section className="hero" id="home" aria-label="Welcome to Bright Future School">
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag-badge">
            <span className="hero-tag-dot" aria-hidden="true"></span>
            <span>Admissions Open 2026-27 • Nursery to Class XII</span>
          </div>

          <h1 className="hero-headline">
            Building Bright Futures, <br className="hero-br" />
            <span className="hero-headline-accent">One Student</span> at a Time
          </h1>

          <p className="hero-lead">
            A place where curiosity grows, talent shines, and every child is encouraged to dream big. We combine academic rigour with character, sports, and creativity in the heart of Bhopal.
          </p>

          <div className="hero-buttons">
            <Button to="/admissions" variant="primary" size="lg">
              Apply for Admission →
            </Button>
            <Button to="/academics" variant="outline" size="lg">
              Explore Programs
            </Button>
          </div>

          <div className="hero-quick-badges" aria-label="School highlights">
            {quickBadges.map((badge, idx) => (
              <div className="hero-quick-pill" key={idx}>
                <span className="hero-pill-icon">{badge.icon}</span>
                <span className="hero-pill-text">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}