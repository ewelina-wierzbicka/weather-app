import React from 'react';
import './App.css';
import CityForm from './components/Form';
import store from './store';
import { Provider } from 'react-redux';

export const FormContext = React.createContext("");

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CityForm />
    </div>
    </Provider>
  );
}

export default App;
