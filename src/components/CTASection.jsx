import React from "react";

const CTASection = () => (
  <div className="cta-section fade-in-initial">
    <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "16px" }}>READY TO CREATE?</h2>
    <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>
      Lass uns dein nächstes 3D-Projekt zum Leben erwecken
    </p>
    <a href="#" className="cta-button">
      START A PROJECT
      <span style={{ transition: "transform 0.3s ease" }}>→</span>
    </a>
  </div>
);

export default CTASection;