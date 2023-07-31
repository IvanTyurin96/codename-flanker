import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavLinks from "./navlinks";
import Icon from "../icons/Icon.png";
import { setWindowWidth } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const NavBar = ({ stickyClass }) => {
  const windowWidth = useSelector((state) => state.windowWidth);
  const screenCollapseWidth = useSelector((state) => state.screenCollapseWidth);
  const dispatch = useDispatch();

  const updateDimensions = () => {
    dispatch(setWindowWidth(window.innerWidth));
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <nav className={"navbar navbar-dark bg-dark" + stickyClass + (windowWidth >= screenCollapseWidth ? " navbar-expand" : "")}>
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

        {windowWidth >= screenCollapseWidth ? (
          <NavLinks />
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
            <NavLinks />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
