var botaoInserirTexto = document.getElementById('bt-input')

console.log(botaoInserirTexto)

botaoInserirTexto.onclick = inserirTexto

function inserirTexto() {
    document.getElementById('data').innerHTML = "<h1>Texto inserido</h1>"
}

