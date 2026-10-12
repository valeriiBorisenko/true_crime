import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { content } from '../../data/content'
import HeroInfo from '../HeroInfo/HeroInfo'
import 'swiper/css'

const MOBILE_MQ = '(max-width: 1199px)'

function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_MQ).matches : false,
  )

  useEffect(() => {
    const media = window.matchMedia(MOBILE_MQ)
    const sync = () => setIsMobile(media.matches)

    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return isMobile
}

function HeroSlider({ heroes, onSlideChange }) {
  const isMobile = useMobileLayout()

  const handleSlideChange = (swiper) => {
    onSlideChange?.(swiper.realIndex)
  }

  return (
    <div className="hero-slider-wrap">
      <Swiper
        key={isMobile ? 'mobile' : 'desktop'}
        className="hero-swiper"
        modules={[Autoplay]}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        autoHeight={isMobile}
        slidesPerView={1}
        spaceBetween={0}
        loop
        grabCursor
        allowTouchMove
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
                <div className="hero-slider-start is-shifted">{content.heroSlider.startLabel}</div>
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
