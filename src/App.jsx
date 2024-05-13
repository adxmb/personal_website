import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCube, Mousewheel } from "swiper/modules";

export default function App() {
  const swiperRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const slidesPerView = Math.ceil(window.innerHeight / 100);
      const activeSlide = Math.floor(scrollPosition / window.innerHeight);
      swiperRef.current.swiper.params.slidesPerView = slidesPerView;
      swiperRef.current.swiper.slideTo(activeSlide);
    }
  }, [scrollPosition]);

  return (
    <div className="container">
      <Swiper
        className="mySwiper"
        effect={"cube"}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 0,
          shadowScale: 0,
        }}
        direction={"vertical"}
        mousewheel={true}
        speed={1000}
        loop={true}
        resizeObserver={false}
        onResize={(swiper) => swiper.update()}
        noMouseWheelClass={"swiper-mousewheel"}
        modules={[EffectCube, Mousewheel]}
        ref={swiperRef}
      >
        <SwiperSlide>
          <a loading="lazy">Adam Bodicoat</a>
        </SwiperSlide>
        <SwiperSlide>
          <a loading="lazy">Slide 2</a>
        </SwiperSlide>
        <SwiperSlide>
          <a loading="lazy">Slide 3</a>
        </SwiperSlide>
        <SwiperSlide>
          <a loading="lazy">Slide 4</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
