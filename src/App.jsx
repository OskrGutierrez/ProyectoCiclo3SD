import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ModuloVentas from './pages/moduloVentas';
import ModuloUsuarios from './pages/moduloUsuarios';
import ModuloProductos from './pages/moduloProductos';
import NuevaVenta from './pages/nuevaVenta';
import Login from './pages/Login';
import RegistroProducto from './pages/moduloPrueba/RegistrarProducto'
import VisProductos from './pages/moduloPrueba/VerProductos';
import ActProductos from './pages/moduloPrueba/ActualizarProductos';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/moduloProductos">
              <ModuloProductos/>
            </Route>
            <Route path="/moduloUsuarios">
              <ModuloUsuarios/>
            </Route>
            <Route path="/moduloVentas">
              <ModuloVentas/>
            </Route>
            <Route path="/NuevaVenta">
              <NuevaVenta/>
            </Route>
            <Route path="/RegistrarProducto" exact>
              <RegistroProducto />              
            </Route>  

            <Route path="/VerProductos" exact>
              <VisProductos />              
            </Route>     

            <Route path="/ActualizarProductos" exact>
              <ActProductos />              
            </Route>
            <Route path="/">
            <Login/>
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
