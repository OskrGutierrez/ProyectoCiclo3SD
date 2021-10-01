import '../styles/ModifVenta.css';

function ModifVenta(){
    return (
        
    <>
        <section>
            <ul className="contenedorVenta">
                <li>Ventas registradas</li>
            </ul>

              <table>
                <thead>
                  <tr>
                    <th>Id. Venta</th>
                    <th>Valor Total Venta</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Fecha de Venta</th>
                    <th>Documento Cliente</th>
                    <th>Nombre Cliente</th>
                    <th>Vendedor</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tr>
                    <td>647392</td>
                    <td>9900</td>
                    <td>Destonillador</td>
                    <td>1</td>
                    <td>9900</td>
                    <td>30/09/2021</td>
                    <td>1152768934</td>
                    <td>Juan Carlos López</td>
                    <td>Mariana</td>
                    <td>En proceso</td>
                </tr>
              </table>
        
            <ul>
            <li>
              <div className="buscarVenta">
                <input placeholder="Buscar Venta" />
                <i className="fas fa-search"></i>
              </div>
            </li>
            <li>
              <button className="ButtonVenta">Actualizar Venta</button>
            </li>
            <li>
              <button className="ButtonVenta">Guardar</button>
            </li>
            </ul>
        </section>
                     
    </>
            
    )
}
export default ModifVenta;