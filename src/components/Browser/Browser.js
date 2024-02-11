import React, { useState } from "react";
import "./Browser.css";

const Browser = ({ isOpen, setIsBrowserOpen, content, icon, title }) => {
  const [minimizeOpacity, setMinimizeOpacity] = useState(0.85);
  const [resizeOpacity, setResizeOpacity] = useState(0.85);
  const [closeOpacity, setCloseOpacity] = useState(0.85);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.classList.contains("browser-title-bar")) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    const iframe = document.querySelector("iframe");
    const browserContainer = document.querySelector(".browser-container");

    if (iframe.classList.contains("fullscreen")) {
      iframe.classList.remove("fullscreen");
      browserContainer.classList.remove("fullscreen");
    } else {
      iframe.classList.add("fullscreen");
      browserContainer.classList.add("fullscreen");
    }
  };

  const handleMinimizeClick = () => {
    setMinimizeOpacity(0.7);
    setTimeout(() => {
      setMinimizeOpacity(0.85);
    }, 300);
  };

  const handleResizeClick = () => {
    setResizeOpacity(0.7);
    setTimeout(() => {
      setResizeOpacity(0.85);
    }, 300);
    toggleFullscreen();
  };

  const handleCloseClick = () => {
    setCloseOpacity(0.7);
    setTimeout(() => {
      setCloseOpacity(0.85);
    }, 300);

    setIsBrowserOpen(false);
  };

  return (
    <div
      className={`browser-container ${isOpen ? "open" : ""}`}
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="browser-title-bar">
        <div className="browser-left">
          <img className="explorer-icon" alt={title} src={icon} />
          <p className="explorer-title">{title}</p>
        </div>
        <div className="browser-right">
          <img
            src="https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/minimized.png"
            alt="minimize"
            className="header browser-icon"
            onClick={handleMinimizeClick}
            style={{ opacity: minimizeOpacity }}
          />
          <img
            src="https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/resized.png"
            alt="resize"
            className="header browser-icon"
            onClick={handleResizeClick}
            style={{ opacity: resizeOpacity }}
          />
          <img
            src="https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/closed.png"
            alt="close"
            className="header browser-icon"
            onClick={handleCloseClick}
            style={{ opacity: closeOpacity }}
          />
        </div>
      </div>
      {isOpen && <div className="browser-content">{content}</div>}
    </div>
  );
};

export default Browser;
