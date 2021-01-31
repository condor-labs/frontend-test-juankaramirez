import React, { useEffect, useState } from "react";
import moment from "moment";
// Context
import WidgetsContext from "../../../contexts/WidgetsContext";
// Helpers
import { kelvinToCelsius } from "../../../utils/helpers";
// Styles
import "./styles.scss";

function WidgetSuggestedDay() {
  const { mainHeadquarterForecast } = React.useContext(WidgetsContext);
  const [suggestedDayData, setSuggestedDayData] = useState(null);

  useEffect(() => {
    if (mainHeadquarterForecast) {
      const { city, forecastList } = mainHeadquarterForecast;
      forecastList.map((forecast) => {
        const tempInCelsius = kelvinToCelsius(forecast.main.temp);
        if (!suggestedDayData) {
          setSuggestedDayData({
            city,
            ...forecast,
            main: { ...forecast.main, temp: tempInCelsius },
          });
        } else {
          if (
            tempInCelsius <= 25 &&
            tempInCelsius <= 28 &&
            forecast.main.humidity < suggestedDayData.main.humidity
          ) {
            setSuggestedDayData({
              city,
              ...forecast,
              main: { ...forecast.main, temp: tempInCelsius },
            });
          }
        }
      });
    }
  }, [mainHeadquarterForecast]);

  return (
    <div id="widget-suggest">
      <h2>
        <strong>HEADQUARTER</strong> SUGGESTED
      </h2>
      <div className="widget-suggest-content">
        <div className="widget-suggest-weather-data">
          <div className="widget-headquarter">
            <i className="fa fa-map-marker"></i>
            {suggestedDayData && suggestedDayData.city.name} -{" "}
            {suggestedDayData && suggestedDayData.city.country}
          </div>
          <div className="widget-temperature">
            {suggestedDayData ? suggestedDayData.main.temp : " - "}° C
          </div>
          <div className="widget-suggest-humidity-wind">
            <span className="widget-humidity">
              <i className="fa fa-circle"></i>
              {suggestedDayData ? suggestedDayData.main.humidity : " - "} %
            </span>
            <span className="widget-wind">
              <i className="fa fa-circle"></i>
              {suggestedDayData ? suggestedDayData.wind.speed : " - "} m/s
            </span>
          </div>
        </div>
        <div className="widget-suggest-weather-extra">
          <div className="widget-icon">
            <i
              className={`widget-icon wi wi-day-${
                suggestedDayData && suggestedDayData.weather[0].icon
              }`}
            ></i>
          </div>
          <div className="widget-day">
            {suggestedDayData &&
              moment(suggestedDayData.date, "YYYY-MM-DD").format("dddd")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetSuggestedDay;
