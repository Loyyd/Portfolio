import React from 'react';
import PortfolioShowcase from '../components/PortfolioShowcase';
import Gallery from '../components/Gallery';

const Projects = () => {
  return (
    <main style={{ padding: '48px 0' }} className="fade-in-initial">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 12 }}>Projects</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 24 }}>A curated selection of 3D projects, product visualizations and experiments.</p>
        <PortfolioShowcase />
        <div style={{ height: 32 }} />
        <Gallery />
      </div>
    </main>
  );
};

export default Projects;
