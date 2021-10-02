import React from 'react'
import '../styles/footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faFacebook, faTwitterSquare, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className='redesFooter'>
                <a href="https://github.com/OskrGutierrez/ProyectoCiclo3SD/tree/SPRINT2" target="_blank"><div className='redes'><FontAwesomeIcon icon={faGithub}/></div></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><div className='redes'><FontAwesomeIcon icon={faYoutube} /></div></a>
                <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjMyOTc0NzU3LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D" target="_blank"><div className='redes'><FontAwesomeIcon icon={faFacebook} /></div></a>
                <a href="https://twitter.com/?lang=es" target="_blank"><div className='redes'><FontAwesomeIcon icon={faTwitterSquare} /></div></a>
                
            </div>
            <div className='copywrite'><FontAwesomeIcon icon={faCopyright} />  Todos los derechos reservados SD superDevs</div>

        </div>
    )
}

export default Footer
