import React, { useState } from "react";
import "./Browser.css";

const Browser = ({ url, isOpen, setIsBrowserOpen }) => {
  const [minimizeOpacity, setMinimizeOpacity] = useState(0.85);
  const [resizeOpacity, setResizeOpacity] = useState(0.85);
  const [closeOpacity, setCloseOpacity] = useState(0.85);

  // Function to toggle fullscreen mode
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

    // Close the browser by setting isBrowserOpen to false
    setIsBrowserOpen(false);
  };

  return (
    <div className={`browser-container ${isOpen ? "open" : ""}`}>
      <div className="browser-title-bar">
        <div className="browser-left">
          <img
            className="explorer-icon"
            src="https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/NicePng_windows-xp-taskbar-png_9285144.png"
          />
          <p className="explorer-title">Windows Internet Explorer</p>
        </div>
        <div className="browser-right">
          <img
            src="/minimized.png"
            className="header browser-icon"
            onClick={handleMinimizeClick}
            style={{ opacity: minimizeOpacity }}
          />
          <img
            src="/resized.png"
            className="header browser-icon"
            onClick={handleResizeClick}
            style={{ opacity: resizeOpacity }}
          />
          <img
            src="/closed.png"
            className="header browser-icon"
            onClick={handleCloseClick}
            style={{ opacity: closeOpacity }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="browser-content">
          <iframe
            src={url}
            title="Embedded Browser"
            width="800"
            height="600"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Browser;
