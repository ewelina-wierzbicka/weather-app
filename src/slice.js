import {
  createSlice
} from '@reduxjs/toolkit'


const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherList: []
  },
  reducers: {
    citySubmitted(state, action) {
      state.city = action.payload
    },
    requestWeatherSuccess(state, action) {
      state.weatherList = action.payload
      state.loading = false
    },
    requestWeather(state, action) {
      state.loading = true
    },
    requestWeatherFail(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  citySubmitted,
  requestWeatherSuccess,
  requestWeather,
  requestWeatherFail
} = weatherSlice.actions

export function fetchWeather(value) {
  return async function (dispatch) {
    dispatch(requestWeather())
    try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
    )
    console.log(request);
    if (!request.ok) {
      throw new Error(request.status + "-" + request.statusText)
    }
    const json = await request.json()
    const secondRequest = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${json.coord.lat}&lon=${json.coord.lon}&
      exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`)
    if (!secondRequest.ok) {
      throw new Error(secondRequest.status + "-" + secondRequest.statusText)
    }
    const secondJson = await secondRequest.json();
    dispatch(requestWeatherSuccess(secondJson.daily));
       } catch (error) {
        dispatch(requestWeatherFail(error.message))
    }
  }
}

export default weatherSlice.reducer