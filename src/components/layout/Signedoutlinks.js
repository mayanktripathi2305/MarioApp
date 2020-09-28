import React from "react";
import SignIn from "../auth/SignIn";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/SignUp" className="nav-link">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/SignIn" className="nav-link">
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

export default SignedOutLinks;
