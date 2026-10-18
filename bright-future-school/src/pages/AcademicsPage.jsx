
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { programs } from "../data/programsData";
import "./AcademicsPage.css";

export default function AcademicsPage() {
  const academicPillars = [
    {
      icon: "🧠",
      title: "Conceptual Clarity",
      desc: "Moving beyond rote memorization into real-world conceptual understanding, logic, and problem-solving.",
    },
    {
      icon: "🧪",
      title: "Experiential Lab Work",
      desc: "Weekly practical sessions in dedicated Physics, Chemistry, Biology, and Computer Science laboratories.",
    },
    {
      icon: "📊",
      title: "Continuous Assessment",
      desc: "Periodic diagnostic assessments, constructive feedback, and regular parent-teacher interactive consultations.",
    },
    {
      icon: "🧭",
      title: "Career & Stream Guidance",
      desc: "In-depth counseling for Class 10 & 12 students to select suitable higher education paths and competitive exams.",
    },
  ];

  return (
    <main className="academics-page">
      <PageHero
        badge="Curriculum & Learning"
        title="Academic Excellence at Bright Future School"
        subtitle="Empowering students from Class 1 through Class 12 with CBSE-aligned curriculum, experiential learning, and expert faculty in Bhopal."
        breadcrumbCurrent="Academics"
      />

      {/* Curriculum Methodology Pillars */}
      <section className="academic-pillars-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Learning Philosophy</span>
            <h2 className="section-title">How We Teach & Guide</h2>
            <p className="section-subtitle">
              Our educational framework balances academic depth with supportive mentorship to ensure every learner thrives at their own pace.
            </p>
          </div>

          <div className="academic-pillars-grid">
            {academicPillars.map((pillar, i) => (
              <div className="pillar-card" key={i}>
                <div className="pillar-icon" aria-hidden="true">{pillar.icon}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programs Grid */}
      <section className="academic-programs-list-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag navy">Educational Stages</span>
            <h2 className="section-title">Our Academic Programs</h2>
            <p className="section-subtitle">
              Click on any programme to review the comprehensive curriculum, subject streams, and classroom highlights.
            </p>
          </div>

          <div className="programs-detail-grid">
            {programs.map((prog) => (
              <div className="program-detailed-card" key={prog.id}>
                <div className="pd-card-top">
                  <div className="pd-icon" aria-hidden="true">{prog.icon}</div>
                  <div>
                    <span className="pd-classes-badge">{prog.classes}</span>
                    <h3 className="pd-title">{prog.title}</h3>
                  </div>
                </div>

                <p className="pd-desc">{prog.description}</p>

                <div className="pd-subjects-section">
                  <h4 className="pd-subheading">Core Subjects Taught:</h4>
                  <div className="pd-subject-tags">
                    {prog.subjects.map((sub) => (
                      <span className="pd-tag" key={sub}>{sub}</span>
                    ))}
                  </div>
                </div>

                <div className="pd-highlights-section">
                  <h4 className="pd-subheading">Key Highlights:</h4>
                  <ul className="pd-highlights-list">
                    {prog.highlights.map((h, idx) => (
                      <li key={idx}>
                        <span className="pd-check" aria-hidden="true">✔</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pd-card-bottom">
                  <Button to={`/programs/${prog.id}`} variant="primary" size="md">
                    Full Program Details →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Exam Track Record Banner */}
      <section className="board-results-banner">
        <div className="container">
          <div className="board-results-box">
            <div className="results-content">
              <span className="section-tag" style={{ background: "rgba(245,184,0,0.15)", color: "var(--color-gold)", borderColor: "rgba(245,184,0,0.3)" }}>
                Excellence in Numbers
              </span>
              <h2>98% Consistent Board Pass & Distinction Rate</h2>
              <p>
                Our students regularly secure top percentile scores in CBSE board examinations. Through structured revision cycles, mock tests, and personalised doubt sessions, we ensure every student steps into exam halls with utter confidence.
              </p>
              <div className="results-badges">
                <span className="res-badge">🏆 100% Board Pass Record</span>
                <span className="res-badge">⭐ Individual Mentorship</span>
                <span className="res-badge">🔬 Regular Practical Exams</span>
              </div>
            </div>

            <div className="results-cta">
              <Button to="/admissions" variant="primary" size="lg">
                Enroll for 2026-27 Session
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
