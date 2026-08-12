const produtos = [
  { id: 1, nome: 'Caneta', preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 25 },
  { id: 3, nome: 'Lápis', preco: 1.2 }
]

function buscarProduto(id){
  return new Promise(resolve =>{
    setTimeout(() =>{
      const produto = produtos.find(produto => produto.id === id)
      resolve(produto)
    }, 300)})
}

async function buscar(){
  const produto = await buscarProduto(2)
  console.log(produto)}
  
buscar()