import '../styles/App.css';
import Cabeza from '../components/Cabeza';
import PiePagina from '../components/PiePagina';

function ModuloProductos(){
    return (
        <div>
            <Cabeza></Cabeza>
            <main>
                <ul>
                    <li>Este es el modulo de los productos</li>
                    <li>Este es el modulo de los productos</li>
                    <li>Este es el modulo de los productos</li>
                    <li>Este es el modulo de los productos</li>
                    <li>Este es el modulo de los productos</li>
                    <li>Este es el modulo de los productos</li>
                </ul>
            </main>
            <PiePagina></PiePagina>         
        </div>
    )
}
export default ModuloProductos;