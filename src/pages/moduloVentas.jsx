import React from 'react'
import Layout from '../layouts/Layout';
import '../styles/Ventas.css';
import imgNuevaVenta from '../media/IconoVenta.png';
import imgBusquedaVenta from '../media/busquedaVentas.png';
import {Link} from 'react-router-dom';

const moduloVentas = () => {
    return (
        <Layout>
             <>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <ul className="Opciones">
                <Link to='/NuevaVenta'>
                    <li>
                        <img className="botonOpcion" src={imgNuevaVenta} alt="Icono Nueva Venta" />
                    </li>
                </Link>
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
        </Layout>
            
   
            
    )
}

export default moduloVentas
