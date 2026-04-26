function PortfolioBand({ section }) {
  const featureVariantClass = section.panelVariant ? ` page-band--${section.panelVariant}` : '';
  const panelVariantClass = section.panelVariant ? ` feature-panel--${section.panelVariant}` : '';

  if (section.type === 'feature') {
    const imageParallaxClass =
      section.backgroundImage && !section.backgroundVideo ? ' page-band--parallax-image' : '';

    return (
      <section
        className={`page-band page-band--feature page-band--${section.theme}${featureVariantClass}${imageParallaxClass}`}
        style={{ '--feature-media-ratio': section.mediaRatio || '16 / 9' }}
      >
        <div className="page-band-media feature-band-media">
          {section.backgroundVideo ? (
            <video src={section.backgroundVideo} autoPlay muted loop playsInline />
          ) : (
            <img src={section.backgroundImage} alt={section.heading} />
          )}
        </div>

        <div className="page-content">
          <div className={`feature-panel reveal${panelVariantClass}`}>
            {section.kicker ? <p className="eyebrow">{section.kicker}</p> : null}
            {section.brandImage ? (
              <>
                <h2 className="sr-only">{section.heading}</h2>
                <img
                  className="feature-brand"
                  src={section.brandImage}
                  alt={section.brandImageAlt || section.heading}
                />
              </>
            ) : (
              <h2>{section.heading}</h2>
            )}
            <p>{section.copy}</p>
            {section.actions?.length ? (
              <div className="feature-actions">
                {section.actions.map((action) => (
                  <a
                    key={`${section.heading}-${action.label}`}
                    className={action.image ? 'feature-image-cta' : 'primary-cta feature-cta'}
                    href={action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={action.label}
                  >
                    {action.image ? <img src={action.image} alt={action.label} /> : action.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                className="primary-cta feature-cta"
                href={section.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {section.youtubeLabel}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`page-band page-band--${section.theme}${section.layout ? ` page-band--${section.layout}` : ''}`}
    >
      <div className="page-content">
        <div className="section-copy reveal">
          <p className="eyebrow">{section.kicker}</p>
          <h2>{section.heading}</h2>
          {section.copy ? <p>{section.copy}</p> : null}
        </div>

        {section.layout === 'software-strip' ? (
          <div className="software-strip">
            {section.cards.map((card) => (
              <a
                className="software-item reveal"
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                key={card.title}
                aria-label={`Open ${card.title}`}
              >
                <div className="software-item-icon">
                  <img src={card.image} alt={card.title} />
                </div>
                <span>{card.meta}</span>
                <h3>{card.title}</h3>
              </a>
            ))}
          </div>
        ) : (
          <div className="gallery-grid">
            {section.cards.map((card) => (
              <article className="gallery-card reveal" key={card.title}>
                {card.url ? (
                  <a
                    className="gallery-card-link"
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${card.title}`}
                  >
                    <div
                      className={`gallery-card-media${card.fit === 'contain' ? ' fit-contain' : ''}`}
                    >
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="gallery-card-body">
                      <span>{card.meta}</span>
                      <h3>{card.title}</h3>
                      {card.description ? <p>{card.description}</p> : null}
                      <strong className="gallery-card-action">Visit Website</strong>
                    </div>
                  </a>
                ) : (
                  <>
                    <div
                      className={`gallery-card-media${card.fit === 'contain' ? ' fit-contain' : ''}`}
                    >
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="gallery-card-body">
                      <span>{card.meta}</span>
                      <h3>{card.title}</h3>
                      {card.description ? <p>{card.description}</p> : null}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioBand;
