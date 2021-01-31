import React from "react";

/* Context */
import WidgetsContext from "../../contexts/WidgetsContext";

import {
  useGetMainHeadquarterForecast,
  useGetHeadquartersForecast,
  useGetCitiesForecast,
} from "../../hooks";

function WidgetProvider({ children }) {
  const {
    mainHeadquarterForecast,
    loading: loadingMainHeadquarterForecast,
  } = useGetMainHeadquarterForecast();

  const {
    headquartersForecast,
    loading: loadingHeadquartersForecast,
  } = useGetHeadquartersForecast();

  const { citiesForecast, loading: loadingCities } = useGetCitiesForecast();

  return (
    <WidgetsContext.Provider
      value={{
        mainHeadquarterForecast,
        loadingMainHeadquarterForecast,
        headquartersForecast,
        loadingHeadquartersForecast,
        citiesForecast,
        loadingCities,
      }}
    >
      {children}
    </WidgetsContext.Provider>
  );
}

export default WidgetProvider;
