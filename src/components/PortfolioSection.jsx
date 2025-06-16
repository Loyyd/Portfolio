import React from 'react';
import HELM from './3D_Viewer';

const PortfolioSection = () => (
    <div className="wireframe-section fade-in-initial">
        <h2 className="wireframe-title">PORTFOLIO</h2>
        <div className="wireframe">
            {/* <canvas> */}
            <HELM/>
            {/* </canvas> */}
            <div className="hero-wireframe">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--secondary)' }}>3D VISIONS BROUGHT TO LIFE</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '1rem' }}>Premium 3D Modeling & Visualization</p>
                <div className="hero-visual">Animated 3D Render</div>
            </div>

            <div className="wireframe-element">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--secondary)' }}>Portfolio Grid</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Masonry Layout mit 3D-Projekten, Hover-Animationen, Kategorien-Filter</p>
            </div>

            <div className="wireframe-element">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--secondary)' }}>About + Services</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Split-Screen Layout: Portrait links, Text rechts, Service-Cards</p>
            </div>

            <div className="wireframe-element">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--secondary)' }}>Testimonials + Contact</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Slider mit Kundenstimmen, minimalistisches Kontaktformular</p>
            </div>
        </div>
    </div>
);

export default PortfolioSection;
