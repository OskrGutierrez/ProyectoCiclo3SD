import React from 'react'
import Layout from '../layouts/Layout';
import OpctionsProduct from "../components/OpctionsProduct";
import '../styles/ProductStyles.css'


const ModuloProductos = () => {
    return (
    <Layout>
    <>
            <div className='mainTitle'>Seleccione una acción para el Módulo Productos:</div>
            <div className='routesProductOpctionsContainer'>                              
                <OpctionsProduct secondTitle='Registrar Nuevo Producto' iconOP='fas fa-plus' productPage='RegistrarProducto'/>         
                <OpctionsProduct secondTitle='Ver y Actualizar Información de Productos Registrados' iconOP='fas fa-edit' productPage='VerActProductos'/>
                
            </div>
        </>  
    </Layout>

    )
}

export default ModuloProductos
