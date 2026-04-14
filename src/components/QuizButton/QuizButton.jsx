function QuizButton() {
  return (
    <a
      className="quiz-button"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdLosgya43oQMycBSlQczwHr98R7E6fi8Ng3D15ilD2_HDo2A/viewform?usp=dialog"
      target="_blank"
      rel="noreferrer"
    >
      <span className="quiz-button__title">Оцените нашу игру,</span>
      <span className="quiz-button__subtitle">
        заполнение анкеты не более 6 минут!
      </span>
    </a>
  )
}

export default QuizButton
