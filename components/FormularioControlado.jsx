import React, { useState } from "react";

function FormularioControlado() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Formulario Controlado</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default FormularioControlado;
