import webApi from "../api";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ScreenshotsGrid = ({ screenshots, isCarousel }) => {
  const screenCollapseWidth = useSelector((state) => state.screenCollapseWidth);
  const windowWidth = useSelector((state) => state.windowWidth);

  const [screenshotZoom, setScreenshotZoom] = useState(false);
  const [screenshotId, setScreenshotId] = useState(1);
  const [screenshotPath, setScreenshotPath] = useState(screenshots[0].path);

  const screenshotOpenClick = (id) => {
    setScreenshotId(parseInt(id));
    setScreenshotPath(screenshots.find((element) => element.id == id).path);
    setScreenshotZoom(true);
    checkArrowsTransparent(id);
  };

  const screenshotCloseClick = () => {
    setScreenshotZoom(false);
  };

  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(true);

  const checkArrowsTransparent = (id) => {
    //Почему-то хук setScreenshotId срабатывает не сразу.
    //Поэтому я здесь принимаю параметр, а не беру значение из screenshotId.
    if (id >= screenshots.length) {
      setRightArrow(false);
    } else {
      setRightArrow(true);
    }
    if (id <= 1) {
      setLeftArrow(false);
    } else {
      setLeftArrow(true);
    }
  };

  const changeImage = (value) => {
    var newCurrentScreenshotId = screenshotId + value;
    if (newCurrentScreenshotId >= screenshots.length) {
      newCurrentScreenshotId = screenshots.length;
    }
    if (newCurrentScreenshotId <= 1) {
      newCurrentScreenshotId = 1;
    }
    screenshotOpenClick(newCurrentScreenshotId);
  };

  document.onkeydown = (e) => {
    if (screenshotZoom == true) {
      if (e.key == "ArrowLeft") {
        changeImage(-1);
      }
      if (e.key == "ArrowRight") {
        changeImage(1);
      }
      if (e.key == "Escape") {
        screenshotCloseClick();
      }
    }
  };

  function carousel(isCarousel) {
    if (isCarousel) {
      return (
        <div className="screenshots-grid-carousel">
          {screenshots.map((screenshot) => {
            return (
              <div
                key={screenshot.id}
                className={"screenshots-grid-carousel-circles" + (parseInt(screenshot.id) == screenshotId ? " screenshots-grid-carousel-circles-selected" : "")}
              ></div>
            );
          })}
        </div>
      );
    }
  }

  return (
    <div className={windowWidth >= screenCollapseWidth ? "screenshots-grid" : "screenshots-grid screenshots-grid-mobile"}>
      {screenshots.map((screenshot) => {
        return (
          <img
            key={screenshot.id}
            className="screenshots-grid-image"
            src={screenshot.thumbnailBytes}
            onClick={() => {
              screenshotOpenClick(screenshot.id, screenshot.path);
            }}
          >
            {}
          </img>
        );
      })}
      <div className={"screenshots-grid-open-background " + (screenshotZoom ? "" : " d-none")}>
        <div className="screenshots-grid-open-container">
          <img className="screenshots-grid-open-image" src={`${webApi}/screenshots/${screenshotPath}`}></img>
          <button
            type="button"
            className="btn-close btn-close-white btn-lg screenshots-grid-open-close-button"
            aria-label="Close"
            onClick={() => screenshotCloseClick()}
          ></button>
          <div className={"screenshots-grid-open-arrow-button" + (leftArrow ? "" : " d-none")} style={{ left: "8px" }} onClick={() => changeImage(-1)}>
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className={"screenshots-grid-open-arrow-button" + (rightArrow ? "" : " d-none")} style={{ right: "8px" }} onClick={() => changeImage(1)}>
            <i className="bi bi-arrow-right"></i>
          </div>
          {carousel(isCarousel)}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotsGrid;
