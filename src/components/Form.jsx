import React from 'react'

const Form = () => {
  return (
    <section className='form-style-container'>
      <form>
        <input type="text" id="name"></input>
        <input type="text" id="lastName"></input>
        <input type="text" id="email"></input>
      </form>

      <div>
        <button>Enviar</button> 
      </div>
    </section>
  )
}

export default Form