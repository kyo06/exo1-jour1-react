import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Badge from './components/Badge'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Formateur</h1>
          <p>
          { new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }
          </p>
          <p>
            Bienvenue dans ma première app React !
          </p>
          <Badge text="React" color="#61DAFB" />
          <Badge text="Vite" color="#16d837" />
        </div>
      </section>
    </>
  )
}

export default App
