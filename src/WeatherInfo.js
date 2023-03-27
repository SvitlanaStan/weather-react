import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col-6">
        <ul className="current-data">
          <li>
            <h1>{props.data.city}</h1>
          </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>

      <div className="container text-center current-weather">
        <div className="row align-items-center">
          <div className="col d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="col">
              <div>Humidity: {props.data.humidity}%</div>
              <div>Wind: {props.data.wind} km/h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
