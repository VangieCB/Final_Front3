import React from 'react'
import Form from '../utils/Form'
import { useContext } from 'react'
import { Context } from '../Context'
import '../styles/form.css'
import '../styles/theme.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Contact() {

  const values = useContext(Context)
  const theme = values.theme

  return (

    <div className={`'contact-container' ${theme}`} >

      <div className='box-superior'>
        <h2>Mas info?</h2>
        <p>Envianos tu consulta</p>
      </div>
      
      <Form />

    </div>
  )
}

export default Contact