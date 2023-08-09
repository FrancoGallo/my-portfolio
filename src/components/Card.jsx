import React from 'react'
import { getFirestore } from 'firebase/firestore'

const Card = () => {
  console.log(getFirestore())

  return (
    <section className='card-style-container'>
      <div className='div-style-image'>
        <img src="images/foto 1.jpg" alt="" />
      </div>
      
      <div className='div-style-description'>
        <a href='https://www.youtube.com/'>Enlace al proyecto</a>
        <p>
          <b>Breve descripcion del proyecto</b> 
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae quis dolores rem consectetur quaerat. Officiis, illo. Ea tempora, excepturi non, possimus aliquam quos repellat a numquam ab amet deserunt.
        </p>
        <a href='https://github.com/FrancoGallo'>Enlace al GitHub</a>
      </div>
    </section>
  )
}

export default Card