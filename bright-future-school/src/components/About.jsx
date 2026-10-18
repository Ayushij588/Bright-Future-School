import { Link } from "react-router-dom";
import "./About.css";

const ABOUT_STATS = [
  { value: "15+", label: "Years of Trust" },
  { value: "4200+", label: "Students" },
  { value: "98%", label: "Board Pass Rate" },
  { value: "180+", label: "Faculty Members" },
];

const PILLARS = [
  { icon: "🎓", text: "Academic Excellence" },
  { icon: "💡", text: "Innovation & Research" },
  { icon: "🤝", text: "Values & Character" },
  { icon: "🌍", text: "Global Citizenship" },
];

export default function About() {
  return (
    <section className="about-section" id="about" aria-label="About Bright Future School">
      <div className="container">
        <div className="about-grid">
          {/* LEFT: Visual panel */}
          <div className="about-visual">
            <div className="about-image-frame">
              <div className="about-campus-img" role="img" aria-label="Bright Future School campus"></div>
              {/* Floating quick-stat card */}
              <div className="about-float-card">
                <div className="about-float-icon">🏆</div>
                <div>
                  <div className="about-float-value">320+</div>
                  <div className="about-float-label">Awards & Honours</div>
                </div>
              </div>
              {/* Established badge */}
              <div className="about-est-badge">
                <span>Est.</span>
                <strong>2009</strong>
              </div>
            </div>

            {/* Mini stats row */}
            <div className="about-mini-stats">
              {ABOUT_STATS.map((s, i) => (
                <div className="about-mini-stat" key={i}>
                  <div className="about-mini-val">{s.value}</div>
                  <div className="about-mini-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Text + pillars */}
          <div className="about-content">
            <span className="section-eyebrow">About Our School</span>
            <h2 className="section-title">Nurturing Excellence Since 2009</h2>
            <p className="about-lead">
              Bright Future School is one of Bhopal's most trusted CBSE co-educational institutions, committed to delivering world-class education while fostering holistic development, moral values, and global awareness.
            </p>
            <p className="about-body">
              With a legacy of academic excellence, a team of over 180 dedicated educators, and a vibrant campus equipped with modern infrastructure, we offer every student the tools, environment, and mentorship they need to reach their fullest potential.
            </p>

            <div className="about-pillars-grid">
              {PILLARS.map((p, i) => (
                <div className="about-pillar" key={i}>
                  <span className="about-pillar-icon" aria-hidden="true">{p.icon}</span>
                  <span className="about-pillar-text">{p.text}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <Link to="/about" className="btn btn-primary btn-md">
                Our Full Story
              </Link>
              <Link to="/admissions" className="btn btn-outline btn-md">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}