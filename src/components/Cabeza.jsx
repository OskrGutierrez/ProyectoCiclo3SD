import logo from './logo.svg';
import './styles/App.css';
import logoEmpresa from './media/logoVentas.png';

function Cabeza(){
    return(
        <div>
            <header>
                <div>
                    <ul className="navBar1">
                        <li>
                            <img className="logo" src={logoEmpresa} alt="LogoVentas"/>
                        </li>
                        <ul className="navBarinterno">
                            <li className="navBarinterno">
                                NOMBRE DE USUARIO 
                                <br/>
                                ROL
                            </li>
                            <li>
                                <button className="button mainButton">SALIR</button>
                            </li>
                        </ul> 
                
                    </ul>
                </div>
                <div>
                    <ul className="navBar2">
                    <li>
                            <button className="button secundaryButton">VENTAS</button>
                        </li>
                        <li>
                            <button className="button secundaryButton">PRODUCTOS</button>
                        </li>
                        <li>
                            <button className="button secundaryButton">USUARIOS</button>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        
    )
}
export default Cabeza;