
function BotonIngresoNN(props) { /*Boton de Ingreso Not Number*/
    return (
        <li className='containerBotonIngreso'>
                <div className='styleTextoInput'>
                    {props.nameButton}
                </div>

                <div>
                    <input type={props.typeInputButton} className='styleBotonInput' required />
                </div>           
        </li>
    )
}
export default BotonIngresoNN;

