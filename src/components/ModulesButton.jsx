import { Link } from "react-router-dom"

function ModulesButton(props) {
    return (
        <Link to={props.modulePage}>
            <li>
                <button className="button secundaryButton">{props.buttonName}</button>
            </li>
        </Link>      
    )
}
export default ModulesButton


   