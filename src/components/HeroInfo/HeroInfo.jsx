function HeroInfo({ hero }) {
  if (!hero) return null

  return (
    <div className="hero-info">
      <h2 className="hero-nameplate">{hero.name}</h2>
      <p className="hero-description">{hero.bio}</p>
    </div>
  )
}

export default HeroInfo
