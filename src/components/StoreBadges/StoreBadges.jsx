import googlePlayIcon from '../../img/socials/googleplay.svg'
import appleStoreIcon from '../../img/socials/applestore.svg'
import telegramIcon from '../../img/socials/telegram.svg'
import { content } from '../../data/content'

const icons = {
  googleplay: googlePlayIcon,
  applestore: appleStoreIcon,
  telegram: telegramIcon,
}

function StoreBadges() {
  return (
    <div className="store-badges">
      {content.storeBadges.map((badge) => (
        <a
          key={badge.id}
          className="store-badge"
          href={badge.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="store-badge__icon" src={icons[badge.id]} alt="" />
          <span className="store-badge__text">
            <span className="store-badge__caption">{badge.caption}</span>
            <span className="store-badge__name">{badge.name}</span>
          </span>
        </a>
      ))}
    </div>
  )
}

export default StoreBadges
