import React from "react";

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services.html">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="team.html">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Menu;
