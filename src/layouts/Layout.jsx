import React from 'react'
import Cabeza from '../components/Cabeza'
import Footer from '../components/Footer'
import { PrivateRoute } from '../components/PrivateRoute';

const Layout = ({children}) => {
    return (
        
        <div className='containerLayout'>
            <Cabeza></Cabeza>
            <PrivateRoute>
            <main className='containerMainScroll'>{children}</main>
            </PrivateRoute>
            <Footer></Footer>            
        </div>
        
    )
}

export default Layout
