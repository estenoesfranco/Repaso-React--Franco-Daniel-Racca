import { useState } from "react";

export default function Multiplicador() {
  const [valor, setValor] = useState("");
  const numero = Number(valor);
  const multiplicado = Number.isFinite(numero) ? numero * 2 : 0;

  return (
    <div className="">
      <h2 className="">
        Multiplicador en tiempo real!!!!
      </h2>
      <input
        type="number"
        inputMode="decimal"       
        placeholder="Ingresa un número"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <p>
        <span >Resultado:</span> {multiplicado}
      </p>
    </div>
  );
}
