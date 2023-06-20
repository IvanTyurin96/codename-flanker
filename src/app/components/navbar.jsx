import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavLinks from "./navlinks";
import Icon from "../icons/Icon.png";

const NavBar = ({ location, screenCollapseWidth, stickyClass }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <nav className={"navbar navbar-dark bg-dark" + stickyClass + (width >= screenCollapseWidth ? " navbar-expand" : "")}>
      <div className="container">
        <div className="navbar-brand-container">
          <a className="navbar-icon" href="#/">
            <img src={Icon} width="40" height="40" alt=""></img>
          </a>
          <a className="navbar-brand" href="#/">
            Codename{" "}
            <strong>
              <span style={{ color: "var(--flanker-color)" }}>Flanker</span>
            </strong>
          </a>
        </div>

        {width >= screenCollapseWidth ? (
          <NavLinks location={location} />
        ) : (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLinks location={location} />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
