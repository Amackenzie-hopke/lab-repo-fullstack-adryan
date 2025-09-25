import { Nav } from './components/navbar/NavBar.tsx'
import { Header } from './components/header/Header.tsx'
import { Footer } from './components/footer/Footer.tsx'
import {Main} from './components/main/Main.tsx'
import './App.css'

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
