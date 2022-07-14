let cinema = "cinehouse";
console.log(cinema)
let catalogo = require("./database/catalogo.json");


let adicionarFilme = (filme) => {
    catalogo.push(filme);

}
//console.log(catalogo)
adicionarFilme({
    
        codigo: 3,
        titulo: "Dune",
        duracao: 245,
        atores: [
            "Timothée Chalamet",
            "Zendaya"],
        anoDeLancamento: 2021,
        emCartaz: false
    
})

//console.log(catalogo)

let buscarFilme = (codigo) => {
  return catalogo.find(filme => filme.codigo === codigo);

}

let alterarStatusEmCartaz = codigo => {
    let filmeBuscado = buscarFilme(codigo)

    if (filmeBuscado) {
        filmeBuscado.emCartaz = !filmeBuscado.emCartaz;
    }
    return filmeBuscado
}

//console.log(alterarStatusEmCartaz(3));

let listarTodosOsFilmes = (filmes) => {
    filmes.forEach(filme =>{
        console.log(`
        filme: ${filme.titulo} 
        duracao: ${filme.duracao} horas 
        atores: ${filme.atores}
        ano de lancamento: ${filme.anoDeLancamento}
        em cartaz: ${filme.emCartaz ? "sim" : "nao"}
        `);
    });

}

//listarTodosOsFilmes(catalogo)

let listarFilmesEmCartaz = () => {
   let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz);
   listarTodosOsFilmes(filmesEmCartaz);
}

//listarFilmesEmCartaz();

let listarFilmesDeLongaDuracao = () => {
    let listarFilmesDeLongaDuracao = catalogo.filter(filme => filme.duracao >= 2)
    listarFilmesEmCartaz(listarFilmesDeLongaDuracao);
}

//listarFilmesDeLongaDuracao();

buscarFilme(2);
