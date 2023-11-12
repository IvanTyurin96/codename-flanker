import ScreenshotsGrid from "../components/screenshotsGrid";
import LoadingSpinner from "../components/loadingSpinner";
import React, { useState, useEffect } from "react";
import { fetchApi } from "../utils/apiFetcher";

const Home = () => {
  const [screenshots, setScreenshots] = useState([]);
  const limitedScreenshots = screenshots.slice(0, 8);
  const [fetchError, setFetchError] = useState(null);

  function showScreenshots() {
    if (fetchError === null) {
      return renderData();
    } else {
      return renderError();
    }
  }

  function renderData() {
    if (screenshots.length > 0) {
      return <ScreenshotsGrid screenshots={limitedScreenshots} isCarousel={true} />;
    } else {
      return (
        <div className="d-flex flex-column align-items-center">
          <LoadingSpinner />
        </div>
      );
    }
  }

  function renderError() {
    return <div className="error">{fetchError.toString()}</div>;
  }

  useEffect(() => {
    fetchApi("v1/screenshots", setScreenshots, setFetchError);
  }, []);

  return (
    <>
      <div className="pt-3 pb-3">
        <p className="m-0 mb-2">
          Codename Flanker Su-30 - A <strong>free</strong> community mod for DCS World.
        </p>
        <p className="mt-2 mb-2">
          The mod has already been released and you can download the latest version from <a href="/download">download page</a>.
        </p>
        <p className="mt-2 mb-2">It has a few modifications in game, but primary all Su-30 variants are separated into two types:</p>
        <ul className="mt-2 mb-2">
          <li key={"1"}>
            Air-to-Ground (<strong>AG</strong>)
          </li>
          <li key={"2"}>
            Air-to-Air (<strong>AA</strong>)
          </li>
        </ul>
        <p className="mt-2 mb-2">
          <strong>Air-to-Ground</strong> variants of Su-30 use Su-25T avionics. These variants of Su-30 are absolutely free: you don't need to buy any DCS
          modules to use them.
        </p>
        <p className="mt-2 mb-2">
          <strong>Air-to-Air</strong> Su-30 modifications use Su-33 avionics. These variants can only be used by players that have Flamming Cliffs 3 module or
          Su-33 module.
        </p>
        <p className="mt-2 mb-2">
          The mod currently uses SFM (Standard Flight Model) but in next update, it will feature a fully custom EFM (External Flight Model).
        </p>
        <p className="mt-2 mb-2">
          Join our Discord server: <a href="https://discord.gg/codename-flanker-community-839196573228335185">Click</a>
        </p>
        <div className="mt-2">{showScreenshots()}</div>
      </div>
    </>
  );
};

export default Home;
