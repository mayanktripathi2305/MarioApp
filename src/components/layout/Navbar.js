import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/">MarioApp</Link>
      </div>
    </div>
  );
};

export default Navbar;
