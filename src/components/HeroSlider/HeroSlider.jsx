import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function HeroSlider({ heroes, onSlideChange }) {
  return (
    <Swiper
      className="slider hero-swiper"
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={0}
      loop
      speed={650}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
    >
      {heroes.map((hero) => (
        <SwiperSlide key={hero.id}>
          <img src={hero.image} alt={hero.name} className="slide-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSlider
