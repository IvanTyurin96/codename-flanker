import NavBar from "./app/components/navbar";
import "./App.css";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Home from "./app/layouts/home";
import Download from "./app/layouts/download";
import Gallery from "./app/layouts/gallery";
import Faq from "./app/layouts/faq";
import Patchnotes from "./app/layouts/patchnotes";
import Footer from "./app/components/footer";
import Artwork from "./app/layouts/artwork";
import Installation from "./app/layouts/installation";

function App() {
  const location = useLocation();
  const screenCollapseWidth = 720;
  return (
    <div className="containers-parent">
      <div className="top-theme"></div>
      <NavBar location={location} screenCollapseWidth={screenCollapseWidth} />
      <div className="container">
        <Switch>
          <Route path="/home" render={() => <Home screenCollapseWidth={screenCollapseWidth} />} />
          <Route path="/download" component={Download} />
          <Route path="/installation" component={Installation} />
          <Route path="/gallery/:artworkId" render={(props) => <Artwork {...props} screenCollapseWidth={screenCollapseWidth} />} />
          <Route path="/gallery" render={() => <Gallery screenCollapseWidth={screenCollapseWidth} />} />
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
