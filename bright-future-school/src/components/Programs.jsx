import { Link } from "react-router-dom";
import "./Programs.css";

const PROGRAMS = [
  {
    id: "primary",
    label: "Foundation Years",
    title: "Primary School",
    subtitle: "Classes 1 – 5",
    desc: "Building curiosity, creativity and strong foundational skills through activity-based learning.",
    icon: "📚",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
    accent: "#3b82f6",
  },
  {
    id: "middle",
    label: "Growth Phase",
    title: "Middle School",
    subtitle: "Classes 6 – 8",
    desc: "Developing critical thinking, collaborative projects and co-curricular exploration.",
    icon: "🔬",
    gradient: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
    accent: "#10b981",
  },
  {
    id: "secondary",
    label: "Achievement",
    title: "Secondary",
    subtitle: "Classes 9 – 10 (CBSE)",
    desc: "Rigorous academic preparation for CBSE Board with focus on conceptual mastery.",
    icon: "📐",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)",
    accent: "#f97316",
  },
  {
    id: "senior",
    label: "Excellence",
    title: "Senior Secondary",
    subtitle: "Classes 11 – 12 (Science / Commerce / Arts)",
    desc: "Stream specialisation, competitive exam coaching and career guidance.",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #581c87 0%, #6d28d9 100%)",
    accent: "#a855f7",
  },
];

export default function Programs() {
  return (
    <section className="programs-section" id="programs" aria-label="Academic programmes">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Curriculum</span>
          <h2 className="section-title">Academic Programmes</h2>
          <p className="section-subtitle">
            A structured, holistic learning pathway from foundational years through senior secondary.
          </p>
        </div>

        <div className="programs-grid">
          {PROGRAMS.map((prog) => (
            <div
              className="program-card"
              key={prog.id}
              style={{ "--prog-gradient": prog.gradient, "--prog-accent": prog.accent }}
            >
              {/* Card background gradient */}
              <div className="program-card-bg"></div>

              {/* Icon & badge */}
              <div className="program-card-top">
                <div className="program-icon-wrap">
                  <span className="program-icon" aria-hidden="true">{prog.icon}</span>
                </div>
                <span className="program-label">{prog.label}</span>
              </div>

              {/* Content */}
              <div className="program-card-body">
                <h3 className="program-title">{prog.title}</h3>
                <p className="program-subtitle">{prog.subtitle}</p>
                <p className="program-desc">{prog.desc}</p>
              </div>

              {/* CTA */}
              <div className="program-card-footer">
                <Link to={`/academics/${prog.id}`} className="program-cta-link">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="programs-cta-strip">
          <p>Not sure which programme fits? <strong>Talk to our academic counsellors.</strong></p>
          <Link to="/contact" className="programs-cta-btn">Book a Counselling Session</Link>
        </div>
      </div>
    </section>
  );
}