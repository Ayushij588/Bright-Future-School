import React, { useState, useEffect } from "react";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { GALLERY_ITEMS } from "../components/Gallery";
import "./ActivitiesGalleryPage.css";

export default function ActivitiesGalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sports", "Academics", "Events", "Arts & Culture", "Campus", "Student Life"];

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activities = [
    {
      icon: "🏏",
      title: "Athletics & Sports Leagues",
      desc: "Comprehensive coaching in cricket, football, basketball, badminton, table tennis, and yoga to build physical resilience and sportsmanship.",
      tags: ["Cricket Ground", "Basketball Court", "Inter-School Cups"],
    },
    {
      icon: "🎭",
      title: "Performing Arts & Drama",
      desc: "Nurturing expression through Indian classical and western dance, theatre, public elocution, choral music, and musical instruments.",
      tags: ["Auditorium", "Vocal Training", "Drama Club"],
    },
    {
      icon: "🔬",
      title: "Science & Robotics Club",
      desc: "Hands-on model building, coding fundamentals, environmental experiments, and annual innovation exhibitions.",
      tags: ["Robotics Kits", "STEM Projects", "Annual Fair"],
    },
    {
      icon: "🌿",
      title: "Eco Club & Social Service",
      desc: "Student-led tree plantation drives, waste segregation awareness, and community outreach programs teaching social responsibility.",
      tags: ["Green Campus", "Social Action", "Leadership"],
    },
  ];

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setSelectedPhoto(null);
    }
    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedPhoto]);

  return (
    <main className="activities-page">
      <PageHero
        badge="Campus Life"
        title="Activities & Student Life Gallery"
        subtitle="Celebrating holistic growth through sports, arts, exhibitions, and memorable campus moments in Bhopal."
        breadcrumbCurrent="Activities & Gallery"
      />

      {/* Clubs & Activities Overview */}
      <section className="activities-overview-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Beyond the Classroom</span>
            <h2 className="section-title">Co-Curricular Programs & Student Clubs</h2>
            <p className="section-subtitle">
              We believe a well-rounded education includes creative exploration, physical fitness, team camaraderie, and social values.
            </p>
          </div>

          <div className="activities-cards-grid">
            {activities.map((act, i) => (
              <div className="activity-feature-card" key={i}>
                <div className="activity-icon-wrap" aria-hidden="true">{act.icon}</div>
                <h3 className="activity-title">{act.title}</h3>
                <p className="activity-desc">{act.desc}</p>
                <div className="activity-tags">
                  {act.tags.map((t, idx) => (
                    <span className="activity-tag-pill" key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid with Filter */}
      <section className="activities-gallery-grid-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag navy">Visual Archive</span>
            <h2 className="section-title">Bright Future School Campus Gallery</h2>
            <p className="section-subtitle">
              Browse snapshots from our annual celebrations, science exhibitions, sports championships, and daily classroom vibrancy.
            </p>

            <div className="gallery-filter-bar" role="tablist" aria-label="Filter gallery">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredPhotos.map((photo) => (
              <div
                className="gallery-card"
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedPhoto(photo)}
                aria-label={`Enlarge photo: ${photo.title}`}
              >
                <div className="gallery-img-container">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-category-pill">{photo.category}</span>
                    <h3 className="gallery-card-title">{photo.title}</h3>
                    <span className="gallery-zoom-hint">Click to enlarge 🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="bfs-lightbox-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="bfs-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="bfs-lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              ✕
            </button>
            <div className="bfs-lightbox-media">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="bfs-lightbox-img"
              />
            </div>
            <div className="bfs-lightbox-info">
              <span className="lightbox-category">{selectedPhoto.category}</span>
              <h3 className="lightbox-title">{selectedPhoto.title}</h3>
              <p className="lightbox-desc">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="activities-cta-section text-center">
        <div className="container">
          <div className="activities-cta-box">
            <h2>Experience Our Campus Firsthand</h2>
            <p>
              Schedule a visit to tour our sports complexes, science wings, arts studios, and modern smart classrooms in Bhopal.
            </p>
            <div className="cta-actions">
              <Button to="/admissions" variant="primary" size="lg">
                Apply for Admission 2026-27
              </Button>
              <Button to="/contact" variant="outline-navy" size="lg">
                Book a Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
