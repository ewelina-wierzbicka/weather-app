import React from 'react';
import './App.css';
import Form from './components/Form';

export const FormContext = React.createContext("");

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
