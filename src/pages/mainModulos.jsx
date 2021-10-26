import React from 'react'
import Layout from '../layouts/Layout';
import OpctionsProduct from "../components/OpctionsProduct";
import '../styles/ProductStyles.css'


const principalModulos = () => {
    return (
    <Layout>
    <>
            <div className='mainTitle'>Seleccione el módulo al cual se quiere dirigir:</div>
            <div className='routesProductOpctionsContainer'>                              
                <OpctionsProduct secondTitle='Módulo Usuarios' iconOP='fas fa-users' productPage='mainModuloUsuarios'/>         
                <OpctionsProduct secondTitle='Módulo Productos' iconOP='fab fa-product-hunt' productPage='mainModuloProductos'/>
                <OpctionsProduct secondTitle='Módulo Ventas' iconOP='fab fa-salesforce' productPage='mainModuloVentas'/>
                
            </div>
        </>  
    </Layout>

    )
}

export default principalModulos