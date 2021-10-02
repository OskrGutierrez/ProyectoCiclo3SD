import '../styles/header.css';
import logo from '../media/SDblanco.png'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'


const Cabeza = () =>{
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
               <Link to='/'className='btnSalir'>
                   <div ><FontAwesomeIcon icon={faRightFromBracket} /></div>
               </Link>
          </div>
          <div className="navbar">
              <div className="espacio"></div>
              <Link to='/moduloUsuarios'><div className="botones">Usuarios</div></Link>
              <Link to='/moduloProductos'><div className="botones">Productos</div></Link>
              <Link to='/moduloVentas'><div className="botones">Ventas</div></Link>
          </div>
        </header>
   
           
       )
}

export default Cabeza;