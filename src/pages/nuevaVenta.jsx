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

function NuevaVenta(){

    useEffect(()=>{
        console.log("Hola, osy un use Efect");
    },[])
    /* const[ventas,setVentas]=useState({})

    useEffect (()=>{
        setVentas(ventasBackend)
    },[]) */


    const form = useRef(null);

    const submitForm=(e)=>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevaVenta = {};
        fd.forEach((value,key)=>{
            nuevaVenta[key]=value;
        });
        console.log("Datos del form enviados",nuevaVenta);
    };
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
                            <input onChange={(e)=>{console.log("Clietne: ",e.target.value)}} 
                            name="CLIENTE" type="text" defaultValue="Nombre Cliente" required />
                            <span>CEDULA</span>
                            <input onChange={(e)=>{console.log("cedula: ",e.target.value)}} 
                            name="CEDULA" type="number" defaultValue="0" required/>
                            <span>PRODUCTO</span>    
                            <input onChange={(e)=>{console.log("producto: ",e.target.value)}} 
                            name="PRODCUTO" type="text" defaultValue="Producto" required />
                            <span>CANTIDAD</span>
                            <input onChange={(e)=>{console.log("cantidad ",e.target.value)}} 
                            name="CANTIDAD" type="number" max={100} defaultValue="0" required/>
                            <br />
                            <button className="botones" type="submit"><FontAwesomeIcon icon={faPlus} />  Agregar Producto</button>
                        </form>
                    </div>
                    <div className="tablaNuevaVenta">
                        <table>
                            <tr>
                                <th>ITEM</th>
                                <th>PRODUTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO UNIDAD</th>
                                <th>SUB-TOTAL</th>
                            </tr>
                            <tr>
                                <th>001</th>
                                <th>LECHE</th>
                                <th>2</th>
                                <th>2800</th>
                                <th>5600</th>
                            </tr>
                            <tr>
                                <th>002</th>
                                <th>HUEVOS</th>
                                <th>12</th>
                                <th>300</th>
                                <th>3600</th>
                            </tr>
                            <tr>
                                <th>003</th>
                                <th>AZUCAR</th>
                                <th>1</th>
                                <th>3000</th>
                                <th>3000</th>
                            </tr>
                            <tr>
                                <th>004</th>
                                <th>MANZANA</th>
                                <th>2</th>
                                <th>1000</th>
                                <th>2000</th>
                            </tr>
                            <tr>
                                <th>005</th>
                                <th>NARANJA</th>
                                <th>4</th>
                                <th>800</th>
                                <th>3200</th>
                            </tr>
                        </table>
                    </div>
                </ul>
                <br />
                <br />
                <ul className="botonesVentas">
                    <button className="botones botonventa">
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

export default NuevaVenta;

