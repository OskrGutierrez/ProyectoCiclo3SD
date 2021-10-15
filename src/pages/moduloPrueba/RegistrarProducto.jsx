import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN"; 
import {Link} from 'react-router-dom';
import Layout from "../../layouts/Layout";
import '../../styles/ProductStyles.css';
import React, {useState, useEffect} from "react";

const ejemploProductosIngresados = [
    {
        id:'000001',
        nombre:'MOUSE',
        fechaIngreso:'11/05/2020',
        valorSinIVA: 23000,
    },
    {
        id:'000002',
        nombre:'TELEVISOR LED LG 32"',
        fechaIngreso:'11/05/2020',
        valorSinIVA: 1050000,
    },
    {
        id:'000003',
        nombre:'PORTATIL ASUS RYZEN5 17"',
        fechaIngreso:'11/05/2020',
        valorSinIVA: 1650000,
    },
    {
        id:'000004',
        nombre:'PORTATIL ACER CORE I7 17"',
        fechaIngreso:'11/05/2020',
        valorSinIVA: 2250000,
    },
]

function RegistrarProducto() {

    const [botonIngresarProducto, setBotonIngresarProducto] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        //Obtener info de carros almacenada arriba
        setProductos(ejemploProductosIngresados)
    },[])
    
    
    //const [vehiculos, setVehiculos] = useState([])

    return (
        <Layout>
            <div>
                <h1 className='mainTitle'>Ingrese información del producto, luego click en Ingresar Producto!</h1>
                <div >
                    <form className='productOpctionsContainer'>
                        <div className='mainContainerBotonIngresoRegistrar'>
                            <BotonIngresoN nameButton='ID del producto:' typeInputButton='number' />
                            <BotonIngresoNN nameButton='Nombre del producto:' typeInputButton='text' />
                            <BotonIngresoNN nameButton='Fecha de ingreso:' typeInputButton='date' />
                            <BotonIngresoN nameButton='Valor antes del IVA:' typeInputButton='number' />
                        </div>
                        <div className='containerBotonIngreso'>
                            <div>
                                <button onClick={() => setBotonIngresarProducto(true)}>Ingresar Producto</button>
                            </div>
                            <div className='styleMessage'>
                                {botonIngresarProducto && ('El producto se registró satisfactoriamente!')}
                            </div>
                        </div>
                        <div className='styleMessage'>
                            {botonIngresarProducto && <TablaProductosIngresados/>}                             
                        </div>
                        <div className='containerBotonIngreso'>
                            {botonIngresarProducto && (<button onClick={() => setBotonIngresarProducto(false)}> Ingresar otro producto</button>)}
                        </div>                        
                    </form>
                    <div className='containerBotonIngreso'>
                        <Link to='moduloProductos'>
                            <button>Atrás</button>
                        </Link>
                    </div>
                    <div className='styleNotas'>
                        {botonIngresarProducto && ('NOTA: Si desea comprobar su registro, click en Atrás y después Ver productos registrados')}                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const TablaProductosIngresados = () => {
    return (
        <div  className='propTabla' >
            <h2 className='tableTitle'>Los productos ingresados son:</h2>
            <table>
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Fecha de ingreso</th>
                        <th>Precio antes del IVA</th>
                    </tr>
                </thead>

                <tbody >
                    <tr>
                        <td>000003</td>
                        <td>PORTATIL ASUS RYZEN5 17pul</td>
                        <td>11/05/2020</td>
                        <td>1650000</td>
                    </tr>
                    <tr>
                        <td>000004</td>
                        <td>PORTATIL ACER COREI7 17pul</td>
                        <td>11/05/2020</td>
                        <td>2250000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export default RegistrarProducto;

