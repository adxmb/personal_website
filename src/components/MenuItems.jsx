import React from "react";

// Creating menu item components for the menu
const MenuItems = ({ items, isVisible, onMouseEnter, onItemClick }) => {
  const handleScroll = (id, event) => {
    event.preventDefault();
    const slide = document.getElementById(id);
    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    onItemClick();
  };

  return (
    <div className={`menu-items ${isVisible ? "visible" : ""}`}>
      {items.map((item, index) => (
        <a
          key={index}
          className="menu-item"
          href={`#${item.id}`}
          onClick={(e) => handleScroll(item.id, e)}
          onMouseEnter={onMouseEnter}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default MenuItems;
