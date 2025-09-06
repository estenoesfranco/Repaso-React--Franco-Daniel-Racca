import { useState } from 'react'
import './App.css'
import Contador from './components/contador'
import Input from './components/input'
import Multiplicador from './components/multiplicador'
import Cambiarcolordefondo from './components/cambiarcolordefondo'
import FormularioConAlerta from './components/FormularioConAlerta'
import RenderizarArray from './components/RenderizarArray'
import ProductosLista from "./components/ProductosLista";
import SaludoConProps from "./components/SaludoConProps";
import FiltroFrutas from "./components/FiltroFrutas";
import TotalPrecios from "./components/TotalPrecios";
import FormularioControlado from "./components/FormularioControlado";
import TareasApp from "./components/TareasApp";
import SupermercadoApp from "./components/SupermercadoApp";
import UsuariosAPI from "./components/UsuariosAPI";

function App() {
  return (
    <>
      <h1>Ejercicios React</h1>

      <div className="seccion">
        <h2>1. Contador</h2>
        <Contador />
      </div>

      <div className="seccion">
        <h2>2. Input y Mostrar Texto</h2>
        <Input />
      </div>

      <div className="seccion">
        <h2>3. Multiplicador</h2>
        <Multiplicador />
      </div>

      <div className="seccion">
        <h2>4. Cambiar Color de Fondo</h2>
        <Cambiarcolordefondo />
      </div>

      <div className="seccion">
        <h2>5. Formulario con Alerta</h2>
        <FormularioConAlerta />
      </div>

      <div className="seccion">
        <h2>6. Renderizar Array</h2>
        <RenderizarArray />
      </div>

      <div className="seccion">
        <h2>7. Lista de Productos</h2>
        <ProductosLista />
      </div>

      <div className="seccion">
        <h2>8. Saludo con Props</h2>
        <SaludoConProps />
      </div>

      <div className="seccion">
        <h2>9. Filtro de Frutas</h2>
        <FiltroFrutas />
      </div>

      <div className="seccion">
        <h2>10. Total de Precios</h2>
        <TotalPrecios />
      </div>

      <div className="seccion">
        <h2>11. Formulario Controlado</h2>
        <FormularioControlado />
      </div>

      <div className="seccion">
        <h2>12. App de Tareas</h2>
        <TareasApp />
      </div>

      <div className="seccion">
        <h2>13. Supermercado App</h2>
        <SupermercadoApp />
      </div>

      <div className="seccion">
        <h2>14. Consumo de API</h2>
        <UsuariosAPI />
      </div>
    </>
  )
}

export default App
