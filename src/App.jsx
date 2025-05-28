import React, { useState, useEffect, useRef } from 'react';

// Data for sections - makes it easier to manage and render
/* const sectionData = [
    {
        id: 'header',
        title: '⚫ Header & Navigation',
        description: 'Ultra-clean Navigation mit minimalistischem Design',
        contentItems: [
            { strong: 'Logo:', text: 'Minimalistisches Typografie-Logo oder geometrisches Symbol' },
            { strong: 'Navigation:', text: 'Work, About, Services, Contact - clean & spacious' },
            { strong: 'CTA:', text: '"Let\'s Create" Button - prominent platziert' },
            { strong: 'Style:', text: 'Schwarz-Weiß mit viel Weißraum' },
        ],
    },
    {
        id: 'hero',
        title: '⚪ Hero-Sektion',
        description: 'Kraftvoller erster Eindruck mit 3D-Visual',
        contentItems: [
            { strong: 'Headline:', text: '"3D VISIONS BROUGHT TO LIFE" - große, Bold Typography' },
            { strong: 'Visual:', text: 'Animiertes 3D-Render oder Rotierende Geometrie' },
            { strong: 'Subtext:', text: '"Premium 3D Modeling & Visualization"' },
            { strong: 'Scroll Indicator:', text: 'Elegante Animation zum Weiterscollen' },
        ],
    },
    {
        id: 'portfolio',
        title: '🎯 3D Portfolio Showcase',
        description: 'Deine besten 3D-Arbeiten im Fokus',
        contentItems: [
            { strong: 'Grid Layout:', text: 'Masonry/Bricks Layout für verschiedene Formate' },
            { strong: 'Kategorien:', text: 'Product Design, Architecture, Character, Abstract' },
            { strong: '3D Previews:', text: '360° Views oder kurze Animationen' },
            { strong: 'Case Studies:', text: 'Detaillierte Projektbeschreibungen mit Prozess' },
            { strong: 'Software Tags:', text: 'Blender, Cinema 4D, Maya, etc.' },
        ],
    },
    {
        id: 'about',
        title: '👤 About Me',
        description: 'Deine Geschichte als 3D-Artist',
        contentItems: [
            { strong: 'Portrait:', text: 'Schwarz-Weiß Foto oder minimalistisches 3D-Avatar' },
            { strong: 'Story:', text: 'Dein Weg zur 3D-Kunst, Inspiration, Vision' },
            { strong: 'Expertise:', text: '3D Modeling, Texturing, Lighting, Animation' },
            { strong: 'Experience:', text: 'Jahre Erfahrung, wichtige Projekte/Kunden' },
        ],
    },
    {
        id: 'services',
        title: '🛠️ Services',
        description: 'Was du anbietest - klar strukturiert',
        contentItems: [
            { strong: '3D Modeling:', text: 'Product Viz, Architektur, Character Design' },
            { strong: 'Rendering:', text: 'Photorealistic Visualization, Studio Lighting' },
            { strong: 'Animation:', text: 'Product Animation, Motion Graphics' },
            { strong: 'Konzept:', text: 'Design Development, Prototyping' },
            { strong: 'Pakete:', text: 'Transparent pricing oder "Let\'s talk" Ansatz' },
        ],
    },
    {
        id: 'process',
        title: '⚙️ Workflow',
        description: 'Wie du arbeitest - transparent dargestellt',
        contentItems: [
            { strong: 'Discovery:', text: 'Briefing, Moodboards, Referenzen sammeln' },
            { strong: 'Concept:', text: 'Sketches, Greyboxing, erste 3D-Blockouts' },
            { strong: 'Modeling:', text: 'Detaillierte 3D-Modelle, Clean Topology' },
            { strong: 'Shading:', text: 'Materials, Textures, Lighting Setup' },
            { strong: 'Rendering:', text: 'Final Renders, Revisions, Delivery' },
        ],
    },
    {
        id: 'testimonials',
        title: '💬 Client Love',
        description: 'Was Kunden über deine Arbeit sagen',
        contentItems: [
            { strong: 'Quotes:', text: 'Authentische Kundenstimmen mit Fokus auf 3D-Qualität' },
            { strong: 'Brands:', text: 'Logos deiner Kunden (wenn erlaubt)' },
            { strong: 'Results:', text: 'Konkrete Ergebnisse: "Sales up 40% with new renders"' },
            { strong: 'Industries:', text: 'Gaming, Architecture, Product Design, etc.' },
        ],
    },
    {
        id: 'contact',
        title: '📧 Let\'s Connect',
        description: 'Kontakt aufnehmen - simple & direkt',
        contentItems: [
            { strong: 'Contact Form:', text: 'Name, Email, Project Type, Budget, Timeline' },
            { strong: 'Direct:', text: 'Email, LinkedIn, Behance, ArtStation' },
            { strong: 'Availability:', text: '"Currently booking for Q3 2025"' },
            { strong: 'Response:', text: '"I\'ll get back to you within 24h"' },
        ],
    },
]; */

const portfolioItemsData = [
    { imageText: "Product Visualization", title: "Premium Product Renders", description: "Photorealistische Produktvisualisierung für E-Commerce und Marketing" },
    { imageText: "Architectural Viz", title: "Architektur Visualisierung", description: "Realistische Gebäude-Renders und Innenraumvisualisierung" },
    { imageText: "Character Design", title: "Character Modeling", description: "3D-Charaktere für Games, Animation und Film" },
    { imageText: "Abstract Art", title: "Abstract 3D Art", description: "Experimentelle 3D-Kunst und Motion Graphics" },
];

const skillsData = [
    { icon: "🎨", name: "Blender", description: "Modeling, Sculpting, Animation" },
    { icon: "⚡", name: "Cinema 4D", description: "Motion Graphics, Rendering" },
    { icon: "🔥", name: "Octane Render", description: "Photorealistic Rendering" },
    { icon: "💎", name: "Substance Suite", description: "Texturing, Materials" },
];


// SectionCard component
const SectionCard = ({ section, activeSection, onToggleSection }) => {
    return (
        <div className="section-card" onClick={() => onToggleSection(section.id)}>
            <div>
                <h3>{section.title}</h3>
                <p className="description">{section.description}</p>
            </div>
            <div id={section.id} className={`section-content ${activeSection === section.id ? 'active' : ''}`}>
                {section.contentItems.map((item, index) => (
                    <div className="content-item" key={index}>
                        <strong>{item.strong}</strong> {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
};


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
        <>
            {/* Embedded CSS Styles */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :root {
                    --primary: #000000;
                    --secondary: #ffffff;
                    --gray-50: #fafafa;
                    --gray-100: #f5f5f5;
                    --gray-200: #eeeeee;
                    --gray-300: #e0e0e0;
                    --gray-400: #bdbdbd;
                    --gray-500: #9e9e9e;
                    --gray-600: #757575;
                    --gray-700: #616161;
                    --gray-800: #424242;
                    --gray-900: #212121;
                }

                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    background: var(--secondary);
                    color: var(--primary);
                    line-height: 1.6;
                    overflow-x: hidden; /* Prevent horizontal scroll */
                }

                .container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 20px; /* Default padding for mobile */
                }
                @media (min-width: 768px) { /* md breakpoint */
                    .container {
                        padding: 0 40px; /* Padding for larger screens */
                    }
                }


                .header {
                    text-align: center;
                    padding: 60px 0; /* Adjusted padding */
                    background: linear-gradient(180deg, var(--gray-50) 0%, var(--secondary) 100%);
                    position: relative;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .header {
                        padding: 80px 0;
                    }
                }


                .header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent 0%, var(--gray-300) 50%, transparent 100%);
                }

                .header h1 {
                    font-size: clamp(2.5rem, 6vw, 4rem); /* Adjusted for responsiveness */
                    font-weight: 700;
                    letter-spacing: -0.04em;
                    margin-bottom: 20px;
                    background: linear-gradient(135deg, var(--primary), var(--gray-600));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    color: transparent; /* Fallback for browsers that don't support background-clip */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .header h1 {
                         font-size: clamp(3rem, 6vw, 5rem);
                    }
                }


                .header p {
                    font-size: 1.1rem; /* Adjusted for readability */
                    color: var(--gray-600);
                    font-weight: 300;
                    max-width: 600px;
                    margin: 0 auto;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .header p {
                         font-size: 1.25rem;
                    }
                }

                .structure-grid {
                    display: grid;
                    grid-template-columns: 1fr; /* Default to single column */
                    gap: 1px; /* Mobile gap */
                    margin: 60px 0; /* Adjusted margin */
                    background: var(--gray-200);
                    border-radius: 24px;
                    overflow: hidden;
                }
                 @media (min-width: 992px) { /* lg breakpoint for wider grid items */
                    .structure-grid {
                        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                        gap: 2px; /* Desktop gap */
                        margin: 80px 0;
                    }
                }


                .section-card {
                    background: var(--secondary);
                    padding: 30px; /* Adjusted padding */
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    position: relative; /* Needed for ripple */
                    overflow: hidden; /* Needed for ripple and hover shine */
                    min-height: 220px; /* Adjusted min-height */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .section-card {
                        padding: 40px;
                        min-height: 280px;
                    }
                }

                .section-card::before { /* Shine effect */
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.02), transparent);
                    transition: left 0.6s ease;
                }

                .section-card:hover::before {
                    left: 100%;
                }

                .section-card:hover {
                    background: var(--gray-50);
                    transform: translateY(-8px);
                }

                .section-card h3 {
                    font-size: 1.3rem; /* Adjusted font size */
                    font-weight: 600;
                    margin-bottom: 12px;
                    letter-spacing: -0.02em;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .section-card h3 {
                         font-size: 1.5rem;
                    }
                }


                .section-card .description {
                    color: var(--gray-600);
                    font-size: 0.9rem; /* Adjusted font size */
                    font-weight: 400;
                    margin-bottom: 24px;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .section-card .description {
                        font-size: 0.95rem;
                    }
                }

                .section-content {
                    display: none;
                    margin-top: 24px;
                    animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .section-content.active {
                    display: block;
                }

                @keyframes slideIn {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }

                .content-item {
                    background: var(--gray-50);
                    padding: 16px; /* Adjusted padding */
                    margin: 12px 0;
                    border-radius: 12px;
                    border-left: 3px solid var(--primary);
                    transition: all 0.3s ease;
                    font-size: 0.85rem; /* Adjusted font size */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .content-item {
                         padding: 20px;
                         font-size: 0.9rem;
                    }
                }

                .content-item:hover {
                    background: var(--gray-100);
                    transform: translateX(8px);
                }

                .content-item strong {
                    font-weight: 600;
                    color: var(--primary);
                }

                .wireframe-section {
                    background: var(--primary);
                    color: var(--secondary);
                    border-radius: 24px;
                    padding: 60px 20px; /* Adjusted padding */
                    margin: 60px 0; /* Adjusted margin */
                    position: relative;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .wireframe-section {
                        padding: 80px 40px;
                        margin: 80px 0;
                    }
                }

                .wireframe-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    border-radius: 24px;
                    z-index: 0; /* Ensure it's behind content */
                }

                .wireframe-title {
                    text-align: center;
                    font-size: 2rem; /* Adjusted font size */
                    font-weight: 700;
                    margin-bottom: 40px; /* Adjusted margin */
                    letter-spacing: -0.03em;
                    position: relative;
                    z-index: 1;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .wireframe-title {
                        font-size: 2.5rem;
                        margin-bottom: 60px;
                    }
                }

                .wireframe {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px; /* Adjusted gap */
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .wireframe {
                        gap: 24px;
                    }
                }

                .wireframe-element {
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 16px;
                    padding: 24px; /* Adjusted padding */
                    background: rgba(255,255,255,0.05);
                    backdrop-filter: blur(10px);
                    transition: all 0.4s ease;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .wireframe-element {
                         padding: 32px;
                    }
                }

                .wireframe-element:hover {
                    border-color: rgba(255,255,255,0.3);
                    background: rgba(255,255,255,0.08);
                    transform: scale(1.02);
                }

                .nav-wireframe {
                    display: flex;
                    flex-direction: column; /* Stack on mobile */
                    align-items: center; /* Center on mobile */
                    gap: 20px; /* Gap for mobile */
                    padding: 20px; /* Mobile padding */
                    background: rgba(255,255,255,0.1);
                    border-radius: 16px;
                    backdrop-filter: blur(20px);
                }
                @media (min-width: 768px) { /* md breakpoint */
                    .nav-wireframe {
                        flex-direction: row; /* Row layout on desktop */
                        justify-content: space-between;
                        padding: 24px 32px; /* Desktop padding */
                        gap: 0; /* Reset gap for space-between to work */
                    }
                }

                .nav-logo {
                    font-size: 1.3rem; /* Adjusted font size */
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .nav-logo {
                        font-size: 1.5rem;
                    }
                }

                .nav-links {
                    display: flex;
                    flex-wrap: wrap; /* Allow wrapping on small screens */
                    justify-content: center; /* Center links on mobile */
                    gap: 16px; /* Gap between links */
                }
                @media (min-width: 768px) { /* md breakpoint */
                    .nav-links {
                        gap: 32px; /* Desktop gap */
                        flex-wrap: nowrap; /* Prevent wrapping on larger screens */
                    }
                }

                .nav-link {
                    padding: 10px 20px; /* Adjusted padding */
                    background: rgba(255,255,255,0.1);
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    font-size: 0.85rem; /* Adjusted font size */
                    position: relative; /* For ripple */
                    overflow: hidden; /* For ripple */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .nav-link {
                        padding: 12px 24px;
                        font-size: 0.9rem;
                    }
                }

                .nav-link:hover {
                    background: rgba(255,255,255,0.2);
                    transform: translateY(-2px);
                }

                .hero-wireframe {
                    text-align: center;
                    padding: 60px 20px; /* Adjusted padding */
                    background: rgba(255,255,255,0.03);
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .hero-wireframe {
                        padding: 80px 32px;
                    }
                }

                .hero-visual {
                    width: 100%; /* Full width on mobile */
                    max-width: 300px; /* Max width for larger screens */
                    height: 150px; /* Adjusted height */
                    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
                    margin: 24px auto; /* Adjusted margin */
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem; /* Adjusted font size */
                    color: rgba(255,255,255,0.7);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .hero-visual {
                        height: 200px;
                        margin: 32px auto;
                        font-size: 0.9rem;
                    }
                }

                .portfolio-showcase {
                    background: var(--gray-50);
                    border-radius: 24px;
                    padding: 60px 20px; /* Adjusted padding */
                    margin: 60px 0; /* Adjusted margin */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .portfolio-showcase {
                        padding: 80px 40px;
                        margin: 80px 0;
                    }
                }

                .showcase-title {
                    text-align: center;
                    font-size: 2rem; /* Adjusted font size */
                    font-weight: 700;
                    margin-bottom: 16px; /* Adjusted margin */
                    letter-spacing: -0.03em;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .showcase-title {
                        font-size: 2.5rem;
                        margin-bottom: 20px;
                    }
                }

                .showcase-subtitle {
                    text-align: center;
                    color: var(--gray-600);
                    margin-bottom: 40px; /* Adjusted margin */
                    font-size: 1rem; /* Adjusted font size */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .showcase-subtitle {
                        margin-bottom: 60px;
                        font-size: 1.1rem;
                    }
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: 1fr; /* Single column on mobile */
                    gap: 24px; /* Adjusted gap */
                    margin-bottom: 30px; /* Adjusted margin */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .portfolio-grid {
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive columns */
                        gap: 32px;
                        margin-bottom: 40px;
                    }
                }
                 @media (min-width: 992px) { /* lg breakpoint for slightly larger items */
                    .portfolio-grid {
                        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    }
                }


                .portfolio-item {
                    background: var(--secondary);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.4s ease;
                    border: 1px solid var(--gray-200);
                }

                .portfolio-item:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 32px 64px rgba(0,0,0,0.1);
                }
                /* Added transition for smooth scaling of image */
                .portfolio-item .portfolio-image {
                    transition: transform 0.4s ease;
                }
                .portfolio-item:hover .portfolio-image {
                    transform: scale(1.05); /* Scale image on hover */
                }


                .portfolio-image {
                    height: 200px; /* Adjusted height */
                    background: linear-gradient(135deg, var(--gray-100), var(--gray-200));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--gray-500);
                    font-weight: 500;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .portfolio-image {
                        height: 250px;
                    }
                }

                .portfolio-content {
                    padding: 20px; /* Adjusted padding */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .portfolio-content {
                        padding: 24px;
                    }
                }

                .portfolio-content h4 {
                    font-size: 1.1rem; /* Adjusted font size */
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .portfolio-content h4 {
                        font-size: 1.2rem;
                    }
                }

                .portfolio-content p {
                    color: var(--gray-600);
                    font-size: 0.85rem; /* Adjusted font size */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .portfolio-content p {
                        font-size: 0.9rem;
                    }
                }

                .skills-section {
                    background: var(--primary);
                    color: var(--secondary);
                    border-radius: 24px;
                    padding: 60px 20px; /* Adjusted padding */
                    margin: 60px 0; /* Adjusted margin */
                    text-align: center;
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .skills-section {
                        padding: 80px 40px;
                        margin: 80px 0;
                    }
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Responsive columns */
                    gap: 24px; /* Adjusted gap */
                    margin-top: 40px; /* Adjusted margin */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .skills-grid {
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 32px;
                        margin-top: 60px;
                    }
                }

                .skill-item {
                    background: rgba(255,255,255,0.05);
                    padding: 24px; /* Adjusted padding */
                    border-radius: 16px;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .skill-item {
                        padding: 32px 24px;
                    }
                }

                .skill-item:hover {
                    background: rgba(255,255,255,0.1);
                    transform: translateY(-8px);
                }

                .skill-icon {
                    font-size: 2rem; /* Adjusted font size */
                    margin-bottom: 12px; /* Adjusted margin */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .skill-icon {
                        font-size: 2.5rem;
                        margin-bottom: 16px;
                    }
                }

                .cta-section {
                    text-align: center;
                    padding: 80px 20px; /* Adjusted padding */
                    background: linear-gradient(135deg, var(--gray-50) 0%, var(--secondary) 100%);
                    border-radius: 24px;
                    margin: 60px 0; /* Adjusted margin */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .cta-section {
                        padding: 120px 40px;
                        margin: 80px 0;
                    }
                }
                
                .cta-section h2 { /* Ensure CTA title is responsive */
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                @media (min-width: 768px) {
                    .cta-section h2 {
                        font-size: 2.5rem;
                        margin-bottom: 20px;
                    }
                }

                .cta-section p { /* Ensure CTA subtitle is responsive */
                    font-size: 1rem;
                    color: var(--gray-600);
                }
                 @media (min-width: 768px) {
                    .cta-section p {
                        font-size: 1.1rem;
                    }
                }


                .cta-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: var(--primary);
                    color: var(--secondary);
                    padding: 16px 32px; /* Adjusted padding */
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    margin-top: 24px; /* Adjusted margin */
                    position: relative; /* For ripple */
                    overflow: hidden; /* For ripple */
                }
                 @media (min-width: 768px) { /* md breakpoint */
                    .cta-button {
                        padding: 20px 40px;
                        margin-top: 32px;
                    }
                }

                .cta-button:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                }
                
                /* Initial state for fade-in elements (used by JS) */
                .fade-in-initial {
                    opacity: 0;
                    transform: translateY(30px);
                    /* Transition is applied by the animation */
                }

                /* Active state for fade-in elements (applied by JS) */
                .fade-in-active {
                    opacity: 1;
                    transform: translateY(0);
                    animation: fadeInUp 0.8s ease forwards;
                }


                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Ripple Effect CSS */
                .ripple-effect {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(0,0,0,0.1); /* Ripple color for light backgrounds */
                    transform: scale(0);
                    animation: rippleAnimation 0.6s linear;
                    pointer-events: none; /* So it doesn't interfere with other clicks */
                }
                .wireframe-section .nav-link .ripple-effect, /* Ripples inside dark sections */
                .skills-section .ripple-effect,
                .cta-button .ripple-effect {
                     background: rgba(255,255,255,0.2); /* Lighter ripple for dark backgrounds */
                }


                @keyframes rippleAnimation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }

            `}
            </style>

            {/* Main Content Structure */}
            <div className="container">
                <div className="header fade-in-initial">
                    <h1>3D GRAFIKDESIGN PORTFOLIO</h1>
                    <p>Moderne Website-Struktur für 3D-Modeling & Grafikdesign - Minimalistisch, Professionell, Contemporary</p>
                </div>

                {/* <div className="structure-grid fade-in-initial">
                    {sectionData.map(section => (
                        <SectionCard 
                            key={section.id}
                            section={section}
                            activeSection={activeSection}
                            onToggleSection={toggleSection}
                        />
                    ))}
                </div> */}

                <div className="wireframe-section fade-in-initial">
                    <h2 className="wireframe-title">WEBSITE LAYOUT</h2>
                    <div className="wireframe">
                        <div className="nav-wireframe">
                            <div className="nav-logo">YOUR NAME</div>
                            <div className="nav-links">
                                <div className="nav-link">WORK</div>
                                <div className="nav-link">ABOUT</div>
                                <div className="nav-link">SERVICES</div>
                                <div className="nav-link">CONTACT</div>
                            </div>
                        </div>

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

                <div className="skills-section fade-in-initial">
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--secondary)' }}>3D EXPERTISE</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Tools und Technologien die ich beherrsche</p>
                    
                    <div className="skills-grid">
                        {skillsData.map((skill, index) => (
                             <div className="skill-item" key={index}>
                                <div className="skill-icon">{skill.icon}</div>
                                <h4>{skill.name}</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '8px', fontSize: '0.85rem' }}>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cta-section fade-in-initial">
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>READY TO CREATE?</h2>
                    <p style={{ color: 'var(--gray-600)', fontSize: '1rem' }}>Lass uns dein nächstes 3D-Projekt zum Leben erwecken</p>
                    <a href="#" className="cta-button">
                        START A PROJECT
                        <span style={{ transition: 'transform 0.3s ease' }}>→</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default App;

