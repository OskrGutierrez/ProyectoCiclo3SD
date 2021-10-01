function BotonIngresoN(props) { /*Boton de Ingreso Number*/
    return (
        <li className='containerBotonIngreso'>           
                <div className='styleTextoInput'>
                    {props.nameButton}
                </div>

                <div>
                    <input type={props.typeInputButton} min='0' className='styleBotonInput' required/>
                </div>           
        </li>
    )
}
export default BotonIngresoN;