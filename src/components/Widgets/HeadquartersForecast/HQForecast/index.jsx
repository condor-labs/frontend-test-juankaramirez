import React from "react";

// Helpers
import { kelvinToCelsius } from "../../../../utils/helpers";

function HQForecast({ image, name, description, weatherInfo }) {
  return (
    <div className="widget-card">
      <div className="widget-card-main-content">
        <div className="widget-card-image-container">
          <div
            className="widget-card-image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
        <div className="widget-card-data">
          <div className="widget-headquarter-name">
            <i className="fa fa-map-marker"></i>
            {name}
          </div>
          <div className="widget-headquarter-description">{description}</div>
          <div className="widget-headquarter-weather-info">
            <span className="widget-temperature">
              <i className="fa fa-circle"></i>
              {weatherInfo ? kelvinToCelsius(weatherInfo.temperature) : " - "}°
              C
            </span>
            <span className="widget-humidity">
              <i className="fa fa-circle"></i>
              {weatherInfo ? weatherInfo.humidity : " - "} %
            </span>
            <span className="widget-wind">
              <i className="fa fa-circle"></i>
              {weatherInfo ? weatherInfo.windSpeed : " - "} m/s
            </span>
          </div>
        </div>
      </div>
      <div className="widget-icon">
        <i className={`widget-icon wi wi-day-${weatherInfo.icon}`}></i>
      </div>
    </div>
  );
}

export default HQForecast;
