import React from "react";
// Components
import WidgetsProvider from "./../../components/Widgets/Provider";
import WidgetsMainHeadquarter from "./../../components/Widgets/MainHeadquarter";
import WidgetsMainHeadquarterForecast from "./../../components/Widgets/MainHeadquarterForecast";
import WidgetsHeadquartersForecast from "./../../components/Widgets/HeadquartersForecast";
import WidgetsSuggestedDay from "./../../components/Widgets/SuggestedDay";
import WidgetsSuggestedCities from "./../../components/Widgets/SuggestedCities";
// Context
import WidgetsContext from "../../contexts/WidgetsContext";
// Assets
import svg from "../../assets/svg/condor.svg";
// Stlyes
import "./styles.scss";

function Main() {
  const {
    loadingMainHeadquarterForecast,
    loadingHeadquartersForecast,
    loadingCities,
  } = React.useContext(WidgetsContext);

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    if (
      !loadingMainHeadquarterForecast &&
      !loadingHeadquartersForecast &&
      !loadingCities
    ) {
      setTimeout(() => {
        setShowContent(true);
        document.body.style.overflow = "auto";
      }, 1500);
    }
  }, [
    loadingMainHeadquarterForecast,
    loadingHeadquartersForecast,
    loadingCities,
  ]);
  return (
    <React.Fragment>
      <div className={`loading-splash${showContent ? " hidden" : ""}`}>
        <img src={svg} />
      </div>
      <div className={`main-widget-container${showContent ? "show" : ""}`}>
        <WidgetsProvider>
          <WidgetsMainHeadquarter />
          <WidgetsMainHeadquarterForecast />
          <WidgetsHeadquartersForecast />
          <WidgetsSuggestedDay />
          <WidgetsSuggestedCities />
        </WidgetsProvider>
      </div>
    </React.Fragment>
  );
}

export default Main;
