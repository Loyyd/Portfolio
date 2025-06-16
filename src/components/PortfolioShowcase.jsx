import React from 'react';

const portfolioItemsData = [
    { imageText: "Product Visualization", title: "Premium Product Renders", description: "Photorealistische Produktvisualisierung für E-Commerce und Marketing" },
    { imageText: "Architectural Viz", title: "Architektur Visualisierung", description: "Realistische Gebäude-Renders und Innenraumvisualisierung" },
    { imageText: "Character Design", title: "Character Modeling", description: "3D-Charaktere für Games, Animation und Film" },
    { imageText: "Abstract Art", title: "Abstract 3D Art", description: "Experimentelle 3D-Kunst und Motion Graphics" },
    { imageText: "Abstract Art", title: "Abstract 3D Art", description: "Experimentelle 3D-Kunst und Motion Graphics" },
];

function PortfolioShowcase() {
    return (
        <div className="portfolio-showcase fade-in-initial">
            <h2 className="showcase-title">PORTFOLIO INSPIRATION</h2>
            <p className="showcase-subtitle">So könnten deine 3D-Projekte präsentiert werden</p>
            <div className="portfolio-grid">
                {portfolioItemsData.map((item, index) => (
                    <div className="portfolio-item" key={index}>
                        <div className="portfolio-image">{item.imageText}</div>
                        <div className="portfolio-content">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PortfolioShowcase;
