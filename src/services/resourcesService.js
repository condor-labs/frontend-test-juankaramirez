import axios from "axios";

import { serverConfig } from "../config";

class ResourcesService {
  constructor(token) {
    this.http = axios.create({
      baseURL: serverConfig.apiUrl,
    });
  }

  headquartersForecast() {
    return this.http
      .get(`818d0158-727b-461e-9f76-06734ed7e582`)
      .then((response) => ({
        places: response.data.places,
      }));
  }

  mainHeadquarterExtendedForecast() {
    return this.http
      .get(`73c29128-d158-40db-aeae-ea78a0d762b7`)
      .then((response) => ({
        forecastList: response.data.list,
        city: response.data.city,
      }));
  }

  cities() {
    return this.http
      .get(`f8926877-849a-416f-8226-9fd9d9fc5e07`)
      .then((response) => ({
        citiesForecast: response.data.result,
      }));
  }
}

export default ResourcesService;
