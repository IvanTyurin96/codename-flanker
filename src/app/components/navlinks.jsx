import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavLinks = () => {
  const route = useLocation().pathname;

  return (
    <div id="navbar" className="collapse navbar-collapse">
      <ul id="navbar-list" className="navbar-nav me-auto">
        <li className="nav-item">
          <a href="/" className={"nav-link" + (route === "/" || route === "/home" ? " active" : "")}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/download" className={"nav-link" + (route === "/download" ? " active" : "")}>
            Download
          </a>
        </li>
        <li className="nav-item">
          <a href="/installation" className={"nav-link" + (route === "/installation" ? " active" : "")}>
            Installation
          </a>
        </li>
        <li className="nav-item">
          <a href="/gallery" className={"nav-link" + (route === "/gallery" ? " active" : "")}>
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a href="/faq" className={"nav-link" + (route === "/faq" ? " active" : "")}>
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a href="/patchnotes" className={"nav-link" + (route.toString().includes("/patchnotes") ? " active" : "")}>
            Patchnotes
          </a>
        </li>
        <li className="nav-item">
          <a href="/screenshots" className={"nav-link" + (route === "/screenshots" ? " active" : "")}>
            Screenshots
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
