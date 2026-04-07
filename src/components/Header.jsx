import React from "react";

export default function Header({ setPage }) {
  return (
    <header style={styles.header}>
      <h1>Meu Projeto React</h1>
      <nav>
        <button onClick={() => setPage("todo")}>To-Do List</button>
        <button onClick={() => setPage("contador")}>Contador de Cliques</button>
        <button onClick={() => setPage("jogo")}>Jogo da Velha</button>
        <button onClick={() => setPage("calculadora")}>Calculadora</button>
        <button onClick={() => setPage("cep")}>Buscador de CEP</button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: "#282c34",
    padding: "20px",
    color: "white",
    textAlign: "center"
  }
};