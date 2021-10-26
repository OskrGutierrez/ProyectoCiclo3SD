import React from 'react'
import Layout from '../layouts/Layout';
import OpctionsProduct from "../components/OpctionsProduct";
import '../styles/ProductStyles.css'


const ModuloProductos = () => {
    return (
    <Layout>
    <>
            <div className='mainTitle'>Qué acción desea realizar?</div>
            <ul className='routesProductOpctionsContainer'>                              
                <OpctionsProduct secondTitle='Registrar Nuevo Producto' iconOP='fas fa-plus' productPage='RegistrarProducto'/>         
                <OpctionsProduct secondTitle='Ver y Actualizar Información de Productos Registrados' iconOP='fas fa-edit' productPage='VerProductos'/>
                
            </ul>
        </>  
    </Layout>

    )
}

export default ModuloProductos
