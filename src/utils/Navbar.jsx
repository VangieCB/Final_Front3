import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { toggleTheme } = useContext(Context);

  return (
    <div className='navbar'>
    <nav>

      <div className='logo-clinica' ></div>

      <div className='options'>
        <Link to = './'>
        <p>Home</p>
        </Link>

        <Link to = './contact'>
        <p>Contact</p>
        </Link>

        <Link to = './favs'>
        <p>Favs</p>
        </Link>
      </div>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='theme-button' onClick={toggleTheme}>Cambiar Tema</button>
    </nav>
    </div> 
  )
}

export default Navbar