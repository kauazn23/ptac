async function exemplo(){
    console.log("B")

    await null

    console.log("D")
}
console.log("A")

exemplo()
console.log("C")
// O código antes do await executa normalmente.
// O await pausa a continuação da função async,
// que será executada como uma microtask.
// Por isso, o console.log("C") aparece antes de "D"