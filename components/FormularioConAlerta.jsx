import { useState } from "react";

export default function FormularioConAlerta() {
  const [texto, setTexto] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      alert("Por favor ingresa un texto");
    } else {
      alert(`Gigachad musculoso te dice: ${texto}`);
    }
  };

  return (
    <div className="">
      <h2 className=""> Formulario con alerta</h2>
      <form onSubmit={manejarSubmit} className="flex gap-3">
        <input
          className=""
          placeholder="Escribe algo..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          type="submit"
          className=""
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
