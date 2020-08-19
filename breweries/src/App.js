import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import User from "./Components/User"

function App() {
  return (
    <div className="App">
      <User/>
      <Header />
    </div>
  );
}

export default App;
