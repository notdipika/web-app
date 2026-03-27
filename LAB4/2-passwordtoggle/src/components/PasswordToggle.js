import { useState } from "react";
import "./PasswordToggle.css";

export default function PasswordToggle() {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <h2>Password Toggle</h2>

      <div className="input-box">
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />

        <i
          className={`fa-solid ${
            show ? "fa-eye-slash" : "fa-eye"
          } eye-icon`}
          onClick={() => setShow(!show)}
        ></i>
      </div>
    </div>
  );
}
