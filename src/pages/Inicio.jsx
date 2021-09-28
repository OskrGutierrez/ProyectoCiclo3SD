import '../styles/App.css';
import logoEmpresa from '../media/logoVentas.png';
import Cabeza from '../components/Cabeza';
import PiePagina from '../components/PiePagina';

function Inicio(){
    return (
        <div>
            <Cabeza></Cabeza>
            <main>
                <ul>
                    <li>Este es el index</li>
                    <li>Este es el index</li>
                    <li>Este es el index</li>
                    <li>Este es el index</li>
                    <li>Este es el index</li>
                </ul>
            </main> 
            <PiePagina></PiePagina>    
        </div>
    )
}
export default Inicio;