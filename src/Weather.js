import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {" "}
      <div class="weather-app">
        <h1>New York, USA</h1>
        <h2>
          <span id="temperature"> +18 </span>
          <span id="tempType">
            <a href="#" id="celsius-link" class="active">
              {" "}
              °C{" "}
            </a>
            |
            <a href="#" id="fahrenheit-link">
              °F{" "}
            </a>
          </span>
          <img
            class="box"
            src=""
            alt="Clear"
            id="icon"
            className="float-left"
          />
        </h2>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <form id="search-form" class="row g-2">
                <div class="col-7">
                  <input
                    type="search"
                    placeholder="Type a city"
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-info CheckTemperarute">
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div class="col">
              <ul class="current-weather">
                <li id="description">Clear</li>
                <li>
                  Humidity <span id="humidity"> 10 </span> %
                </li>
                <li>
                  Wind <span id="wind"> 10 </span> km/h
                </li>
              </ul>
            </div>
            <ul class="current-data">
              <li id="date">Wednesday</li>
              <li id="date">March 21, 2023</li>
            </ul>
          </div>
        </div>
        <h2>Next 5 Day Weather</h2>
        <div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
      ;
    </div>
  );
}
