import moment from "moment";

export function kelvinToCelsius(kelvin) {
  return kelvin && Math.round(kelvin - 273.15);
}

export function greetByTime() {
  const hour = moment().hour();
  if (hour >= 4 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else if (hour >= 18 && hour <= 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}
