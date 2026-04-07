import React, { useState } from "react"; // Hook useState → cria estado no componente

export default function JogoVelha() {
  const [b, setB] = useState(Array(9).fill("")); // estado: tabuleiro
  const [x, setX] = useState(true); // estado: turno (X ou O)

  const play = (i) =>
    !b[i] && ( // só joga se a casa estiver vazia
      setB(
        b.map((v, idx) => (idx === i ? (x ? "X" : "O") : v)) // atualiza posição (imutável)
      ),
      setX(!x) // troca turno → re-render
    );

  const win = ([a, b, c]) => a && a === b && b === c; // verifica linha

  const w =
    win([b[0], b[1], b[2]]) ||
    win([b[3], b[4], b[5]]) ||
    win([b[6], b[7], b[8]]) ||
    win([b[0], b[3], b[6]]) ||
    win([b[1], b[4], b[7]]) ||
    win([b[2], b[5], b[8]]) ||
    win([b[0], b[4], b[8]]) ||
    win([b[2], b[4], b[6]]); // calcula vencedor direto

  return (
    <div>
      <h3>Jogo da Velha</h3>

      <p>
        {w ? `Vencedor: ${w}` : `Vez: ${x ? "X" : "O"}`}
      </p> {/* render condicional */}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,60px)" }}>
        {b.map((v, i) => (
          <button key={i} onClick={() => play(i)} style={{ height: 60 }}>
            {v}
          </button>
        ))} {/* lista com map + key */}
      </div>

      <button
        onClick={() => {
          setB(Array(9).fill(""));
          setX(true);
        }}
      >
        Reset
      </button> {/* reseta estados */}
    </div>
  );
}