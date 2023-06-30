import React, { useContext } from "react";
import Card from "../utils/Card";
import {useEffect, useState } from 'react'
import { Context } from '../Context'
import '../styles/theme.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const values = useContext(Context)
  const theme = values.theme

  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favoritos')) || [])
  
  const removeFav = (dentist) => {
    setFavs(favs.filter(fav => fav.id !== dentist.id))
  }

  useEffect(() => {
    let arrayJson = JSON.stringify(favs)
    localStorage.setItem('favoritos', arrayJson)
  }, [favs])


  return (
    <div className={theme}>
      <h1>Mis Favs</h1>
      <div className="card-grid">
        {favs.length>0 ? favs.map(dentista => <Card key={dentista.id} remove = {removeFav} profesional={dentista} isFav={true}/>) : <p>No Tenes Favoritos</p> }
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
