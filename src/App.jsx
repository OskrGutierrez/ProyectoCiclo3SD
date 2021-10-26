import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import MainModulos from './pages/mainModulos';
import MainModuloProductos from './pages/mainModuloProductos';
import MainModuloUsuarios from './pages/mainModuloUsuarios';
import MainModuloVentas from './pages/mainModuloVentas';
import Login from './pages/Login';
import RegistroProducto from './pages/moduloProductos/RegistrarProducto'
import VisProductos from './pages/moduloProductos/VerActProductos';
import RegistroUsuario from './pages/moduloUsuarios/RegistrarUsuario'
import VisUsuarios from './pages/moduloUsuarios/VerActUsuarios';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/mainModulos">
            <MainModulos />
          </Route>

          <Route path="/mainModuloProductos">
            <MainModuloProductos />
          </Route>

          <Route path="/RegistrarProducto" exact>
            <RegistroProducto />
          </Route>

          <Route path="/VerActProductos" exact>
            <VisProductos />
          </Route>

          <Route path="/mainModuloUsuarios">
            <MainModuloUsuarios />
          </Route>

          <Route path="/RegistrarUsuario" exact>
            <RegistroUsuario />
          </Route>

          <Route path="/VerActUsuarios" exact>
            <VisUsuarios />
          </Route>

          <Route path="/mainModuloVentas">
            <MainModuloVentas />
          </Route>


          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
