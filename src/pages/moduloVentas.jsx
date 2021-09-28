import '../styles/App.css';
import logoEmpresa from '../media/logoVentas.png';
import Cabeza from '../components/Cabeza';
import PiePagina from '../components/PiePagina';

function ModuloVentas(){
    return (
        <div>
            <Cabeza></Cabeza>
            <main>
                <ul>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                </ul>
            </main>
            <PiePagina></PiePagina>         
        </div>
    )
}
export default ModuloVentas;