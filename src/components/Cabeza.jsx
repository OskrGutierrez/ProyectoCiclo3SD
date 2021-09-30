import "../styles/App.css";
import logoEmpresa from "../media/logoVentas.png";
import ModulesButton from "./ModulesButton";
import { Link } from "react-router-dom";

function Cabeza() {
  return (
    <div>
      <header>
        <div>
          <ul className="navBar1">
            <li>
              <img className="logo" src={logoEmpresa} alt="LogoVentas" />
            </li>
            <ul className="navBarinterno">
              <li className="navBarinterno">
                NOMBRE DE USUARIO
                <br />
                ROL
              </li>
              <li>
                <Link to="Inicio">
                  <button className="button mainButton">SALIR</button>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
        <div>
          <ul className="navBar2">
            <ModulesButton buttonName="VENTAS" modulePage="moduloVentas" />
            <ModulesButton
              buttonName="PRODUCTOS"
              modulePage="moduloProductos"
            />
            <ModulesButton buttonName="USUARIOS" modulePage="moduloUsuarios" />
          </ul>
        </div>
      </header>
    </div>
  );
}
export default Cabeza;
