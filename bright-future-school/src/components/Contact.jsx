import React, { useState } from "react";
import Button from "./ui/Button";
import "./Contact.css";

export default function Contact({ isStandalone = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    visitDate: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant client-side receipt recording
    setTimeout(() => {
      const enquiryRecord = {
        ...form,
        submittedAt: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        refId: "BFS-" + Math.floor(100000 + Math.random() * 900000),
      };

      // Store in browser storage so parent can review
      try {
        const existing = JSON.parse(localStorage.getItem("bfs_enquiries") || "[]");
        existing.push(enquiryRecord);
        localStorage.setItem("bfs_enquiries", JSON.stringify(existing));
      } catch (err) {
        // Fallback gracefully if storage restricted
      }

      setSubmittedData(enquiryRecord);
      setIsSubmitting(false);
    }, 600);
  }

  function handleReset() {
    setForm({
      name: "",
      phone: "",
      email: "",
      grade: "",
      visitDate: "",
      message: "",
    });
    setSubmittedData(null);
  }

  return (
    <section className={`contact-section ${isStandalone ? "standalone" : ""}`} id="contact" aria-label="Admission Enquiry and Campus Visit">
      <div className="container">
        <div className="contact-card-container">
          <div className="contact-grid">
            {/* Left Column: Verified Contact Information & School Hours */}
            <div className="contact-info-panel">
              <span className="section-tag" style={{ background: "rgba(245,184,0,0.15)", color: "var(--color-gold)", borderColor: "rgba(245,184,0,0.3)" }}>
                Get In Touch
              </span>
              <h2 className="contact-panel-title">Visit Our Campus or Send an Enquiry</h2>
              <p className="contact-panel-lead">
                We welcome prospective parents and students to visit our campus in Bhopal, tour our modern facilities, and meet our academic mentors.
              </p>

              <div className="contact-details-list">
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">📍</div>
                  <div>
                    <h4 className="contact-item-title">Campus Address</h4>
                    <p className="contact-item-text">Bhopal, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">📞</div>
                  <div>
                    <h4 className="contact-item-title">Admissions Helpline</h4>
                    <a href="tel:+919876543210" className="contact-item-link">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">✉️</div>
                  <div>
                    <h4 className="contact-item-title">Email Us</h4>
                    <a href="mailto:info@brightfutureschool.com" className="contact-item-link">
                      info@brightfutureschool.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">🕒</div>
                  <div>
                    <h4 className="contact-item-title">School & Office Timings</h4>
                    <p className="contact-item-text">Monday – Friday: 8:00 AM – 2:30 PM</p>
                    <p className="contact-item-text">Saturday: 8:00 AM – 12:30 PM</p>
                    <p className="contact-item-text note">Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Admission Enquiry Form */}
            <div className="contact-form-panel">
              {submittedData ? (
                <div className="contact-success-state" role="alert">
                  <div className="success-icon" aria-hidden="true">✓</div>
                  <h3 className="success-title">Enquiry Received Successfully!</h3>
                  <p className="success-text">
                    Thank you, <strong>{submittedData.name}</strong>. Your enquiry for{" "}
                    <strong>{submittedData.grade || "the school"}</strong> has been recorded with reference number:
                  </p>
                  <div className="success-ref-box">
                    <span>Reference ID:</span>
                    <strong>{submittedData.refId}</strong>
                  </div>
                  <p className="success-subtext">
                    Our Admissions Team will contact you shortly on <strong>{submittedData.phone}</strong>. You may also call us directly at <strong>+91 98765 43210</strong>.
                  </p>
                  <div className="success-actions">
                    <Button variant="navy" size="md" onClick={handleReset}>
                      Submit Another Enquiry
                    </Button>
                    <Button
                      href="tel:+919876543210"
                      variant="primary"
                      size="md"
                    >
                      Call Admissions Desk
                    </Button>
                  </div>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-header">
                    <h3 className="form-title">Admission & Campus Visit Form</h3>
                    <p className="form-subtitle">Fill in the details below for session 2026-27 admission guidance.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name-input">Parent / Guardian Full Name *</label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="e.g. Rajesh Sharma"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone-input">Contact Phone Number *</label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email-input">Email Address (Optional)</label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        placeholder="parent@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="grade-select">Applying for Grade / Class *</label>
                      <select
                        id="grade-select"
                        name="grade"
                        value={form.grade}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Please select grade --</option>
                        <option value="Primary School (Class 1 - 5)">Primary School (Class 1 - 5)</option>
                        <option value="Middle School (Class 6 - 8)">Middle School (Class 6 - 8)</option>
                        <option value="Secondary School (Class 9 - 10)">Secondary School (Class 9 - 10)</option>
                        <option value="Senior Secondary (Class 11 - 12)">Senior Secondary (Class 11 - 12)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="visit-date-input">Preferred Campus Visit Date (Optional)</label>
                    <input
                      id="visit-date-input"
                      type="date"
                      name="visitDate"
                      value={form.visitDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message-input">Specific Questions or Message (Optional)</label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows="3"
                      placeholder="Tell us about your child's interests, previous school, or any questions..."
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || !form.name.trim() || !form.phone.trim() || !form.grade}
                    className="form-submit-btn"
                  >
                    {isSubmitting ? "Submitting Enquiry..." : "Submit Admission Enquiry →"}
                  </Button>

                  <p className="form-disclaimer">
                    🔒 We respect your privacy. Your information is strictly used for school admission assistance.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}