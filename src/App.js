import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          <a
            href="https://github.com/SvitlanaStan/weather-react.git"
            target="_blank"
            id="githubLink"
          >
            Open-source code, by Svitlana Stanislavchuk
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
