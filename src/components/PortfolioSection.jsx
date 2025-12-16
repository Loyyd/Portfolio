import React from 'react';
import HELM from './3D_Viewer';

const ModelShowOne = () => (
    <div className="wireframe-section fade-in-initial">
        <h2 className="wireframe-title">PORTFOLIO</h2>
        <div className="wireframe">
            <HELM/>

            <div className="hero-wireframe modelshowone-hero">
                <div className="modelshowone-content">
                    <div className="modelshowone-3d">
                        <div className="hero-visual">Animated 3D Render</div>
                    </div>
                    <div className="modelshowone-text">
                        <h3 className="hero-title" style={{ marginBottom: '6px' }}>3D Visions Brought To Life</h3>
                        <p className="hero-subtitle">Premium 3D Modeling, product visualization and motion-ready assets for film, games and advertising. Clean visuals, fast delivery.</p>
                        <div>
                            <a href="#contact" className="cta-button">Get a Quote</a>
                        </div>
                    </div>
                </div>
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

export default ModelShowOne;
