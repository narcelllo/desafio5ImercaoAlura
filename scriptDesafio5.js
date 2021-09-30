var listaFilmes = [
    {id:1, url:"https://image.tmdb.org/t/p/w342/noVm3w6RiIftkvLZbi7upH2Ws0S.jpg", nome: "teste1"},
    {id:2, url:"https://image.tmdb.org/t/p/w342/qiMLmNfQGRNIccK57MKGS8tUCm5.jpg", nome: "teste2"},
    {id:3, url:"https://image.tmdb.org/t/p/w342/eXpSZV9ZCyXT4fRmVd1PqYviltG.jpg", nome: "teste3"}   
];

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var filmeNome = document.getElementById("nomeFilme").value;
    /* var apagarFilmes = []; */


    if (filmeFavorito.endsWith(".jpg")) {
        let filme = {id: listaFilmes.length + 1, url: filmeFavorito, nome: filmeNome}
        listaFilmes.push(filme);
        console.log(listaFilmes);
        listaFilmesNaTela(filme);

    } else {
        alert("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
    

    /* for(var i = 0; i < apagarFilmes.length; ++i) {
        (apagarFilmes[i] = filmeNome);
        console.log(apagarFilmes);
    }
    guardarNome(apagarFilmes); */

}


function listaFilmesNaTela(filme) {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    /* var elementoListaNome = document.getElementById("listaNomes"); */
    
    var elementoFilmeFavorito = "<div id='" + filme.id + "'><img src=" + filme.url + "><h3>" + filme.nome + "</h3></div>";
    
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
    
}
listaFilmes.forEach(filme => {
    listaFilmesNaTela(filme);
})
/* Array.from(document.getElementById("listaFilmes").children).forEach(el =>{if(el.id == 2){el.remove()}}) */

function apagaFilme() {
    let id = document.getElementById("apagaFilme").value;
    let lista = Array.from(document.getElementById("listaFilmes").children);
    
    lista.forEach(el =>{
        if(el.id == id){
            el.remove()
        }
    })
    document.getElementById("apagaFilme").value = "";
}
/* function guardarNome(apagarFilmes){
    var nomeApagar = [apagarFilmes];
    console.log(nomeApagar.length);

    for(var i = 0; i < nomeApagar.length; ++i){
        nomeApagar[i] = apagarFilmes;
        console.log(nomeApagar.value);
    }    
}

 function apagaFilme(apagarFilmes) {
       var elementoApagarFilme = document.getElementById("apagaFilme").value;
     
     for(var i = 0; i < apagarFilmes.length; ++i){
            if (apagarFilmes[i] == elementoApagarFilme) {
                apagarFilmes[i] = "apagou";
            } else {
                alert("Nome do filme não cadastrado");
            }      

        }
        console.log(filmesApagar);
    } */
     