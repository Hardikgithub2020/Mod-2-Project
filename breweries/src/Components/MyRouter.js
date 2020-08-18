import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

import State from "./State";
import UnitedState from "./UnitedState";


function MyRouter(props) {
  return (
    <Router>
      <Link to="/"style={{color:"khaki"}}>|  Home  |</Link>
      <Link to="/UnitedState"style={{color:"khaki"}}>| United State |</Link>
      <Link to="/State"style={{color:"khaki"}}>|  Search |</Link>
      <Switch>
        <Route path="/UnitedState" component={UnitedState} />
        <Route path="/State" component={State} />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default MyRouter;
