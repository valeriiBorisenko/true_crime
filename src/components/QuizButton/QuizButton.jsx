import { content } from '../../data/content'

function QuizButton() {
  return (
    <a
      className="quiz-button"
      href={content.quizButton.href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="quiz-button__title">{content.quizButton.title}</span>
      <span className="quiz-button__subtitle">{content.quizButton.subtitle}</span>
    </a>
  )
}

export default QuizButton
