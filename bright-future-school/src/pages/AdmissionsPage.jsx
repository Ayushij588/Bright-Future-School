
import PageHero from "../components/ui/PageHero";
import Contact from "../components/Contact";
import "./AdmissionsPage.css";

export default function AdmissionsPage() {
  const steps = [
    {
      step: "01",
      title: "Submit Enquiry / Registration",
      desc: "Fill in the admission enquiry form below or visit our admissions office on campus in Bhopal to collect the school prospectus.",
    },
    {
      step: "02",
      title: "Campus Tour & Interaction",
      desc: "Meet with our academic coordinators and faculty. We conduct a friendly age-appropriate interaction to understand the child's learning readiness.",
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Submit standard identification documents, prior academic transcripts (for classes 2 and above), and birth certificate.",
    },
    {
      step: "04",
      title: "Admission Confirmation & Onboarding",
      desc: "Formalize enrollment, receive the orientation welcome packet, uniform guidelines, and academic calendar.",
    },
  ];

  const documents = [
    "Original / Certified Copy of Birth Certificate",
    "Previous Class Progress Report / Marksheet (for Class 2 and above)",
    "Original Transfer Certificate (TC) countersigned as per CBSE norms",
    "Recent passport-sized photographs of student and parents (4 copies)",
    "Proof of Residence (Aadhaar Card / Electricity Bill / Passport)",
    "Medical fitness / immunization record certificate",
  ];

  return (
    <main className="admissions-page">
      <PageHero
        badge="Admissions 2026-27"
        title="Admissions at Bright Future School"
        subtitle="We welcome ambitious students and caring families into our educational community in Bhopal."
        breadcrumbCurrent="Admissions"
      />

      {/* 4-Step Admission Process */}
      <section className="admission-steps-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Step-by-Step Guide</span>
            <h2 className="section-title">Our Transparent Admission Procedure</h2>
            <p className="section-subtitle">
              We make school enrollment straightforward, welcoming, and parent-friendly.
            </p>
          </div>

          <div className="admission-steps-grid">
            {steps.map((st, i) => (
              <div className="step-card" key={i}>
                <div className="step-number-badge">{st.step}</div>
                <h3 className="step-title">{st.title}</h3>
                <p className="step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & Policy Section */}
      <section className="admissions-docs-section">
        <div className="container">
          <div className="docs-wrapper">
            <div className="docs-text-side">
              <span className="section-tag navy">Checklist</span>
              <h2 className="section-title">Required Documents for Enrollment</h2>
              <p className="docs-lead">
                To complete the admission process smoothly, please prepare the following verified documents:
              </p>

              <div className="docs-checklist">
                {documents.map((doc, idx) => (
                  <div className="doc-item" key={idx}>
                    <span className="doc-check" aria-hidden="true">✔</span>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="fee-policy-note">
                <h4>Fee Transparency Policy:</h4>
                <p>
                  Bright Future School strictly maintains a transparent fee structure with zero hidden levies. Detailed tuition, transport, and lab fee schedules are provided transparently during your campus visit.
                </p>
              </div>
            </div>

            <div className="docs-contact-card">
              <div className="admissions-helpline-box">
                <span className="helpline-tag">Admissions Desk</span>
                <h3>Need Guidance or Have Questions?</h3>
                <p>
                  Our admissions counselors are on hand Monday through Saturday to assist you with class eligibility, stream selection, and campus tour bookings.
                </p>

                <div className="helpline-contact-rows">
                  <div className="hl-row">
                    <span className="hl-icon" aria-hidden="true">📞</span>
                    <div>
                      <span className="hl-label">Direct Helpline:</span>
                      <a href="tel:+919876543210" className="hl-val">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="hl-row">
                    <span className="hl-icon" aria-hidden="true">✉️</span>
                    <div>
                      <span className="hl-label">Admissions Email:</span>
                      <a href="mailto:info@brightfutureschool.com" className="hl-val">info@brightfutureschool.com</a>
                    </div>
                  </div>

                  <div className="hl-row">
                    <span className="hl-icon" aria-hidden="true">🕒</span>
                    <div>
                      <span className="hl-label">Office Visiting Hours:</span>
                      <span className="hl-val-text">Mon–Fri: 8:00 AM – 2:30 PM<br/>Sat: 8:00 AM – 12:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Live Interactive Admission Form */}
      <section className="admissions-form-section">
        <Contact isStandalone={true} />
      </section>
    </main>
  );
}
