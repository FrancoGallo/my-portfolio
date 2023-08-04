// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';

const Form = () => {

  // Send function (start) ----->
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_a8gt7hr', 'template_oxeenlb', form.current, 'T_zupu-XKSJ-dgvid')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }
  // Send function (end) ----->

  return (
    <Formik
      initialValues={{
        name: '',
        email: ''
      }}

      onSubmit = {() => {console.log('Formulario enviado')}}
    >
      {({ values, handleSubmit, handleChange }) => (
        <section className='form-style-container'>
          <form onSubmit={handleSubmit}>
          {/* <form ref={form} onSubmit={sendEmail}> */}
            <div className='input-style'>
              <label for="input">Nombre:</label>
              <input 
                type="text" 
                placeholder="Aqui tu nombre" 
                name="user_name"
                value={values.name}
                onChange={handleChange}
              />
            </div>  

            <div className='input-style'>
              <label for="input">Apellido/s:</label>
              <input type="text" placeholder="Aqui tu apellido/s" name="user_last_name"/>
            </div>

            <div className='input-style'>
              <label for="input">Mail</label>
              <input 
                type="email" 
                placeholder="Aqui tu mail" 
                name="user_email"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            <div className='input-style'>
              <label for="input">Mensaje</label>
              <textarea name="message" placeholder="Escribe lo que quieras" />
            </div>

            <Button variant="outline-primary" type="submit">Enviar</Button>
          </form>  
        </section>
      )}
    </Formik>
    
  )
}

export default Form