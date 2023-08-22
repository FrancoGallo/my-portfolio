import React from 'react'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const NavBar = () => {
  return (
    <nav>
     <img src="images/Icono.svg" alt="Icono" />

     <ul>
        <li><span onClick={() => scrollToSection("start")}>Doc</span></li>
        <li><span onClick={() => scrollToSection("projects")}>Proyectos</span></li>
        <li><span onClick={() => scrollToSection("contact")}>Contacto</span></li>
      </ul> 
    </nav>
  )
}

export default NavBar
