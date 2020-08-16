import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import State from "./State";
import UnitedState from "./UnitedState";

function MyRouter(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul type='none' style={{display:"flex"}}>
            <li>
              <Link to="/">Home |</Link>
            </li>
            <li>
              <Link to="/UnitedState">United State   |</Link>
            </li>
            <li>
              <Link to="/State">State |</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/UnitedState">
            <UnitedState />
          </Route>
          <Route path="/State">
            <State />
          </Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MyRouter;
