import * as Yup from "yup";

export const CitySchema = Yup.object().shape({
    city: Yup.string().required("Wpisz miasto"),
  });