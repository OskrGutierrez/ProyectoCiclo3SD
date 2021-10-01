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