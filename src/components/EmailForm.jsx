import React, { useState } from 'react';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EmailForm = () => {
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
        user_name:'',
        user_last_name:'',
        user_email:'',
        message:''
      }}
      
      // Validations (start) ----->
      validate={(results) => {
        let failed = {}

        // Name validation
        if (!results.user_name) {
          failed.user_name = 'Sin nombre'
        }
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(results.user_name)) {
          failed.user_name = 'Con nombre pero mal escrito'
        }

        // Last name validation
        if (!results.user_last_name) {
          failed.user_last_name = 'Sin apellido'
        }
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(results.user_last_name)) {
          failed.user_last_name = 'Con apellido pero mal escrito'
        }

        // Email validation
        if (!results.user_email) {
          failed.user_email = 'Sin mail'
        }
        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(results.user_email)) {
          failed.user_email = 'Ingrese mail correctamente'
        }

        // Message validation
        if (!results.message) {
          failed.message = 'Escribi algo, gil! >:v'
        }

        return failed
      }}
      // Validations (end) ----->

      onSubmit={(results, {resetForm} ) => {
        formChangeSubmitted(true)
        setTimeout(() => formChangeSubmitted(false), 5000)
        resetForm()
      }}
    >
      {({ errors }) => (
        <div className='form-style-container'>
          <Form>
          {/* <form ref={form} onSubmit={sendEmail}> */}
            <div className='input-style'>
              <label for="input">Nombre/s:</label>
              <Field 
                type="text" 
                placeholder="Aqui tu nombre" 
                name="user_name"
              />
              <ErrorMessage name='user_name' component={() => (
                <div className='error-message-style'>{errors.user_name}</div>
              )} />
            </div>  

            <div className='input-style'>
              <label for="input">Apellido/s:</label>
              <Field 
                type="text" 
                placeholder="Aqui tu apellido/s" 
                name="user_last_name"
              />
              <ErrorMessage name='user_last_name' component={() => (
                <div className='error-message-style'>{errors.user_last_name}</div>
              )} />
            </div>

            <div className='input-style'>
              <label for="input">Mail</label>
              <Field 
                type="email" 
                placeholder="Aqui tu mail" 
                name="user_email"
              />
              <ErrorMessage name='user_email' component={() => (
                <div className='error-message-style'>{errors.user_email}</div>
              )} />
            </div>

            <div className='input-style'>
              <label for="input">Mensaje</label>
              <Field
                type="textera"
                placeholder="Escribe lo que quieras" 
                name="message" 
              />
              <ErrorMessage name='message' component={() => (
                <div className='error-message-style'>{errors.message}</div>
              )} />
            </div>

            <Button variant="outline-primary" type="submit">Enviar</Button>

            {submittedForm && <div className='submitted-form-style'>¡Formulario enviado! :D</div>}
          </Form>  
        </div>
      )}
    </Formik>
  )
}

export default EmailForm