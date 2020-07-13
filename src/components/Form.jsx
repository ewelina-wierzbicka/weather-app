import React from "react";
import DailyWeather from "./DailyWeather";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      city: "",
      weather: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDailySubmit = this.handleDailySubmit.bind(this);
    this.handleLongTermSubmit = this.handleLongTermSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getDailyWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          city: data.name,
          weather: [data],
        })
      );
  };

  getLongTermWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&
            exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_ID}&units=metric`)
          .then((res) => res.json())
          .then((data) => this.setState({ weather: data.daily }));
      });
  };

  handleDailySubmit(event) {
    event.preventDefault();
    this.getDailyWeather();
  }

  handleLongTermSubmit(event) {
    event.preventDefault();
    this.getLongTermWeather();
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Miasto:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Wyświetl prognozę na dziś"
            onClick={this.handleDailySubmit}
          />
          <input
            type="submit"
            value="Wyświetl prognozę długoterminową"
            onClick={this.handleLongTermSubmit}
          />
        </form>
        <p>Wybrane miasto: {this.state.city}</p>
        <ul>
          {this.state.weather.map((el) => (
            <DailyWeather key={el.dt.toString()} value={el} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
