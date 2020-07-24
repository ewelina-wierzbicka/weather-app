import React, { useContext } from "react";
import { Progress } from "antd";
import { format, fromUnixTime } from "date-fns";
import { FormContext } from "../App";

const DailyWeather = () => {
  const formData = useContext(FormContext);
  const date = format(fromUnixTime(formData.el.dt), "dd/MM/yyyy");
  return (
    <div>
      <div>{formData.value}</div>
      {formData.el && (
        <div>
          <p>Data: {date}</p>
          <p>
            Zachmurzenie:{" "}
            <Progress
              type="circle"
              percent={formData.el.clouds.all || formData.el.clouds}
            />
          </p>
          {formData.el.main && <p>Temperatura: {formData.el.main.temp}°C </p>}
          {formData.el.temp && <p>Temperatura: {formData.el.temp.day}°C </p>}
        </div>
      )}
    </div>
  );
};

export default DailyWeather;
