import React from "react";

function DayWeatherInfo({ show, day, temperature, humidity, windSpeed }) {
  return (
    <div className={`widget-carousel-item${!show ? " hidden" : ""}`}>
      <div className="widget-day">{day}</div>
      <div className="widget-temperature">{temperature}° C</div>
      <div className="widget-carousel-item-humidity-wind">
        <span className="widget-humidity">
          <i className="fa fa-circle"></i> {humidity} %
        </span>
        <span className="widget-wind">
          <i className="fa fa-circle"></i>
          {windSpeed} m/s
        </span>
      </div>
    </div>
  );
}

export default DayWeatherInfo;
