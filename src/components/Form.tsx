import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Formik, Form, Field } from "formik";
import { citySubmitted, fetchWeather } from "../slice";
import DailyWeather from "./DailyWeather";
import useStyles from "./style";
import { getCity, getLoading, getWeather } from "../selectors";
import { CitySchema } from "../schemas";

const CityForm: React.FC<{}> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const loading = useSelector(getLoading);
  const weatherList = useSelector(getWeather);

  const handleSubmit = (value: {city: string}) => {
    dispatch(citySubmitted(value.city));
    dispatch(fetchWeather(value.city));
  };

 

  return (
    <>
      <Formik
        initialValues={{ city: "" }}
        onSubmit={handleSubmit}
        validationSchema={CitySchema}
      >
        {(formik) => (
          <Form>
            <label htmlFor="city">
              Miasto:
              <Field id="city" className={classes.cityInput} type="text" name="city" />
              <p className={classes.cityError}>{formik.errors.city}</p>
            </label>
            <div>
              <button className={classes.submitButton} type="submit">
                POKAŻ PROGNOZĘ POGODY
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p>
        Wybrane miasto: 
        {city}
      </p>
      {loading && <LoadingOutlined className={classes.loading} spin />}
      <div className={classes.weatherList}>
        {weatherList.map((weather) => (
          <DailyWeather key={weather.dt.toString()} weather={weather} />
        ))}
      </div>
    </>
  );
};

export default CityForm;
