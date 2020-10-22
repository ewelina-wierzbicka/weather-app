import React from "react";
import { Progress } from "antd";
import { format, fromUnixTime } from "date-fns";
import useStyles from "./style";
import { Weather } from "../slice"

const DailyWeather: React.FC<{weather: Weather}> = ({weather}) => {
  const classes = useStyles();
  const date = format(fromUnixTime(weather.dt), "dd.MM.yyyy");
  const temperature = Math.round(weather.temp.day);
  const iconSrc = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return (
    <div>
      {weather && (
        <div>
          <p>{date}</p>
          <img src={iconSrc} alt="" />
          <p>
            Temperatura: 
            <span className={classes.temperature}>
              {temperature}
              °C
            </span>
          </p>
          <p>
            Zachmurzenie: 
            <Progress type="circle" status="normal" percent={weather.clouds} />
          </p>          
        </div>
      )}
    </div>
  );
};

export default DailyWeather;
