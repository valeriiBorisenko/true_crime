import { heroes } from './data/heroes'
import { content } from './data/content'
import HeroSlider from './components/HeroSlider/HeroSlider'
import GameFrame from './components/GameFrame/GameFrame'
import StoreBadges from './components/StoreBadges/StoreBadges'

function App() {


  return (
    <>
      <div className="mobile-placeholder" role="status">
        <div className="mobile-placeholder__inner">
          <p className="mobile-placeholder__label">{content.app.title}</p>
          <h1 className="mobile-placeholder__title">{content.mobilePlaceholder.title}</h1>
          <p className="mobile-placeholder__text">{content.mobilePlaceholder.description}</p>
        </div>
      </div>

      <main className="landing">
        <section className="layout">
          <header className="topbar">
            <h1>{content.app.title}</h1>
            <p className="subtitle">{content.app.subtitle}</p>
          </header>

          <aside className="left-panel">
            <HeroSlider heroes={heroes} />
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
            <StoreBadges />
          </aside>
        </section>
      </main>
    </>
  )
}

export default App
