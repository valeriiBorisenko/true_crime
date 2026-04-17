import { content } from '../../data/content'

function GameFrame() {
  return (
    <div className="game-frame">
      <iframe
        title={content.gameFrame.title}
        src={content.gameFrame.src}
        loading="lazy"
      />
    </div>
  )
}

export default GameFrame
