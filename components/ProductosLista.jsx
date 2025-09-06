import React from "react";

function ProductosLista() {
  const productos = [
    { item: "Pan", precio: 120 },
    { item: "Leche", precio: 250 },
    { item: "Queso", precio: 500 },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((prod, index) => (
          <li key={index}>
            {prod.item} - ${prod.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductosLista;
