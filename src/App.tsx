import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { SerialInput } from "./panels/serial-input/serial-input"
import { GPSInput } from "./panels/gps-input/gps-input";
import { ControlsInput } from "./panels/ControlsInput/controls-input";
import { SatelliteInput } from "./panels/SatelliteInput/satellite-input";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>EZ Sat Tracker</h1>

      <div className="main-view">
        <div className="panel-input">
          <GPSInput/>
        </div>
        <div className="panel-input">
          <SerialInput/>
        </div>
        <div className="panel-input">
          <SatelliteInput/>
        </div>
        <div className="panel-input">
          <ControlsInput/>
        </div>
      </div>

      <div className="row">
        <div className="prg-list">
          <h2>Current Work in Progress</h2>
          <li>Setup UI</li>
          <li>Setup Serial Output</li>
          <li>Setup ability to grab satellite orbit data based on position</li>
        </div>
      </div>

      

      {/* <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p> */}
    </main>
  );
}

export default App;
