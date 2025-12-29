import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./HeroSlider.css";
import heroData from "./heroData";

const HeroSlider = () => {
  return (
    <section className="hero-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {heroData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              
              {/* LEFT TEXT */}
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hero-image">
                <img src={slide.image} alt={slide.title} />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NEED HELP BUTTON */}
      <button className="need-help-btn">Need Help?</button>
    </section>
  );
};

export default HeroSlider;
