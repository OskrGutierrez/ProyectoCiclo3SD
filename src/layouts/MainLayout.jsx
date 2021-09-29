import Cabeza from "../components/Cabeza";
import PiePagina from "../components/PiePagina";

import React from 'react'

const MainLayout = ({children}) => {
    return (
        <div className="mainContainer">
        <Cabeza></Cabeza>

        <main>{children}</main>

        <PiePagina></PiePagina>            
        </div>
    )
}
export default MainLayout
