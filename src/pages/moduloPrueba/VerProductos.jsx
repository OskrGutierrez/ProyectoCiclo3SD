import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN";
import {Link} from 'react-router-dom';
import InfoSalida from "../../components/InfoSalida";
import Layout from "../../layouts/Layout";
import '../../styles/ProductStyles.css';


function VerProducto() {
    return (
        <Layout>
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

                <div className='mainContainerInfoSalida'>
                    <InfoSalida textoKeySalida='ID del producto:' textoValueSalida='00000001'></InfoSalida> 
                    <InfoSalida textoKeySalida='Nombre del producto:' textoValueSalida='Destornillado de 1/2"'></InfoSalida>
                    <InfoSalida textoKeySalida='Fecha de ingreso:' textoValueSalida='01/10/2021'></InfoSalida>
                    <InfoSalida textoKeySalida='Valor antes del IVA:' textoValueSalida='$8900.0'></InfoSalida>
                </div>

                <div className='containerBotonIngreso'>                    
                    <button>Lista Completa</button>                    
                </div>

                <div className='styleNotas'>
                    NOTA: Cuando se de click en Lista Completa entonces, aquí se presentará una tabla
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
        </Layout>

    )
}
export default VerProducto;

