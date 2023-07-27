import api from "../api";
import React, { useState, useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";

const Artwork = ({ match, screenCollapseWidth, location }) => {
  const artworkId = match.params.artworkId;

  const artwork = api.artworks.fetchAll().find((element) => element._id === artworkId);
  const artist = artwork != null ? api.artists.fetchAll().find((element) => element._id === artwork.artistId) : null;

  const [route, setRoute] = useState(null);
  useEffect(() => setRoute(location.pathname), [location]);

  const backToGallery = () => {
    window.location.replace("http://localhost:3000/codename-flanker#/gallery");
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (route === `/gallery/${artworkId}`) {
    document.onkeydown = (e) => {
      if (e.key === "Escape") {
        backToGallery();
      }
    };
  }

  var parse = require("html-react-parser");
  if (artwork != null) {
    return (
      <>
        <div className={"d-flex pt-3" + (width >= screenCollapseWidth ? " flex-row" : " flex-column")}>
          <div className={"d-flex flex-column" + (width >= screenCollapseWidth ? " me-4" : "")}>
            {artwork.images.map((element, elementIndex) => {
              return (
                <div key={elementIndex} className="mb-3">
                  <img className="artwork-image d-block ms-auto me-auto" src={require(`../api/fake.api/img/${element.image}`)} alt="" />
                  <p className="text-center m-0" style={{ color: "grey" }}>
                    {element.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={width >= screenCollapseWidth ? "" : " pb-3"}>
            <div className={width >= screenCollapseWidth ? "artwork-side" : " mt-2"}>
              <div className="d-flex">
                <img className="artist-icon artwork-artist-icon" src={require(`../api/fake.api/img/${artist.icon}`)}></img>
                <div className="flex flex-column ps-2">
                  <h5 className="m-0">{artist.name}</h5>
                  <div className="m-0" style={{ color: "lightgrey" }}>
                    {artist.role}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 mb-2">{artwork.name}</h3>
              <p className="m-0 mt-2 mb-4 artwork-description " style={{ color: "lightgrey" }}>
                {parse(artwork.description)}
              </p>
              <div className="m-0 mt-4 mb-2 artwork-shortcuts">
                <h6 className="m-0 mb-2">Keyboard shortcuts</h6>
                <div className="d-flex mt-2 mb-2 flex-wrap">
                  <div className={"d-flex" + (width >= screenCollapseWidth ? " mb-1 me-3" : " me-3")}>
                    <div className="m-0 ps-2 pe-2 bg-dark me-1">
                      <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="m-0 ms-1">Previous</div>
                  </div>
                  <div className={"d-flex" + (width >= screenCollapseWidth ? " mb-1 ms-3" : " ms-3 me-3")}>
                    <div className="m-0 ps-2 pe-2 bg-dark me-1">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                    <div className="m-0 ms-1">Next</div>
                  </div>
                  <div className={"d-flex" + (width >= screenCollapseWidth ? " mt-1" : " ms-3")}>
                    <div className="m-0 ps-2 pe-2 bg-dark me-1 artwork-shortcuts-esc">
                      <b>esc</b>
                    </div>
                    <div className="m-0 ms-1">Close</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={"d-flex pt-3" + (width >= screenCollapseWidth ? " flex-row" : " flex-column")}>
          <h3 className="m-0">Artwork not found</h3>
        </div>
      </>
    );
  }
};

export default Artwork;
