import React from 'react';
import logo from './logo.svg';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { SeatsioSeatingChart } from '@seatsio/seatsio-react'

function App() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" />
          </header>
            <Particles options={particlesOptions}/>
            <SeatsioSeatingChart
                workspaceKey="<04af12f4-2575-4ca1-b123-94745bb279cd>"
                event="<44af8e94-49b7-4fd2-a528-7c9c3c97cdb6>"
                region="na"
            />
      </div>
    );
}


export default App;
