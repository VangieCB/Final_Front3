import React, { useState } from "react";
import '../styles/card.css'
import { Link } from 'react-router-dom'

function Card(props) {

  // Aqui iria la logica para agregar la Card en el localStorage
  const addFav = () => {
    props.add(props.profesional)
  };

  const [isListFav, setisListFav] = useState(props.isFav)

  const toggleFav = () => {
    if (isListFav) {
      props.remove(props.profesional)
      setisListFav(false)
    }
    else {
      props.add(props.profesional)
      setisListFav(true)
    }
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="iconoDentista"></div>
         {/* En cada card deberan mostrar en name - username y el id */}
        <p>{props.profesional.name}</p>
        <p>{props.profesional.username}</p>
        <p>{props.profesional.id}</p>
       

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/dentist/${props.profesional.id}`}>
          <button>Mas Info</button>
        </Link>

        {isListFav ? <button onClick={toggleFav} className="favButton">💗</button> : <button onClick={toggleFav} className="favButton">🤍</button>}

      </div>
    </div>
  );
}

export default Card;
