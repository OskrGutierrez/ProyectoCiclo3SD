import React from 'react'
import Logeo from '../components/Logeo'
import logo from '../media/logoBlanco.png'

const Login = () => {
    return (
        <div className="containerLog">
            <div className="welcome">
                
                <img src={logo} alt="logo de SD" className='imagenLogo'/>
                <h1>Bienvenido de vuelta a Market SD</h1>
                <h2>Por favor ingresa tus credenciales</h2>
                
            </div>
            <div className="log">
                <Logeo></Logeo>
            </div>
            
        </div>
    )
}

export default Login
