import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher";

const Gallery = () => {
  const screenCollapseWidth = useSelector((state) => state.screenCollapseWidth);
  const windowWidth = useSelector((state) => state.windowWidth);

  const [artworks, setArtworks] = useState([]);
  const [fetchArtworksError, setFetchArtworksError] = useState(null);

  const [artists, setArtists] = useState([]);
  const [fetchArtistsError, setFetchArtistsError] = useState(null);

  //const sortedArtworks = useSelector((state) => state.sortedArtworks);
  const [sortedArtworks, setSortedArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState(sortedArtworks);

  const [artistName, setArtistName] = useState("All");
  // const updateArtistFilter = (artistId) => {
  //   if (artistId === 0) {
  //     setFilteredArtworks(sortedArtworks);
  //     setArtistName("All");
  //   } else {
  //     setFilteredArtworks(sortedArtworks.filter((element) => element.artistId === artistId));
  //     setArtistName(artists.find((artist) => artist.id === artistId).name);
  //   }
  // };

  function show() {
    return (
      <div className="pt-3 pb-3">
        <>{showArtists()}</>
        <>{showArtworks()}</>
      </div>
    );
  }

  function showArtworks() {
    if (fetchArtworksError === null) {
      return renderArtworksData();
    } else {
      return renderArtworksError();
    }
  }

  function renderArtworksData() {
    if (artworks.length > 0) {
      return (
        <div className={"mt-2" + (windowWidth >= screenCollapseWidth ? " gallery-grid" : " gallery-grid gallery-grid-mobile")}>
          {artworks.map((artwork) => {
            const artist = artists.find((element) => element.id === artwork.artistId);
            console.log(artist);
            return (
              <div key={artwork.id} className="gallery-thumbnail-container" href="/test">
                <img className="gallery-thumbnail" src={artwork.thumbnailBytes} alt="Artwork image" />
                <div className="gallery-selected">
                  <a className="gallery-thumbnail-anchor" href={"/gallery/" + artwork.id}></a>
                  <div className="d-flex mb-3 mt-auto ps-3">
                    <img className="artist-icon gallery-artist-icon" src={getArtistIcon(artist)}></img>
                    <div className="ps-2 d-flex flex-column">
                      <h5 className="m-0">{artwork.name}</h5>
                      <h5 className="m-0 mt-auto">{getArtistName(artist)}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="mt-2 d-flex flex-column align-items-center">
          <LoadingSpinner />
        </div>
      );
    }
  }
  function getArtistIcon(artist) {
    if (artist != null) {
      return artist.iconBytes;
    } else {
      return require(`../icons/question_mark.png`);
    }
  }
  function getArtistName(artist) {
    if (artist != null) {
      return artist.name;
    } else {
      return "Unknown artist";
    }
  }

  function renderArtworksError() {
    return <div className="error">{fetchArtworksError.toString()}</div>;
  }

  function showArtists() {
    if (fetchArtistsError === null) {
      return renderArtistsData();
    } else {
      return renderArtistsError();
    }
  }

  function renderArtistsData() {
    if (artists.length > 0) {
      return (
        <div className="mb-2 dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-dark"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Artist:
          </button>
          <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
            <div key="0" className="dropdown-item d-flex">
              <div className="artist-icon gallery-dropdown-icon me-2"></div>
              <div>All</div>
            </div>
            {artists.map((artist) => {
              return (
                <div key={artist.id} className="dropdown-item d-flex">
                  <img className="artist-icon gallery-dropdown-icon me-2" src={artist.iconBytes}></img>
                  <div>{artist.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="mt-2 d-flex flex-column align-items-center">
          <LoadingSpinner />
        </div>
      );
    }
  }

  function renderArtistsError() {
    return <div className="error">{fetchArtistsError.toString()}</div>;
  }

  useEffect(() => {
    fetchApi("v1/artworks", setArtworks, setFetchArtworksError);
    fetchApi("v1/artists", setArtists, setFetchArtistsError);
  }, []);

  return show();
};

export default Gallery;
