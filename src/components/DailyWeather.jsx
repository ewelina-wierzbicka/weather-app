import React from "react";
import { Progress } from "antd";
import { format, fromUnixTime } from "date-fns";

const DailyWeather = ({ weather }) => {
  const date = format(fromUnixTime(weather.dt), "dd/MM/yyyy");

  return (
    <div>
      {weather && (
        <div>
          <p>Data: {date}</p>
          <p>
            Zachmurzenie: <Progress type="circle" percent={weather.clouds} />
          </p>
          <p>Temperatura: {weather.temp.day}°C </p>
        </div>
      )}
    </div>
  );
};

export default DailyWeather;
