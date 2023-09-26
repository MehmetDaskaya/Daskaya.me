import React from "react";
import "./Folder.css";

const Folder = () => {
  return (
    <div className="folder">
      <div className="top-bar">
        <div className="left-button">Back</div>
        <div className="title">My Folder</div>
        <div className="right-buttons">
          <div className="button">Minimize</div>
          <div className="button">Maximize</div>
          <div className="button">Close</div>
        </div>
      </div>
      <div className="content">
        <div className="section">
          <div className="section-title">Section 1</div>
          <div className="icons">
            <div className="icon">Icon 1</div>
            <div className="icon">Icon 2</div>
          </div>
        </div>
        <div className="section">
          <div className="section-title">Section 2</div>
          <div className="icons">
            <div className="icon">Icon 3</div>
            <div className="icon">Icon 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
