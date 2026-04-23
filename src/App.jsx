import { useEffect, useMemo, useState } from 'react';
import './App.css';
import PortfolioBand from './components/PortfolioBand';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { normalizePath, portfolioPages } from './data/portfolioPages';

function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const targetPath = normalizePath(window.location.pathname);
    if (targetPath !== window.location.pathname) {
      window.history.replaceState({}, '', targetPath);
    }
    setCurrentPath(targetPath);

    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [currentPath]);

  const currentPage = useMemo(() => portfolioPages[currentPath], [currentPath]);

  const navigateTo = (path) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <SiteHeader currentPath={currentPath} pages={portfolioPages} onNavigate={navigateTo} />

      <main>
        <section className="page-hero page-band page-band--hero">
          <div className="page-band-media">
            <img src={currentPage.heroImage} alt={currentPage.label} />
          </div>
          <div className="page-content page-hero-layout">
            <div className="hero-copy reveal">
              <p className="eyebrow">{currentPage.eyebrow}</p>
              <h1>{currentPage.title}</h1>
              <p className="hero-text">{currentPage.intro}</p>
              <div className="hero-actions">
                <button className="primary-cta" type="button" onClick={() => navigateTo('/3d')}>
                  See 3D
                </button>
                <button className="secondary-cta" type="button" onClick={() => navigateTo('/coding')}>
                  See Coding
                </button>
              </div>
            </div>

            <aside className="hero-stats reveal">
              {currentPage.stats.map((stat) => (
                <div key={stat}>
                  <span>Focus</span>
                  <strong>{stat}</strong>
                </div>
              ))}
            </aside>
          </div>
        </section>

        {currentPage.sections.map((section) => (
          <PortfolioBand key={`${currentPage.label}-${section.heading}`} section={section} />
        ))}

        <SiteFooter />
      </main>
    </div>
  );
}

export default App;
