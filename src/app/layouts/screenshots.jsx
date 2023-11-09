import api from "../api";
import React, { useState, useEffect } from "react";
import ScreenshotsGrid from "../components/screenshotsGrid";

const Screenshots = () => {
  const [screenshots, setScreenshots] = useState([]);

  function ShowScreenshots() {
    if(screenshots.length > 0) {
      return (
        <ScreenshotsGrid screenshots={screenshots} isCarousel={false} />
      );
    } else {
      return (
        <>
          Loading...
        </>
      );
    }
  }

  useEffect(() => {
    fetch(`${api.webApi()}/v1/screenshots`)
      .then((response) => response.json())
      .then((data) => setScreenshots(data));
  }, []);

  return (
    <div className="pt-3 pb-3">
      {ShowScreenshots()}
    </div>
  );
};

export default Screenshots;
