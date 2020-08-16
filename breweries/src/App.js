import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './Components/Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Fetch/>
      </header>
    </div>
  );
}

export default App;
