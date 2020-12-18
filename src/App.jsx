import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import CityForm from "./components/Form";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <CityForm />
      </div>
    </Router>
  </Provider>
  );

export default App;
