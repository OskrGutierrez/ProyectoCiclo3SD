import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN";
import {Link} from 'react-router-dom';


function VerProducto() {
    return (
        <>
            <div className='mainTitle'>Visualización de información del producto, filtrar por ID o Nombre!</div>
            <ul className='.productOpctionsContainer'>

                <form >
                    <div className='containerBotonIngreso'>
                        <BotonIngresoN nameButton='ID del producto:' typeInputButton='number' />
                        <BotonIngresoNN nameButton='Nombrel de producto:' typeInputButton='text' />
                        <li className='containerBotonIngreso'>
                            <button>Filtrar Producto</button>
                        </li>
                    </div>
                </form>

                <div className='containerBotonIngreso'>                    
                    <button>Lista Completa</button>                    
                </div>

                <div className='containerBotonIngreso'>
                    <Link to='moduloProductos'>
                        <button>Atrás</button>
                    </Link>
                </div>
                <div className='styleNotas'>
                    NOTA: Ingrese ID o nombre del producto y después Filtar Producto. Si desea ver la lista completa entonces, click en Lista Completa
                </div>




            </ul>
        </>

    )
}
export default VerProducto;

