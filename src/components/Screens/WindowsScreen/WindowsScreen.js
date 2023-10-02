import { React, useState } from "react";
import { Icon, Browser, Toolbar } from "../../index";
import IconData from "../../../data/IconData";

const WindowsScreen = () => {
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [icons, setIcons] = useState(IconData);

  const handleDragStart = (e, id) => {
    const isDraggable = e.target.getAttribute("data-draggable");

    // Check if the element being dragged is draggable (has the attribute)
    if (isDraggable === "true") {
      e.dataTransfer.setData("text/plain", id.toString());
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData("text/plain"));
    const icon = icons.find((icon) => icon.id === id);

    if (icon) {
      const updatedIcon = { ...icon, left: e.clientX, top: e.clientY };
      const updatedIcons = icons.map((i) => (i.id === id ? updatedIcon : i));
      setIcons(updatedIcons);
    }
  };

  const handleIconClick = (id) => {
    if (id === 5) {
      // If the Internet Explorer icon is clicked, toggle the browser state
      setIsBrowserOpen(true);
    } else {
      console.log("selam");
    }
  };

  return (
    <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      {icons.map((icon) => (
        <Icon
          key={icon.id}
          id={icon.id}
          name={icon.name}
          left={icon.left}
          top={icon.top}
          handleDragStart={handleDragStart}
          src={icon.src}
          onClick={(id) => handleIconClick(id)}
          data-draggable="true"
        />
      ))}
      <Toolbar className="toolbar" />
      {isBrowserOpen && (
        <Browser
          url="https://bing.com"
          isOpen={isBrowserOpen}
          setIsBrowserOpen={setIsBrowserOpen}
        />
      )}
    </div>
  );
};

export default WindowsScreen;
