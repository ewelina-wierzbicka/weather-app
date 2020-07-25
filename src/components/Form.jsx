import React, { useState } from "react";
import DailyWeather from "./DailyWeather";
import useStyles from "./style";
import { FormContext } from "../App";
import { useDispatch } from 'react-redux';
import { citySubmitted } from '../actions'

const Form = () => {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getDailyWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setCity(data.name);
        setWeather([data]);
      });
  };

  const getLongTermWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&
            exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`)
          .then((res) => res.json())
          .then((data) => setWeather(data.daily));
      });
  };

  const handleDailySubmit = (event) => {
    event.preventDefault();
    getDailyWeather();
    dispatch(citySubmitted(value));
  };

  const handleLongTermSubmit = (event) => {
    event.preventDefault();
    getLongTermWeather();
  };

  return (
    <div>
      <form>
        <label>
          Miasto:
          <input
            className={classes.cityInput}
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <div className={classes.buttons}>
          <input
            className={classes.submitButton}
            type="submit"
            value="Wyświetl prognozę na dziś"
            onClick={handleDailySubmit}
          />
          <input
            className={classes.submitButton}
            type="submit"
            value="Wyświetl prognozę długoterminową"
            onClick={handleLongTermSubmit}
          />
        </div>
      </form>
      <p>Wybrane miasto: {value}</p>
      <ul>
        {weather.map((el) => (
          <FormContext.Provider value={{ el, value }}>
            <DailyWeather key={el.dt.toString()} value={el} />
          </FormContext.Provider>
        ))}
      </ul>
    </div>
  );
};

export default Form;
