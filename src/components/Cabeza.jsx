import '../styles/header.css';
import logo from '../media/SDblanco.png'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { useAuth0 } from "@auth0/auth0-react";



const Cabeza = () =>{
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    return(
        <header>
          <div className="contHead">
              <div className='logoB'>
                  <img src={logo} alt="" className="imglog"/>
              </div>
              <div className='titulo'>
                  <h2>NOMBRE DEL MÓDULO</h2>           
              </div>
              <div className='usuario'>
                  <div className="nombre">NOMBRE USUARIO</div>
                  <div className="rol">Tipo de Usuario</div>
              </div>
              <button className='btnSalir' onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión<FontAwesomeIcon icon={faRightFromBracket} /></button>
               
          </div>
          <div className="navbar">
              <div className="espacio"></div>
              <Link to='/mainModulos'><div className="botonesHeader">Principal</div></Link>
              <Link to='/mainModuloUsuarios'><div className="botonesHeader">Usuarios</div></Link>
              <Link to='/mainModuloProductos'><div className="botonesHeader">Productos</div></Link>
              <Link to='/mainModuloVentas'><div className="botonesHeader">Ventas</div></Link>
          </div>
        </header>
   
           
       )
}

export default Cabeza;