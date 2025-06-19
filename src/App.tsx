import './App.css';
import { SerialInput } from './panels/serial-input/serial-input';
import { GPSInput } from './panels/gps-input/gps-input';
import { ControlsInput } from './panels/ControlsInput/controls-input';
import { SatelliteInput } from './panels/SatelliteInput/satellite-input';
import React from 'react';

class App extends React.Component {
  state: {
    ports: string[];
  };
  constructor(props: any) {
    super(props);
    this.state = {
      ports: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <main className="container">
        <h1>EZ Sat Tracker</h1>

        <div className="main-view">
          <div className="panel-input">
            <GPSInput />
          </div>
          <div className="panel-input">
            <SerialInput />
          </div>
          <div className="panel-input">
            <SatelliteInput />
          </div>
          <div className="panel-input">
            <ControlsInput />
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
      </main>
    );
  }
}

export default App;
