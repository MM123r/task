import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="profile-container">
      <div className="avatar-section">
        <img src={reactLogo} className="avatar" alt="React logo" />
      </div>
      <div className="info-section">
        <h1 className="name">Jessica Alba</h1>
        <p className="username">@jennywilson</p>
        <ul className="details-list">
          <li className="handel">
            <strong className="label">Username:</strong>{" "}
            <span className="value">Jenny Wilson</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Email:</strong>{" "}
            <span className="value">jenny@gmail.com</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Field Of Interest:</strong>{" "}
            <span className="value">Web</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Experience Years:</strong>{" "}
            <span className="value">1 year</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Profile Image:</strong>{" "}
            <span className="value">jenny@gmail.com</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Address:</strong>{" "}
            <span className="value">New York, USA</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Birthdate:</strong>{" "}
            <span className="value">19-11-2002</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Nickname:</strong>{" "}
            <span className="value">Sky Angel</span>{" "}
            <span className="separator">@</span>
          </li>
          <li className="handel">
            <strong className="label">Phone:</strong>{" "}
            <span className="value">01210164968</span>{" "}
            <span className="separator">@</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;