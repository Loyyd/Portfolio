import React, { useState, useEffect } from 'react';
import './Gallery.css';

import image1 from '../assets/images/gallery_pictures/Robot_web02.jpg';
import image2 from '../assets/images/gallery_pictures/SuperbodiesV08.jpg';
import image3 from '../assets/images/gallery_pictures/Thinkmore+TED+Ed+-+06.jpg';
import image4 from '../assets/images/gallery_pictures/Titan-Pilot.jpg';
import image5 from '../assets/images/gallery_pictures/TZOG2817_web.jpg';

const originalImages = [image1, image2, image3, image4, image5];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real image
    const [isTransitioning, setIsTransitioning] = useState(true);
    const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]];

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
        setIsTransitioning(true);
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (currentIndex === 0) {
                setIsTransitioning(false);
                setCurrentIndex(originalImages.length);
            } else if (currentIndex === images.length - 1) {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }
        };

        const timer = setTimeout(() => {
            handleTransitionEnd();
        }, 500); // Corresponds to the CSS transition duration

        return () => clearTimeout(timer);
    }, [currentIndex, images.length, originalImages.length]);

    return (
        <div className="gallery-container">
            <button onClick={goToPrevious} className="left-arrow">&lt;</button>
            <div className="gallery-image-container">
                <div 
                    className="gallery-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                >
                    {images.map((image, index) => (
                        <img src={image} alt={`Gallery item ${index + 1}`} key={index} className="gallery-image" />
                    ))}
                </div>
            </div>
            <button onClick={goToNext} className="right-arrow">&gt;</button>
        </div>
    );
};

export default Gallery;
