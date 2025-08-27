import { useState } from "react";

export default function CambiarColorFondo() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="rounded-2xl shadow p-6 border border-gray-200"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-xl font-semibold mb-4"> Cambiar color de fondo</h2>
      <select
        className="border px-3 py-2 rounded-xl"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="white">Blanco</option>
        <option value="lightblue">Celeste</option>
        <option value="lightgreen">Verde</option>
        <option value="lightcoral">Rojo coral</option>
        <option value="khaki">Amarillo</option>
      </select>
    </div>
  );
}
