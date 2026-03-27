import { useState } from "react";
import "./BulbToggle.css";

export default function BulbToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="card">
      <h2>Bulb Toggle</h2>

      <img
        className="bulb"
        src={
          isOn
            ? "https://www.w3schools.com/js/pic_bulbon.gif"
            : "https://www.w3schools.com/js/pic_bulboff.gif"
        }
        alt={isOn ? "Bulb is ON" : "Bulb is OFF"}
      />

      <p>Status: {isOn ? "ON" : "OFF"}</p>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}
