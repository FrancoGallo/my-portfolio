import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a8gt7hr', 'template_oxeenlb', form.current, 'T_zupu-XKSJ-dgvid')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className='form-style-container'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='input-style'>
          <label for="input" className='text'>Nombre:</label>
          <input type="text" placeholder="Aqui tu nombre" name="user_name" className='input'/>
        </div>
        <div className='input-style'>
          <label for="input" className='text'>Apellido/s:</label>
          <input type="text" placeholder="Aqui tu apellido/s" name="user_last_name" className='input'/>
        </div>
        <div className='input-style'>
          <label for="input" className='text'>Mail</label>
          <input type="text" placeholder="Aqui tu mail" name="user_email" className='input'/>
        </div>
        <div className='input-style'>
          <label for="input" className='text'>Mensaje</label>
          <textarea name="message" placeholder="Escribe lo que quieras" className='input' />
          {/* <input type="email" name="user_email" /> -- Mensaje no tiene input, este ej es de mail */}
        </div>
        <Button variant="outline-primary" type="submit">Enviar</Button>
      </form>  
    </section>
  )
}

export default Form