import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./ui/Button";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Academics", to: "/academics" },
    { label: "Activities", to: "/activities-gallery" },
    { label: "Admissions", to: "/admissions" },
    { label: "Events", to: "/news" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className={`bfs-navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="bfs-navbar container" aria-label="Main Navigation">
        {/* School Logo & Brand */}
        <Link to="/" className="bfs-brand" aria-label="Bright Future School Home" onClick={() => setIsOpen(false)}>
          <div className="bfs-logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="bfs-brand-text">
            <span className="bfs-brand-name">Bright Future School</span>
            <span className="bfs-brand-tagline">Excellence in Education • Bhopal</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={`bfs-nav-menu ${isOpen ? "open" : ""}`} id="primary-navigation">
          {navItems.map((item) => (
            <li key={item.to} className="bfs-nav-item">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `bfs-nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Mobile Apply Button inside drawer */}
          <li className="bfs-nav-mobile-cta">
            <Button
              to="/admissions"
              variant="primary"
              size="md"
              onClick={() => setIsOpen(false)}
            >
              Apply for Admission
            </Button>
          </li>
        </ul>

        {/* Header Right Action */}
        <div className="bfs-nav-actions">
          <Button
            to="/admissions"
            variant="primary"
            size="sm"
            className="bfs-desktop-apply"
          >
            Apply Now
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`bfs-menu-toggle ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div
          className="bfs-nav-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
