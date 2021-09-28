import '../styles/App.css';
import Cabeza from '../components/Cabeza';
import PiePagina from '../components/PiePagina';

function ModuloUsuarios(){
    return (
        <div>
            <Cabeza></Cabeza>
            <main>
                <ul>
                    <li>Este es el modulo de los usuarios</li>
                    <li>Este es el modulo de los usuarios</li>
                    <li>Este es el modulo de los usuarios</li>
                    <li>Este es el modulo de los usuarios</li>
                    <li>Este es el modulo de los usuarios</li>
                    <li>Este es el modulo de los usuarios</li>
                </ul>
            </main>
            <PiePagina></PiePagina>         
        </div>
    )
}
export default ModuloUsuarios;