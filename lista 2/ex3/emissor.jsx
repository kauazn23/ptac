import { emit } from "./eventbus"

function Emissor(){
  function enviar(){
    emit("mensagem", "Olá do Emissor!")}

  return(
    <div>
      <h2>Emissor</h2>
      <button onClick={enviar}>
        Enviar mensagem
      </button>
    </div>
  )}

export default Emissor