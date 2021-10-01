import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN"; 
import {Link} from 'react-router-dom';


function RegistrarProducto() {
    return (
        <>
            <div className='mainTitle'>Ingrese información del producto, luego click en Ingresar Producto!</div>
            <ul className='.productOpctionsContainer'>

                <form >
                    <div className='containerBotonIngreso'>
                        <BotonIngresoN nameButton='ID:' typeInputButton='number' />
                        <BotonIngresoNN nameButton='Nombre del producto:' typeInputButton='text' />
                        <BotonIngresoNN nameButton='Fecha de ingreso:' typeInputButton='date' />
                        <BotonIngresoN nameButton='Valor antes del IVA:' typeInputButton='number' />
                    </div>
                    <div className='containerBotonIngreso'>
                        <li>
                            <button>Ingresar Producto</button>
                        </li>
                        <li className='styleMessage'>
                            El producto se registro satisfactoriamente!
                        </li>
                    </div>
                </form>
                <div className='containerBotonIngreso'>
                    <Link to='moduloProductos'>
                        <button>Atrás</button>
                    </Link>
                </div>
                <div className='styleNotas'>
                    NOTA: Si desea comprobar su registro, click en Atrás y después Ver productos registrados
                </div>


            </ul>
        </>

    )
}
export default RegistrarProducto;

