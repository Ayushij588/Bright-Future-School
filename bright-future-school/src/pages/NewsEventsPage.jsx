import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import "./NewsEventsPage.css";

export default function NewsEventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Events", "Sports", "Academics", "Notices"];

  const articles = [
    {
      id: 1,
      date: "15 Oct 2026",
      category: "Events",
      title: "Grand Annual Day Cultural Celebration 2026",
      text: "Students across all primary, middle, and senior grades presented an enchanting cultural showcase in the main auditorium. Performances included traditional folk and classical dances, a choir symphony, and thought-provoking theatrical plays centered on environmental stewardship.",
      location: "Main Auditorium, Bhopal Campus",
      badge: "Major Event",
    },
    {
      id: 2,
      date: "02 Oct 2026",
      category: "Sports",
      title: "Inter-School Cricket Tournament Champions",
      text: "Bright Future School’s senior cricket team hoisted the district championship trophy following an electrifying final against St. Xavier's. Captain and team exhibited exceptional discipline, game strategy, and defensive bowling under pressure.",
      location: "District Sports Complex, Bhopal",
      badge: "Championship Trophy",
    },
    {
      id: 3,
      date: "20 Sep 2026",
      category: "Academics",
      title: "Annual Science & Tech Innovation Exhibition 2026",
      text: "Over 100 working models covering renewable solar setups, water filtration systems, smart city automated lighting, and robotics sensors were displayed by students of classes 6 through 12, drawing praise from visiting university professors.",
      location: "Science Wings & Laboratories",
      badge: "STEM Showcase",
    },
    {
      id: 4,
      date: "05 Sep 2026",
      category: "Events",
      title: "Teacher’s Day Reverence & Special Assembly",
      text: "Senior student council organized an emotional and celebratory morning assembly honoring the dedication, mentorship, and tireless guidance of our 80+ faculty members.",
      location: "School Assembly Ground",
      badge: "Campus Tradition",
    },
    {
      id: 5,
      date: "15 Aug 2026",
      category: "Notices",
      title: "Independence Day Flag Hoisting & Parade",
      text: "Patriotic fervor marked the 80th Independence Day commemoration with March Past by school squads, patriotic songs by the choir, and address by the Principal on youth responsibility.",
      location: "Main Parade Ground",
      badge: "National Event",
    },
    {
      id: 6,
      date: "01 Aug 2026",
      category: "Academics",
      title: "Term-1 Parent-Teacher Interactive Consultations",
      text: "Constructive one-on-one evaluations between parents and mentors discussing academic progress, classroom habits, and personal well-being strategies for every enrolled child.",
      location: "Respective Classrooms",
      badge: "Parent Forum",
    },
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const circulars = [
    { title: "Winter Uniform Guidelines & Campus Schedule", date: "October 2026", type: "PDF" },
    { title: "CBSE Pre-Board Examination Schedule & Revision Timetable", date: "September 2026", type: "PDF" },
    { title: "Annual Sports Day Registration & House Allocation Notice", date: "September 2026", type: "PDF" },
  ];

  return (
    <main className="news-page">
      <PageHero
        badge="School News & Circulars"
        title="News, Events & Announcements"
        subtitle="Keep up with the latest achievements, celebration schedules, academic circulars, and notices from Bright Future School."
        breadcrumbCurrent="News & Events"
      />

      <section className="news-archive-section">
        <div className="container">
          <div className="news-archive-layout">
            {/* Left: Articles Feed */}
            <div className="news-feed-column">
              <div className="news-filter-strip">
                <span className="filter-title">Filter by Category:</span>
                <div className="category-pill-group">
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`cat-pill ${activeCategory === c ? "active" : ""}`}
                      onClick={() => setActiveCategory(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="articles-feed">
                {filteredArticles.map((art) => (
                  <article className="feed-article-card" key={art.id}>
                    <div className="art-card-top">
                      <span className="art-category">{art.category}</span>
                      <span className="art-badge">{art.badge}</span>
                      <span className="art-date">📅 {art.date}</span>
                    </div>

                    <h2 className="art-title">{art.title}</h2>
                    <p className="art-location">📍 {art.location}</p>
                    <p className="art-body">{art.text}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Right: Circulars & Quick Notices */}
            <aside className="news-sidebar">
              <div className="sidebar-box circulars-box">
                <div className="box-header">
                  <span className="box-icon" aria-hidden="true">📋</span>
                  <h3 className="box-title">Important Circulars</h3>
                </div>
                <p className="box-sub">Official school notifications and guidelines for parents and students.</p>

                <ul className="circulars-list">
                  {circulars.map((item, idx) => (
                    <li className="circular-item" key={idx}>
                      <div className="circ-info">
                        <span className="circ-title">{item.title}</span>
                        <span className="circ-meta">{item.date} • Notice File</span>
                      </div>
                      <span className="circ-format-badge">{item.type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box helpline-box">
                <h3 className="box-title">Parent Helpdesk</h3>
                <p className="box-sub">
                  For clarification regarding circulars, dates, or school events, please contact the administrative desk.
                </p>
                <div className="box-contact-links">
                  <a href="tel:+919876543210" className="box-link">
                    📞 +91 98765 43210
                  </a>
                  <a href="mailto:info@brightfutureschool.com" className="box-link">
                    ✉️ info@brightfutureschool.com
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
