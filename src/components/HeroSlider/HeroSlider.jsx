import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'
import faustImage from '../../img/heroes/faust.png'
import { content } from '../../data/content'
import 'swiper/css'
import 'swiper/css/effect-creative'

const INTRO_HERO_IMAGE = faustImage

function HeroSlider({ heroes, onSlideChange, onActivate }) {
  const swiperRef = useRef(null)
  const introSwipeStartXRef = useRef(null)
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const [hasSwiped, setHasSwiped] = useState(false)

  const activateSlider = () => {
    if (!hasSwiped) {
      setHasSwiped(true)
      onActivate?.()
    }
  }

  useEffect(() => {
    if (!swiperRef.current) {
      return
    }

    swiperRef.current.allowTouchMove = hasSwiped
  }, [hasSwiped])

  useEffect(() => {
    if (!hasSwiped) {
      return undefined
    }

    const hideIntroTimeout = window.setTimeout(() => {
      setIsIntroVisible(false)
    }, 900)

    return () => window.clearTimeout(hideIntroTimeout)
  }, [hasSwiped])

  const handleSlideChange = (swiper) => {
    onSlideChange(swiper.realIndex)
  }

  const handleIntroSwipeStart = (clientX) => {
    introSwipeStartXRef.current = clientX
  }

  const handleIntroSwipeEnd = (clientX) => {
    if (introSwipeStartXRef.current == null) {
      return
    }

    const deltaX = introSwipeStartXRef.current - clientX
    introSwipeStartXRef.current = null

    if (Math.abs(deltaX) >= 24) {
      activateSlider()
    }
  }

  return (
    <div className="hero-slider-wrap">
      {isIntroVisible ? (
        <div className={`hero-slider-intro ${hasSwiped ? 'is-exiting' : ''}`}>
          <img src={INTRO_HERO_IMAGE} alt={content.heroSlider.introHeroAlt} className="slide-image" />
          <div className="hero-slider-bubble">{content.heroSlider.introBubble}</div>
        </div>
      ) : null}
      {!hasSwiped ? (
        <div
          className="hero-slider-activator"
          onTouchStart={(event) => handleIntroSwipeStart(event.touches[0].clientX)}
          onTouchEnd={(event) => handleIntroSwipeEnd(event.changedTouches[0].clientX)}
          onMouseDown={(event) => handleIntroSwipeStart(event.clientX)}
          onMouseUp={(event) => handleIntroSwipeEnd(event.clientX)}
        />
      ) : null}
      <div className={`hero-slider-start ${hasSwiped ? 'is-shifted' : ''}`}>{content.heroSlider.startLabel}</div>
      <Swiper
        className={`slider hero-swiper ${hasSwiped ? 'is-active' : ''}`}
        modules={[EffectCreative]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        grabCursor
        allowTouchMove={hasSwiped}
        allowSlidePrev={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          swiper.allowTouchMove = hasSwiped
          swiper.allowSlidePrev = false
        }}
        onSlideChange={handleSlideChange}
      >
        {heroes.map((hero) => (
          <SwiperSlide key={hero.id}>
            <div className="hero-slide-frame">
              <div className="hero-slide-portrait">
                <img src={hero.image} alt={hero.name} className="slide-image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
