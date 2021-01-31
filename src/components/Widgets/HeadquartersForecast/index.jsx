import React from "react";
// Components
import HQForecast from "./HQForecast";
// Context
import WidgetsContext from "../../../contexts/WidgetsContext";
// Styles
import "./styles.scss";

function WidgetsHeadquartersForecast() {
  const { headquartersForecast } = React.useContext(WidgetsContext);
  return (
    <div id="widget-favorite">
      <h2>
        <strong>OUR FAVORITE</strong> PLACES
      </h2>
      <div className="widget-card-container">
        {headquartersForecast &&
          headquartersForecast.places
            .filter((hq) => !hq.main_headquarter)
            .map((hqData, index) => {
              const {
                image,
                name,
                description,
                wind: { speed },
                sys: { country },
                main: { temp, humidity },
                weather,
              } = hqData;
              const hqName = `${name} - ${country}`;
              const weatherInfo = {
                temperature: temp,
                humidity,
                windSpeed: speed,
                icon: weather && weather[0].icon,
              };

              return (
                <HQForecast
                  key={index}
                  name={hqName}
                  image={image}
                  description={description}
                  weatherInfo={weatherInfo}
                />
              );
            })}
      </div>
    </div>
  );
}

export default WidgetsHeadquartersForecast;
