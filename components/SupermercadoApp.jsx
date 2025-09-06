import React, { useState } from "react";

function Producto({ producto, marcarComprado, eliminarProducto }) {
  return (
    <li>
      {producto.nombre} (${producto.precio}) - {producto.categoria}
      {!producto.comprado && (
        <button onClick={() => marcarComprado(producto.id)}>🛒 Comprar</button>
      )}
      <button onClick={() => eliminarProducto(producto.id)}>🗑️ Eliminar</button>
    </li>
  );
}

function SupermercadoApp() {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    categoria: "Otros",
  });

  const manejarCambio = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.precio) return;
    const nuevoProducto = {
      id: Date.now(),
      nombre: formData.nombre,
      precio: parseFloat(formData.precio),
      categoria: formData.categoria,
      comprado: false,
    };
    setProductos([...productos, nuevoProducto]);
    setFormData({ nombre: "", precio: "", categoria: "Otros" });
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const marcarComprado = (id) => {
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, comprado: true } : p
      )
    );
  };

  return (
    <div>
      <h2>🛍️ Lista de Supermercado</h2>
      <form onSubmit={agregarProducto}>
        <input
          type="text"
          name="nombre"
          placeholder="Producto"
          value={formData.nombre}
          onChange={manejarCambio}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={manejarCambio}
        />
        <select
          name="categoria"
          value={formData.categoria}
          onChange={manejarCambio}
        >
          <option>Otros</option>
          <option>Lácteos</option>
          <option>Carnes</option>
          <option>Verduras</option>
          <option>Bebidas</option>
        </select>
        <button type="submit">Agregar</button>
      </form>

      <h3>Pendientes</h3>
      <ul>
        {productos.filter((p) => !p.comprado).map((p) => (
          <Producto
            key={p.id}
            producto={p}
            marcarComprado={marcarComprado}
            eliminarProducto={eliminarProducto}
          />
        ))}
      </ul>

      <h3>Comprados</h3>
      <ul>
        {productos.filter((p) => p.comprado).map((p) => (
          <Producto
            key={p.id}
            producto={p}
            marcarComprado={marcarComprado}
            eliminarProducto={eliminarProducto}
          />
        ))}
      </ul>
    </div>
  );
}

export default SupermercadoApp;
