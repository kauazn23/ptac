import { useState, useEffect } from "react"
import { subscribe } from "./eventbus"

function Receptor(){
  const [mensagem, setMensagem] = useState("");

  useEffect(() =>{
    const cancelar = subscribe("mensagem", (dados) =>{
      setMensagem(dados)
    })

    return cancelar
  }, [])

  return(
    <div>
      <h2>Receptor</h2>
      <p>Mensagem: {mensagem}</p>
    </div>
  )}

export default Receptor