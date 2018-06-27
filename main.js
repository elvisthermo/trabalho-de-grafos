let menu = require('node-menu');
const colors = require('colors');
let Graph = require("./graphs.js")
let menu2 = menu.menu2;

let g = Graph.g;
let grafo1 = new Graph(5);

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

menuIniciar();


function menuIniciar() {
        menu.resetMenu();
        var testObject = new TestObject();
        menu.addDelimiter('-', 40, colors.black.bgCyan('Trabalho de grafos( ͡° ͜ʖ ͡°) '))
            .addItem(
                'Grafo direcionado',

                function () {
                    menuPrincipal();

                })
            .addItem(
                'Grafo não direcionado', function () {
                    menuPrincipal();

                })

            .disableDefaultHeader()
            .customPrompt(function () {
                process.stdout.write("\nEscolha sua alternativa:\n");
            })
            .disableDefaultPrompt()
            .start();

}

function menuPrincipal() {
    menu.resetMenu();
    var testObject = new TestObject();
    menu.addDelimiter('-', 40, colors.black.bgCyan('Trabalho de grafos ( ͡° ͜ʖ ͡°) '))
        .addItem(
            'Montar grafo',

            function () {
                submenu1();

            })
        .addItem(
            "buscas em grafos", function () {
                submenu2();

            })
        .addItem(
            'custo Minimo', function () {
                submenu3();

            })
        .addItem(
            'Arvore Geradora Minima', function () {
                submenu4()

            })
        .addItem(
            'Voltar', function () {
                menuIniciar();

            })
        .disableDefaultHeader()
        .customPrompt(function () {
            process.stdout.write("\nEscolha sua alternativa:\n");
        })
        .disableDefaultPrompt()
        .start();
}

function submenu1() {
    menu.resetMenu();
     menu.addDelimiter('-', 40, colors.black.bgBlue('Estrutura do Grafo'))
        .addItem(
            'Adicionar vertices',
            function () {

            })
        .addItem(
            'Adicionar arestas',
            function () {

            })
        .addItem(
            'remover Vertices',
            function () {

        }).addItem(
        'Remover Arestas',
        function () {

        }).addItem(
             'Mostrar Grafo',
             function () {
             })
         .addItem(
             'voltar',
             function () {
                 menuPrincipal()
             })
         .start();
}

function submenu2() {
    menu.resetMenu();
    menu.addDelimiter('-', 40, colors.black.bgGreen('Busca em Grafos'))
        .addItem(
            'Busca em profundidade',
            function () {

            })
        .addItem(
            'Busca em largura',
            function () {

            })
        .addItem(
            'Ordenação topologica',
            function () {

            }).addItem(
        'Componentes fortemete conexos',
        function () {
        })
        .addItem(
        'Chekar vertices',
        function () {
    })
    .addItem(
        'Chekar arestas',
        function () {
    })
    .addItem(
            'Grau do vertice',
            function () {
            })
    .addItem(
          'Visinhanca do vertice',
          function () {
          })
    .addItem(
            'voltar',
            function () {
                menuPrincipal()
            })
        .start();
}

function submenu3() {
    menu.resetMenu();
    menu.addDelimiter('-', 40, colors.black.bgRed('Custo Minimo'))
        .addItem(
            'Dijkstra',
            function () {

            })
        .addItem(
            'Bellman-ford',
            function () {

            })
        .addItem(
            'Floyd-warshall',
            function () {

            })
        .addItem(
            'voltar',
            function () {
                menuPrincipal()
            })
        .start();
}

function submenu4() {
    menu.resetMenu();
    menu.addDelimiter('-', 40, colors.black.bgYellow('Arvore Geradora Minima'))
        .addItem(
            'Prim',
            function () {

            })
        .addItem(
            'Kruslkall',
            function () {

            })
        .addItem(
            'voltar',
            function () {
                menuPrincipal()
            })
        .start();
}