import React from 'react';
import './App.css';
import Form from './components/Form';
import store from './store';
import { Provider } from 'react-redux';

export const FormContext = React.createContext("");

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Form />
    </div>
    </Provider>
  );
}

export default App;
