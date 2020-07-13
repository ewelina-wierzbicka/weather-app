import React, { Component } from "react";

export default class DailyWeather extends Component {
  render() {
    console.log(this.props);
    let date = new Date(this.props.value.dt);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(date, month, year);
    return (
      <div>
        {this.props.value && (
          <div>
            <p>
              Data: {day}-{month}-{year}
            </p>
            <p>
              Zachmurzenie:{" "}
              {this.props.value.clouds.all || this.props.value.clouds}%{" "}
            </p>
            {this.props.value.main && (
              <p>Temperatura: {this.props.value.main.temp}°C </p>
            )}
            {this.props.value.temp && (
              <p>Temperatura: {this.props.value.temp.day}°C </p>
            )}
          </div>
        )}
      </div>
    );
  }
}
