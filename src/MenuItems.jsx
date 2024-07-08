import React from "react";

const MenuItems = ({ items, isVisible, onMouseEnter }) => {
  return (
    <div className={`menu-items ${isVisible ? "visible" : ""}`}>
      <a className="menu-item" href="/" onMouseEnter={onMouseEnter}>
        Home
      </a>
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