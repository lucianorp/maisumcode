var nome = "Luciano"
var idade = 19
//var nome,idade,genero,telefone
var genero = "F"
var nota = 7

if (nota >=6){
	console.log("aprovado")
} else if(nota >=4){
	console.log('recuperação')
} else {
	console.log('reprovado')
}



if (idade >= 18 && genero == "M"){
	console.log("vai alistar")
} else {
	console.log('não vai alistar')
}

if (nota >=6 || idade >=18 || genero == "M") {
	console.log("é permitido jogar")
} else {
	console.log('não é permitido jogar')
}

