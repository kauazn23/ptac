function App(){
  const produtos =[
    { id: 1, nome: 'Caneta', preco: 2.5 },
    { id: 2, nome: 'Caderno', preco: 25 },
    { id: 3, nome: 'Lápis', preco: 1.2 },
    { id: 4, nome: 'Borracha', preco: 3.5 }
  ]

  const produtosBaratos = produtos.filter(produto => produto.preco < 10)

  return(
    <div>
      <h1>Produtos</h1>

      <ul>
        {produtosBaratos.map(produto => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco.toFixed(2).replace('.', ',')}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App