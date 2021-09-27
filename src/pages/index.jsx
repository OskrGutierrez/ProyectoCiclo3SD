import logo from './logo.svg';
import './styles/App.css';
import logoEmpresa from './media/logoVentas.png';

function Index(){
    return (
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
            <main>
                <ul>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                </ul>
            </main>
            <footer>
                <ul className="piePagina">
                    <li className="navBarinterno">Tienes dudas? contactanos</li>
                    <li>
                        <ul>
                            <li>Correo</li>
                            <li>dirreccion</li>
                            <li>telefono</li>
                        </ul>
                    </li>
                </ul>
            </footer>    
        </div>
    )
}
export default Index;