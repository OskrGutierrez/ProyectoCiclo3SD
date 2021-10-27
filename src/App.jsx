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
import RegistroVenta from './pages/moduloVentas/RegistrarVenta';
import VisVentas from './pages/moduloVentas/VerActVentas';
import { Auth0Provider } from "@auth0/auth0-react";



function App() {
  return (
    <Auth0Provider 
    domain="marketsd.us.auth0.com"
    clientId="lCrfLXdhhu7MK3KvLdrJApbvHG76MiBV"
    redirectUri={window.location.origin}
    >
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

          <Route path="/RegistrarVenta" exact>
            <RegistroVenta />
          </Route>

          <Route path="/VerActVentas" exact>
            <VisVentas />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>

    </Auth0Provider>
    
  )
}

export default App;
