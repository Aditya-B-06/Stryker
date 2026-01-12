import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer1 from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer1/>
    </>
  )
}

export default App

