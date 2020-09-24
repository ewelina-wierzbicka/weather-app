import React from "react";
import DailyWeather from "./DailyWeather";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { citySubmitted, fetchWeather } from "../slice";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Formik, Form, Field } from 'formik';

const CityForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);
  const loading = useSelector((state) => state.loading);
  const weatherList = useSelector((state) => state.weatherList);

  const handleSubmit = (values) => {
    dispatch(citySubmitted(values.city));
    dispatch(fetchWeather(values.city));
  };

  return (
    <>
       <Formik
       initialValues={{ city: '' }}
       onSubmit={ handleSubmit }
        >
        <Form>
        <label>
          Miasto:
          <Field className={classes.cityInput} type="text" name="city"/>
        </label>
        <div>
            <button className={classes.submitButton} type="submit">
              POKAŻ PROGNOZĘ POGODY
            </button>
        </div>
      </Form>
      </Formik>
      <p>Wybrane miasto: {city}</p>
      {loading && <LoadingOutlined style={{ fontSize: 34 }} spin />}
      <div className={classes.weatherList}>
        {weatherList.map((weather) => (
          <DailyWeather key={weather.dt.toString()} weather={weather} />
        ))}
      </div>
      </>
  );
};

export default CityForm;
