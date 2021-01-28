import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export interface WeatherState {
  weatherList: Array<Weather>,
  city: string,
  loading: boolean,
  error: {}
}

export interface Weather {
  dt: number, temp: {day: number}, weather: Array<{icon: string}>, clouds: number
}

export interface WeatherRequestPayload {
  value: string, onSuccess: () => void
}

const initialState: WeatherState = {city: "", loading: false, weatherList: [], error: {}};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    citySubmitted(state, {payload}) {
      state.city = payload;
    },
    requestWeatherSuccess(state, {payload}) {
      state.weatherList = payload;
      state.loading = false;
    },
    requestWeather(state) {
      state.loading = true;
    },
    requestWeatherFail(state, {payload}) {
      state.weatherList = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  citySubmitted,
  requestWeatherSuccess,
  requestWeather,
  requestWeatherFail,
} = weatherSlice.actions;

export function fetchWeather({value, onSuccess}:WeatherRequestPayload ) {
  return async function (dispatch: Dispatch) {
    dispatch(requestWeather());
    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
      );
      if (!request.ok) {
        throw new Error(`${request.status} - ${request.statusText}`);
      }
      const json = await request.json();
      const secondRequest = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${json.coord.lat}&lon=${json.coord.lon}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
      );
      if (!secondRequest.ok) {
        throw new Error(`${secondRequest.status} - ${secondRequest.statusText}`);
      }
      const secondJson = await secondRequest.json();
      dispatch(requestWeatherSuccess(secondJson.daily));
      if(onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch(requestWeatherFail(error.message));
      toast.error("Nie znaleziono miasta");
    }
  };
}

export default weatherSlice.reducer;
