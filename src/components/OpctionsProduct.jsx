import {Link} from 'react-router-dom'

function OpctionsProduct(props) {
    return (

        <li>
            <Link to={props.productPage}>
                <div className='opctionContainer'>

                    <div className='setupIconOP'>
                        <i className={props.iconOP}></i>
                    </div>


                    <div className='secondaryTitle'>
                        {props.secondTitle}
                    </div>

                </div>
            </Link>
        </li>
    )
}
export default OpctionsProduct;
