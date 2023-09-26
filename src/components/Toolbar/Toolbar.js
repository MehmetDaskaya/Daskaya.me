import React, { useState, useEffect } from "react";
import "./Toolbar.css";

const Toolbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Function to get the current time in 24-hour format
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // Toggle the clicked state
    setIsClicked(!isClicked);
  };

  return (
    <div className="toolbar">
      {/* <img
        src="/toolbar.png"
        alt="Toolbar"
        width={1440}
        height={30}
        className="toolbar-image"
      /> */}
      <div className="start-container">
        <img
          src="/start.png"
          alt="start"
          width={100}
          height={30}
          onClick={handleClick}
          className={`start ${isClicked ? "clicked" : ""}`}
        />
        <div className={`start-div ${isClicked ? "clicked" : ""}`} />
        <div className="toolbarRight">
          <div className="toolbarRightText">{currentTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
