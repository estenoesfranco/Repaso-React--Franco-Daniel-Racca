export default function RenderizarArray() {
    const nombres = ["Franco", "Leandro", "Emanuel", "Lorenzo", "Perón"];
  
    return (
      <div className="">
        <h2 className="">Renderizar un array simple</h2>
        <ul className="">
          {nombres.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
  