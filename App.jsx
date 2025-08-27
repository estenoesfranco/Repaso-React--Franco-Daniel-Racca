import { useState } from 'react'
import './App.css'
import Contador from './components/contador'
import Input from './components/input'
import Multiplicador from './components/multiplicador'

function App() {
  return (
    <>
      <h1>Ejercicios React</h1>
      <Contador/>
      <Input/>
      <Multiplicador/>
    </>
  )
}

export default App
