import React from 'react'
import Layout from '../layouts/Layout';
import OpctionsProduct from "../components/OpctionsProduct";
import '../styles/ProductStyles.css'


const ModuloUsuarios = () => {
    return (
    <Layout>
    <>
            <div className='mainTitle'>Seleccione una acción para el Módulo Usuarios:</div>
            <div className='routesProductOpctionsContainer'>                              
                <OpctionsProduct secondTitle='Registrar Nuevo Usuario' iconOP='fas fa-user-plus' productPage='RegistrarUsuario'/>         
                <OpctionsProduct secondTitle='Ver y Actualizar Información de Usuarios Registrados' iconOP='fas fa-user-cog' productPage='VerActUsuarios'/>
                
            </div>
        </>  
    </Layout>

    )
}

export default ModuloUsuarios