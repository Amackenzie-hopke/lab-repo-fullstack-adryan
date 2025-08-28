import { useState } from 'react'
import reactLogo from './assets/react.svg'
import pixelLogo from './assets/images/image.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <img src={pixelLogo} className="logo" alt="pixel river financial logo" />
          <a href="#">Employees</a>
          <a href="#">Organization</a>
        </nav>
      <h1>Pixell River Financial</h1>
      <h2>"where business happens"</h2>
      </header>
    </>
  )
}

export default App
