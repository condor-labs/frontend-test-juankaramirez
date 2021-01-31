import React from "react";
// Context
import WidgetsContext from "../../../contexts/WidgetsContext";
// Helpers
import { kelvinToCelsius, greetByTime } from "../../../utils/helpers";
// Styles
import "./styles.scss";

function WidgetMainHeadquarter() {
  const { headquartersForecast } = React.useContext(WidgetsContext);

  const data = headquartersForecast && headquartersForecast.mainHeadquarter;
  const { image, name, main: weatherInfo, wind, weather } = data || {};

  const icon = weather && weather[0].icon;

  return (
    <div id="widget-header" style={{ backgroundImage: `url(${image})` }}>
      <div className="widget-content">
        <div className="widget-data-container">
          <div className="widget-headquarter-container">
            <div className="widget-headquarter">
              <i className="fa fa-map-marker"></i>
              {name}
            </div>
          </div>
          <div className="widget-weather-info">
            <div className="widget-temperature">
              {kelvinToCelsius(weatherInfo && weatherInfo.temp)}° C
            </div>
            <div className="widget-humidity-wind">
              <span className="widget-humidity">
                <i className="fa fa-circle"></i>{" "}
                {weather && `${weatherInfo.humidity} %`}
              </span>
              <span className="widget-wind">
                <i className="fa fa-circle"></i>
                {wind && `${wind.speed} m/s`}
              </span>
            </div>
            <div className="widget-greetings">
              <span>
                {greetByTime()}, <strong>Condor!</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="widget-icon-container">
          <i className={`widget-icon wi wi-day-${icon}`}></i>
        </div>
      </div>
    </div>
  );
}

export default WidgetMainHeadquarter;
