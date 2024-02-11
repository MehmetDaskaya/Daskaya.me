import { React, useState } from "react";
import { Icon, Browser, Toolbar } from "../../index";
import { About } from "../../Folders/index";
import IconData from "../../../data/IconData";

const WindowsScreen = () => {
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
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
    const clickedIcon = icons.find((icon) => icon.id === id);
    setSelectedIcon(clickedIcon);
    setIsBrowserOpen(true);
  };

  const getSelectedContent = () => {
    switch (selectedIcon.id) {
      case 1:
        return (
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "red",
            }}
          >
            Content for icon 1
          </div>
        );
      case 2:
        return (
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "blue",
            }}
          >
            Content for icon 2
          </div>
        );
      case 3:
        return <About />;

      case 4:
        return (
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "blue",
            }}
          >
            Content for icon 4
          </div>
        );
      case 5:
        return (
          <iframe
            src="https://bing.com"
            title="Embedded Browser"
            width="800"
            height="600"
            allowFullScreen
          ></iframe>
        );
      // Add cases for other icons as needed
      default:
        return null;
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
          isOpen={isBrowserOpen}
          setIsBrowserOpen={setIsBrowserOpen}
          content={getSelectedContent()}
          icon={selectedIcon.src}
          title={selectedIcon.name}
        />
      )}
    </div>
  );
};

export default WindowsScreen;
