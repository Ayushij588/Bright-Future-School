
import { Link } from "react-router-dom";
import "./PageHero.css";

export default function PageHero({
  badge = "Bright Future School",
  title,
  subtitle,
  breadcrumbCurrent,
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-container">
        {/* Breadcrumb */}
        <nav className="page-hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">{breadcrumbCurrent || title}</span>
        </nav>

        {badge && <span className="page-hero-badge">{badge}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
