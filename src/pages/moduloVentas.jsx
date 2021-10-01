import '../styles/Ventas.css';
import imgNuevaVenta from '../media/IconoVenta.png';
import imgBusquedaVenta from '../media/busquedaVentas.png';

function ModuloVentas(){
    return (
            <>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <ul className="Opciones">
                    <li>
                        <img className="botonOpcion" src={imgNuevaVenta} alt="Icono Nueva Venta" />
                    </li>
                    <li>
                        <img className="botonOpcion" src={imgBusquedaVenta} alt="Icono gestionar ventas" />
                    </li>
                </ul>
                <ul className="Opciones">
                    <li className="texto">
                        NUEVA VENTA
                    </li>
                    <li className="texto">
                        BUSCAR Y MODIFICAR VENTAS
                    </li>
                </ul>

            </>
            
    )
}
export default ModuloVentas;