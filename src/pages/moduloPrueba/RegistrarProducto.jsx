import BotonIngreso from "../../components/BotonIngreso";


function RegistrarProducto(){
    return (             
            <>
                <div className='mainTitle'>Ingrese información del producto, luego click en Ingresar Producto!</div>
                <ul className='.productOpctionsContainer'>
                    
                    <form>
                    <BotonIngreso nameButton='id del producto:' typeInputButton='number'/>
                    <BotonIngreso nameButton='Nombrel de producto:' typeInputButton='text'/>
                    <BotonIngreso nameButton='Fecha de ingreso:' typeInputButton='date'/>
                    <BotonIngreso nameButton='Valor antes del IVA:' typeInputButton='number'/>                  
                    <div className='containerBotonIngreso'>
                    <button>Ingresar Producto</button>
                    </div>
                    </form>

                </ul>
            </>
                             
    )
}
export default RegistrarProducto;

