function HeroInfo({ hero }) {
  if (!hero) return null

  return (
    <div className="hero-info">
      <h2 className="hero-info__title">{hero.name}</h2>
      <p className="hero-info__text">{hero.bio}</p>
    </div>
  )
}

export default HeroInfo
