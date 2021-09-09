import React from 'react'
import logo from '../../Images/logo.svg'
import './styles.css'
import {Link} from 'react-router-dom'

export default function MenuLateral() {
    return (
        <div className="wrapperMenu">
           <aside>
               <div>
                   <img src={logo} alt="Logo Sotran" />
               </div>
               <nav className="links">
                   <Link className="link" to="/scrap-engine" >Scrap Engine</Link>
                   <Link className="link" to="/parametros" >Parâmetros</Link>
               </nav>
           </aside>
        </div>
    )
}