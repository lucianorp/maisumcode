//operadores matemáticos

// let num1 = 4
// let num2 = 6
// let num3 = 3
// let result = num2 * (num3 + num1) // + - * / % ** ()

// console.log(result)


//template string

var nome = "João"
var idade = 39

var num = 30
var num2 = 50

//var frase = "Olá meu nome é " + nome + " e tenho " + idade + " anos"

var frase = `Olá meu nome é ${nome} e tenho ${idade} anos. No valor calculado, o resultado é ${num + num2} ` // template string

console.log(frase)


//operadores de comparação

//operadores de comparação

//> < >= <= == != === !==

var num = 3
var num2 = "3"

var result = num != num2 // true ou false

console.log(result)



// operadores lógicos

// && - operador de conjunção (and)
// || - operador de disjunção (or)
// ! - operador de negação (not)

var estoque = true

var semEstoque = !estoque //not

var x = 5
var y = 3
var z = 7
var result = x > y && y < z //T e T // and
var result2 = x > y || y > z //T e F //OR

console.log(result2)
