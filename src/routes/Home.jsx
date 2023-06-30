import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import Card from '../utils/Card'
import '../styles/home.css'
import '../styles/theme.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const values = useContext(Context)

  const listadoDentista = values.data
  console.log(listadoDentista)

  const theme = values.theme

  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favoritos')) || [])

  const addFavs = (dentist) => { setFavs([...favs, dentist]) }

  const removeFav = (dentist) => {
    setFavs(favs.filter(fav => fav.id !== dentist.id))
  }

  useEffect(() => {
    let arrayJson = JSON.stringify(favs)
    localStorage.setItem('favoritos', arrayJson)
  }, [favs])

  return (
    <main className={`"home-container" ${theme}`}>

      <div className='contaier'>
        <div className='card-grid'>

          {listadoDentista.length > 0 ? listadoDentista.map((dentista) => {
            return <Card add={addFavs} remove={removeFav} isFav={favs.some((fav) => fav.id === dentista.id)} profesional={dentista} key={dentista.id} />
          }) : undefined}

        </div>
      </div>

    </main>
  )
}

export default Home