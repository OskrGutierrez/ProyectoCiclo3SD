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


const ventasBackend=[
    {
        item:"1",
        producto:"manzana",
        cantidad:"3",
        preciouni:"100",
        subtotal:"300",
    },
    {
        item:"2",
        producto:"pera",
        cantidad:"2",
        preciouni:"200",
        subtotal:"400",
    },
    {
        item:"3",
        producto:"coco",
        cantidad:"1",
        preciouni:"1000",
        subtotal:"1000",
    },
];


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

    const enviarDatosBackend=()=>{
        numItem = numItem + 1;
        console.log(numItem)
    }

    useEffect(() => {
         //obtener lista de vehiculos desde el backend
        setVentas(ventasBackend);
    }, []);


    const form = useRef(null);

    const submitForm=(e)=>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaVenta = {};
        fd.forEach((value,key)=>{
            nuevaVenta[key]=value;
        });
        console.log("Datos del form enviados",nuevaVenta);
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
                            name="PRODCUTO" type="text" defaultValue="Producto" required />
                            <span>CANTIDAD</span>
                            <input onChange={(e)=>{setCantidad("cantidad ",e.target.value)}} 
                            name="CANTIDAD" type="number" max={100} defaultValue="0" required/>
                            <br />
                            <button className="botones" type="submit"><FontAwesomeIcon icon={faPlus} />  Agregar Producto</button>
                            <button onClick={enviarDatosBackend} className="botones"><FontAwesomeIcon icon={faPlus} />  AgregarLinea</button>
                        </form>
                    </div>
                    <TablaPrueba listaVenta={ventas}/> 
                </ul>
                <br />
                <br />
                <ul className="botonesVentas">
                    <button onClick={enviarDatosBackend} className="botones botonventa">
                    <FontAwesomeIcon icon={faCircleCheck} /> REALIZAR VENTA
                    </button>
                    <button className="botones botonCancelar">
                    <FontAwesomeIcon icon={faBan} /> CANCELAR VENTA
                    </button>
                </ul>
                
            </>
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

