import { WeatherState } from "./slice";

export const getCity = (state: WeatherState) => state.city;
export const getLoading = (state: WeatherState) => state.loading;
export const getWeather = (state: WeatherState) => state.weatherList;