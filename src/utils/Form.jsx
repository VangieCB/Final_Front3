import React from "react";
import '../styles/form.css'
import { useState } from 'react'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  const [error, setError] = useState('')
  const [submitOk, setSubmitOk] = useState('')

  const handleName =(e) => {
    setSubmitOk (false)
    setError (false)
    setNombre(e.target.value)
  }

  const handleEmail =(e) =>{
    setSubmitOk (false)
    setError (false)
    setEmail(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (nombre.trim().length<6 || email===""){
      setError(true)
    }
    else{
      setSubmitOk(true)
    }
  }

  return (
    <div className="componente-form" >

      <form onSubmit={handleSubmit}>

        <div className="inputbox">
          <label htmlFor="nombreCompleto">Nombre:</label>
          <input type="text" name="nombreCompleto" id="nombreCompleto" 
          placeholder='Ingrese Nombre y Apellido' 
          value={nombre}
          onChange={handleName}/>
        </div>

        <div className="inputbox">
          <label htmlFor="email">Correo:</label>
          <input type="email" name='email' id="email" 
          placeholder='Ingrese su correo electronico' 
          value={email} 
          onChange={handleEmail}/>
        </div>

        <button type='submit'> Enviar </button>

      </form>

      {error ? <div className="submit-error"><p>Por favor verifique su información nuevamente</p> </div>: undefined}
      {submitOk ? <div className="submit-ok"><p>Gracias {nombre}, te contactaremos cuanto antes vía mail</p></div> : undefined}

    </div>
  );
};

export default Form;
