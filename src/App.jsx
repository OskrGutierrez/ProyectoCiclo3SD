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
import ModuloProductos from './pages/moduloPrueba/moduloProductos';
import RegistroProducto from './pages/moduloPrueba/RegistrarProducto'
import VisProductos from './pages/moduloPrueba/VerProductos';
import ActProductos from './pages/moduloPrueba/ActualizarProductos';
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

            <Route path="/RegistrarProducto" exact>
              <RegistroProducto />              
            </Route>  

            <Route path="/VerProductos" exact>
              <VisProductos />              
            </Route>     

            <Route path="/ActualizarProductos" exact>
              <ActProductos />              
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
