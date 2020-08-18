import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

import Search from "./Search";
import UnitedState from "./UnitedState";


function MyRouter(props) {
  return (
    <Router>
      <Link to="/"style={{color:"brown"}} className='Link'>|  Home  |</Link>
      <Link to="/UnitedState"style={{color:"brown"}} className='Link'>| United State |</Link>
      <Link to="/Search"style={{color:"brown"}} className='Link'>|  Search |</Link>
      <Switch>
        <Route path="/UnitedState" component={UnitedState} />
        <Route path="/Search" component={Search} />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default MyRouter;
