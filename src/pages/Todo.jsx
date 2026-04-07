import React, { useState } from "react"; // importa React e o Hook useState (estado em componentes funcionais)
export default function Todo() {
  const [tasks, setTasks] = useState([]); // estado: array de tarefas | setTasks atualiza o estado (re-renderiza o componente)
  const [input, setInput] = useState(""); // estado: valor do input (componente controlado pelo React)
  const addTask = () => input && ( // função chamada no clique | só executa se houver texto (curto-circuito lógico)
    setTasks([...tasks, input]),   // atualiza estado de forma imutável (spread cria novo array → React detecta mudança)
    setInput("")                   // limpa o input → dispara nova renderização
  );
  return (
    <div>
      <h2>To-Do List</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Nova tarefa" /> {/* valor vem do estado → input controlado | onChange atualiza estado */}
      <button onClick={addTask}>Adicionar</button> {/* evento onClick chama função → React usa eventos sintéticos */}
      <ul>
        {tasks.map((t, i) => <li key={i}>{t}</li>)} {/* renderização de lista → map gera elementos | key ajuda na reconciliação */}
      </ul>
    </div>
  );
}