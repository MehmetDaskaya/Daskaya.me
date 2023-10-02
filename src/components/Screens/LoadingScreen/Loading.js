import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-screen ${isVisible ? "visible" : ""}`}>
      <div className="images-container">
        <img src="loading.png" alt="Windows Logo" className="loading-image" />
        <img src="loadingbar.png" alt="LoadingBar" className="loading-bar" />
        <img src="loadingdots.png" alt="LoadingDots" className="loading-dots" />
      </div>
    </div>
  );
};

export default Loading;
