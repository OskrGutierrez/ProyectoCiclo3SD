import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ModuloVentas from './pages/moduloVentas';
import Inicio from './pages/Inicio';

function App() {
  return (
    <div className="App">
      <Inicio></Inicio>
    </div>
  )
}

export default App;
