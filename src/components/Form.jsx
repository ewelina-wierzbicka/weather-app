import React, { useState } from "react";
import DailyWeather from "./DailyWeather";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cityInput: {
    width: 150,
    margin: 20,
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  submitButton: {
    width: 150,
    height: 150,
    borderRadius: "100%",
    margin: 20,
  },
});

const Form = () => {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const classes = useStyles();

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
      <p>Wybrane miasto: {city}</p>
      <ul>
        {weather.map((el) => (
          <DailyWeather key={el.dt.toString()} value={el} />
        ))}
      </ul>
    </div>
  );
};

export default Form;
