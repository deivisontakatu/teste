import React, { useState } from "react"; // importa React e o Hook useState (permite usar estado em componente funcional)

export default function Contador() {
  const [count, setCount] = useState(0); // cria estado → count = valor atual | setCount = função que atualiza e causa re-render

  return (
    <div>
      <h2>Contador de Cliques</h2>

      <p>{count}</p> {/* JSX: mistura HTML + JS | {count} mostra valor do estado na tela (UI reativa) */}

      <button
        onClick={() => setCount(count + 1)} // evento onClick (evento sintético do React) → altera estado → componente re-renderiza
      >
        Clique
      </button> {/* React atualiza só o que mudou (reconciliação virtual DOM) */}
    </div>
  );
}