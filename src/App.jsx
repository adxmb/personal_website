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

  const updateSlides = () => {
    if (swiperRef.current) {
      const slidesPerView = Math.ceil(1);
      const activeSlide = Math.floor(scrollPosition / window.innerHeight);
      swiperRef.current.swiper.params.slidesPerView = slidesPerView;
      swiperRef.current.swiper.update();
      swiperRef.current.swiper.slideTo(activeSlide, 0);
    }
  };

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

  const handleResize = () => {
    if (swiperRef.current) {
      updateSlides();
      swiperRef.current.swiper.update();
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        noMouseWheelClass={"swiper-mousewheel"}
        onResize={(swiper) => {
          handleResize();
        }}
        lazy={true}
        modules={[EffectCube, Mousewheel]}
        ref={swiperRef}
      >
        <SwiperSlide className="swiper-slide">
          <a loading="lazy">Adam Bodicoat</a>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <a loading="lazy">Skills and Experience</a>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <a loading="lazy">Projects</a>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <a loading="lazy">Contact</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
