import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN";
import {Link} from 'react-router-dom';
import InfoSalida from "../../components/InfoSalida";
import '../../styles/ProductStyles.css';
import Layout from "../../layouts/Layout";



function ActualizarProductos() {
    return (
        <Layout>
        <>
            <div className='mainTitle'>Actualización de información del producto, filtrar por ID o Nombre!</div>
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

                <div className='styleNotas'>
                    Actualmente se tiene la siguiente información:
                </div>

                <div className='mainContainerInfoSalida'>
                    <InfoSalida textoKeySalida='ID del producto:' textoValueSalida='00000001'></InfoSalida> 
                    <InfoSalida textoKeySalida='Nombre del producto:' textoValueSalida='Destornillado de 1/2"'></InfoSalida>
                    <InfoSalida textoKeySalida='Fecha de ingreso:' textoValueSalida='01/10/2021'></InfoSalida>
                    <InfoSalida textoKeySalida='Valor antes del IVA:' textoValueSalida='$8900.0'></InfoSalida>
                </div>

                <div className='styleNotas'>
                    Si desea actualizar información entonces, ingrese los datos en los siguientes campos vacíos, después click en Actualizar:
                </div>

                <form >
                    <div className='mainContainerInfoSalida'>                        
                        <BotonIngresoNN nameButton='Nombre del producto:' typeInputButton='text' />
                        <BotonIngresoNN nameButton='Fecha de ingreso:' typeInputButton='date' />
                        <BotonIngresoN nameButton='Valor antes del IVA:' typeInputButton='number' />
                        <li className='containerBotonIngreso'>
                            <button>Actualizar</button>
                        </li>
                    </div>
                </form>                

                <div className='containerBotonIngreso'>
                    <Link to='moduloProductos'>
                        <button>Atrás</button>
                    </Link>
                </div>
                
                <div className='styleNotas'>
                    NOTA: Si desea comprobar su actualización, click en Atrás y después Ver productos registrados
                </div>




            </ul>
        </>
        </Layout>

    )
}
export default ActualizarProductos;