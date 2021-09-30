import OpctionsProduct from "../../components/OpctionsProduct";


function principalProductos(){
    return (            
        <>
            <div className='mainTitle'>Qué acción desea realizar?</div>
            <ul className='productOpctionsContainer'>                              
                <OpctionsProduct secondTitle='Registrar nuevo producto' iconOP='fas fa-plus' productPage='RegistrarProducto'/>         
                <OpctionsProduct secondTitle='Ver productos registrados' iconOP='fas fa-binoculars'/>
                <OpctionsProduct secondTitle='Actualizar información de los productos' iconOP='fas fa-edit'/>
            </ul>
        </>              
    )
}
export default principalProductos;






