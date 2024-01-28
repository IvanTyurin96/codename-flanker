import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher";
import { useSelector } from "react-redux";

const Artwork = ({ match }) => {
  const screenCollapseWidth = useSelector((state) => state.screenCollapseWidth);
  const windowWidth = useSelector((state) => state.windowWidth);

  const artworks = useSelector((state) => state.sortedArtworks);

  const artworkId = parseInt(match.params.artworkId);

  const [artwork, setArtwork] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(true);

  function show() {
    if (fetchError == null) {
      return renderData();
    } else {
      return renderError();
    }
  }

  function renderData() {
    var parse = require("html-react-parser");
    if (artwork != null) {
      return (
        <div className={"d-flex pt-3" + (windowWidth >= screenCollapseWidth ? " flex-row" : " flex-column")}>
          <div className={"d-flex flex-column position-relative" + (windowWidth >= screenCollapseWidth ? " me-4" : "")}>
            {renderArrows()}
            {artwork.images.map((image, imageIndex) => {
              return (
                <div key={imageIndex} className="mb-3">
                  <img className="artwork-image d-block ms-auto me-auto" src={image.pathBytes} alt="" />
                  <p className="text-center m-0" style={{ color: "grey" }}>
                    {image.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={windowWidth >= screenCollapseWidth ? "" : " pb-3"}>
            <div className={windowWidth >= screenCollapseWidth ? "artwork-side" : " mt-2"}>
              <div className="d-flex">
                <img className="artist-icon artwork-artist-icon" src={artwork.artist.iconBytes}></img>
                <div className="flex flex-column ps-2">
                  <h5 className="m-0">{artwork.artist.name}</h5>
                  <div className="m-0" style={{ color: "lightgrey" }}>
                    {artwork.artist.role}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 mb-2">{artwork.name}</h3>
              <p className="m-0 mt-2 mb-4 artwork-description " style={{ color: "lightgrey" }}>
                {parse(artwork.description)}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pt-3">
          <div className="d-flex flex-column align-items-center">
            <LoadingSpinner />
          </div>
        </div>
      );
    }
  }

  function renderArrows() {
    if (artworks.length > 0) {
      return (
        <>
          <div className={"artwork-arrows" + (leftArrow ? "" : " d-none")} style={{ top: "250px", left: "-12px" }}>
            <i className="bi bi-arrow-left-short"></i>
          </div>
          <div className={"artwork-arrows" + (rightArrow ? "" : " d-none")} style={{ top: "250px", right: "-12px" }}>
            <i className="bi bi-arrow-right-short"></i>
          </div>
        </>
      );
    }
  }

  function renderError() {
    return <div className="pt-3 error">{fetchError.toString()}</div>;
  }

  useEffect(() => {
    fetchApi(`v1/artworks/${artworkId}`, setArtwork, setFetchError);
  }, [artworkId]);

  return show();
};

export default Artwork;
