import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

import Search from "./Search";
import UnitedStates from "./UnitedStates";


function MyRouter(props) {
  return (
    <Router>
      <Link to="/" className='Link' style={{marginLeft:"5vw"}}>|  Home  |</Link>
      <Link to="/UnitedStates"className='Link'>| United States |</Link>
      <Link to="/Search"className='Link'>|  Search |</Link>
      <Switch>
        <Route path="/UnitedStates" component={UnitedStates} />
        <Route path="/Search" component={Search} />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default MyRouter;
