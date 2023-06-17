import api from "../api";
import React, { useState, useEffect } from "react";

const Artwork = ({ match, screenCollapseWidth }) => {
  const artworkId = match.params.artworkId;

  const artwork = api.artworks.fetchAll().find((element) => element._id === artworkId);
  const artist = artwork != null ? api.artists.fetchAll().find((element) => element._id === artwork.artistId) : null;

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

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
              <p className="m-0 artwork-description" style={{ color: "lightgrey" }}>
                {parse(artwork.description)}
              </p>
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
