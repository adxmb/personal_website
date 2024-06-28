import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCube, Mousewheel } from "swiper/modules";

export default function Home() {
  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

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
        swiperRef.current.swiper.params.slidesPerView = 1;
        swiperRef.current.swiper.update();
        swiperRef.current.swiper.slideTo(activeSlideIndex, 0, false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSlideIndex]);

  useEffect(() => {
    setFadeIn(true);
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
        lazy={true}
        modules={[EffectCube, Mousewheel]}
        ref={swiperRef}
        slidesPerView={1}
        onInit={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
      >
        <SwiperSlide className="swiper-slide">
          <div loading="lazy">
            <a href="/about" className={fadeIn ? "fade-in" : ""}>
              Adam Bodicoat
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div loading="lazy">
            <a href="/experience">Skills and Experience</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div loading="lazy">
            <a href="/projects">Projects</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div loading="lazy">
            <a href="/contact">Contact</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
