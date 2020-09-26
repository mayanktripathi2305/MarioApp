import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Add Recipe
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Logout
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link btn btn-outline-primary my-2 my-sm-0 rounded-circle"
          >
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
