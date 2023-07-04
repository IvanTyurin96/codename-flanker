import api from "../api";
import React, { useState, useEffect } from "react";

const Screenshots = ({ screenCollapseWidth }) => {
  const screenshots = api.screenshots.fetchAll();

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [screenshotZoom, setScreenshotZoom] = useState(false);
  const [screenshotPath, setScreenshotPath] = useState(screenshots[0].path);
  const screenshotOpenClick = (id) => {
    console.log(id);
    setScreenshotZoom(true);
    setSelectedScreenshotId(parseInt(id));
  };
  const screenshotCloseClick = () => {
    setScreenshotZoom(false);
  };

  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const [selectedScreenshotId, setSelectedScreenshotId] = useState(1);

  const changeImage = (value) => {
    const currentScreenshot = screenshots.find((element) => element.path === screenshotPath);
    const currentScreenshotId = parseInt(currentScreenshot._id);
    var newCurrentScreenshotId = currentScreenshotId + value;
    if (newCurrentScreenshotId >= screenshots.length) {
      newCurrentScreenshotId = screenshots.length;
      setRightArrow(false);
    } else {
      setRightArrow(true);
    }

    if (newCurrentScreenshotId <= 1) {
      newCurrentScreenshotId = 1;
      setLeftArrow(false);
    } else {
      setLeftArrow(true);
    }
    setScreenshotPath(screenshots.find((element) => element._id === newCurrentScreenshotId.toString()).path);
    setSelectedScreenshotId(newCurrentScreenshotId);
  };

  document.onkeydown = (e) => {
    if (e.key === "ArrowLeft") {
      changeImage(-1);
    }
    if (e.key === "ArrowRight") {
      changeImage(1);
    }
    if (e.key === "Escape") {
      screenshotCloseClick();
    }
  };

  return (
    <div className={width >= screenCollapseWidth ? "screenshots-grid" : "screenshots-grid screenshots-grid-mobile"}>
      {screenshots.map((screenshot) => {
        return (
          <img
            key={screenshot._id}
            className="screenshots-image"
            src={require(`../api/fake.api/img/${screenshot.path}`)}
            onClick={() => {
              screenshotOpenClick(screenshot._id);
              setScreenshotPath(screenshot.path);
            }}
          ></img>
        );
      })}
      <div className={"screenshots-open-background " + (screenshotZoom ? "" : " d-none")}>
        <div className="screenshots-open-container">
          <img className="screenshots-open-image" src={require(`../api/fake.api/img/${screenshotPath}`)}></img>
          <button
            type="button"
            className="btn-close btn-close-white btn-lg screenshots-open-close-button"
            aria-label="Close"
            onClick={() => screenshotCloseClick()}
          ></button>
          <div className={"screenshots-open-arrow-button" + (leftArrow ? "" : " d-none")} style={{ left: "8px" }} onClick={() => changeImage(-1)}>
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className={"screenshots-open-arrow-button" + (rightArrow ? "" : " d-none")} style={{ right: "8px" }} onClick={() => changeImage(1)}>
            <i className="bi bi-arrow-right"></i>
          </div>
          <div className="screenshots-carousel">
            {screenshots.map((screenshot) => {
              return (
                <div
                  key={screenshot._id}
                  className={
                    "screenshots-carousel-circles" + (parseInt(screenshot._id) === selectedScreenshotId ? " screenshots-carousel-circles-selected" : "")
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screenshots;
