import { content } from '../../data/content'

function QuizButton() {
  const { href, lead, subline, openLabel } = content.quizButton

  const handleOpenQuiz = () => {
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(108999568, 'reachGoal', 'anketa')
    }
  }

  return (
    <div className="quiz-cta">
      <p className="quiz-cta__text">
        <strong className="quiz-cta__lead">{lead}</strong>, {subline}
      </p>
      <a className="quiz-cta__open" href={href} target="_blank" rel="noreferrer" onClick={handleOpenQuiz}>
        {openLabel}
      </a>
    </div>
  )
}

export default QuizButton
