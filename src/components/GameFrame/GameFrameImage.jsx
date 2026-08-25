import { content } from '../../data/content'

function GameFrameImage() {
  return (
    <div className="game-frame-image">
      <img className="game-frame-image__img" src={content.gameFrameImage.src} alt={content.gameFrameImage.alt} loading="lazy" decoding="async" />
      <div className="game-frame-image__socials">
        <a href={content.gameFrameImage.socials.googleplay.href} target="_blank" rel="noopener noreferrer">
          <img className="game-frame-image__socials-icon" src={content.gameFrameImage.socials.googleplay.icon} alt={content.gameFrameImage.socials.googleplay.alt} />
        </a>
        <a href={content.gameFrameImage.socials.applestore.href} target="_blank" rel="noopener noreferrer">
          <img className="game-frame-image__socials-icon" src={content.gameFrameImage.socials.applestore.icon} alt={content.gameFrameImage.socials.applestore.alt} />
        </a>
        <a href={content.gameFrameImage.socials.telegram.href} target="_blank" rel="noopener noreferrer">
          <img className="game-frame-image__socials-icon" src={content.gameFrameImage.socials.telegram.icon} alt={content.gameFrameImage.socials.telegram.alt} />
        </a>
      </div>
    </div>
  )
}

export default GameFrameImage
