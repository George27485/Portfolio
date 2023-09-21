import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  

  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
