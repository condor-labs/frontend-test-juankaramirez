import React from "react";

const WidgetsContext = React.createContext({
  mainHeadquarterForecast: null,
  loadingMainHeadquarterForecast: null,
  headquartersForecast: null,
  loadingHeadquartersForecast: false,
  citiesForecast: null,
  loadingCities: false,
});

export default WidgetsContext;
