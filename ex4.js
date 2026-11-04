for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}
console.log("Fim do loop")
// O let cria uma variável i para cada repetição iniciando em 1.
// Assim cada setTimeout guarda o valor correto.
// Com var, os três callbacks mostrariam 4.