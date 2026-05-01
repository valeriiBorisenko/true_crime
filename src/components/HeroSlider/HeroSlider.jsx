import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Autoplay } from 'swiper/modules'
import faustIntroImage from '../../img/faust_intro.webp'
import { content } from '../../data/content'
import HeroInfo from '../HeroInfo/HeroInfo'
import HeroSliderIntro from './HeroSliderIntro'
import 'swiper/css'
import 'swiper/css/effect-creative'

function HeroSlider({ heroes, onSlideChange, onActivate }) {
  const swiperRef = useRef(null)
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const [hasActivated, setHasActivated] = useState(false)

  const activateSlider = () => {
    if (hasActivated) {
      return
    }
    setHasActivated(true)
    onActivate?.()
  }

  useEffect(() => {
    if (!swiperRef.current) {
      return
    }

    swiperRef.current.allowTouchMove = hasActivated
  }, [hasActivated])

  useEffect(() => {
    if (!hasActivated || !swiperRef.current?.autoplay) {
      return
    }

    swiperRef.current.autoplay.start()
  }, [hasActivated])

  useEffect(() => {
    if (!hasActivated) {
      return undefined
    }

    const hideIntroTimeout = window.setTimeout(() => {
      setIsIntroVisible(false)
    }, 900)

    return () => window.clearTimeout(hideIntroTimeout)
  }, [hasActivated])

  const handleSlideChange = (swiper) => {
    onSlideChange?.(swiper.realIndex)
  }

  return (
    <div className="hero-slider-wrap">
      {isIntroVisible ? (
        <HeroSliderIntro
          image={faustIntroImage}
          imageAlt={content.heroSlider.introHeroAlt}
          hasActivated={hasActivated}
          openLabel={content.heroSlider.openDossierLabel}
          onOpenDossier={activateSlider}
        />
      ) : null}
      <Swiper
        className={`hero-swiper ${hasActivated ? 'is-active' : ''}`}
        modules={[EffectCreative, Autoplay]}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
          enabled: hasActivated,
        }}
        slidesPerView={1}
        spaceBetween={0}
        loop
        grabCursor={hasActivated}
        allowTouchMove={hasActivated}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          swiper.allowTouchMove = hasActivated
        }}
        onSlideChange={handleSlideChange}
      >
        {heroes.map((hero, index) => (
          <SwiperSlide key={hero.id}>
            <div className="hero-slide">
              <div className="hero-slide__media">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="hero-slide__img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                {hasActivated ? (
                  <div className="hero-slider-start is-shifted">{content.heroSlider.startLabel}</div>
                ) : null}
              </div>
              <HeroInfo hero={hero} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
