/* import '../styles/Ventas.css';
import Layout from '../layouts/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBan, faPlus, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState, useRef} from "react";



/* const ventasBackend = [
    {
        item:1,
        producto:"Manzana",
        cantidad:5,
        precioUnidad:1000,
        subTotal:5000
    },
    {
        item:2,
        producto:"per",
        cantidad:8,
        precioUnidad:500,
        subTotal:4367722
    },
    {
        item:4,
        producto:"papa",
        cantidad:1,
        precioUnidad:1000,
        subTotal:1000
    }
]; */
import '../styles/Ventas.css';
import Layout from '../layouts/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBan, faPlus, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState, useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const NuevaVenta=()=>{
    /* const[ventas,setVentas]=useState({})

    useEffect (()=>{
        setVentas(ventasBackend)
    },[]) */
    const[nombreCliente,setNombreCliente]=useState("");
    const[cedula,setCedula]=useState("");
    const[producto,setProducto]=useState("");
    const[cantidad,setCantidad]=useState("");
    const[ventas,setVentas]=useState([]);

    var numItem=0;
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:3001/api/producto\n',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setVentas(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);

    const form = useRef(null);

    const submitForm=(e)=>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaVenta = {};
        fd.forEach((value,key)=>{
            nuevaVenta[key]=value;  
        });

        const config = {
            method: 'post',
            url: 'http://localhost:3001/api/producto\n',
            headers: { },
            data:{cliente:nuevaVenta.CLIENTE,cedula:nuevaVenta.CEDULA,producto:nuevaVenta.PRODUCTO,cantidad:nuevaVenta.CANTIDAD},
          };
        
          await axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            toast.success('Datos almacenados', {position: "top-right",autoClose: 3000,});
          })
          .catch(function (error) {
            console.log(error);
            toast.error('Error al almacenar los datos', {position: "top-right",autoClose: 3000,});
          });  

        numItem = numItem + 1;
        console.log(numItem)
        //identificar el caso de exito y mostrar exito
        
        //identificar el caso de exito y mostrar el error
        //toast.error('Fallo en el envio de datos', {position: "top-right",autoClose: 3000,});
    }
    return (
           <Layout>
           <>
                <h1 className="tituloVenta">
                    NUEVA VENTA
                </h1>
                <ul className="cabezaVentas">
                    <div>
                        <form ref={form} onSubmit={submitForm} action="">
                            <span>CLIENTE</span>    
                            <input onChange={(e)=>{setNombreCliente(e.target.value)}} 
                            name="CLIENTE" type="text" defaultValue="Nombre Cliente" required />
                            <span>CEDULA</span>
                            <input onChange={(e)=>{setCedula(e.target.value)}} 
                            name="CEDULA" type="number" defaultValue="0" required/>
                            <span>PRODUCTO</span>    
                            <input onChange={(e)=>{setProducto("producto: ",e.target.value)}} 
                            name="PRODUCTO" type="text" defaultValue="Producto" required />
                            <span>CANTIDAD</span>
                            <input onChange={(e)=>{setCantidad("cantidad ",e.target.value)}} 
                            name="CANTIDAD" type="number" max={100} defaultValue="0" required/>
                            <br />
                            <button className="botones" type="submit"><FontAwesomeIcon icon={faPlus} />  Agregar Producto</button>
                        </form>
                    </div>
                    <TablaPrueba listaVenta={ventas}/> 
                </ul>
                <br />
                <br />
                <ul className="botonesVentas">
                    <button onClick={submitForm} className="botones botonventa">
                    <FontAwesomeIcon icon={faCircleCheck} /> REALIZAR VENTA
                    </button>
                    <button className="botones botonCancelar">
                    <FontAwesomeIcon icon={faBan} /> CANCELAR VENTA
                    </button>
                </ul>
            </>
            <ToastContainer position="top-right" autoClose={3000}/>
    </Layout>
    )
}

const TablaPrueba=({listaVenta})=>{
    useEffect(() => {
        console.log ("Este es el listado de vehiculos en el componente de tabla",listaVenta)
    }, [listaVenta])
    return <div className="tablaNuevaVenta">
                        <table>
                            <tr>
                                <th>ITEM</th>
                                <th>PRODUTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO UNIDAD</th>
                                <th>SUB-TOTAL</th>
                            </tr>
                            {listaVenta.map((ventas)=>{
                                return(
                                    <tr>
                                        <th>{ventas.item}</th>
                                        <th>{ventas.producto}</th>
                                        <th>{ventas.cantidad}</th>
                                        <th>{ventas.preciouni}</th>
                                        <th>{ventas.subtotal}</th>
                                    </tr>
                                    );
                            })}
                        </table>
                    </div>;
}


export default NuevaVenta;

