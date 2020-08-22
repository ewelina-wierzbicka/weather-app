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
  return function (dispatch) {
    dispatch(requestWeather())
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
      )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.status + "-" + res.statusText)
      })
      .then((data) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&
        exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`)
          .then((res) => {
            if (res.ok) {
              return res.json()
            }
            throw new Error(res.status + "-" + res.statusText)
          })
          .then((data) => {
            dispatch(requestWeatherSuccess(data.daily));
          })
          .catch((error) => {
            dispatch(requestWeatherFail(error.message))
            console.log(error)
          });
      })
  }
}

export default weatherSlice.reducer