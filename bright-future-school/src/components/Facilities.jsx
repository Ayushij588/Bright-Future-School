
import "./Facilities.css";

export default function Facilities() {
  const facilityList = [
    {
      icon: "🔬",
      title: "Modern Science & Computer Labs",
      desc: "Fully equipped Physics, Chemistry, Biology, and high-speed Computer laboratories designed for hands-on experiential experiments.",
      tag: "Experiential Learning",
    },
    {
      icon: "🖥️",
      title: "Smart Digital Classrooms",
      desc: "Interactive digital displays, audio-visual instructional technology, and modern ergonomically designed student seating.",
      tag: "Interactive Tech",
    },
    {
      icon: "📚",
      title: "Comprehensive Central Library",
      desc: "A rich collection of academic books, literature, reference journals, newspapers, and a quiet dedicated reading sanctuary.",
      tag: "Resource Hub",
    },
    {
      icon: "⚽",
      title: "Expansive Sports Grounds",
      desc: "Dedicated zones for cricket, football, basketball, yoga, athletics, and indoor games like chess and table tennis.",
      tag: "Fitness & Teamwork",
    },
    {
      icon: "🎨",
      title: "Creative Arts & Music Studio",
      desc: "A vibrant space where students nurture creativity through painting, sketching, pottery, vocal training, and musical instruments.",
      tag: "Cultural Talent",
    },
    {
      icon: "🚌",
      title: "Safe GPS Transport & 24/7 CCTV",
      desc: "Fleet of well-maintained school buses with trained drivers, female attendants, live GPS tracking, and complete CCTV surveillance.",
      tag: "Student Safety",
    },
  ];

  return (
    <section className="facilities-section" id="facilities" aria-label="Campus Facilities">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag navy">Campus Life & Infrastructure</span>
          <h2 className="section-title">World-Class Facilities for Holistic Growth</h2>
          <p className="section-subtitle">
            Our campus provides a secure, well-equipped, and inspiring environment designed to foster intellectual curiosity, physical fitness, and artistic exploration.
          </p>
        </div>

        <div className="facilities-grid">
          {facilityList.map((item, index) => (
            <div className="facility-card" key={index}>
              <div className="facility-icon-wrap" aria-hidden="true">
                {item.icon}
              </div>
              <div className="facility-content">
                <span className="facility-tag">{item.tag}</span>
                <h3 className="facility-title">{item.title}</h3>
                <p className="facility-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
