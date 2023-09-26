import React from "react";

const Icon = ({ id, name, left, top, handleDragStart, src, onClick }) => {
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="icon"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, id)}
      onDrag={handleDrag}
      style={{ left, top }}
      onClick={() => onClick(id)} // Move the onClick outside of the conditional check
    >
      <img className="icon" alt={name} src={src} />
      <br />
      {name}
    </div>
  );
};

export default Icon;
