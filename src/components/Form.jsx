import React, { useState } from 'react';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { Formik, Field, ErrorMessage } from 'formik';

const Form = () => {
  const [submittedForm, formChangeSubmitted] = useState(false)
  
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
        user_name:''
      }}
      
      // Name validation (start) ----->
      validate={(results) => {
        let failed = {}

        if (!results.user_name) {
          failed.user_name = 'Sin nombre'
        }
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(results.user_name)) {
          failed.user_name = 'Con nombre pero mal escrito'
        }

        return failed
      }}
      // Name validation (end) ----->

      onSubmit={(results, {resetForm} ) => {
        formChangeSubmitted(true)
        setTimeout(() => formChangeSubmitted(false), 5000)
        resetForm()
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <section className='form-style-container'>
          <form onSubmit={handleSubmit}>
          {/* <form ref={form} onSubmit={sendEmail}> */}
            <div className='input-style'>
              <label for="input">Nombre:</label>
              <Field 
                type="text" 
                placeholder="Aqui tu nombre" 
                name="user_name"
              />
              <ErrorMessage name='user_name' component={() => (
                <div>{errors.user_name}</div>
              )} />
            </div>  

            <div className='input-style'>
              <label for="input">Apellido/s:</label>
              <input type="text" placeholder="Aqui tu apellido/s" name="user_last_name"/>
            </div>

            <div className='input-style'>
              <label for="input">Mail</label>
              <input type="email" placeholder="Aqui tu mail" name="user_email"/>
            </div>

            <div className='input-style'>
              <label for="input">Mensaje</label>
              <textarea name="message" placeholder="Escribe lo que quieras" />
            </div>

            <Button variant="outline-primary" type="submit">Enviar</Button>

            {submittedForm && <div>¡Formulario enviado! :D</div>}
          </form>  
        </section>
      )}
    </Formik>
    
  )
}

export default Form