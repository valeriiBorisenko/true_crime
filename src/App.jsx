import { useState } from 'react'
import { heroes } from './data/heroes'
import HeroSlider from './components/HeroSlider/HeroSlider'
import HeroInfo from './components/HeroInfo/HeroInfo'
import GameFrame from './components/GameFrame/GameFrame'
import QuizButton from './components/QuizButton/QuizButton'

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const currentHero = heroes[activeSlide]

  return (
    <main className="landing">
      <header className="topbar">
        <h1>ТРУ-КРАЙМ</h1>
        <p className="subtitle">
					Выведи AI-маньяка на чистую воду. Первое знакомство.
        </p>
      </header>

      <section className="layout">
        <aside className="left-panel">
          <HeroSlider heroes={heroes} onSlideChange={setActiveSlide} />
          <HeroInfo hero={currentHero} />
        </aside>

        <section className="game-panel">
          <GameFrame />
        </section>

        <aside className="right-panel">
          <QuizButton />
        </aside>
      </section>
    </main>
  )
}

export default App
