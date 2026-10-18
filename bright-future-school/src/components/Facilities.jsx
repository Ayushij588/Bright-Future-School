import { Link } from "react-router-dom";
import "./Facilities.css";

const ACTIVITIES = [
  {
    emoji: "⚽",
    title: "Sports & Athletics",
    items: ["Cricket", "Football", "Basketball", "Athletics", "Yoga & Fitness"],
    color: "#1e40af",
    bg: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
  },
  {
    emoji: "🎨",
    title: "Arts & Culture",
    items: ["Painting", "Pottery", "Sculpture", "Dance", "Drama & Theatre"],
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)",
  },
  {
    emoji: "🎵",
    title: "Music & Performance",
    items: ["Vocal Training", "Guitar", "Tabla", "Keyboard", "Choir"],
    color: "#047857",
    bg: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
  },
  {
    emoji: "🔬",
    title: "STEM & Innovation",
    items: ["Robotics Lab", "Coding Club", "Science Fair", "Math Olympiad", "Research Projects"],
    color: "#b45309",
    bg: "linear-gradient(135deg, #92400e 0%, #b45309 100%)",
  },
  {
    emoji: "📚",
    title: "Literary & Debate",
    items: ["Public Speaking", "Debate Club", "Creative Writing", "MUN", "Quiz Competitions"],
    color: "#0e7490",
    bg: "linear-gradient(135deg, #0c4a6e 0%, #0e7490 100%)",
  },
  {
    emoji: "🏕️",
    title: "Scouts & Adventure",
    items: ["NCC", "Scouts & Guides", "Trekking", "First Aid", "Community Service"],
    color: "#b91c1c",
    bg: "linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)",
  },
];

const FACILITIES = [
  { icon: "🔬", label: "Modern Science Labs" },
  { icon: "🖥️", label: "Smart Classrooms" },
  { icon: "📚", label: "Central Library" },
  { icon: "🚌", label: "GPS Transport" },
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🎭", label: "Auditorium" },
  { icon: "🌿", label: "Green Campus" },
  { icon: "🛡️", label: "24/7 CCTV Security" },
];

export default function Facilities() {
  return (
    <>
      {/* ── ACTIVITIES SECTION ── */}
      <section className="activities-section" id="activities" aria-label="Co-curricular activities">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Beyond the Classroom</span>
            <h2 className="section-title">Co-Curricular Activities</h2>
            <p className="section-subtitle">
              We believe in nurturing every dimension of a student's personality — sporting, artistic, scientific and social.
            </p>
          </div>

          <div className="activities-grid">
            {ACTIVITIES.map((act, i) => (
              <div
                className="activity-card"
                key={i}
                style={{ "--act-bg": act.bg, "--act-color": act.color }}
              >
                <div className="activity-card-inner">
                  <div className="activity-emoji" aria-hidden="true">{act.emoji}</div>
                  <h3 className="activity-title">{act.title}</h3>
                  <ul className="activity-items">
                    {act.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="activities-cta">
            <Link to="/activities" className="activities-link-btn">
              Explore All Activities &amp; Gallery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FACILITIES STRIP ── */}
      <section className="facilities-strip" aria-label="Campus facilities">
        <div className="container">
          <div className="facilities-strip-grid">
            {FACILITIES.map((f, i) => (
              <div className="facility-pill" key={i}>
                <span className="facility-pill-icon" aria-hidden="true">{f.icon}</span>
                <span className="facility-pill-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
