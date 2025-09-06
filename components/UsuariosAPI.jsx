import React, { useEffect, useState } from "react";

function ObrasMetAPI() {
  const [obras, setObras] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("drawing");

  const buscarObras = () => {
    setCargando(true);
    setError(null);


    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${busqueda}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta");
        return res.json();
      })
      .then((data) => {
        if (!data.objectIDs || data.objectIDs.length === 0) {
          throw new Error("No se encontraron obras");
        }
        
        const ids = data.objectIDs.slice(0, 10);
        return Promise.all(
          ids.map((id) =>
            fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            ).then((r) => r.json())
          )
        );
      })
      .then((obrasArray) => {
        setObras(obrasArray);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  };

  useEffect(() => {
    buscarObras();
  }, []);

//Profe tiene que dejar el Drawing en el input de busqueda, asi funciona el fetch gracias por probarloo

  return (
    <div>
      <h2>Obras del MET</h2>

     
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar obras (ej: cat, drawing, egypt)"
      />
      <button onClick={buscarObras}>Buscar</button>

      {cargando && <p> Cargando obras...</p>}
      {error && <p> {error}</p>}

      <ul>
        {obras.map((obra) => (
          <li key={obra.objectID} style={{ marginBottom: "20px" }}>
            <strong>{obra.title}</strong> – <em>{obra.artistDisplayName || "Desconocido"}</em>
            {obra.primaryImageSmall && (
              <div>
                <img
                  src={obra.primaryImageSmall}
                  alt={obra.title}
                  style={{ width: "150px", marginTop: "8px" }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ObrasMetAPI;
