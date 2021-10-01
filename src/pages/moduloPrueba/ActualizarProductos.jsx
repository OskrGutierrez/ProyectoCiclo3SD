import BotonIngresoN from "../../components/BotonIngresoN";
import BotonIngresoNN from "../../components/BotonIngresoNN";
import {Link} from 'react-router-dom';


function ActualizarProductos(){
    return (             
        <>
            <div className='mainTitle'>Actualización de información del producto, filtrar por ID o Nombre!</div>
            <ul className='.productOpctionsContainer'>
                
                <form>
                <BotonIngresoN nameButton='ID del producto:' typeInputButton='number'/>
                <BotonIngresoNN nameButton='Nombrel de producto:' typeInputButton='text'/>                                      
                <div className='containerBotonIngreso'>
                <button>Filtrar Producto</button>
                </div>
                
                <div className='containerBotonIngreso'>
                <Link to='moduloProductos'>
                <button>Atrás</button>
                </Link>
                </div>
                
                </form>

            </ul>
        </>
                         
)
}
export default ActualizarProductos;