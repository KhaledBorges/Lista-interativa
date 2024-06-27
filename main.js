//Vai me deixar adicionar itens na lista com a tecla "enter"
document.querySelector(".palavraInput").addEventListener
("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("botaoInserir").click();
    }
});

let palavras = [];

//função responsável por inserir uma palavra
function inserir() {
    //Vai pegar o valor do input
    let lista = document.querySelector(".palavraInput");
    let valorLista = lista.value;

    //Condicional caso nada seja escrito no input
    if(valorLista.length == 0) {
        alert ("Você não digitou nada!")
    }
    else {
    //Essas 3 linhas vão, respectivamente: adicionar a palavra escrita no input ao array, colocar na lista a última palavra e, apagar o conteúdo do input.
    palavras.push(valorLista);

    document.querySelector(".palavrasEscritas").innerHTML = palavras;

    lista.value = "";
}
}


//função responsável por retirar a última palavra
function retirar() {
    if (palavras.length == 0) {
        alert("Não há nada para retirar.")
} else {
    palavras.pop()
    document.querySelector(".palavrasEscritas").innerHTML = palavras;
}

}