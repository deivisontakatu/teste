import React, { useState } from "react"; // Hook useState → cria estado no componente

export default function Calculadora() {
  const [v, setV] = useState(""); // estado: valor exibido (string)

  const click = (c) =>
    c === "="
      ? setV(eval(v) + "") // calcula expressão → atualiza estado (re-render)
      : setV(v + c); // concatena valor digitado (input controlado)

  return (
    <div>
      <h3>Calculadora</h3>

      <input value={v} readOnly /> {/* valor vem do estado → React controla */}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,50px)" }}>
        {"789/456*123-0.=+".split("").map((c) => (
          <button key={c} onClick={() => click(c)}>
            {c}
          </button>
        ))} {/* render lista → map + key */}
      </div>

      <button onClick={() => setV("")}>Limpar</button> {/* reseta estado */}
    </div>
  );
}