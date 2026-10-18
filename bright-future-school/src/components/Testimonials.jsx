import "./Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Parent of Class X student",
    initials: "PS",
    color: "#1e40af",
    quote:
      "Bright Future School has transformed my daughter completely. The teachers are incredibly dedicated and the environment is both safe and inspiring. We couldn't have chosen a better school.",
    stars: 5,
  },
  {
    name: "Rakesh Verma",
    role: "Parent of Class VII student",
    initials: "RV",
    color: "#047857",
    quote:
      "The co-curricular activities and the sports facilities here are world-class. My son has grown so much in confidence and self-discipline since joining Bright Future School.",
    stars: 5,
  },
  {
    name: "Ananya Gupta",
    role: "Alumni – Batch of 2022",
    initials: "AG",
    color: "#7c3aed",
    quote:
      "The values and academic rigour I got from Bright Future School were the foundation for getting into IIT. I'll forever be grateful to the teachers who believed in me.",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-label="What parents and alumni say">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">
            Real voices from parents, students, and alumni who are part of the Bright Future family.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card" key={i}>
              {/* Quote mark */}
              <div className="testimonial-quote-mark" aria-hidden="true">"</div>

              <Stars count={t.stars} />

              <blockquote className="testimonial-text">{t.quote}</blockquote>

              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
