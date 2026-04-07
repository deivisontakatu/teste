import React, { useState } from "react";
import Header from "./components/Header";

import Todo from "./pages/Todo";
import Contador from "./pages/Contador";
import JogoVelha from "./pages/JogoVelha";
import Calculadora from "./pages/Calculadora";
import BuscadorCEP from "./pages/BuscadorCEP";

function App() {
  const [page, setPage] = useState("todo");

  const renderPage = () => {
    switch (page) {
      case "todo":
        return <Todo />;
      case "contador":
        return <Contador />;
      case "jogo":
        return <JogoVelha />;
      case "calculadora":
        return <Calculadora />;
      case "cep":
        return <BuscadorCEP />;
      default:
        return <Todo />;
    }
  };

  return (
    <div>
      <Header setPage={setPage} />
      <main style={{ padding: "20px" }}>
        <div className="container">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;