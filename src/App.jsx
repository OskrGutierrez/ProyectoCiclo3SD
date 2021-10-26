import './styles/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import ModuloProductos from './pages/moduloProductos';
import Login from './pages/Login';
import RegistroProducto from './pages/moduloProductos/RegistrarProducto'
import VisProductos from './pages/moduloProductos/VerProductos';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/moduloProductos">
              <ModuloProductos/>
            </Route>
            
            
            <Route path="/RegistrarProducto" exact>
              <RegistroProducto />              
            </Route>  

            <Route path="/VerProductos" exact>
              <VisProductos />              
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
