import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ThreeDExpertise from "./components/ThreeDExpertise";
import CTA from "./components/CTA";
import NAV from "./components/NAV";
import HELM from './components/HELM';
import About from "./components/About";
import ReactDOM from 'react-dom/client';

const portfolioItemsData = [
    { imageText: "Product Visualization", title: "Premium Product Renders", description: "Photorealistische Produktvisualisierung für E-Commerce und Marketing" },
    { imageText: "Architectural Viz", title: "Architektur Visualisierung", description: "Realistische Gebäude-Renders und Innenraumvisualisierung" },
    { imageText: "Character Design", title: "Character Modeling", description: "3D-Charaktere für Games, Animation und Film" },
    { imageText: "Abstract Art", title: "Abstract 3D Art", description: "Experimentelle 3D-Kunst und Motion Graphics" },
    { imageText: "Abstract Art", title: "Abstract 3D Art", description: "Experimentelle 3D-Kunst und Motion Graphics" },
];




function App() {
    const [activeSection, setActiveSection] = useState(null);
    const fadeInElementsRef = useRef([]); // To store refs for elements that need fade-in

    // Function to toggle section visibility
    const toggleSection = (sectionId) => {
        setActiveSection(prevSection => (prevSection === sectionId ? null : sectionId));
    };

    // Effect for IntersectionObserver (fade-in animations)
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Check if target is available before trying to access style
                    if (entry.target && entry.target.style) {
                         entry.target.style.animationDelay = '0.2s';
                    }
                    entry.target.classList.add('fade-in-active'); // Use a different class to avoid conflict with initial CSS
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Select all elements that should fade in
        const elementsToObserve = document.querySelectorAll('.fade-in-initial');
        fadeInElementsRef.current = Array.from(elementsToObserve);


        fadeInElementsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        // Cleanup observer on component unmount
        return () => {
            fadeInElementsRef.current.forEach(el => {
                if (el) observer.unobserve(el);
            });
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

    // Effect for click ripple
    // This effect attaches event listeners to relevant elements for the ripple effect.
    useEffect(() => {
        const rippleElements = document.querySelectorAll('.section-card, .nav-link, .cta-button');

        const handleRippleClick = function(e) {
            // 'this' refers to the element that was clicked
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            // Calculate position of the click relative to the element
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Style the ripple element
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple-effect'); // Add class for animation
            
            this.appendChild(ripple); // Add ripple to the clicked element
            
            // Remove ripple after animation
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        };

        rippleElements.forEach(element => {
            element.addEventListener('click', handleRippleClick);
        });

        // Cleanup: remove event listeners when component unmounts
        return () => {
            rippleElements.forEach(element => {
                element.removeEventListener('click', handleRippleClick);
            });
        };
    }, []); // Empty dependency array: run once on mount, cleanup on unmount

    return (
        <div className="container">
            <NAV toggleSection={toggleSection}/>
            {activeSection === 'about' ? (
                <About />
            ) : (
                <>
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

                
                <ThreeDExpertise />
                <CTA/>
                </>
            )}
        </div>
    );
}

export default App;

