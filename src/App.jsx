import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCube, Mousewheel } from "swiper/modules";

export default function App() {
  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        setActiveSlideIndex(swiperRef.current.swiper.activeIndex);
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        // Update slidesPerView and ensure the correct slide is shown
        swiperRef.current.swiper.params.slidesPerView = 1;
        swiperRef.current.swiper.update();
        swiperRef.current.swiper.slideTo(activeSlideIndex, 0, false); // Slide to the active index without animation
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSlideIndex]);

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
        lazy={true}
        modules={[EffectCube, Mousewheel]}
        ref={swiperRef}
        slidesPerView={1}
        onInit={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
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
