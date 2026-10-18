import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { GALLERY_ITEMS } from "../data/galleryData";
import "./Gallery.css";

export default function Gallery({ limit = 6, showFilter = true, showViewAll = true }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sports", "Academics", "Events", "Arts & Culture"];

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_ITEMS.slice(0, limit)
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory).slice(0, limit);

  // Close lightbox on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
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
    <section className="gallery-section" id="gallery" aria-label="Activities and Photo Gallery">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">Campus Life & Activities</span>
          <h2 className="section-title">Life at Bright Future School</h2>
          <p className="section-subtitle">
            A glimpse into the active, vibrant moments of our students — from academic discoveries and athletic triumphs to cultural celebrations.
          </p>

          {showFilter && (
            <div className="gallery-filter-bar" role="tablist" aria-label="Filter gallery by category">
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
          )}
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
              aria-label={`View enlarged photo: ${photo.title}`}
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

        {showViewAll && (
          <div className="gallery-footer text-center">
            <Button to="/activities-gallery" variant="navy" size="md">
              View All Activities & Full Gallery →
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="bfs-lightbox-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="bfs-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
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
    </section>
  );
}