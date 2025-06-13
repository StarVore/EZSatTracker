import { useState } from "react";
import "./gps-input.css";

export function GPSInput() {
    const [gps, setgps] = useState("");
    const [showMsg, setShowMsg] = useState(false);

    //let showMsg: Boolean = true;

    async function testgps() {
        console.log('Test gps: ' + showMsg);
        setShowMsg(!showMsg);
    }

    return (
        <div className="gps-input-box">
            <label
                htmlFor="gps-input"
                className="gps-label"
            >GPS Coordinates</label>
            <form
                className="gps-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    testgps();
                }}
            >
                <input
                    id="gps-input"
                    onChange={(e) => setgps(e.currentTarget.value)}
                    placeholder="-0.0000,0.0000"
                />
                <button type="submit">Enter</button>
            </form>
            {showMsg && (<div><p>It works!</p></div>)}
        </div>
    )
}