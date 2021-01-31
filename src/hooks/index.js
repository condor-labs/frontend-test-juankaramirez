import { useState, useEffect } from "react";
import ResourcesServices from "../services/resourcesService";

export function useGetMainHeadquarterForecast() {
  const [loading, setLoading] = useState(true);
  const [mainHeadquarterForecast, setMainHeadquarterForecast] = useState(null);
  const resourcesServices = new ResourcesServices();

  useEffect(() => {
    setLoading(true);
    resourcesServices
      .mainHeadquarterExtendedForecast()
      .then(({ forecastList, city }) => {
        setLoading(false);
        setMainHeadquarterForecast({ forecastList, city });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { mainHeadquarterForecast, loading };
}

export function useGetHeadquartersForecast() {
  const [loading, setLoading] = useState(true);
  const [headquartersForecast, setHeadquartersForecast] = useState(null);
  const resourcesServices = new ResourcesServices();

  useEffect(() => {
    setLoading(true);
    resourcesServices
      .headquartersForecast()
      .then(({ places }) => {
        setLoading(false);
        setHeadquartersForecast({
          places,
          mainHeadquarter: places.find((place) => place.main_headquarter),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { headquartersForecast, loading };
}

export function useGetCitiesForecast() {
  const [loading, setLoading] = useState(true);
  const [citiesForecast, setCitiesForecast] = useState(null);
  const resourcesServices = new ResourcesServices();

  useEffect(() => {
    setLoading(true);
    resourcesServices
      .cities()
      .then(({ citiesForecast }) => {
        setLoading(false);
        setCitiesForecast(citiesForecast);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { citiesForecast, loading };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
