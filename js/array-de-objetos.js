const produtos = [
  {
  	nome:"arroz",
    preco:15.00,
    origem:{
    	cidade:"Goiânia",
        endereco:{
            rua:"rua x"
        }
    }
  },
  {
    nome:"feijão",
    preco:7.00
  },
  {
    nome:"macarrao",
    preco: 5.00
  }
]

//console.log(produtos[0].origem.endereco.rua)

produtos.map(produto => console.log(produto.nome))
