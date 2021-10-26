function BotonIngresoN(props) { /*Boton de Ingreso Number*/
    return (
        <li className='containerBotonIngreso'>           
                <div className='styleTextoInput'>
                    {props.nameButton}
                </div>

                <label htmlFor={props.labelName}>
                    <input 
                    type={props.typeInputButton} 
                    min='0' 
                    className={props.styleBoton}
                    name={props.labelName}                    
                    required/>
                </label>
                    
                          
        </li>
    )
}
export default BotonIngresoN;