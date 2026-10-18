import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 7 Dedicated Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import ProgramDetail from "./pages/ProgramDetail";
import ActivitiesGalleryPage from "./pages/ActivitiesGalleryPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

export default function App() {
  return (
    <div className="bfs-app-root">
      {/* Route scroll position manager */}
      <ScrollToTop />

      {/* 1. Slim Top Information Bar with Verified Contact Details */}
      <TopBar />

      {/* 2. Professional Navigation Header with Logo and Page Links */}
      <Navbar />

      {/* Page Content Routes */}
      <div className="bfs-page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/activities-gallery" element={<ActivitiesGalleryPage />} />
          <Route path="/gallery" element={<Navigate to="/activities-gallery" replace />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/news" element={<NewsEventsPage />} />
          <Route path="/news-events" element={<Navigate to="/news" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* 11. Complete Footer with Page Links & Verified Contact Info */}
      <Footer />
    </div>
  );
}