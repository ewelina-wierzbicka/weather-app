import React, { Component } from "react";

export default class DailyWeather extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.clouds && (
          <div>Zachmurzenie: {this.props.clouds.all} </div>
        )}
      </div>
    );
  }
}
