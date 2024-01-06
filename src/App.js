import NavBar from "./app/components/navbar";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./app/layouts/home";
import Download from "./app/layouts/download";
import Gallery from "./app/layouts/gallery";
import Faq from "./app/layouts/faq";
import Patchnotes from "./app/layouts/patchnotes";
import Footer from "./app/components/footer";
import Artwork from "./app/layouts/artwork";
import Installation from "./app/layouts/installation";
import Screenshots from "./app/layouts/screenshots";
import Videos from "./app/layouts/videos";
import Documentation from "./app/layouts/documentation";

function App() {
  const themeHeight = 300;
  const [stickyClass, setStickyClass] = useState("");
  const [containerMargin, setContainerMargin] = useState("");
  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    setStickyClass(windowHeight > themeHeight ? " fixed-top" : "");
    setContainerMargin(windowHeight > themeHeight ? " container-margin-top" : "");
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <div className="containers-parent">
      <div className="top-theme"></div>
      <NavBar stickyClass={stickyClass} />
      <div className={"container" + containerMargin}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/download" component={Download} />
          <Route exact path="/installation" component={Installation} />
          <Route exact path="/documentation" component={Documentation} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/gallery/:artworkId" render={(props) => <Artwork {...props} />} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/patchnotes" component={Patchnotes} />
          <Route exact path="/patchnotes/:patchnoteId" render={(props) => <Patchnotes {...props} />} />
          <Route exact path="/screenshots" component={Screenshots} />
          <Route exact path="/videos" component={Videos} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
