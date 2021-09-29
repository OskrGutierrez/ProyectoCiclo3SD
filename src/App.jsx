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

            <Route path="/moduloVentas" exact>
              <ModuloVentas />
            </Route>

            <Route path="/moduloProductos" exact>
              <ModuloProductos />
            </Route>

            <Route path="/moduloUsuarios" exact>
              <ModuloUsuarios />
            </Route>

            <Route path="/Inicio" exact>
              <Inicio />
            </Route>

          </Switch>
        </MainLayout>
      </Router>

    </div>
  )
}

export default App;
