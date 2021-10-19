import React from "react";
import Layout from "../layouts/Layout";
import "../styles/Usuario.css";

const ModuloUsuarios = () => {
  return (
    <Layout>
      <>
        <div className="head1">
          <li className="buscar1">
            <input placeholder="Buscar Usuario" />
            <i className="fas fa-search"></i>
          </li>

          <li>
            <button className="Button Button1">Gestionar Usuario</button>
          </li>

          <li>
            <button className="Button Button1">Guardar</button>
          </li>
        </div>
        <ul>
          <section>
            <ul className="navbar1">
              <div className="contenedor">
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>Juan Mecanico</td>
                    <td>35</td>
                    <td>Juanandfi@dds.co</td>
                    <td>Usuario</td>
                    <td>Online</td>
                  </tr>
                  <tr>
                    <td>Alvaro</td>
                    <td>24</td>
                    <td>Uberrimo22@sd.com</td>
                    <td>Admin</td>
                    <td>Offline</td>
                  </tr>
                  <tr>
                    <td>Manuela</td>
                    <td>28</td>
                    <td>ManuLs@gmail.com</td>
                    <td>Usuario</td>
                    <td>Offline</td>
                  </tr>
                  <tr>
                    <td>Laura</td>
                    <td>41</td>
                    <td>urlau32@gmail.com</td>
                    <td>Admin</td>
                    <td>Online</td>
                  </tr>
                  <tr>
                    <td>Daniel</td>
                    <td>29</td>
                    <td>Danleo23@es.co</td>
                    <td>Usuario</td>
                    <td>Online</td>
                  </tr>
                  <tr>
                    <td>Pedro</td>
                    <td>35</td>
                    <td>pedris242@gmail.com</td>
                    <td>Usuario</td>
                    <td>Offline</td>
                  </tr>
                  <tr>
                    <td>Pablo</td>
                    <td>24</td>
                    <td>pesadas@gmail.com</td>
                    <td>Usuario</td>
                    <td>Offline</td>
                  </tr>
                  <tr>
                    <td>Fer</td>
                    <td>21</td>
                    <td>sadsfas@gmail.com</td>
                    <td>Usuario</td>
                    <td>Offline</td>
                  </tr>
                  <tr>
                    <td>livin</td>
                    <td>25</td>
                    <td>84445@gmail.com</td>
                    <td>Usuario</td>
                    <td>Online</td>
                  </tr>
                </table>
              </div>
            </ul>
          </section>
        </ul>
      </>
    </Layout>
  );
};

export default ModuloUsuarios;
