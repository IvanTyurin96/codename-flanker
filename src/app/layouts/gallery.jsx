import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher";
import { Link } from "react-router-dom";
import { shuffleArray } from "../../app/utils/shuffleArray";
import { setSortedArtworks } from "../../redux/actions";

const Gallery = () => {
  const screenCollapseWidth = useSelector((state) => state.screenCollapseWidth);
  const windowWidth = useSelector((state) => state.windowWidth);

  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(document.location.search);

  const artworks = useSelector((state) => state.sortedArtworks);
  const [fetchArtworksError, setFetchArtworksError] = useState(null);

  const [artists, setArtists] = useState([]);
  const [fetchArtistsError, setFetchArtistsError] = useState(null);

  function show() {
    return (
      <div className="pt-3 pb-3">
        <>{showArtists()}</>
        <>{showArtworks()}</>
      </div>
    );
  }

  function showArtists() {
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
          Artist: {getArtistNameById(getArtistIdFromQuery())}
        </button>
        <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
          {renderArtistsData(artists)}
        </div>
      </div>
    );
  }

  function getArtistNameById(artistId) {
    if (artistId == 0) return "All";
    const artist = artists.filter((element) => element.id == artistId)[0];
    if (artist != null) {
      return artist.name;
    } else {
      return "Unknown artist";
    }
  }

  function getArtistIdFromQuery() {
    const artistId = parseInt(searchParams.get("artist"));
    if (artistId != null && Number.isInteger(artistId)) {
      return artistId;
    } else {
      return 0;
    }
  }

  function renderArtistsData(artists) {
    if (fetchArtistsError == null) {
      return renderArtistsList(artists);
    } else {
      return renderArtistsError();
    }
  }

  function renderArtistsList(artists) {
    if (artists.length > 0) {
      return (
        <>
          <Link to={`/gallery?artist=0`} key="0" className="dropdown-item d-flex">
            <div className="artist-icon gallery-dropdown-icon me-2"></div>
            <div>All</div>
          </Link>
          {artists.map((artist) => {
            return (
              <Link to={`/gallery?artist=${artist.id}`} key={artist.id} className="dropdown-item d-flex">
                <img className="artist-icon gallery-dropdown-icon me-2" src={artist.iconBytes} alt={artist.icon}></img>
                <div>{artist.name}</div>
              </Link>
            );
          })}
        </>
      );
    } else {
      return (
        <div className="d-flex flex-column align-items-center">
          <LoadingSpinner />
        </div>
      );
    }
  }

  function renderArtistsError() {
    return <div className="error ms-2 me-2">{fetchArtistsError.toString()}</div>;
  }

  function showArtworks() {
    if (fetchArtworksError == null) {
      return renderArtworksData();
    } else {
      return renderArtworksError();
    }
  }

  function renderArtworksData() {
    if (artworks.length > 0) {
      return showFilteredArtworks(getFilteredArtworks(getArtistIdFromQuery()));
    } else {
      return (
        <div className="mt-2 d-flex flex-column align-items-center">
          <LoadingSpinner />
        </div>
      );
    }
  }

  function showFilteredArtworks(filteredArtworks) {
    if (filteredArtworks.length > 0) {
      return (
        <div className={"mt-2" + (windowWidth >= screenCollapseWidth ? " gallery-grid" : " gallery-grid gallery-grid-mobile")}>
          {filteredArtworks.map((artwork) => {
            const artist = artists.find((element) => element.id == artwork.artistId);
            return (
              <div key={artwork.id} className="gallery-thumbnail-container">
                <img className="gallery-thumbnail" src={artwork.thumbnailBytes} alt={artwork.thumbnail} />
                <div className="gallery-selected">
                  <Link className="gallery-thumbnail-anchor" to={"/gallery/" + artwork.id}></Link>
                  <div className="d-flex mb-3 mt-auto ps-3">
                    <img className="artist-icon gallery-artist-icon" src={getArtistIcon(artist)} alt="Artist icon"></img>
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
      return <div className="mt-2">No one artwork found for artist = {getArtistIdFromQuery()}</div>;
    }
  }

  function getFilteredArtworks(artistId) {
    if (artistId == 0) {
      return artworks;
    } else {
      return artworks.filter((element) => element.artistId == artistId);
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

  function sortAndCacheArtworks(data) {
    dispatch(setSortedArtworks(shuffleArray(data)));
  }

  useEffect(() => {
    if (artworks.length == 0) {
      fetchApi("v1/artworks", sortAndCacheArtworks, setFetchArtworksError);
    }
    fetchApi("v1/artists", setArtists, setFetchArtistsError);
  }, []);

  return show();
};

export default Gallery;
