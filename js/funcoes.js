//função anonima, callback

/* bt.addEventListener('click',function(){
  helloWorld
}) */

/* function helloWorld(){
  console.log("hello world")
}

helloWorld() */

function soma(n1,n2){
	console.log(n1 + n2)
}

soma(5,2)

function multiplicacao(n1,n2){
	console.log(n1 * n2)
}

multiplicacao(5,2)


/* function soma(n1,n2){
  console.log(n1 + n2)
} */

/* const soma = (n1,n2)=> console.log(n1+n2)

const soma = function(n1,n2){
  console.log(n1+n2)
} */

function resultado(nota,nomeDoAluno){
	if(nota>=6){
  	console.log(nomeDoAluno + " você passou")
  }else{
  	console.log(nomeDoAluno + " você reprovou")
  }
}

resultado(4,"Luciano")

resultado(8,"João")