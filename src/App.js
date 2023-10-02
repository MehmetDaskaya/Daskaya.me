import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Loading, WindowsScreen } from "./components/Screens";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay with a 3-second timeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clear the timeout if the component unmounts before the delay
    return () => clearTimeout(loadingTimeout);
  }, []);

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
      <body>{isLoading ? <Loading /> : <WindowsScreen />}</body>
    </html>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
