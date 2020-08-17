import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

import State from "./State";
import UnitedState from "./UnitedState";


function MyRouter(props) {
  return (
    <Router>
      <Link to="/">|  Home  |</Link>
      <Link to="/UnitedState">| United State |</Link>
      <Link to="/State">|  Search |</Link>
      <Switch>
        <Route path="/UnitedState" component={UnitedState} />
        <Route path="/State" component={State} />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default MyRouter;
