import React from 'react'
import Layout from '../layouts/Layout';
import OpctionsProduct from "../components/OpctionsProduct";
import '../styles/ProductStyles.css'


const ModuloVentas = () => {
    return (
    <Layout>
    <>
            <div className='mainTitle'>Seleccione una acción para el Módulo Ventas:</div>
            <div className='routesProductOpctionsContainer'>                              
                <OpctionsProduct secondTitle='Registrar Nueva Venta' iconOP='fas fa-plus' productPage='RegistrarProducto'/>         
                <OpctionsProduct secondTitle='Ver y Actualizar Información de Ventas Registradas' iconOP='fas fa-edit' productPage='VerProductos'/>
                
            </div>
        </>  
    </Layout>

    )
}

export default ModuloVentas