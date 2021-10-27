import React from 'react'
import Cabeza from '../components/Cabeza'
import Footer from '../components/Footer'

const LayoutVer = ({children}) => {
    return (
        <div className='containerLayoutVer'>
            <Cabeza></Cabeza>
            <main className='containerMain'>{children}</main>
            <Footer></Footer>            
        </div>
    )
}

export default LayoutVer
