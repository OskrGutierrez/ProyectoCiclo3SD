import OpctionsProduct from "../components/OpctionsProduct";


function ModuloProductos(){
    return (            
        <div>
            <div className='mainTitle'>Qué acción desea realizar?</div>
            <ul className='productOpctionsContainer'>
                <OpctionsProduct secondTitle='Registrar nuevo producto' iconOP='fas fa-plus'/>
                <OpctionsProduct secondTitle='Ver productos registrados' iconOP='fas fa-binoculars'/>
                <OpctionsProduct secondTitle='Actualizar información de los productos' iconOP='fas fa-edit'/>
            </ul>
        </div>              
    )
}
export default ModuloProductos;






