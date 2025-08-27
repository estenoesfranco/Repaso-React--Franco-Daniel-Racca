import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <div >
        <span >{count}</span>
        <button         
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
