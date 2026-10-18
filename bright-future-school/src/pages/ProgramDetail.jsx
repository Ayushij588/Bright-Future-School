import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { programs } from "../data/programsData";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import "./ProgramDetail.css";

export default function ProgramDetail() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!program) {
    return (
      <main className="detail-page-fallback">
        <div className="container text-center" style={{ padding: "80px 20px" }}>
          <h2>Academic Program Not Found</h2>
          <p style={{ margin: "16px 0 24px" }}>
            The requested academic level could not be located.
          </p>
          <Button to="/academics" variant="navy" size="md">
            ← Back to Academic Programs
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="program-detail-page">
      <PageHero
        badge={program.classes}
        title={program.title}
        subtitle={program.text}
        breadcrumbCurrent={program.title}
      />

      <section className="program-detail-body">
        <div className="container">
          <div className="detail-layout">
            {/* Main Content Column */}
            <div className="detail-main-column">
              <div className="detail-overview-card">
                <div className="overview-header">
                  <div className="overview-icon" aria-hidden="true">{program.icon}</div>
                  <div>
                    <span className="overview-badge">{program.classes}</span>
                    <h2 className="overview-title">Curriculum Overview</h2>
                  </div>
                </div>
                <p className="overview-desc">{program.description}</p>
              </div>

              {/* Subject Breakdown */}
              <div className="detail-section-block">
                <h3 className="block-title">Curriculum & Subjects</h3>
                <p className="block-sub">
                  CBSE-aligned syllabus structured to foster critical thinking, numerical ability, linguistic command, and conceptual comprehension:
                </p>
                <div className="subjects-grid">
                  {program.subjects.map((sub, i) => (
                    <div className="subject-box" key={i}>
                      <span className="subj-icon">📖</span>
                      <span className="subj-name">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Highlights */}
              <div className="detail-section-block">
                <h3 className="block-title">Key Program Highlights</h3>
                <div className="highlights-grid">
                  {program.highlights.map((h, i) => (
                    <div className="highlight-item-box" key={i}>
                      <span className="highlight-check" aria-hidden="true">✔</span>
                      <div>
                        <h4 className="highlight-item-title">{h}</h4>
                        <p className="highlight-item-desc">
                          Specialized attention ensuring every child gains mastery over essential concepts and practical skills.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Action Card */}
            <aside className="detail-sidebar">
              <div className="sidebar-card">
                <span className="sidebar-tag">Admissions 2026-27</span>
                <h3 className="sidebar-title">Enroll in {program.title}</h3>
                <p className="sidebar-text">
                  Limited seats available to ensure optimal student-teacher interaction and personalized mentorship.
                </p>

                <div className="sidebar-quick-facts">
                  <div className="quick-fact">
                    <span className="fact-label">Grades Covered:</span>
                    <span className="fact-val">{program.classes}</span>
                  </div>
                  <div className="quick-fact">
                    <span className="fact-label">Curriculum:</span>
                    <span className="fact-val">CBSE Board</span>
                  </div>
                  <div className="quick-fact">
                    <span className="fact-label">Location:</span>
                    <span className="fact-val">Bhopal Campus</span>
                  </div>
                  <div className="quick-fact">
                    <span className="fact-label">Faculty Ratio:</span>
                    <span className="fact-val">Optimal & Dedicated</span>
                  </div>
                </div>

                <div className="sidebar-ctas">
                  <Button to="/admissions" variant="primary" size="lg" className="sidebar-btn">
                    Apply for Admission →
                  </Button>
                  <Button to="/contact" variant="outline-navy" size="md" className="sidebar-btn">
                    Book a Campus Tour
                  </Button>
                </div>

                <div className="sidebar-contact-note">
                  <span>Questions? Call Admissions at </span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              {/* Other Programs Navigation */}
              <div className="sidebar-other-programs">
                <h4>Other Academic Programs</h4>
                <ul>
                  {programs
                    .filter((p) => p.id !== program.id)
                    .map((p) => (
                      <li key={p.id}>
                        <Link to={`/programs/${p.id}`}>
                          <span>{p.title} ({p.classes})</span>
                          <span>→</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}