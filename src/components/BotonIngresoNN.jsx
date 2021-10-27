
function BotonIngresoNN(props) { /*Boton de Ingreso Not Number*/
    return (
        <li className='containerBotonIngreso'>
                <div className='styleTextoInput'>
                    {props.nameButton}
                </div>
                <label htmlFor={props.labelName}>
                    <input 
                    type={props.typeInputButton} 
                    className={props.styleBoton} 
                    name={props.labelName}                    
                    required />
                </label>                           
        </li>
    )
}
export default BotonIngresoNN;

