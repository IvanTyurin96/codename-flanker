import NavBar from "./app/components/navbar";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Home from "./app/layouts/home";
import Download from "./app/layouts/download";
import Gallery from "./app/layouts/gallery";
import Faq from "./app/layouts/faq";
import Patchnotes from "./app/layouts/patchnotes";
import Footer from "./app/components/footer";
import Artwork from "./app/layouts/artwork";
import Installation from "./app/layouts/installation";
import { shuffleArray } from "./app/utils/shuffleArray";
import api from "./app/api";

function App() {
  const artworks = api.artworks.fetchAll();
  const [sortedArtworks, setSortedArtworks] = useState(artworks);

  const location = useLocation();
  const screenCollapseWidth = 720;

  const themeHeight = 300;
  const [stickyClass, setStickyClass] = useState("");
  const [containerMargin, setContainerMargin] = useState("");
  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    setStickyClass(windowHeight > themeHeight ? " fixed-top" : "");
    setContainerMargin(windowHeight > themeHeight ? " container-margin-top" : "");
  };
  useEffect(() => {
    setSortedArtworks(shuffleArray(artworks));
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <div className="containers-parent">
      <div className="top-theme"></div>
      <NavBar location={location} screenCollapseWidth={screenCollapseWidth} stickyClass={stickyClass} />
      <div className={"container" + containerMargin}>
        <Switch>
          <Route path="/home" render={() => <Home screenCollapseWidth={screenCollapseWidth} />} />
          <Route path="/download" component={Download} />
          <Route path="/installation" component={Installation} />
          <Route path="/gallery/:artworkId" render={(props) => <Artwork {...props} screenCollapseWidth={screenCollapseWidth} location={location} />} />
          <Route path="/gallery" render={() => <Gallery screenCollapseWidth={screenCollapseWidth} sortedArtworks={sortedArtworks} />} />
          <Route path="/faq" component={Faq} />
          <Route path="/patchnotes" component={Patchnotes} />
          <Route path="/" render={() => <Home screenCollapseWidth={screenCollapseWidth} />} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
