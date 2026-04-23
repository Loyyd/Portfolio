function PortfolioBand({ section }) {
  if (section.type === 'feature') {
    return (
      <section className={`page-band page-band--feature page-band--${section.theme}`}>
        <div className="page-band-media feature-band-media">
          {section.backgroundVideo ? (
            <video src={section.backgroundVideo} autoPlay muted loop playsInline />
          ) : (
            <img src={section.backgroundImage} alt={section.heading} />
          )}
        </div>

        <div className="page-content">
          <div className="feature-panel reveal">
            <p className="eyebrow">{section.kicker}</p>
            <h2>{section.heading}</h2>
            <p>{section.copy}</p>
            <a
              className="primary-cta feature-cta"
              href={section.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {section.youtubeLabel}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`page-band page-band--${section.theme}`}>
      <div className="page-content">
        <div className="section-copy reveal">
          <p className="eyebrow">{section.kicker}</p>
          <h2>{section.heading}</h2>
          <p>{section.copy}</p>
        </div>

        <div className="gallery-grid">
          {section.cards.map((card) => (
            <article className="gallery-card reveal" key={card.title}>
              <div className={`gallery-card-media${card.fit === 'contain' ? ' fit-contain' : ''}`}>
                <img src={card.image} alt={card.title} />
              </div>
              <div className="gallery-card-body">
                <span>{card.meta}</span>
                <h3>{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioBand;
