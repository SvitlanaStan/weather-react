import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York, USA</h1>
      <h2>
        <span> +18 </span>
        <span>
          <a href="#" id="celsius-link" class="active">
            {" "}
            °C{" "}
          </a>
          |
          <a href="#" id="fahrenheit-link">
            °F{" "}
          </a>
        </span>
        <img class="box" src="" alt="Clear" id="icon" className="float-left" />
      </h2>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col"></div>
          <div className="col">
            <ul className="current-weather">
              <li>Precipitation:</li>
              <li>
                Humidity: <span> 10 </span> %
              </li>
              <li>
                Wind: <span> 10 </span> km/h
              </li>
            </ul>
          </div>
          <ul className="current-data">
            <li>Wednesday</li>
            <li>March 21, 2023</li>
          </ul>
        </div>
      </div>
      <h3>Next 5 Day Weather</h3>
      <div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
