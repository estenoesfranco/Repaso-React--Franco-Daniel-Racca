import React from "react";

function Saludo({ nombre }) {
  return <p>Hola, ¡{nombre}! como tas</p>;
}

function SaludoConProps() {
  return (
    <div>
      <h2>Saludos</h2>
      <Saludo nombre="Franco" />
      <Saludo nombre="María" />
      <Saludo nombre="Ángel" />
    </div>
  );
}

export default SaludoConProps;
