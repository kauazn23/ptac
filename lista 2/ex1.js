import {useState, useEffect} from "react"

function Exercicio1(){
  const [hora, setHora] = useState("")
  const [contador, setContador] = useState(0)
  
  useEffect(() =>{
    console.log("Efeito executado!")
    setHora(new Date().toLocaleTimeString())
  }, [])

  return(
    <div>
      <h2>Exercício 1</h2>
      <p>Hora carregada: {hora}</p>

      <button onClick={() => setContador(contador + 1)}>
        Cliques: {contador}
      </button>
    </div>
  )}

export default Exercicio1