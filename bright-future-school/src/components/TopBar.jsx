
import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <span className="top-bar-icon" aria-hidden="true">📍</span>
            <span>Bhopal, Madhya Pradesh</span>
          </span>
          <span className="top-bar-divider" aria-hidden="true">•</span>
          <a href="tel:+919876543210" className="top-bar-item top-bar-link" aria-label="Call Bright Future School">
            <span className="top-bar-icon" aria-hidden="true">📞</span>
            <span>+91 98765 43210</span>
          </a>
          <span className="top-bar-divider" aria-hidden="true">•</span>
          <a href="mailto:info@brightfutureschool.com" className="top-bar-item top-bar-link" aria-label="Email Bright Future School">
            <span className="top-bar-icon" aria-hidden="true">✉️</span>
            <span>info@brightfutureschool.com</span>
          </a>
        </div>

        <div className="top-bar-right">
          <span className="top-bar-item top-bar-hours">
            <span className="top-bar-icon" aria-hidden="true">🕒</span>
            <span>Mon–Fri: 8:00 AM – 2:30 PM</span>
          </span>
          <span className="top-bar-divider" aria-hidden="true">•</span>
          <Link to="/contact" className="top-bar-cta">
            Campus Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
