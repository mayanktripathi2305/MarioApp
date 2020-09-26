import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecondName = (e) => {
    setSecondName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign Up Details", firstName, secondName, email, password);
  };
  return (
    <div className="container">
      <form>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            onChange={handleFirstName}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="secondName">Second Name</label>
          <input
            type="text"
            id="secondName"
            className="form-control"
            onChange={handleSecondName}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="emailID">Email ID</label>
          <input
            type="email"
            id="emailID"
            className="form-control"
            aria-describedby="emailhelp"
            onChange={handleEmail}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We will never share your email ID
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={handlePassword}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
