import { useState } from 'react'
import { heroes } from './data/heroes'
import { content } from './data/content'
import HeroSlider from './components/HeroSlider/HeroSlider'
import GameFrame from './components/GameFrame/GameFrame'
import QuizButton from './components/QuizButton/QuizButton'
import faustImage from './img/heroes/faust.webp'

function App() {
  const [isRateInviteVisible, setIsRateInviteVisible] = useState(false)

  return (
    <main className="landing">
      <header className="topbar">
        <h1>{content.app.title}</h1>
        <p className="subtitle">{content.app.subtitle}</p>
      </header>

      <section className="layout">
        <aside className="left-panel">
          <HeroSlider
            heroes={heroes}
            onActivate={() => {
              setIsRateInviteVisible(true)
            }}
          />
        </aside>

        <section className="game-panel">
          <GameFrame />
        </section>

        <aside className="right-panel">
          <section className="right-about">
            <h2 className="right-about__title">{content.app.aboutTitle}</h2>
            {content.app.aboutDescription.map((paragraph) => (
              <p className="right-about__text" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
          <div className={`right-invite ${isRateInviteVisible ? 'is-visible' : ''}`}>
            <div className="right-invite__hero-wrap">
              <img src={faustImage} alt={content.app.inviteHeroAlt} className="right-invite__hero" />
              <div className="right-invite__bubble">{content.app.inviteBubble}</div>
            </div>
            <QuizButton />
          </div>
        </aside>
      </section>
    </main>
  )
}

export default App
