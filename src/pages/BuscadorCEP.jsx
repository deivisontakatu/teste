import React,{useState}from"react"; // Hook → estado no componente
export default function BuscadorCEP(){
  const[c,setC]=useState(""); // estado: CEP (input controlado)
  const[d,setD]=useState(); // estado: dados da API

  const buscar=()=>fetch(`https://viacep.com.br/ws/${c}/json/`)
    .then(r=>r.json())
    .then(setD); // atualiza estado → re-render

  return(<div>
    <h3>CEP</h3>
    <input value={c} onChange={e=>setC(e.target.value)} /> {/* input controlado */}
    <button onClick={buscar}>OK</button> {/* evento */}
    {d&&!d.erro&&<p>{d.localidade}-{d.uf}</p>} {/* render condicional */}
    {d?.erro&&<p>Erro</p>} {/* optional chaining */}
  </div>);
}