import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Fetch from "./Components/UnitedState";
import MyRouter from "./Components/MyRouter";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MyRouter />
    </div>
  );
}

export default App;
