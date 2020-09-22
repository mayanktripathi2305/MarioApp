import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact to="/" component={Dashboard}></Route>
          <Route to="/SignIn" component={SignIn}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
