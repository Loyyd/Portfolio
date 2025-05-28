import React from "react";

const Testimonials = ({ testimonials }) => (
  <div className="testimonials-section fade-in-initial">
    <h2 className="showcase-title">KUNDENSTIMMEN</h2>
    <div className="testimonials-grid">
      {testimonials.map((t, idx) => (
        <div className="testimonial-item" key={idx}>
          <blockquote>"{t.quote}"</blockquote>
          <cite>– {t.author}</cite>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;