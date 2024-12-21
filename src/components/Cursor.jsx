import React, { useEffect, useState } from "react";
import "../cursor.css"; // Import the cursor styles

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isShrunk, setIsShrunk] = useState(false);

  // Update cursor position globally when mouse moves
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Adding mousemove event listener globally
    document.addEventListener("mousemove", handleMouseMove);

    const handleMouseDown = () => {
      setIsShrunk(true);
    };

    const handleMouseUp = () => {
      setIsShrunk(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup event listener and reset cursor on unmount
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Determine the cursor class based on hover state
  const cursorClass = isShrunk ? "custom-cursor shrunk" : "custom-cursor";

  return (
    <>
      <div
        className={cursorClass}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
