import OpctionsProduct from "../../components/OpctionsProduct";


function moduloProductos(){
    return (            
        <>
            <div className='mainTitle'>Qué acción desea realizar?</div>
            <ul className='productOpctionsContainer'>                              
                <OpctionsProduct secondTitle='Registrar nuevo producto' iconOP='fas fa-plus' productPage='RegistrarProducto'/>         
                <OpctionsProduct secondTitle='Ver productos registrados' iconOP='fas fa-binoculars' productPage='VerProductos'/>
                <OpctionsProduct secondTitle='Actualizar información de los productos' iconOP='fas fa-edit' productPage='ActualizarProductos'/>
            </ul>
        </>              
    )
}
export default moduloProductos;






