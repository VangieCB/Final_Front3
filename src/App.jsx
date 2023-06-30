import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Detail from './routes/Detail'
import Favs from './routes/Favs'
import { useContext } from 'react'
import { Context } from './Context'


function App() {

  return (

      <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dentist/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} /> 
        </Routes>
      <Footer />   
      </div>

  )
}

export default App
