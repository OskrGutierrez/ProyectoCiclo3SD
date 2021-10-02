import React from 'react'
import Layout from '../layouts/Layout';
import '../styles/Ventas.css';
import OpctionsProduct from "../components/OpctionsProduct";

const moduloVentas = () => {
    return (
        <Layout>
             <>
             <div className='mainTitle'>Qué acción desea realizar?</div>
                <div className="Opciones">
                    <OpctionsProduct secondTitle='Nueva Venta' iconOP='fas fa-plus' productPage='NuevaVenta'/>>
                    <OpctionsProduct secondTitle='Editar Ventas' iconOP='fas fa-edit' productPage='ModifVenta'/>
                </div>

            </>
        </Layout>
            
   
            
    )
}

export default moduloVentas
