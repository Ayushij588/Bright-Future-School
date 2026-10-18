import Button from "./ui/Button";
import { SCHOOL_NEWS } from "../data/newsData";
import "./News.css";

export default function News({ showViewAll = true }) {
  return (
    <section className="news-section" id="news" aria-label="Latest News and Announcements">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">School Notices & Highlights</span>
          <h2 className="section-title">What’s Happening at Bright Future School</h2>
          <p className="section-subtitle">
            Stay informed with our latest campus achievements, upcoming cultural programs, academic milestones, and sporting triumphs.
          </p>
        </div>

        <div className="news-grid">
          {SCHOOL_NEWS.map((item) => (
            <article className="news-card" key={item.id}>
              <div className="news-card-header">
                <span className="news-tag-badge">{item.tag}</span>
                <span className="news-date-badge">
                  <span className="news-calendar-icon" aria-hidden="true">📅</span>
                  {item.date}
                </span>
              </div>

              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-text">{item.text}</p>

              <div className="news-card-footer">
                <span className="news-location">📍 {item.location}</span>
                <Button to="/news" variant="ghost" size="sm" className="news-read-more">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>

        {showViewAll && (
          <div className="news-footer text-center">
            <Button to="/news" variant="navy" size="md">
              View All News & Circulars →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}