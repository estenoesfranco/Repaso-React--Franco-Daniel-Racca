import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h2 >Mostrar texto</h2>
      <div>
        <input     
          placeholder="Escribe algo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={() => setTexto(input)}
        >
          Mostrar
        </button>
      </div>
      {texto !== "" && (
        <p >
          <span >Pusiste:</span> {texto}
        </p>
      )}
    </div>
  );
}
