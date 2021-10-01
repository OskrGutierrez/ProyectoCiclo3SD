import '../styles/Ventas.css';

function ModuloVentas(){
    return (
            <>
                <ul>
                    <form action="">
                        <input type="email" defaultValue="Ingrese su correo" required/>
                        <input type="file" required/>
                        <input type="number" max={100} required/>
                        <input type="password" required />
                        <input type="text" defaultValue="Ingrese su nombre" required />
                        <select required name="" id="">
                            <option disabled value="" >Seleccione una opcion</option>
                            <option value="">OpcionA</option>
                            <option value="">OpcionB</option>
                            <option value="">OpcionC</option>
                            <option value="">OpcionD</option>
                        </select>
                        <button type="submit">Submit</button>
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