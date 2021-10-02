import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN"; 
import {Link} from 'react-router-dom';
import Layout from "../../layouts/Layout";
import '../../styles/ProductStyles.css';


function RegistrarProducto() {
    return (
        <Layout>
        <>
            <div className='mainTitle'>Ingrese información del producto, luego click en Ingresar Producto!</div>
            <ul className='.productOpctionsContainer'>

                <form >
                    <div className='mainContainerBotonIngresoRegistrar'>
                        <BotonIngresoN nameButton='ID del producto:' typeInputButton='number' />
                        <BotonIngresoNN nameButton='Nombre del producto:' typeInputButton='text' />
                        <BotonIngresoNN nameButton='Fecha de ingreso:' typeInputButton='date' />
                        <BotonIngresoN nameButton='Valor antes del IVA:' typeInputButton='number' />
                    </div>
                    <div className='containerBotonIngreso'>
                        <li>
                            <button>Ingresar Producto</button>
                        </li>
                        <li className='styleMessage'>
                            El producto se registró satisfactoriamente!
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
        </Layout>

    )
}
export default RegistrarProducto;

