import { useEffect, useRef } from 'react'
import { heroes } from './data/heroes'
import { content } from './data/content'
import HeroSlider from './components/HeroSlider/HeroSlider'
import GameFrame from './components/GameFrame/GameFrame'
import QuizButton from './components/QuizButton/QuizButton'
import inviteCtaHero from './img/invite-cta.webp'

function App() {
	const surveyUrl = content.quizButton.href;
  const hasOpenedRef = useRef(false);
  const mouseLeaveTimeout = useRef(null);

  const openSurvey = () => {
    if (hasOpenedRef.current) return;

    hasOpenedRef.current = true;

    const popup = window.open(
      surveyUrl,
      'surveyWindow',
      'width=850,height=740,scrollbars=yes,resizable=yes,top=100,left=180'
    );

    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.open(surveyUrl, '_blank');
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        mouseLeaveTimeout.current = setTimeout(openSurvey, 600);
      } else {
        clearTimeout(mouseLeaveTimeout.current);
      }
    };

    const handlePageHide = (event) => {
      if (!event.persisted) {
        openSurvey();
      }
    };

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth) {
        mouseLeaveTimeout.current = setTimeout(openSurvey, 500);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('mouseleave', handleMouseLeave);

      if (mouseLeaveTimeout.current) {
        clearTimeout(mouseLeaveTimeout.current);
      }
    };
  }, []);

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
