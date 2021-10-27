import BotonIngresoNNFiltro from "../../components/BotonIngresoNNFiltro";
import {Link} from 'react-router-dom';
import LayoutVer from "../../layouts/LayoutVer";
import '../../styles/ProductStyles.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import {Dialog,Tooltip}  from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function VerVenta() {
    const [productos, setProductos] = useState([])
    const [mostrarTablaCompleta, setMostrarTablaCompleta] = useState(true)
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)    
    const [busqueda, setBusqueda] = useState('') 

    //Este useEffect es para mostrar info en la consola, no altera la funcionalidad del backend
    useEffect(()=>{
        console.log('Busqueda', busqueda)
    },[busqueda])

    useEffect(() => { 
        const obtenerProductos = async () => {
            const options = { method: 'GET', url: 'http://localhost:5050/VerVentas' };
            await axios
                .request(options)
                .then(function (response) {
                    console.log('Previamente', response.data);
                    setProductos(response.data)
                }).catch(function (error) {
                    console.error(error);
                });
                setEjecutarConsulta(false)
        }
        if (ejecutarConsulta){            
            obtenerProductos()            
        }    
    }, [ejecutarConsulta])

    useEffect(() => {       
        if (mostrarTablaCompleta) {
            setEjecutarConsulta(true)            
        }
    }, [mostrarTablaCompleta])   

    return (

        <LayoutVer>
            <div>
                <h1 className='mainTitle'>Visualización y actualización de información de las ventas!</h1>
                <div>
                    <form >
                        <div className='styleMessageFiltro'>
                            NOTA: Filtre por nRef, por Cliente, por Fecha de venta, por Vendedor, por Valor de venta o Estado de venta:
                        </div>
                        <div className='productOpctionsContainer'>

                            <div className='mainContainerVerProductos'>

                                <div className='mainContainerBotonIngresoRegistrar'>
                                    <div>
                                        <BotonIngresoNNFiltro nameButton='Ingrese valor del campo:' typeInputButton='text' vValue={busqueda} vOnChange={e => setBusqueda(e.target.value)} />
                                    </div>
                                </div>

                            </div>

                            <div className='containerBotonIngreso'>
                                <Link to='mainModuloVentas'>
                                    <button >Atrás</button>
                                </Link>
                            </div>
                            <div>
                                {mostrarTablaCompleta && <TablaCompletaProductos listaproductosCompleta={productos} setEjecutarConsulta={setEjecutarConsulta} busqueda={busqueda} />}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutVer>
    )
}


const TablaCompletaProductos = ({listaproductosCompleta, setEjecutarConsulta, busqueda}) => {
    
    const [listaFiltrada, setListaFiltrada] = useState(listaproductosCompleta)    
    
    
    //Filtro por cualquier valor de cualquier key de cualquier producto
    useEffect(() => {
        setListaFiltrada(listaproductosCompleta.filter((elemento)=>{
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase()) //JSON.stringify(elemento).includes(busqueda)
            //elementonRef.nRef.toLowerCase().includes(busquedanRef.toLowerCase())
        }))
    }, [busqueda, listaproductosCompleta])    

    return (
        <div  className='propContainerTable' >
            <h2 className='tableTitle'>Los usuarios registrados en la base de datos son:</h2>           
            <table >
                <thead className='headTable propTable'>
                    <tr>
                        <th >nRef</th> 
                        <th >Cliente</th>
                        <th >Fecha venta</th>
                        <th >Vendedor</th>
                        <th >Valor venta</th>
                        <th >Estado venta</th>
                        <th >Acciones</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {listaFiltrada.map((Pi) => {
                        return (
                            <FilaProducto  Pi={Pi} setEjecutarConsulta={setEjecutarConsulta}/>
                        )
                    })}
                </tbody>
            </table>    
            <ToastContainer position='bottom-center' autoClose={3000}/>                   
        </div>
    )
}

const FilaProducto = ({Pi, setEjecutarConsulta}) => {
        //console.log('Producto', Pi)
        
        const [edit, setEdit] = useState(false) 
        const [openDialog, setOpenDialog] = useState(false);        
        const [infoNuevoProducto, setInfoNuevoProducto] = useState({                       
            _id:Pi.id,
            nRef: Pi.nRef,    
            cliente: Pi.cliente,
            fechaVenta: Pi.fechaVenta,
            vendedor: Pi.vendedor,
            valorVenta: Pi.valorVenta,
            estadoVenta: Pi.estadoVenta,
        })
    
        const actualizarProducto = async() =>{
            console.log('Se actualizó y se envió a la BD',infoNuevoProducto)
            const options = {
                method: 'PATCH',
                url: 'http://localhost:5050/EditarVenta',
                headers: {'Content-Type': 'application/json'},
                data: {...infoNuevoProducto, id : Pi._id}
              };
              
              await axios
                .request(options)
                .then(function (response) {
                    console.log('Se ejecutó actualizar')
                    console.log(response.data);
                    toast.success('Producto actualizado con éxito');
                    setEdit(false) 
                    setEjecutarConsulta(true)
              }).catch(function (error) {
                    console.error(error);
                    toast.error('Error actualizando el producto');
              });                
        }

        const eliminarProducto = async() =>{

            const options = {
                method: 'DELETE',
                url: 'http://localhost:5050/EliminarVenta',
                headers: {'Content-Type': 'application/json'},
                data: { id : Pi._id}
              };
              
              await axios.request(options).then(function (response) {
                console.log(response.data);
                toast.success('Venta eliminada con éxito');
                setEdit(false)
                setEjecutarConsulta(true)
              }).catch(function (error) {
                console.error(error);
                toast.error('Error eliminando el producto');
              });
            setOpenDialog(false);
        }

        return (
            <tr >
                {edit ? (
                    <>
                        <td>
                            <input 
                            type='text' 
                            value={infoNuevoProducto.nRef} 
                            onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, nRef: e.target.value})}/>
                        </td>
                        <td>
                            <input 
                            type='text' 
                            value={infoNuevoProducto.cliente}
                            onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, cliente: e.target.value})}/>
                        </td>
                        <td>
                            <input 
                            type='date' 
                            value={infoNuevoProducto.fechaVenta}
                            onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, fechaVenta: e.target.value})}/>
                        </td>
                        <td>
                            <input 
                            type='text' 
                            value={infoNuevoProducto.vendedor}
                            onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, vendedor: e.target.value})}/>
                        </td>
                        <td>
                            <input 
                            type='text' 
                            value={infoNuevoProducto.valorVenta}
                            onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, valorVenta: e.target.value})}/>                            
                        </td>
                        <td>
                            <input 
                            type='text' 
                            value={infoNuevoProducto.estadoVenta}
                            onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, estadoventa: e.target.value})}/>                            
                        </td>
                    </>

                ) : (
                    <>
                        <td>{Pi.nRef}</td>
                        <td>{Pi.cliente}</td>
                        <td>{Pi.fechaVenta}</td>
                        <td>{Pi.vendedor}</td>
                        <td>{Pi.valorVenta}</td>
                        <td>{Pi.estadoVenta}</td>
                    </>
                )}

                <td>
                    <div className='containerAcciones'>
                        <div>
                            {edit ?                                                                   
                                    (<Tooltip title='Confirmar edición' arrow placement='left'>
                                        <i onClick={() => actualizarProducto()}
                                            className='fas fa-check propEdicionConfirmar' />
                                    </Tooltip>)
                                
                                : (<Tooltip title='Editar venta' arrow placement='left'>
                                    <i onClick={() =>  setEdit(!edit)}
                                        className='fas fa-pencil-alt propEditar' />
                                </Tooltip>
                                )}
                        </div>

                        <div>
                            {edit ?
                                                                   
                                    (<Tooltip title='Confirmar eliminación' arrow placement='right'>
                                        <i onClick={() => setOpenDialog(true)}
                                            className='fas fa-ban propEliminacionConfirmar' />
                                    </Tooltip>)                                    
                                
                                : (
                                    <Tooltip title='Eliminar venta' arrow placement='right'>
                                        <i onClick={() =>  setEdit(!edit)}
                                            className='fas fa-trash propEliminar' />
                                    </Tooltip>
                                )}
                        </div>
                    </div>
                    <Dialog open={openDialog}>
                        <div className='propDialog'>
                            <h1 className='propMainTextDialog'>
                                Confirmar para eliminar producto:
                            </h1>
                            <div className='propContainerOpctionsDialog'>
                                <button
                                    onClick={() => eliminarProducto()}
                                    className='propOpctionDialogYes'>
                                    Sí
                                </button>
                                <button
                                    onClick={() => setOpenDialog(false)}
                                    className='propOpctionDialogNo'>
                                    No
                                </button>
                            </div>
                        </div>
                    </Dialog>
                </td>
            </tr>
        )
    }

export default VerVenta;