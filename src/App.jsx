import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">      
      <h1 className="title">
          RINIA <span aria-label="emoji" role="img"></span>
      </h1>
      <span>Usuario</span>
      <input type="text" className="new-task"/>
      <br />
      <span>Contraseña</span>
      <input type="text" className="new-task"/>
    </div>
    <br />
    <br />
    
    <div>
      <button className="boton">Ingresar</button>
    </div>
    </>
  )
}

export default App
