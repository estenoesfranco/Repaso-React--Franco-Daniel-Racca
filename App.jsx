import { useState } from 'react'
import './App.css'
import Contador from './components/contador'
import Input from './components/input'
import Multiplicador from './components/multiplicador'
import Cambiarcolordefondo from './components/cambiarcolordefondo'
import FormularioConAlerta from './components/FormularioConAlerta'
import RenderizarArray from './components/RenderizarArray'



function App() {
  return (
    <>
      <h1>Ejercicios React</h1>
      <Contador/>
      <Input/>
      <Multiplicador/>
      <Cambiarcolordefondo/>
      <RenderizarArray/>
      <FormularioConAlerta/>
      
    </>
  )
}

export default App
