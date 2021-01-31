import React from "react";
import moment from "moment";
// Components
import DayWeatherInfo from "./DayWeatherInfo";
// Context
import WidgetsContext from "../../../contexts/WidgetsContext";
//Helpers
import { kelvinToCelsius } from "../../../utils/helpers";
// Styles
import "./styles.scss";

function WidgetsMainHeadquarterForecast() {
  const ITEMS_PER_SLIDE = 3;
  const { mainHeadquarterForecast } = React.useContext(WidgetsContext);
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [totalGroups, setTotalGroups] = React.useState(1);

  React.useEffect(() => {
    if (mainHeadquarterForecast) {
      setTotalGroups(
        Math.ceil(mainHeadquarterForecast.forecastList.length / ITEMS_PER_SLIDE)
      );
    }
  }, [mainHeadquarterForecast]);

  return (
    <div id="widget-carousel">
      <div className="widget-carousel-title">FORECAST EXTENDED</div>
      <div className="widget-carousel-controls">
        <div className="widget-carousel-controls-container">
          <span
            className={currentSlide === 1 ? "disabled" : null}
            onClick={() => currentSlide > 1 && carouselControls("prev")}
          >
            <i className="fa fa-arrow-left"></i>
          </span>
          <span
            className={currentSlide === totalGroups ? "disabled" : null}
            onClick={() =>
              currentSlide < totalGroups && carouselControls("next")
            }
          >
            <i className="fa fa-arrow-right"></i>
          </span>
        </div>
      </div>
      <div className="widget-carousel-item-container">
        {mainHeadquarterForecast &&
          mainHeadquarterForecast.forecastList.map((forecast, index) => {
            const {
              main: { temp, humidity },
              wind: { speed },
              date,
            } = forecast;

            const tempInCelsius = kelvinToCelsius(temp);
            const dayName = moment(date, "YYYY-MM-DD").format("dddd");
            const max = currentSlide * ITEMS_PER_SLIDE;
            const min = max - (ITEMS_PER_SLIDE - 1);
            const itemId = index + 1;

            return (
              <DayWeatherInfo
                key={index}
                show={itemId >= min && itemId <= max}
                day={dayName}
                temperature={tempInCelsius}
                humidity={humidity}
                windSpeed={speed}
              />
            );
          })}
      </div>
    </div>
  );

  function carouselControls(action) {
    if (action === "next" && currentSlide + 1 <= totalGroups) {
      setCurrentSlide(currentSlide + 1);
    } else if (action === "prev" && currentSlide - 1 >= 1) {
      setCurrentSlide(currentSlide - 1);
    }
  }
}

export default WidgetsMainHeadquarterForecast;
