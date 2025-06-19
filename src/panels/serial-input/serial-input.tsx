import { useEffect, useState } from 'react';
import { info } from '@tauri-apps/plugin-log';
import './serial-input.css';
import '../../App.css';
import { invoke } from '@tauri-apps/api/core';

export function SerialInput() {
  const [serial, setSerial] = useState('');
  const [showMsg, setShowMsg] = useState(false);
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  async function updateSerialPorts() {
    const newports = ((await invoke('list_serial_ports')) as string[]) ?? [];
    setOptions(newports.map((port: string) => ({ value: port, label: port })));
    setSerial(newports[0] || '');
    console.log(`Serial ports updated: ${newports}`);
  }

  useEffect(() => {
    updateSerialPorts();
  }, []);

  function testSerial() {
    setShowMsg(!showMsg);
    info(serial);
  }

  return (
    <div className="input-box">
      <label htmlFor="serial-input" className="serial-label">
        Select Serial Device
      </label>
      <form
        className="serial-form"
        onSubmit={(e) => {
          e.preventDefault();
          testSerial();
        }}
      >
        <select id="serial-input" onChange={(e) => setSerial(e.currentTarget.value)}>
          {options.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
        <button type="submit" data-testid="serialBtn">
          Enter
        </button>
      </form>
      {showMsg && (
        <div>
          <p>{serial}</p>
        </div>
      )}
    </div>
  );
}
