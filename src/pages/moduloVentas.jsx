import '../styles/Ventas.css';

function ModuloVentas(){
    return (
            <>
                <ul>
                    <form action="">
                        <input type="email" required/>
                        <input type="file" required/>
                        <input type="number" max={100} required/>
                        <input type="password" required />
                        <input type="text" required />
                        <button>Submit</button>
                    </form>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                    <li>Este es el modulo de las ventas</li>
                </ul>
            </>
            
    )
}
export default ModuloVentas;