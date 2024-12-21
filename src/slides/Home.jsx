import { useEffect, useRef, useState } from "react";

import MenuItems from "../components/MenuItems";

import "../styles.css";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import Links from "./Links";

// Component for the home/landing page
export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuItemsRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    menuItemsRef.current = document.querySelector(".menu-items");
  }, []);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // When the component mounts, it observes the headings for the fade-in effect
  useEffect(() => {
    const headings = document.querySelectorAll(".slide div h1");

    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      // Only observe the heading when it is fully visible
      { threshold: 1 }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });

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
  const slides = [
    { name: "Home", id: "landing" },
    { name: "About", id: "about" },
    { name: "TechStack", id: "techstack" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
    { name: "Links", id: "links" },
  ];

  return (
    <div className="container">
      <div className="menu">
        <MenuItems
          items={slides}
          isVisible={isMenuVisible}
          onMouseEnter={handleMouseEnter}
          onItemClick={toggleMenuVisibility}
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
      <div className="slide" id="landing">
        <div loading="lazy" className="landing">
          <h1 className={fadeIn ? "fade-in" : ""}>Adam Bodicoat</h1>
        </div>
      </div>

      <div className="slide" id="about">
        <div loading="lazy">
          <h1>About</h1>
          <div className="content">
            <About />
          </div>
        </div>
      </div>

      <div className="slide" id="techstack">
        <div loading="lazy">
          <h1>Tech Stack, Tools, and Technologies</h1>
          <div className="content">
            <TechStack />
          </div>
        </div>
      </div>

      <div className="slide" id="projects">
        <div loading="lazy">
          <h1>Projects</h1>
          <div className="content">
            <Projects />
          </div>
        </div>
      </div>

      <div className="slide" id="contact">
        <div loading="lazy">
          <h1>Contact</h1>
          <div className="content">
            <Contact />
          </div>
        </div>
      </div>

      <div className="slide" id="links">
        <div loading="lazy">
          <h1>Links</h1>
          <div className="content">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
