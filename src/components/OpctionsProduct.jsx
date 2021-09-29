
function OpctionsProduct(props){
    return(
        
            <li className='opctionContainer'>
                <div className='setupIconOP'>
                    <i className={props.iconOP}></i>
                </div>

                <div className='secondaryTitle'>
                    <span >{props.secondTitle}</span>
                </div>                
                
            </li>        
    )
}
export default OpctionsProduct;
