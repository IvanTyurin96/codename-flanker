import api from "../api";
import React, { useState, useEffect } from "react";
import { shuffleArray } from "../utils/shuffleArray";

const Gallery = ({ screenCollapseWidth }) => {
  const artworks = api.artworks.fetchAll();
  const artists = api.artists.fetchAll();
  const [sortedArtworks, setSortedArtworks] = useState(artworks);

  const [filteredArtworks, setFilteredArtworks] = useState(sortedArtworks);
  const [artistName, setArtistName] = useState("All");
  const updateArtistFilter = (artistId) => {
    if (artistId === "0") {
      setFilteredArtworks(sortedArtworks);
      setArtistName("All");
    } else {
      setFilteredArtworks(sortedArtworks.filter((element) => element.artistId === artistId));
      setArtistName(artists.find((artist) => artist._id === artistId).name);
    }
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setSortedArtworks(shuffleArray(artworks));
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="pt-3 pb-3">
      <div className="mb-2 dropdown">
        <button
          className="btn btn-secondary dropdown-toggle bg-dark"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Artist: {artistName}
        </button>
        <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
          <div key="0" className="dropdown-item d-flex" onClick={() => updateArtistFilter("0")}>
            <div className="artist-icon gallery-dropdown-icon me-2"></div>
            <div>All</div>
          </div>
          {artists.map((artist) => {
            return (
              <div key={artist._id} className="dropdown-item d-flex" onClick={() => updateArtistFilter(artist._id)}>
                <img className="artist-icon gallery-dropdown-icon me-2" src={require(`../api/fake.api/img/${artist.icon}`)}></img>
                <div>{artist.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"mt-2" + (width >= screenCollapseWidth ? " gallery-grid" : " gallery-grid gallery-grid-mobile")}>
        {filteredArtworks.map((artwork) => {
          const artist = artists.find((element) => element._id === artwork.artistId);
          return (
            <div key={artwork._id} className="gallery-thumbnail-container" href="/test">
              <img className="gallery-thumbnail" src={require(`../api/fake.api/img/${artwork.thumbnail}`)} alt="" />
              <div className="gallery-selected">
                <a className="gallery-thumbnail-anchor" href={"#/gallery/" + artwork._id}></a>
                <div className="d-flex mb-3 mt-auto ps-3">
                  <img className="artist-icon gallery-artist-icon" src={require(`../api/fake.api/img/${artist.icon}`)}></img>
                  <div className="ps-2 d-flex flex-column">
                    <h5 className="m-0">{artwork.name}</h5>
                    <h5 className="m-0 mt-auto">{artist.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
