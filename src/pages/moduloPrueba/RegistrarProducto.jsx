import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN"; 
import {Link} from 'react-router-dom';
import Layout from "../../layouts/Layout";
import '../../styles/ProductStyles.css';
import React, {useState, useEffect, useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function RegistrarProducto() {

    const [mostrarTablaIngresados, setMostrarTablaIngresados] = useState(false)    
    const [productosIngresados, setProductosIngresados] = useState([])    

    const form=useRef(null)

    const submitForm = async(e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        const options = {
            method: 'POST',
            url: 'http://localhost:5050/RegistrarProducto',
            headers: { 'Content-Type': 'application/json' },
            data: {
                nRef: nuevoProducto.nRef,
                nombre: nuevoProducto.nombre,
                fechaIngreso: nuevoProducto.fechaIngreso,
                precioAntesIVA: nuevoProducto.precioAntesIVA
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Producto cargado con éxito')  
        }).catch(function (error) {
            console.error(error);
            toast.error('El Producto NO se cargó') 
        });
        setProductosIngresados([...productosIngresados, nuevoProducto])          
        setMostrarTablaIngresados(true) 
            
    }  
    
    

    return (
        <Layout>
            <div>
                <h1 className='mainTitle'>Ingrese información del producto, luego click en Ingresar Producto!</h1>
                <div >
                    <form ref={form} onSubmit={submitForm} className='productOpctionsContainer'>                        
                        <div className='mainContainerBotonIngresoRegistrar'>
                            <BotonIngresoNN 
                            nameButton='nRef:' 
                            labelName='nRef' 
                            typeInputButton='text' 
                            styleBoton='styleBotonInput2'/>
                            
                            <BotonIngresoNN 
                            nameButton='Nombre:' 
                            labelName='nombre' 
                            typeInputButton='text' 
                            styleBoton='styleBotonInput1' />
                            
                            <BotonIngresoNN 
                            nameButton='Fecha de ingreso:' 
                            labelName='fechaIngreso' 
                            typeInputButton='date' 
                            styleBoton='styleBotonInput2' />
                            
                            <BotonIngresoN 
                            nameButton='Precio antes del IVA:' 
                            labelName='precioAntesIVA' 
                            typeInputButton='number' 
                            styleBoton='styleBotonInput2' />
                        </div>
                        <div >
                            <div className='containerBotonIngreso'>
                                <button type='submit' >Ingresar Producto</button>
                                <div className='styleMessage'>
                                    NOTA: Se debe de ingresar la información del producto en cada uno de los espacios de arriba
                                </div>
                            </div>  
                            <div className='containerBotonIngreso'>
                                <Link to='moduloProductos'>
                                    <button>Atrás</button>
                                </Link>
                            </div>
                        </div>
                        
                        <div >
                            {mostrarTablaIngresados && <TablaProductosIngresados listaProductosIngresados={productosIngresados}/> }                                                                                 
                        </div>                                              
                    </form>

                                       
                </div>
            </div>
        </Layout>
    )
}

const TablaProductosIngresados = ({listaProductosIngresados}) => {    
    useEffect(()=>{
        console.log('Este es el listado de los productos', listaProductosIngresados)
    },[listaProductosIngresados]) 
    return (
        <div  className='propContainerTable' >
            <h2 className='tableTitle'>Los productos ingresados son:</h2>           
            <table >
                <thead className='headTable '>
                    <tr>
                        <th >ID</th> 
                        <th >Nombre</th>
                        <th >Fecha de ingreso</th>
                        <th >Precio antes del IVA</th>                   
                    </tr>
                </thead>

                <tbody>
                    {listaProductosIngresados.map((Pi) => {
                        return (
                            <tr >
                                <td>{Pi.nRef}</td>
                                <td>{Pi.nombre}</td>
                                <td>{Pi.fechaIngreso}</td>
                                <td>${Pi.precioAntesIVA}</td>                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='styleMessage'>
                NOTA: Click en atrás y luego Ver Productos Registrados para ver todos los productos que se encuentran en la base de datos
            </div>
            <ToastContainer position='bottom-center' autoClose={3000}/>
        </div>
    )
}





export default RegistrarProducto;

