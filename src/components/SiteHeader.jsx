function SiteHeader({ currentPath, pages, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand-mark" type="button" onClick={() => onNavigate('/3d')}>
        KONRAD KUNKEL
      </button>

      <nav className="site-nav" aria-label="Primary">
        {Object.keys(pages).map((path) => (
          <button
            key={path}
            className={`nav-link${currentPath === path ? ' is-active' : ''}`}
            type="button"
            onClick={() => onNavigate(path)}
          >
            {pages[path].label}
          </button>
        ))}
      </nav>

      <div className="nav-status">
        <span>Portfolio Mode</span>
        <strong>{pages[currentPath].label}</strong>
      </div>
    </header>
  );
}

export default SiteHeader;
