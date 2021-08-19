import React from 'react';
import logo from './logo.svg';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" />
          </header>
            <Particles options={particlesOptions}/>
      </div>
    );
}

export default App;
