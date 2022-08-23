
var elementos = document.querySelectorAll('.elemento')

var paragrafo2 = document.querySelector('#paragrafo')

var paragrafo = document.getElementById('paragrafo')

paragrafo.addEventListener('click',function(){
	console.log('clicou no paragrafo')
})

elementos.forEach(elemento =>{
	elemento.addEventListener('click',function(){
  	console.log("clicou")
  })
})
