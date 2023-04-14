import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/Main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Views/Hero'
import Home from './Views/Home'
import Collections from './Views/Collections'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Hero />}/>
          <Route path='/Home' element={ <Home/> }/>
          <Route path='/Collections' element={ <Collections/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
