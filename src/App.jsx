import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NAV from "./components/NAV";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ModelShowOne from "./components/ModelShowOne";
import Projects from "./pages/Projects";

function App() {
    const [activeSection, setActiveSection] = useState(null);
    const fadeInElementsRef = useRef([]); // To store refs for elements that need fade-in

    // Function to set active section
    const toggleSection = (sectionId) => {
        setActiveSection(sectionId);
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
            <NAV toggleSection={toggleSection} activeSection={activeSection} />
            {activeSection === 'about' ? (
                <About />
            ) : activeSection === 'projects' ? (
                <Projects />
            ) : activeSection === 'contact' ? (
                <Contact />
            ) : (
                <ModelShowOne />
            )}
        </div>
    );
}

export default App;

