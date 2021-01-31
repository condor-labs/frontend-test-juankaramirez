import React from "react";
// Components
import CityData from "./CityData";
// Context
import WidgetsContext from "../../../contexts/WidgetsContext";
// Helpers
import { kelvinToCelsius } from "../../../utils/helpers";
// Styles
import "./styles.scss";

function WidgetSuggestedCities() {
  const { citiesForecast } = React.useContext(WidgetsContext);

  return (
    <div id="widget-cities">
      <h2>
        <strong>PLACE TO</strong> VISIT
      </h2>
      <div className="widget-card-container">
        {citiesForecast &&
          citiesForecast
            .map((city, index) => {
              const tempInCelsius = kelvinToCelsius(city.main.temp);
              if (tempInCelsius >= 24 && tempInCelsius <= 30) {
                return (
                  <CityData key={index} image={city.image} name={city.name} />
                );
              }
            })
            .filter((element) => element)
            .slice(0, 3)}
      </div>
    </div>
  );
}

export default WidgetSuggestedCities;
