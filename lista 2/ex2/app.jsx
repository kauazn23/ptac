import {useState} from "react"
import Exercicio2 from "./Exercicio2"

function App(){
  const [nome, setNome] = useState("João")

  return(
    <div>
      <Exercicio2 nome={nome}/>

      <button onClick={() => setNome("Maria")}>
        Alterar nome
      </button>
    </div>
  )}

export default App