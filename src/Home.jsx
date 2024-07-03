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
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuItemsRef = useRef(null);
  const menuButtonRef = useRef(null);

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

  const handleMouseEnter = (e) => {
    e.target.classList.add("hover-off");
  };

  const toggleMenuVisibility = (e) => {
    setIsMenuVisible(!isMenuVisible);
    if (isMenuVisible) {
      menuItemsRef.current.classList.remove("visible");
      menuButtonRef.current.classList.remove("cross");
    } else {
      menuItemsRef.current.classList.add("visible");
      menuButtonRef.current.classList.add("cross");
    }
  };

  return (
    <div className="container">
      <div ref={menuItemsRef} className="menu-items">
        <a className="menu-item" href="/about" onMouseEnter={handleMouseEnter}>
          About
        </a>
        <a
          className="menu-item"
          href="/experience"
          onMouseEnter={handleMouseEnter}
        >
          Experience
        </a>
        <a
          className="menu-item"
          href="/projects"
          onMouseEnter={handleMouseEnter}
        >
          Projects
        </a>
        <a
          className="menu-item"
          href="/contact"
          onMouseEnter={handleMouseEnter}
        >
          Contact
        </a>
      </div>
      <div
        ref={menuButtonRef}
        class="menu-button fade-in"
        onClick={toggleMenuVisibility}
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div
        className={`overlay ${isMenuVisible ? "visible" : ""}`}
        onClick={toggleMenuVisibility}
      ></div>
      <Swiper
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
            <a
              href="/about"
              className={fadeIn ? "fade-in" : ""}
              onMouseEnter={handleMouseEnter}
            >
              Adam Bodicoat
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div loading="lazy">
            <a href="/experience" className="hover-off">
              Skills and Experience
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div loading="lazy">
            <a href="/projects" className="hover-off">
              Projects
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div loading="lazy">
            <a href="/contact" className="hover-off">
              Contact
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
