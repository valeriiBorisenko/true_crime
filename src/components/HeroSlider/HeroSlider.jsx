import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Autoplay } from 'swiper/modules'
import { content } from '../../data/content'
import HeroInfo from '../HeroInfo/HeroInfo'
import 'swiper/css'
import 'swiper/css/effect-creative'

function HeroSlider({ heroes, onSlideChange }) {
  const handleSlideChange = (swiper) => {
    onSlideChange?.(swiper.realIndex)
  }

  return (
    <div className="hero-slider-wrap">
      <Swiper
        className="hero-swiper"
        modules={[EffectCreative, Autoplay]}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
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
