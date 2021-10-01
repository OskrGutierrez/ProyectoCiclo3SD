

function InfoSalida(props) {
    return (

        <li className='containerInfoSalida'>                   
                
                    <div className='styleTextoKeySalida'>
                        {props.textoKeySalida}
                    </div>

                    <div className='styleTextoValueSalida'>
                        {props.textoValueSalida}
                    </div>
                           
        </li>
    )
}
export default InfoSalida;