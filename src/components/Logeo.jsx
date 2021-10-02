import '../styles/login.css'
import {Link} from 'react-router-dom'
const Logeo=()=>{
    return (
        <div className="login">
            <div className="container">

                <div className='banner'>
                    <div className="logo"></div>
                    <br/>
                    <p><strong>Login!</strong></p>

                </div>

                <form action="" id="formLogin">
                    <p>Usuario:</p>
                    <input className="inputLogin" type="text" placeholder="Usuario" id="inputUsuario"/>
                    <p>Contraseña:</p>
                    <input className="inputLogin" type="password" placeholder="..." id="inputPass"/>
                    <div className="row" >
                        <div className="col-6">
                            <a href="">Quiero registrarme</a>
                        </div>
                        <div className="col-6">
                            <a href="">Olvidé mi contraseña</a>
                        </div>
                    </div>
                    <Link to='/moduloVentas'>
                    <div className="boton" id="btnIngresar">Ingresar...</div>
                    </Link>
                    
                </form>
            </div>
      
        </div>
    )
}

export default Logeo;