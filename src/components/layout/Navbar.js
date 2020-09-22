import React from "react";

import { Link } from "react-router-dom";
import SignedinLinks from "./Signedinlinks";
import SignedoutLinks from "./Signedoutlinks";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand h1">
          MARIOAPP
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <SignedinLinks />
        <SignedoutLinks />
      </div>
    </div>
  );
};

export default Navbar;
