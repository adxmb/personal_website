import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Mousewheel } from "swiper/modules";

import MenuItems from "../components/MenuItems";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "../styles.css";

// Component for the home/landing page
export default function Home() {
  const swiperRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuItemsRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    menuItemsRef.current = document.querySelector(".menu-items");
  }, []);

  // Updating the active slide when slide changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        setActiveSlideIndex(swiperRef.current.swiper.activeIndex);
      });
    }
  }, []);

  // Maintains the active slide when the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
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

  // Adds the reverse underline animation when the mouse enters
  const handleMouseEnter = (e) => {
    e.target.classList.add("hover-off");
  };

  // Toggles the menu visibility and the menu icon
  const toggleMenuVisibility = (e) => {
    setIsMenuVisible(!isMenuVisible);
    if (isMenuVisible) {
      menuItemsRef.current.classList.remove("visible");
      menuButtonRef.current.classList.remove("cross");
      document.body.classList.remove("no-scroll");
    } else {
      // Delay for aesthetics
      setTimeout(() => {
        menuItemsRef.current.classList.add("visible");
      }, 300);
      menuButtonRef.current.classList.add("cross");
      document.body.classList.add("no-scroll");
    }
  };

  // Map of the pages for the slides and menu with their links
  const pages = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    { name: "TechStack", link: "/techstack" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Links", link: "/links" },
  ];

  return (
    <div className="container">
      <div className="menu">
        <MenuItems
          items={pages}
          isVisible={isMenuVisible}
          onMouseEnter={handleMouseEnter}
        />
        <div
          ref={menuButtonRef}
          class="menu-button fade-in"
          onClick={toggleMenuVisibility}
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
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
        speed={1200}
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
              href="/"
              className={fadeIn ? "fade-in" : ""}
              onMouseEnter={handleMouseEnter}
            >
              Adam Bodicoat
            </a>
          </div>
        </SwiperSlide>
        {/* Creating slides in Home.jsx to retain swiper cube properties */}
        {pages.slice(1).map((item) => (
          <SwiperSlide className="swiper-slide">
            <div loading="lazy">
              <a
                href={item.link}
                className="hover-off"
                onMouseEnter={handleMouseEnter}
              >
                {item.name}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
