import '../styles/App.css';
import Cabeza from '../components/Cabeza';
import PiePagina from '../components/PiePagina';

function Inicio(){
    return (
        <div>
            <Cabeza></Cabeza>
            <main>
                <ul>
                    <li>Esta es la pagina de inicio</li>
                    <li>Esta es la pagina de inicio</li>
                    <li>Esta es la pagina de inicio</li>
                    <li>Esta es la pagina de inicio</li>
                    <li>Esta es la pagina de inicio</li>
                </ul>
            </main> 
            <PiePagina></PiePagina>    
        </div>
    )
}
export default Inicio;