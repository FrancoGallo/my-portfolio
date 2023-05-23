import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to='/start'>Inicio</Link></li>
            <li><Link to='/projects'>Proyectos</Link></li>
            <li><Link to='/contact'>Contacto</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar