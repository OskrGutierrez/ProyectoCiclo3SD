import BotonIngresoNN from "../../components/BotonIngresoNN";
import BotonIngresoN from "../../components/BotonIngresoN"; 
import {Link} from 'react-router-dom';
import Layout from "../../layouts/Layout";
import '../../styles/ProductStyles.css';
import React, {useState, useEffect, useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function RegistrarUsuario() {

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
            url: `${baseURL}/RegistrarUsuario`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                codigo: nuevoUsuario.codigo,
                nombre: nuevoUsuario.nombre,
                correo: nuevoUsuario.correo,
                fechaIngreso: nuevoUsuario.fechaIngreso,
                perfil: nuevoUsuario.perfil
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Producto cargado con éxito')  
        }).catch(function (error) {
            console.error(error);
            toast.error('El Producto NO se cargó') 
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
                                nameButton='Código/Cc.:'
                                labelName='codigo'
                                typeInputButton='text'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoNN
                                nameButton='Nombre:'
                                labelName='nombre'
                                typeInputButton='text'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoNN
                                nameButton='Correo:'
                                labelName='correo'
                                typeInputButton='email'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoNN
                                nameButton='Fecha de ingreso:'
                                labelName='fechaIngreso'
                                typeInputButton='date'
                                styleBoton='styleBotonInput2' />

                            <BotonIngresoN
                                nameButton='Perfil:'
                                labelName='perfil'
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
                                <Link to='mainModuloUsuarios'>
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
                        <th >Código/Cc.</th> 
                        <th >Nombres/apellidos</th>
                        <th >Correo de contacto</th>
                        <th >Fecha de ingreso</th>
                        <th >Perfil</th>                   
                    </tr>
                </thead>

                <tbody>
                    {listausuariosIngresados.map((Ui) => {
                        return (
                            <tr >
                                <td>{Ui.codigo}</td>
                                <td>{Ui.nombre}</td>
                                <td>{Ui.correo}</td>
                                <td>{Ui.fechaIngreso}</td>
                                <td>{Ui.perfil}</td>                                
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





export default RegistrarUsuario;