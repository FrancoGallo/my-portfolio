import { useState } from 'react'

const NavBar = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      showMenu()
    }
  }

  return (
      <nav>
        <div className='icon-code'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
          </svg>
        </div>
        
        <ul className={menu ? 'menu-open' : 'menu-closed'}>
          <li><span onClick={() => scrollToSection("start")}>Doc</span></li>
          <li><span onClick={() => scrollToSection("projects")}>Proyectos</span></li>
          <li><span onClick={() => scrollToSection("contact")}>Contacto</span></li>
        </ul> 

        <button onClick={showMenu}>BOTON</button>

        <div className={`menu-background ${menu ? 'active' : ''}`}></div>
    </nav>
  )
}

export default NavBar
