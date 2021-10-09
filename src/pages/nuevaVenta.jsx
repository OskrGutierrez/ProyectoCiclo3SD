/* import '../styles/Ventas.css';
import Layout from '../layouts/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBan, faPlus, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import react,{useEffect, useState} from "react";


function NuevaVenta(){

    const [nombreCliente,setnombreCliente] = useState("")

    useEffect(()=>{
        console.log("Hola, soy un use effect")
      },[])

    const cambioDeNombre = (e) => {
        console.log(e.Target.defaultValue);
    }

    return (
           <Layout>
           <>
                <h1 className="tituloVenta">
                    NUEVA VENTA
                </h1>
                <ul className="cabezaVentas">
                    <div>
                        <form action="">
                            <span>CLIENTE</span>    
                            <input onChange={cambioDeNombre} type="text" defaultValue="Nombre Cliente" required />
                            <span>CEDULA</span>
                            <input type="number" defaultValue="0" required/>
                            <span>PRODUCTO</span>    
                            <input type="text" defaultValue="Producto" required />
                            <span>CANTIDAD</span>
                            <input type="number" max={100} defaultValue="0" required/>
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
export default NuevaVenta; */
import '../styles/Ventas.css';
import Layout from '../layouts/Layout';
import react,{useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBan, faPlus, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VentaBackend=[
    {
        idVenta:"001",
        valorTotalVenta:"10000",
        producto:"dgfsd",
        cantidad:"4",
        precioUnit:"456",
        fechaVenta:"1343542",
        documentoCLiente:"4576834",
        nombreCliente:"fdgtbdbd",
        vendedor:"gjyuj",
        estado:"aprobada"
    },
    {
        idVenta:"002",
        valorTotalVenta:"345000",
        producto:"manzana",
        cantidad:"6",
        precioUnit:"8094",
        fechaVenta:"546547",
        documentoCLiente:"3542351",
        nombreCliente:"maria",
        vendedor:"Jose",
        estado:"aprobada"
    }
]


const NuevaVenta = () => {
    const [mostrarTabla,setMostrarTabla]=useState(true);
    const [textoBoton,setTextoBoton]=useState("Nueva Venta");
    const [ventas,setVentas]=useState([]);
    
    useEffect(()=>{
        //Obtener informacion desde el backend
        setVentas(VentaBackend);
    },[]);


    useEffect(()=>{
    if(mostrarTabla){
        setTextoBoton("Nueva Venta");
    }else{
        setTextoBoton("Mostrar Todos los Vehiculos")

    }},[mostrarTabla]);

    return(
        <Layout>
        <>
            <div>
                <h2>PAGINA ADMINISTRACION DE VENTAS</h2>
                <button onClick={()=>{setMostrarTabla(!mostrarTabla);}}>{textoBoton}</button>
                {mostrarTabla ?(<TablaVentas listaDeVentas={ventas}/>):(<FormNuevaVenta/>)}
            </div>
        </>
        </Layout>
    );
};

const TablaVentas = ({listaDeVentas})=>{
    useEffect(()=>{
    console.log("Este es el estado de las ventas en el componente de tabla",listaDeVentas)
    },[listaDeVentas]);
    return(
        <div>
        <section className = 'maincontainerVenta'>
            <div className='mainTitle'>Ventas registradas</div>
                <table>
                    <thead>
                        <tr>
                            <th>Id. Venta</th>
                            <th>Valor Total Venta</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Fecha de Venta</th>
                            <th>Documento Cliente</th>
                            <th>Nombre Cliente</th>
                            <th>Vendedor</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>647392</td>
                            <td>9900</td>
                            <td>Destonillador</td>
                            <td>1</td>
                            <td>9900</td>
                            <td>30/09/2021</td>
                            <td>1152768934</td>
                            <td>Juan Carlos López</td>
                            <td>Mariana</td>
                            <td>En proceso</td>
                        </tr>
                        <tr>
                            <td>647398</td>
                            <td>25600</td>
                            <td>Cemento</td>
                            <td>1</td>
                            <td>25600</td>
                            <td>30/09/2021</td>
                            <td>1037645181</td>
                            <td>Jhontan Arley Bustamante</td>
                            <td>Mariana</td>
                            <td>En proceso</td>
                        </tr>
                        <tr>
                            <td>647392</td>
                            <td>69000</td>
                            <td>Estuco</td>
                            <td>3</td>
                            <td>23000</td>
                            <td>30/09/2021</td>
                            <td>70564821</td>
                            <td>Guillermo Moncada</td>
                            <td>Mariana</td>
                            <td>En proceso</td>
                        </tr>
                </table>

      <div className='containerOpciones'>
        <ul className='opcionesVenta'>
        <li>
          <div className="buscar">
          <input placeholder="Buscar Id Venta" />
          <i className="fas fa-search botonGenerico iconoBusqueda"></i>
          </div>
        </li>
        <li>
          <button className="buttonVenta">Actualizar Venta</button>
        </li>
        <li>
          <button className="buttonVenta">Guardar</button>
        </li>
        </ul>
      </div>
  </section>

    </div>
    )
}



const FormNuevaVenta = ()=>{
    const [cliente,setCliente]=useState();
    const [cedula,setCedula]=useState();
    const [producto,setProducto]=useState();
    const [cantidad,setCantidad]=useState();

    const enviarAlBackend=()=>{
        console.log("cliente",cliente,"cedula",cedula,"producto",producto,"cantidad",cantidad);
        toast.success('Venta realizada', {
            position: "top-center",
            autoClose: 5000,});
    }

    return(
            <div>
                <h1 className="tituloVenta">
                    NUEVA VENTA
                </h1>
                <ul className="cabezaVentas">
                    <div>
                        <form action="">
                            <span>CLIENTE</span>    
                            <input name="cliente" value={cliente} onChange={(e)=>{setCliente(e.target.value);}} type="text" defaultValue="Nombre Cliente" required />
                            <span>CEDULA</span>
                            <input name="cedula" value={cedula} onChange={(e)=>{setCedula(e.target.value);}} type="number" defaultValue="0" required/>
                            <span>PRODUCTO</span>    
                            <input name="producto" value={producto} onChange={(e)=>{setProducto(e.target.value);}} type="text" defaultValue="Producto" required />
                            <span>CANTIDAD</span>
                            <input name="cantidad" value={cantidad} onChange={(e)=>{setCantidad(e.target.value);}} type="number" max={100} defaultValue="0" required/>
                            <br />
                            <button className="botones" type="button" onClick={()=>{enviarAlBackend()}}><FontAwesomeIcon icon={faPlus} />  Agregar Producto</button>
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
                <ToastContainer position="top-center" autoClose={5000}/>
            </div>
    )
}

export default NuevaVenta;