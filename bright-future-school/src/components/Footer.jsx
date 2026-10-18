
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bfs-footer" aria-label="School Footer">
      {/* Top Banner inside Footer */}
      <div className="footer-admission-ribbon">
        <div className="container footer-ribbon-container">
          <div className="ribbon-text">
            <h3>Admissions Open for Session 2026-27</h3>
            <p>Give your child the foundation of excellence, confidence, and values.</p>
          </div>
          <Link to="/admissions" className="ribbon-btn">
            Apply Online Today →
          </Link>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: School Identity */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <span className="footer-logo-title">Bright Future School</span>
            </div>
            <p className="footer-motto">
              “Building bright futures, one student at a time.” Providing quality education, holistic character development, and 25+ years of academic distinction in Bhopal.
            </p>
            <div className="footer-badge">
              <span>🏛️ CBSE Affiliated Institution</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academic Programs</Link></li>
              <li><Link to="/activities-gallery">Activities & Gallery</Link></li>
              <li><Link to="/admissions">Admissions 2026-27</Link></li>
              <li><Link to="/news">News & Events</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Campus & Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-bullet-icon" aria-hidden="true">📍</span>
                <span>Bhopal, Madhya Pradesh, India</span>
              </li>
              <li>
                <span className="contact-bullet-icon" aria-hidden="true">📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <span className="contact-bullet-icon" aria-hidden="true">✉️</span>
                <a href="mailto:info@brightfutureschool.com">info@brightfutureschool.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Timings */}
          <div className="footer-col">
            <h4 className="footer-col-title">School Timings</h4>
            <div className="footer-hours-card">
              <div className="hours-row">
                <span className="day">Mon – Fri:</span>
                <span className="time">8:00 AM – 2:30 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Saturday:</span>
                <span className="time">8:00 AM – 12:30 PM</span>
              </div>
              <div className="hours-row closed">
                <span className="day">Sunday:</span>
                <span className="time">Closed</span>
              </div>
            </div>
            <p className="footer-visit-note">
              * Office remains open on all working days for parent consultations.
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Bright Future School, Bhopal. All rights reserved.
          </p>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}