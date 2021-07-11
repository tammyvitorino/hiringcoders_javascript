const livros = require('./database')

// receber input do usuário

const readline = require('readline-sync')

const entradaInicial = readline.question("Deseja buscar um livro? S/N")

// Se sim, mostrar categorias disponíveis e perguntar qual categoria
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log("Essas são as categorias disponíveis:")
    console.log('Aventura / ', 'Drama / ', 'Biografia / ', 'Suspense / ', 'Comédia')

    const entradaCategoria = readline.question('Qual categoria você escolhe?')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}
else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log("Esses são os livros disponvéis:")
    console.table(livrosOrdenados)
}
// Se não, mostrar todos os livros em ordem crescente pela quantidade de páginas