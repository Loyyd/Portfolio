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

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = 0;

    const updateParallaxImages = () => {
      frameId = 0;

      const parallaxImages = document.querySelectorAll('.page-band--parallax-image .page-band-media img');

      parallaxImages.forEach((image) => {
        if (motionQuery.matches) {
          image.style.removeProperty('--parallax-y');
          return;
        }

        const band = image.closest('.page-band');
        if (!band) return;

        const rect = band.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        const maxTravel = viewportHeight * 0.18;
        const parallaxY = Math.max(-maxTravel, Math.min(maxTravel, rect.top * -0.18));

        image.style.setProperty('--parallax-y', `${parallaxY}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateParallaxImages);
    };

    updateParallaxImages();
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    window.addEventListener('resize', requestParallaxUpdate);
    motionQuery.addEventListener('change', requestParallaxUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestParallaxUpdate);
      window.removeEventListener('resize', requestParallaxUpdate);
      motionQuery.removeEventListener('change', requestParallaxUpdate);
    };
  }, [currentPath]);

  const currentPage = useMemo(() => portfolioPages[currentPath], [currentPath]);
  const heroParallaxClass = currentPage.heroImage && !currentPage.heroVideo ? ' page-band--parallax-image' : '';

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
        <section className={`page-hero page-band page-band--hero${heroParallaxClass}`}>
          <div className="page-band-media">
            {currentPage.heroVideo ? (
              <video
                src={currentPage.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                aria-label={currentPage.label}
              />
            ) : (
              <img src={currentPage.heroImage} alt={currentPage.label} />
            )}
          </div>
          <div className="page-content page-hero-layout">
            <div className="hero-copy reveal">
              <p className="eyebrow">{currentPage.eyebrow}</p>
              {currentPage.title ? <h1>{currentPage.title}</h1> : null}
              {currentPage.intro ? <p className="hero-text">{currentPage.intro}</p> : null}
              <div className="hero-actions">
                <button
                  className="hero-nav-button hero-nav-button--solid"
                  type="button"
                  onClick={() => navigateTo('/3d')}
                >
                  <span>3D</span>
                  <strong>Enter Gallery</strong>
                </button>
                <button
                  className="hero-nav-button hero-nav-button--outline"
                  type="button"
                  onClick={() => navigateTo('/coding')}
                >
                  <span>Coding</span>
                  <strong>View Projects</strong>
                </button>
              </div>
            </div>
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
