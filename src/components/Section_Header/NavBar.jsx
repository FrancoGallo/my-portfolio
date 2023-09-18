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
        
        <ul className={`menu-responsive ${menu && 'active'}`}>
          <li onClick={() => scrollToSection("start")}><span>Doc</span></li>
          <li onClick={() => scrollToSection("projects")}><span >Proyectos</span></li>
          <li onClick={() => scrollToSection("contact")}><span >Contacto</span></li>
        </ul> 

        {/* <button onClick={showMenu}>BOTON</button> */}

        <div class={`icon-nav ${menu && 'open'}`} onClick={showMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
  )
}

export default NavBar
