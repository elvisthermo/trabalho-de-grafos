let menu = require('node-menu');
let Graph = require("./graphs.js")

let g = Graph.g;
let grafo1 = new Graph(5);
//console.log(grafo1);

console.log("-montar grafo:");
console.log("1 -grafo direcionado");
console.log("2 -grafo não direcionado");
console.log("0 - exit");

console.log("1 - Adicionar Vertices");
console.log("2 - Adicionar Arestas");
console.log("2 - Remover Arestas");
console.log("3 - Chekar aresta");
console.log("4 - Grau vertice");
console.log("5 - Remover Vertices");
console.log("0 - exit");

console.log("1-  Busca em largura");
console.log("2 - Busca em profundidade");
console.log("3 - Ordenação topologica");
console.log("4 - Djsktra");
console.log("5 - Bellman-ford");
console.log("6 - Floyd-warshall");
console.log("7 - Componentes fortemete conexos");
console.log("7 - é Euleriano");
console.log("9 - Prim");
console.log("8 - Kruskall");
console.log("0 - exit");
/*
console.log("1 -buscas");
console.log("2 -caminho minimo");
console.log("3 -Arvore geradora Minima");
*/

/*
let resp;

switch (resp) {
    case 0:
        break;
    case 1:

        break;
    case 2:

        break;
    case 3:

        break;
    case 4:

        break;
    case 5:

        break;
    case  6:

}
*/

//console.log(graph);
//g = new graph(1);
var TestObject = function() {
    var self = this;
    self.fieldA = 'FieldA';
    self.fieldB = 'FieldB';
}

TestObject.prototype.printFieldA = function() {
    console.log(this.fieldA);
}

TestObject.prototype.printFieldB = function(arg) {
    console.log(this.fieldB + arg);
}

var testObject = new TestObject();
menu.addDelimiter('-', 40, 'Trabalho de grafos')
    .addItem(
        'Montar grafo',
        function() {
            console.log('1 - Adicionar vertices ');
            console.log('2 - Adicionar arrestas');
            console.log('3 - Remover Vertices');
            console.log('4 - Remover Remover Aresta');
            console.log("0 - exit");
        })
    .addItem(
        "buscas em grafos",function(){
            console.log("1-  Busca em largura");
            console.log("2 - Busca em profundidade");
            console.log("3 - Ordenação topologica");
            console.log("4 - Componentes fortemete conexos");
            console.log("5 - Chekar vertices");
            console.log("6 - Chekar arestas");
            console.log("7 - Grau verice");
            console.log("8 - Vizinhança do vertice");

            console.log("0 - exit");
        })
    .addItem(
        'custo Minimo',function(){
            console.log("1 - Dijkstra");
            console.log("2 - Bellman-ford");
            console.log("3 - Floyd-warshall");
            console.log("0 - exit");

        })
    .addItem(
        'Arvore Geradora Minima',function(){
            console.log("1 - Prim");
            console.log("2 - Kruskall");
            console.log("0 - exit");

        })
     .disableDefaultHeader()
    .customPrompt(function() {
         process.stdout.write("\nEnter your selection:\n");
     })
    .disableDefaultPrompt()
    .start();
