import React, { useState } from "react";

function TotalPrecios() {
  const [precios] = useState([100, 250, 300, 150]);

  const total = precios.reduce((acc, precio) => acc + precio, 0);

  return (
    <div>
      <h2>Total de Precios</h2>
      <p>Precios: {precios.join(", ")}</p>
      <strong>Total: ${total}</strong>
    </div>
  );
}

export default TotalPrecios;
