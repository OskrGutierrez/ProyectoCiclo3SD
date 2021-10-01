import '../styles/Ventas.css';

function NuevaVenta(){
    return (
            <>
                <h1 align="center">
                    NUEVA VENTA
                </h1>
                <ul className="cabezaVentas">
                    <form action="">
                        <span>CLIENTE</span>    
                        <input type="text" defaultValue="Nombre Cliente" required />
                        <span>CEDULA</span>
                        <input type="number" max={12} efaultValue="Cedula Cliente" required/>
                        <span>PRODUCTO</span>    
                        <input type="text" defaultValue="Producto" required />
                        <span>CANTIDAD</span>
                        <input type="number" max={100} defaultValue="Cantidad" required/>
                        <button type="submit">Agregar Producto</button>
                    </form>     
                </ul>
            </>
    )
}
export default NuevaVenta;