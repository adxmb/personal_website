import React from "react";

// Creating menu item components for the menu
const MenuItems = ({ items, isVisible, onMouseEnter }) => {
  return (
    <div className={`menu-items ${isVisible ? "visible" : ""}`}>
      {items.map((item, index) => (
        <a
          key={index}
          className="menu-item"
          href={item.link}
          onMouseEnter={onMouseEnter}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default MenuItems;
