import react,{useEffect, useState} from "react";

const Ventas = () => {
    return(
        <div>
            <h2>Pagina de administracion de vehiculos</h2>
            <button>Crear Nuevo Vehiculo</button>
            <TablaVentas></TablaVentas>
        </div>
    );
};

const TablaVentas = ()=>{
    return(
        <div>Esto es una tabla que muestra todos las ventas</div>
    )
}

const TablaVentas = ()=>{
    return(
        <div>Esto es un formulario para crear nueva venta</div>
    )
}

export default Ventas;