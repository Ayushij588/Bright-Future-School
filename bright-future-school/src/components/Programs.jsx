import React from "react";
import { Link } from "react-router-dom";
import { programs } from "../data/programsData";
import Button from "./ui/Button";
import "./Programs.css";

export default function Programs() {
  return (
    <section className="programs-section" id="academics" aria-label="Academic Programs">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">Curriculum & Learning</span>
          <h2 className="section-title">Academic Programs Tailored for Every Age</h2>
          <p className="section-subtitle">
            From early foundational exploration to rigorous Senior Secondary board and entrance prep, our curriculum nurtures intellect, character, and curiosity.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((prog) => (
            <article className="program-card" key={prog.id}>
              <div className="program-card-header">
                <div className="program-icon-badge" aria-hidden="true">
                  {prog.icon}
                </div>
                <span className="program-classes-pill">{prog.classes}</span>
              </div>

              <h3 className="program-card-title">{prog.title}</h3>
              <p className="program-card-text">{prog.text}</p>

              <div className="program-subjects-preview">
                <span className="subjects-title">Key Learning Areas:</span>
                <div className="subjects-tags">
                  {prog.subjects.slice(0, 4).map((sub) => (
                    <span className="subject-pill" key={sub}>
                      {sub}
                    </span>
                  ))}
                  {prog.subjects.length > 4 && (
                    <span className="subject-pill more">+{prog.subjects.length - 4} more</span>
                  )}
                </div>
              </div>

              <div className="program-card-footer">
                <Link to={`/programs/${prog.id}`} className="program-detail-link">
                  <span>Explore Programme Details</span>
                  <span className="arrow-icon" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="programs-footer-cta text-center">
          <p className="cta-note">Need help choosing the right class level for your child?</p>
          <Button to="/academics" variant="navy" size="md">
            View Complete Academics Overview
          </Button>
        </div>
      </div>
    </section>
  );
}