import api from "../api";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const screenCollapseWidth = useSelector((state) => state.screenCollapseWidth);
  const windowWidth = useSelector((state) => state.windowWidth);
  //const sortedArtworks = useSelector((state) => state.sortedArtworks);
  const [sortedArtworks, setSortedArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState(sortedArtworks);

  const [artists, setArtists] = useState([]);
  const [artistName, setArtistName] = useState("All");
  const updateArtistFilter = (artistId) => {
    if (artistId === 0) {
      setFilteredArtworks(sortedArtworks);
      setArtistName("All");
    } else {
      setFilteredArtworks(sortedArtworks.filter((element) => element.artistId === artistId));
      setArtistName(artists.find((artist) => artist.id === artistId).name);
    }
  };

  function ShowArtworks() {
    if(sortedArtworks.length > 0) {
      return (
        <>
          {sortedArtworks.map((artwork) => {
            const artist = artists.find((element) => element.id === artwork.artistId);
            return (
              <div key={artwork.id} className="gallery-thumbnail-container" href="/test">
                <img className="gallery-thumbnail" src={artwork.thumbnailBytes} alt="" />
                <div className="gallery-selected">
                  <a className="gallery-thumbnail-anchor" href={"/gallery/" + artwork.id}></a>
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
        </>
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
    fetch(`${api.webApi()}/v1/artworks`)
      .then((response) => response.json())
      .then((data) => setSortedArtworks(data))
      .then(() => updateArtistFilter(0));

    fetch(`${api.webApi()}/v1/artists`)
      .then((response) => response.json())
      .then((data) => setArtists(data));
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
          <div key="0" className="dropdown-item d-flex" onClick={() => updateArtistFilter(0)}>
            <div className="artist-icon gallery-dropdown-icon me-2"></div>
            <div>All</div>
          </div>
          {artists.map((artist) => {
            return (
              <div key={artist.id} className="dropdown-item d-flex" onClick={() => updateArtistFilter(artist.id)}>
                <img className="artist-icon gallery-dropdown-icon me-2" src={artist.iconBytes}></img>
                <div>{artist.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"mt-2" + (windowWidth >= screenCollapseWidth ? " gallery-grid" : " gallery-grid gallery-grid-mobile")}>
        {ShowArtworks()}
      </div>
    </div>
  );
};

export default Gallery;
