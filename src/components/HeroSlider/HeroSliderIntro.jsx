function HeroSliderIntro({ image, imageAlt, hasActivated, openLabel, onOpenDossier }) {
  return (
    <div className={`hero-slider-intro ${hasActivated ? 'is-exiting' : ''}`}>
      <div className="hero-slider-intro__stack">
        <img
          src={image}
          alt={imageAlt}
          className="hero-slider-intro__image"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {!hasActivated ? (
          <button type="button" className="hero-slider-start is-intro" onClick={onOpenDossier}>
            {openLabel}
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default HeroSliderIntro
