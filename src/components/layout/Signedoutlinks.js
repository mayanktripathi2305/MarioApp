import React from "react";
import Signin from "../auth/Signin";
import { NavLink } from "react-router-dom";

const SignedoutLinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/Signin" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedoutLinks;
