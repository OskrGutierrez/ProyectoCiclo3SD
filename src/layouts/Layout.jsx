import React from 'react'
import Cabeza from '../components/Cabeza'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <div className='containerLayout'>
            <Cabeza></Cabeza>
            <main className='containerMainScroll'>{children}</main>
            <Footer></Footer>            
        </div>
    )
}

export default Layout
