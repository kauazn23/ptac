import {useState, useEffect} from "react"

function Exercicio2({ nome }){
  useEffect(() =>{
    console.log("Nome atualizado:", nome)
  }, [nome])

  return(
    <div>
      <h2>Exercício 2</h2>
      <p>Nome: {nome}</p>
    </div>
  )}

export default Exercicio2