import { useState } from "react";
import "./serial-input.css";
import "../../App.css";

export function SerialInput() {
    const [serial, setSerial] = useState("");
    const [showMsg, setShowMsg] = useState(false);

    //let showMsg: Boolean = true;

    function testSerial() {
        console.log('Test serial: ' + showMsg);
        setShowMsg(!showMsg);
        console.log(serial);
    }

    return (
        <div className="input-box">
            <label
                htmlFor="serial-input"
                className="serial-label"
            >Select Serial Device</label>
            <form
                className="serial-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    testSerial();
                }}
            >
                <select
                    id="serial-input"
                    onChange={(e) => setSerial(e.currentTarget.value)}
                >
                    <option value="/dev/ttyUSB0">/dev/ttyUSB0</option>
                    <option value="/dev/ttyAMC0">/dev/ttyAMC0</option>
                </select>
                <button type="submit" data-testid="serialBtn">Enter</button>
            </form>
            {showMsg && (<div><p>It works!</p></div>)}
        </div>
    )
}