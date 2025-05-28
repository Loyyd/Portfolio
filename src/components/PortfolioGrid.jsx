import React from "react";

const PortfolioGrid = ({ items }) => (
  <div className="portfolio-grid">
    {items.map((item, index) => (
      <div className="portfolio-item" key={index}>
        <div className="portfolio-image">{item.imageText}</div>
        <div className="portfolio-content">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default PortfolioGrid;