import React from "react";

const Signin = () => {
  return (
    <form>
      <div className="form-group">
        <label for="emailID">Email ID</label>
        <input
          type="email"
          id="emailID"
          className="form-control"
          aria-describedby="emailhelp"
        ></input>
        <small id="emailHelp" className="form-text text-muted">
          We will never share your email ID
        </small>
      </div>

      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" className="form-control"></input>
      </div>
    </form>
  );
};

export default Signin;
