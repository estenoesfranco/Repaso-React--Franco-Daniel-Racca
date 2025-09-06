import React, { useState } from "react";

function FiltroFrutas() {
  const [busqueda, setBusqueda] = useState("");
  const frutas = ["Manzana", "Pera", "Banana", "Durazno", "Sandía"];

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Filtro de Frutas</h2>
      <input
        type="text"
        placeholder="Buscar fruta..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul>
        {frutasFiltradas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltroFrutas;
