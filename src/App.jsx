import logo from './logo.svg';
import './styles/App.css';
import logoEmpresa from './media/logoVentas.png';
import Cabeza from './components/Cabeza';
import PiePagina from './components/PiePagina';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ModuloVentas from './pages/moduloVentas';

function App() {
  return (
    <div className="App">
      <Cabeza></Cabeza>
      <main>
        <ul>
            <li>CONTENIDO</li>
            <li>CONTENIDO</li>
            <li>CONTENIDO</li>
        </ul>
      </main>
        <PiePagina></PiePagina>
    </div>
  )
}

export default App;
