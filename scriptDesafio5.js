var listaFilmes = [
    { id: 1, url: "https://image.tmdb.org/t/p/w342/noVm3w6RiIftkvLZbi7upH2Ws0S.jpg", nome: "teste1" },
    { id: 2, url: "https://image.tmdb.org/t/p/w342/qiMLmNfQGRNIccK57MKGS8tUCm5.jpg", nome: "teste2" },
    { id: 3, url: "https://image.tmdb.org/t/p/w342/eXpSZV9ZCyXT4fRmVd1PqYviltG.jpg", nome: "teste3" }
];

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var filmeNome = document.getElementById("nomeFilme").value;

    if (filmeFavorito.endsWith(".jpg")) {
        let filme = { id: listaFilmes.length + 1, url: filmeFavorito, nome: filmeNome }
        listaFilmes.push(filme);
        
        listaFilmesNaTela(filme);


    } else {
        alert("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
}

function listaFilmesNaTela(filme) {
    var elementoListaFilmes = document.getElementById("listaFilmes");

    var elementoFilmeFavorito = "<div id='" + filme.id + "'><img src=" + filme.url + "><h3>" + filme.nome + " ID: " 
    + filme.id + "</h3><button onClick='btnApagaFilme(" + filme.id + ")'>Apagar Filme</button></div>";

    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}

listaFilmes.forEach(filme => {
    listaFilmesNaTela(filme);
})
/* Array.from(document.getElementById("listaFilmes").children).forEach(el =>{if(el.id == 2){el.remove()}}) */

function apagaFilme() {
    let id = document.getElementById("apagaFilme").value;
    let lista = Array.from(document.getElementById("listaFilmes").children);
    let invalido = true
    lista.forEach(el => {
        if (el.id == id) {
            el.remove()
            invalido = false
        }
    })
    if(invalido == true) {
        alert("ID invalido")
    }
    document.getElementById("apagaFilme").value = "";
}

function btnApagaFilme(id) {
    let lista = Array.from(document.getElementById("listaFilmes").children);
    lista.forEach(el => {
        if (el.id == id) {
            el.remove()
            }
    })
  
}