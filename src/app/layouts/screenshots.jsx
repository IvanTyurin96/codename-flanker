import React, { useState, useEffect } from "react";
import ScreenshotsGrid from "../components/screenshotsGrid";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher";

const Screenshots = () => {
  const [screenshots, setScreenshots] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  function show() {
    if (fetchError === null) {
      return renderData();
    } else {
      return renderError();
    }
  }

  function renderData() {
    if (screenshots.length > 0) {
      return <ScreenshotsGrid screenshots={screenshots} isCarousel={false} />;
    } else {
      return (
        <div className="d-flex flex-column align-items-center">
          <LoadingSpinner />
        </div>
      );
    }
  }

  function renderError() {
    return <div className="error">{fetchError.toString()}</div>;
  }

  useEffect(() => {
    fetchApi("v1/screenshots", setScreenshots, setFetchError);
  }, []);

  return <div className="pt-3 pb-3">{show()}</div>;
};

export default Screenshots;
