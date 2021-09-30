
function BotonIngreso(props) {
    return (
        <li >
            <div className='containerBotonIngreso'>

                <div className='styleTextoInput'>
                    {props.nameButton}
                </div>

                <div>

                    <input type={props.typeInputButton} required />

                </div>
            </div>
        </li>
    )
}
export default BotonIngreso;