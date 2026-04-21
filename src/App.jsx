import { heroes } from './data/heroes'
import { content } from './data/content'
import HeroSlider from './components/HeroSlider/HeroSlider'
import GameFrame from './components/GameFrame/GameFrame'
import QuizButton from './components/QuizButton/QuizButton'
import inviteCtaHero from './img/invite-cta.webp'
import { useEffect } from 'react'

const useRedirectOnTabClose = (redirectUrl) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';

      setTimeout(() => {
				window.open(redirectUrl, '_blank');
      }, 0);
    };

    const handleUnload = () => {
      try {
        window.open(redirectUrl, '_blank');
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, [redirectUrl]);
};

function App() {
	useRedirectOnTabClose(content.quizButton.href);

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
            <div className="right-invite">
              <QuizButton />
							<div className="right-invite__hero-wrap">
                <img
                  src={inviteCtaHero}
                  alt={content.app.inviteHeroAlt}
                  className="right-invite__hero"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  )
}

export default App
