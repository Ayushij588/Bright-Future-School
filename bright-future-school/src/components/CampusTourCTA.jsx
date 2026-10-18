import { Link } from "react-router-dom";
import "./CampusTourCTA.css";

export default function CampusTourCTA() {
  return (
    <section className="campus-tour-cta" aria-label="Schedule a campus tour">
      <div className="campus-tour-bg"></div>
      <div className="container campus-tour-inner">
        <div className="campus-tour-content">
          <span className="campus-tour-eyebrow">Visit Us In Person</span>
          <h2 className="campus-tour-title">
            Experience Bright Future School Live
          </h2>
          <p className="campus-tour-desc">
            Schedule a guided campus tour and see our state-of-the-art facilities, meet our teachers, and discover why thousands of families choose Bright Future School.
          </p>
          <div className="campus-tour-actions">
            <Link to="/contact" className="campus-tour-btn primary">
              Schedule a Tour
            </Link>
            <a href="tel:+917554001234" className="campus-tour-btn outline">
              📞 +91 755 400 1234
            </a>
          </div>
        </div>
        <div className="campus-tour-visual" aria-hidden="true">
          <div className="campus-tour-badge-wrap">
            <div className="campus-tour-badge">
              <span className="campus-badge-icon">🏫</span>
              <span className="campus-badge-text">Campus Tours<br /><strong>Mon – Sat</strong></span>
            </div>
            <div className="campus-tour-badge">
              <span className="campus-badge-icon">🎓</span>
              <span className="campus-badge-text">Admissions<br /><strong>Open 2026-27</strong></span>
            </div>
            <div className="campus-tour-badge">
              <span className="campus-badge-icon">📋</span>
              <span className="campus-badge-text">Free<br /><strong>Counselling</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
