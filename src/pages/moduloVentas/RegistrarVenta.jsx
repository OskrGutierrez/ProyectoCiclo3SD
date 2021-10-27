import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN"; 
import {Link} from 'react-router-dom';
import Layout from "../../layouts/Layout";
import '../../styles/ProductStyles.css';
import React, {useState, useEffect, useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function RegistrarVenta() {

    const [mostrarTablaIngresados, setMostrarTablaIngresados] = useState(false)    
    const [usuariosIngresados, setusuariosIngresados] = useState([])    

    const form=useRef(null)

    const submitForm = async(e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value;
        });

        console.log('Usuario a ingresar', nuevoUsuario)

        const options = {
            method: 'POST',
            url: 'http://localhost:5050/RegistrarVenta',
            headers: { 'Content-Type': 'application/json' },
            data: {
                nRef: nuevoUsuario.nRef,
                cliente: nuevoUsuario.cliente,
                fechaVenta: nuevoUsuario.fechaVenta,
                vendedor: nuevoUsuario.vendedor,
                valorVenta: nuevoUsuario.valorVenta,
                estadoVenta: nuevoUsuario.estadoVenta
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta cargada con éxito')  
        }).catch(function (error) {
            console.error(error);
            toast.error('La venta NO se cargó') 
        });
        setusuariosIngresados([...usuariosIngresados, nuevoUsuario])          
        setMostrarTablaIngresados(true)             
    }  
    
    

    return (
        <Layout >
            <div >
                <h1 className='mainTitle'>Ingrese información del usuario, luego click en Ingresar Usuario!</h1>
                <div >
                    <form ref={form} onSubmit={submitForm} className='productOpctionsContainer'>                        
                        <div className='mainContainerBotonIngresoRegistrar'>
                            <BotonIngresoNN
                                nameButton='nRef:'
                                labelName='nRef'
                                typeInputButton='text'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoNN
                                nameButton='Cliente:'
                                labelName='cliente'
                                typeInputButton='text'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoNN
                                nameButton='F. Venta:'
                                labelName='fechaVenta'
                                typeInputButton='date'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoNN
                                nameButton='Vendedor:'
                                labelName='vendedor'
                                typeInputButton='text'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoNN
                                nameButton='V. Venta:'
                                labelName='valorVenta'
                                typeInputButton='text'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoN
                                nameButton='E. Venta:'
                                labelName='estadoVenta'
                                typeInputButton='text'
                                styleBoton='styleBotonInput2' />
                        </div>
                        <div >
                            <div className='containerBotonIngreso'>
                                <button type='submit' >Ingresar Usuario</button>
                                <div className='styleMessage'>
                                    NOTA: Se debe de ingresar la información del usuario en cada uno de los espacios de arriba
                                </div>
                            </div>  
                            <div className='containerBotonIngreso'>
                                <Link to='mainModuloVentas'>
                                    <button>Atrás</button>
                                </Link>
                            </div>
                        </div>
                        
                        <div >
                            {mostrarTablaIngresados && <TablausuariosIngresados listausuariosIngresados={usuariosIngresados}/> }                                                                                 
                        </div>                                              
                    </form>                                      
                </div>
            </div>
        </Layout>
    )
}

const TablausuariosIngresados = ({listausuariosIngresados}) => {    
    useEffect(()=>{
        console.log('Este es el listado de los productos', listausuariosIngresados)
    },[listausuariosIngresados]) 
    return (
        <div  className='propContainerTable' >
            <h2 className='tableTitle'>Los usuarios ingresados son:</h2>           
            <table >
                <thead className='headTable '>
                    <tr>
                        <th >nRef</th> 
                        <th >Cliente</th>
                        <th >Fecha venta</th>
                        <th >Vendedor</th>
                        <th >Valor venta</th>
                        <th >Estado venta</th>                   
                    </tr>
                </thead>

                <tbody>
                    {listausuariosIngresados.map((Ui) => {
                        return (
                            <tr >
                                <td>{Ui.nRef}</td>
                                <td>{Ui.cliente}</td>
                                <td>{Ui.fechaVenta}</td>
                                <td>{Ui.vendedor}</td>
                                <td>{Ui.valorVenta}</td>    
                                <td>{Ui.estadoVenta}</td>                             
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='styleMessage'>
                NOTA: Click en atrás y luego Ver Usuarios Registrados para ver todos los productos que se encuentran en la base de datos
            </div>
            <ToastContainer position='bottom-center' autoClose={3000}/>
        </div>
    )
}





export default RegistrarVenta;