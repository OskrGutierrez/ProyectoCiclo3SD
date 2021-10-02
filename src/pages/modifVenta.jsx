import '../styles/ModifVenta.css';
import Layout from '../layouts/Layout';

function ModifVenta(){
    return (
     <Layout>       
      <>
      <section className = 'maincontainerVenta'>

            <div className='mainTitle'>Ventas registradas</div>
            
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
                <tr>
                    <td>647398</td>
                    <td>25600</td>
                    <td>Cemento</td>
                    <td>1</td>
                    <td>25600</td>
                    <td>30/09/2021</td>
                    <td>1037645181</td>
                    <td>Jhontan Arley Bustamante</td>
                    <td>Mariana</td>
                    <td>En proceso</td>
                </tr>
                <tr>
                    <td>647392</td>
                    <td>69000</td>
                    <td>Estuco</td>
                    <td>3</td>
                    <td>23000</td>
                    <td>30/09/2021</td>
                    <td>70564821</td>
                    <td>Guillermo Moncada</td>
                    <td>Mariana</td>
                    <td>En proceso</td>
                </tr>
              </table>

          <div className='containerOpciones'>
            <ul className='opcionesVenta'>
            <li>
              <div className="buscar">
              <input placeholder="Buscar Id Venta" />
              <i className="fas fa-search botonGenerico iconoBusqueda"></i>
              </div>
            </li>
            <li>
              <button className="buttonVenta">Actualizar Venta</button>
            </li>
            <li>
              <button className="buttonVenta">Guardar</button>
            </li>
            </ul>
          </div>
      </section>
                     
    </>
    </Layout>          
    )
}
export default ModifVenta;