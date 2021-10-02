import {Link} from 'react-router-dom'

function OpctionsProduct(props) {
    return (

        <div>
            <Link to={props.productPage} style={{ textDecoration: 'none' }}>        
                <div className='opctionContainer'>

                    <div className='setupIconOP'>
                        <i className={props.iconOP}></i>
                    </div>


                    <div className='secondaryTitle'>
                        {props.secondTitle}
                    </div>

                </div>
            </Link>
        </div>
    )
}
export default OpctionsProduct;
