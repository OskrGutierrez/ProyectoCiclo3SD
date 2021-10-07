import react,{useEffect, useState} from "react";

const NuevaVenta = () => {
    return(
        <div>
            <h2>Pagina de administracion de vehiculos</h2>
            <button>Crear Nuevo Vehiculo</button>
            <TablaVentas></TablaVentas>
            <FormNuevaVenta></FormNuevaVenta>
        </div>
    );
};

const TablaVentas = ()=>{
    return(
        <div>Esto es una tabla que muestra todos las ventas</div>
    )
}

const FormNuevaVenta = ()=>{
    return(
        <div>Esto es un formulario para crear nueva venta</div>
    )
}

export default NuevaVenta;