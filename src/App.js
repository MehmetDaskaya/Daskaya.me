import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Icon from "../src/components/Icon/Icon";
import Toolbar from "./components/Toolbar/Toolbar";
import Browser from "./components/Browser/Browser";
import Loading from "./components/LoadingScreen/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [icons, setIcons] = useState([
    {
      id: 1,
      name: "My Computer",
      left: 50,
      top: 50,
      src: "https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/My%20Computer.ico",
    },
    {
      id: 2,
      name: "Contact",
      left: 150,
      top: 50,
      src: "https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/Phone.ico",
    },
    {
      id: 3,
      name: "About Me",
      left: 150,
      top: 50,
      src: "https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/User%20Support.ico",
    },
    {
      id: 4,
      name: "My Projects",
      left: 150,
      top: 50,
      src: "https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/Folder%20Closed.ico",
    },
    {
      id: 5,
      name: "Internet Explorer",
      left: 150,
      top: 50,
      src: "https://raw.githubusercontent.com/MehmetDaskaya/Daskaya.me/main/public/NicePng_windows-xp-taskbar-png_9285144.png",
    },
  ]);

  useEffect(() => {
    // Simulate a loading delay with a 3-second timeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clear the timeout if the component unmounts before the delay
    return () => clearTimeout(loadingTimeout);
  }, []);

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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="style.css" />
        <script src="jquery.min.js"></script>
        <script src="script.js"></script>
        <meta name="title" content="Daskaya - Portfolio Site" />
        <meta
          name="description"
          content="Mehmet Daskaya perfonal portfolio website."
        />
        <meta name="keywords" content="Daskaya" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" type="image/png" href="favicon.png" />
        <title>Mehmet's Desktop</title>
      </head>
      <body>
        {isLoading ? (
          <Loading />
        ) : (
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
          </div>
        )}
        <Toolbar className="toolbar" />
        {isBrowserOpen && (
          <Browser
            url="https://bing.com"
            isOpen={isBrowserOpen}
            setIsBrowserOpen={setIsBrowserOpen}
          />
        )}
      </body>
    </html>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
