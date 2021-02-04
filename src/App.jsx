import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import CityForm from "./components/Form";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Provider store={store}>
    <Router basename="/">
      <div className="App">
        <ToastContainer />
        <CityForm />
      </div>
    </Router>
  </Provider>
  );

export default App;
