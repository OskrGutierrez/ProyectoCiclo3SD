import './styles/App.css';
import './styles/ProductStyles.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import ModuloVentas from './pages/moduloVentas';
import Inicio from './pages/Inicio';
import ModuloUsuarios from './pages/moduloUsuarios';
import PrincipalProductos from './pages/moduloPrueba/PrincipalProductos';
import MainLayout from './layouts/MainLayout';
import RegistrarProducto from './pages/moduloPrueba/RegistrarProducto';
import ModifVenta from './pages/modifVenta';


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
              <PrincipalProductos />              
            </Route>   

            <Route path="/RegistrarProducto" exact>
              <RegistrarProducto />              
            </Route>

            <Route path="/modificarVenta" exact>
              <ModifVenta />              
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
