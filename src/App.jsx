import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import ModuloVentas from './pages/moduloVentas';
import Inicio from './pages/Inicio';
import ModuloUsuarios from './pages/moduloUsuarios';
import ModuloProductos from './pages/moduloProductos';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">

      <Router>
        <MainLayout>
          <Switch>
            <Route path="/Inicio">
              <Inicio />
            </Route>
            <Route path="/moduloProductos">
              <ModuloProductos />
            </Route>
            <Route path="/moduloUsuarios">
              <ModuloUsuarios />
            </Route>
            <Route path="/moduloVentas">
              <ModuloVentas />
            </Route>
          </Switch>
        </MainLayout>
      </Router>

    </div>
  )
}

export default App;
