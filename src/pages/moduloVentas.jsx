import logo from './logo.svg';
import './styles/App.css';
import logoEmpresa from './media/logoVentas.png';
import Cabeza from '../components/Cabeza';

function Index(){
    return (
        <div>
            <Cabeza></Cabeza>
            <main>
                <ul>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                    <li>CONTENIDO</li>
                </ul>
            </main>
            <PiePagina></PiePagina>         
        </div>
    )
}
export default Index;