import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {source && <img src={source} alt="logo" />}
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
        />
        <label htmlFor="icon-button-file">Upload</label>
      </header>
    </div>
  );
}

export default App;
