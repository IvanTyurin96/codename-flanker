import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
              {/* <div className="m-0 mt-4 mb-2 artwork-shortcuts">
                <h6 className="m-0 mb-2">Keyboard shortcuts</h6>
                <div className="d-flex mt-2 mb-2 flex-wrap">
                  <div className={"d-flex" + (windowWidth >= screenCollapseWidth ? " mb-1 me-3" : " me-3")}>
                    <div className="m-0 ps-2 pe-2 bg-dark me-1">
                      <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="m-0 ms-1">Previous</div>
                  </div>
                  <div className={"d-flex" + (windowWidth >= screenCollapseWidth ? " mb-1 ms-3" : " ms-3 me-3")}>
                    <div className="m-0 ps-2 pe-2 bg-dark me-1">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                    <div className="m-0 ms-1">Next</div>
                  </div>
                  <div className={"d-flex" + (windowWidth >= screenCollapseWidth ? " mt-1" : " ms-3")}>
                    <div className="m-0 ps-2 pe-2 bg-dark me-1 artwork-shortcuts-esc">
                      <b>esc</b>
                    </div>
                    <div className="m-0 ms-1">Close</div>
                  </div>
                </div>
              </div> */}
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

  function getNextArtworkId(value) {
    const currentArtworkIndex = artworks.findIndex((element) => element.id == artworkId);
    var newArtworkIndex = currentArtworkIndex + value;
    if (newArtworkIndex <= 0) {
      newArtworkIndex = 0;
      setLeftArrow(false);
    } else {
      setLeftArrow(true);
    }
    if (newArtworkIndex >= artworks.length - 1) {
      newArtworkIndex = artworks.length - 1;
      setRightArrow(false);
    } else {
      setRightArrow(true);
    }
    const newArtworkId = artworks[newArtworkIndex].id;
    return newArtworkId;
  }

  function renderError() {
    return <div className="pt-3 error">{fetchError.toString()}</div>;
  }

  // const sortedArtworks = useSelector((state) => state.sortedArtworks);

  // const route = useLocation().pathname;

  // //const artwork = api.artworks.fetchAll().find((element) => element._id === artworkId);
  // const artist = artwork != null ? api.artists.fetchAll().find((element) => element._id === artwork.artistId) : null;

  // let history = useHistory();

  // const backToGallery = () => {
  //   history.push("/gallery");
  //   //setRoute("home");
  // };

  // const [leftArrow, setLeftArrow] = useState(true);
  // const [rightArrow, setRightArrow] = useState(true);

  // useEffect(() => {
  //   changeImage(0);
  // }, []);

  // if (route === `/gallery/${artworkId}`) {
  //   document.onkeydown = (e) => {
  //     if (e.key === "Escape") {
  //       backToGallery();
  //     }
  //     if (e.key === "ArrowLeft") {
  //       changeImage(-1);
  //     }
  //     if (e.key === "ArrowRight") {
  //       changeImage(1);
  //     }
  //   };
  // }

  useEffect(() => {
    fetchApi(`v1/artworks/${artworkId}`, setArtwork, setFetchError);
  }, [artworkId]);

  return show();

  // if (artwork != null) {
  //   return (
  //     <>
  //       <div className={"d-flex pt-3" + (windowWidth >= screenCollapseWidth ? " flex-row" : " flex-column")}>
  //         <div className={"d-flex flex-column position-relative" + (windowWidth >= screenCollapseWidth ? " me-4" : "")}>
  //           <div className={"artwork-arrows" + (leftArrow ? "" : " d-none")} style={{ top: "250px", left: "-12px" }} onClick={() => changeImage(-1)}>
  //             <i className="bi bi-arrow-left-short"></i>
  //           </div>
  //           <div className={"artwork-arrows" + (rightArrow ? "" : " d-none")} style={{ top: "250px", right: "-12px" }} onClick={() => changeImage(1)}>
  //             <i className="bi bi-arrow-right-short"></i>
  //           </div>
  //           {artwork.images.map((element, elementIndex) => {
  //             return (
  //               <div key={elementIndex} className="mb-3">
  //                 <img className="artwork-image d-block ms-auto me-auto" src={require(`../api/fake.api/img/${element.image}`)} alt="" />
  //                 <p className="text-center m-0" style={{ color: "grey" }}>
  //                   {element.description}
  //                 </p>
  //               </div>
  //             );
  //           })}
  //         </div>
  //         <div className={windowWidth >= screenCollapseWidth ? "" : " pb-3"}>
  //           <div className={windowWidth >= screenCollapseWidth ? "artwork-side" : " mt-2"}>
  //             <div className="d-flex">
  //               <img className="artist-icon artwork-artist-icon" src={require(`../api/fake.api/img/${artist.icon}`)}></img>
  //               <div className="flex flex-column ps-2">
  //                 <h5 className="m-0">{artist.name}</h5>
  //                 <div className="m-0" style={{ color: "lightgrey" }}>
  //                   {artist.role}
  //                 </div>
  //               </div>
  //             </div>
  //             <h3 className="mt-3 mb-2">{artwork.name}</h3>
  //             <p className="m-0 mt-2 mb-4 artwork-description " style={{ color: "lightgrey" }}>
  //               {parse(artwork.description)}
  //             </p>
  //             <div className="m-0 mt-4 mb-2 artwork-shortcuts">
  //               <h6 className="m-0 mb-2">Keyboard shortcuts</h6>
  //               <div className="d-flex mt-2 mb-2 flex-wrap">
  //                 <div className={"d-flex" + (windowWidth >= screenCollapseWidth ? " mb-1 me-3" : " me-3")}>
  //                   <div className="m-0 ps-2 pe-2 bg-dark me-1">
  //                     <i className="bi bi-arrow-left"></i>
  //                   </div>
  //                   <div className="m-0 ms-1">Previous</div>
  //                 </div>
  //                 <div className={"d-flex" + (windowWidth >= screenCollapseWidth ? " mb-1 ms-3" : " ms-3 me-3")}>
  //                   <div className="m-0 ps-2 pe-2 bg-dark me-1">
  //                     <i className="bi bi-arrow-right"></i>
  //                   </div>
  //                   <div className="m-0 ms-1">Next</div>
  //                 </div>
  //                 <div className={"d-flex" + (windowWidth >= screenCollapseWidth ? " mt-1" : " ms-3")}>
  //                   <div className="m-0 ps-2 pe-2 bg-dark me-1 artwork-shortcuts-esc">
  //                     <b>esc</b>
  //                   </div>
  //                   <div className="m-0 ms-1">Close</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div className={"d-flex pt-3" + (windowWidth >= screenCollapseWidth ? " flex-row" : " flex-column")}>
  //         <h3 className="m-0">Artwork not found</h3>
  //       </div>
  //     </>
  //   );
  // }
};

export default Artwork;
