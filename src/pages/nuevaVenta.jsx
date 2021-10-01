import '../styles/Ventas.css';

function NuevaVenta(){
    return (
            <>
                <h1 align="center">
                    NUEVA VENTA
                </h1>
                <ul className="cabezaVentas">
                    <div>
                        <form action="">
                            <span>CLIENTE</span>    
                            <input type="text" defaultValue="Nombre Cliente" required />
                            <span>CEDULA</span>
                            <input type="number" defaultValue="0" required/>
                            <span>PRODUCTO</span>    
                            <input type="text" defaultValue="Producto" required />
                            <span>CANTIDAD</span>
                            <input type="number" max={100} defaultValue="0" required/>
                            <br />
                            <button className="botones" type="submit">Agregar Producto</button>
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
                        REALIZAR VENTA
                    </button>
                    <button className="botones botonCancelar">
                        CANCELAR VENTA
                    </button>
                </ul>
            </>
    )
}
export default NuevaVenta;