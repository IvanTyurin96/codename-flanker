import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScreenshotsGrid from "../components/screenshotsGrid";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher";
import { setScreenshots } from "../../redux/actions";

const Screenshots = () => {
  const dispatch = useDispatch();

  const screenshots = useSelector((state) => state.screenshots);
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

  function cacheScreenshots(data) {
    dispatch(setScreenshots(data));
  }

  useEffect(() => {
    if (screenshots.length == 0) {
      fetchApi("v1/screenshots", cacheScreenshots, setFetchError);
    }
  }, []);

  return <div className="pt-3 pb-3">{show()}</div>;
};

export default Screenshots;
