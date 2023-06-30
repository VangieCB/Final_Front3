import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'
import '../styles/detail.css'
import '../styles/theme.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const values = useContext(Context)
  const theme = values.theme

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const paramId = useParams()

  const [dentista, setDentista] = useState({})

  useEffect(() => {
    buscarDentista()
  }, [])

  const buscarDentista = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${paramId.id}`)
    const data = await response.json()
    setDentista(data)
  }
  //console.log(dentista)
  return (
    <div className={theme}>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div class="container">
        <div className='dentista-card' >
          <h1>Info Dentista {dentista.name}</h1>
          
          <p>Email: {dentista.email}</p>
          <p>Telefono: {dentista.phone}</p>
          <p>Web-Site: {dentista.website}</p>
        </div>
      </div>

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

    </div>
  )
}

export default Detail