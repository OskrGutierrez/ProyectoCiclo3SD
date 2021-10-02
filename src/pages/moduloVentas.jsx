import React from 'react'
import Layout from '../layouts/Layout';
import '../styles/Ventas.css';
import imgNuevaVenta from '../media/IconoVenta.png';
import imgBusquedaVenta from '../media/busquedaVentas.png';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faCashRegister} from '@fortawesome/free-solid-svg-icons'

const moduloVentas = () => {
    return (
        <Layout>
             <>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="Opciones">
                    <Link to='/NuevaVenta'>
                    <div className="menuVenta">
                        <div><FontAwesomeIcon icon={faCashRegister} className="iconosVentas"/></div> 
                        <div className="texto">NUEVA VENTA</div>                       
                    </div>
                    </Link>

                    <Link to='/NuevaVenta'>
                    <div className="menuVenta">
                        <div><FontAwesomeIcon icon={faMagnifyingGlass} className="iconosVentas"/></div>
                        <div className="texto">BUSCAR Y MODIFICAR VENTAS</div>
                    </div>
                    </Link>
                </div>

            </>
        </Layout>
            
   
            
    )
}

export default moduloVentas
