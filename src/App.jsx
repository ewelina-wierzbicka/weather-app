import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import CityForm from "./components/Form";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <CityForm />
    </div>
  </Provider>
);

export default App;
