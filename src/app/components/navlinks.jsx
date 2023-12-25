import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const route = useLocation().pathname;

  return (
    <div id="navbar" className="collapse navbar-collapse">
      <ul id="navbar-list" className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/" className={"nav-link" + (route === "/" || route === "/home" ? " active" : "")}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/download" className={"nav-link" + (route === "/download" ? " active" : "")}>
            Download
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/installation" className={"nav-link" + (route === "/installation" ? " active" : "")}>
            Installation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className={"nav-link" + (route.toString().includes("/gallery") ? " active" : "")}>
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faq" className={"nav-link" + (route === "/faq" ? " active" : "")}>
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/patchnotes" className={"nav-link" + (route.toString().includes("/patchnotes") ? " active" : "")}>
            Patchnotes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/screenshots" className={"nav-link" + (route === "/screenshots" ? " active" : "")}>
            Screenshots
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/videos" className={"nav-link" + (route === "/videos" ? " active" : "")}>
            Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
