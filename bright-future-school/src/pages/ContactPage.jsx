import React, { useState } from "react";
import PageHero from "../components/ui/PageHero";
import Contact from "../components/Contact";
import "./ContactPage.css";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What are the school office and campus visiting hours?",
      a: "Our administrative office and admission desk are open Monday through Friday from 8:00 AM to 2:30 PM, and on Saturdays from 8:00 AM to 12:30 PM. We are closed on Sundays and gazetted public holidays.",
    },
    {
      q: "How can I schedule a guided tour of the campus?",
      a: "You can book a campus tour by submitting the enquiry form below, or by calling our direct helpline at +91 98765 43210. Our admissions coordinator will arrange a personalized walk-through of the classrooms, science labs, and sports facilities.",
    },
    {
      q: "Does the school provide safe transportation across Bhopal?",
      a: "Yes. Bright Future School operates a fleet of secure, GPS-monitored buses covering major residential sectors across Bhopal. Each bus has a vetted driver and trained female attendant for student safety.",
    },
    {
      q: "What is the teacher-to-student ratio at Bright Future School?",
      a: "We maintain an optimal teacher-student ratio across all primary, middle, and senior classrooms to ensure personal attention, individual mentoring, and strong conceptual foundation for each learner.",
    },
    {
      q: "Which boards and streams are offered in Senior Secondary?",
      a: "Bright Future School follows the CBSE curriculum. In Class 11 and 12, students can choose from Science (PCM / PCB), Commerce, and Arts / Humanities streams with dedicated faculty and competitive exam orientation.",
    },
  ];

  function toggleFaq(index) {
    setOpenFaq(openFaq === index ? null : index);
  }

  return (
    <main className="contact-page">
      <PageHero
        badge="Contact Us"
        title="Get in Touch with Bright Future School"
        subtitle="Have questions about admissions, curriculum, or visiting our campus in Bhopal? We’re always here to assist you."
        breadcrumbCurrent="Contact Us"
      />

      {/* Top Contact Channels Banner */}
      <section className="contact-channels-section">
        <div className="container">
          <div className="channels-grid">
            <div className="channel-card">
              <div className="channel-icon" aria-hidden="true">📍</div>
              <h3 className="channel-title">Campus Location</h3>
              <p className="channel-text">Bhopal, Madhya Pradesh, India</p>
              <span className="channel-sub">Spacious, Secure Green Campus</span>
            </div>

            <div className="channel-card">
              <div className="channel-icon" aria-hidden="true">📞</div>
              <h3 className="channel-title">Phone Helplines</h3>
              <a href="tel:+919876543210" className="channel-link">
                +91 98765 43210
              </a>
              <span className="channel-sub">Mon–Sat: 8:00 AM – 2:30 PM</span>
            </div>

            <div className="channel-card">
              <div className="channel-icon" aria-hidden="true">✉️</div>
              <h3 className="channel-title">Email Enquiries</h3>
              <a href="mailto:info@brightfutureschool.com" className="channel-link">
                info@brightfutureschool.com
              </a>
              <span className="channel-sub">Responses within 24 business hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form Component */}
      <section className="contact-form-wrapper-section">
        <Contact isStandalone={true} />
      </section>

      {/* Frequently Asked Questions */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Common Questions from Parents</h2>
            <p className="section-subtitle">
              Here are answers to the most common queries regarding admissions, school timings, transport, and curriculum.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-item ${openFaq === idx ? "open" : ""}`}
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={openFaq === idx}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
