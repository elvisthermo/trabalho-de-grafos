let menu = require('node-menu');
const colors = require('colors');
let Graph = require("./graphs.js")
const readline = require('readline');
var clear = require('clear');

let grafo;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function addV() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite a quantidade de vertices : ', answer);
    function answer(response) {
        grafo = new Graph(response);
        console.log("quantidade de vertices definida");
        //addV2();
        //submenu1();

    }
    function addV2() {
        var response = rl.question('Digite os vertices : ', answer);
        function answer(response) {
            let edge = response.split();

            grafo = new Graph(edge.length);
            grafo.addEdge(edge[0],edge[1],edge[2]);
            console.log("aresta adicionada"+response);
            submenu1();
            //process.exit(0);
        }
    }
}

function addV2() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite os vertices : ', answer);
    function answer(response) {
        let vertices = response.split(',');
        console.log(vertices);
        grafo = new Graph(vertices.length);
        console.log("aresta adicionada"+response);
        for (let i = 0; i <vertices.length ; i++) {
            grafo.addVertex(vertices[i]);
        }
        //grafo.addVertex(1);
        //grafo.addVertex(2);
        //grafo.addVertex(3);

        submenu1();
        //process.exit(0);
    }
}

function chekarGrau(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite o vertice : ', answer);
    function answer(response) {

        grafo.grauLista(response);
        submenu1();
    }
}
function chekarVertice() {

}

function aresta(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite a arresta v1,v2,valor : ', answer);
    function answer(response) {
        let aresta = response.split(',');

        grafo.addEdge(aresta[0],aresta[1],aresta[2]);
        submenu1();
    }
}


function R_Aresta() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Remove o vertice:', answer);

    function answer(response) {
        let remove = response.split(',');
        console.log("itens:"+remove[0]);
        grafo.removeArestaAdjList(remove[0], remove[1]);
    }
}
function ch_Aresta() {
    var response = rl.question('digite a ligacão da aresta v1,v2: ', answer);

    function answer(response) {
        submenu1();
    }
}
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

//--------------------menus ---------------------
function menuIniciar() {
        clear();
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
            .start();

}

function menuPrincipal() {
    clear();
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

        .start();
}

function submenu1() {
    clear();
    menu.resetMenu();
     menu.addDelimiter('-', 40, colors.black.bgBlue('Estrutura do Grafo'))
        .addItem(
            'Adicionar vertices',
            function () {
                    addV2();
            })
        .addItem(
            'Adicionar arestas',
            function () {
                aresta();
            })
       .addItem(
        'Remover Arestas',
        function () {
            R_Aresta();
        })
         .addItem(
             'Grau do vertice',
             function () {
               chekarGrau();
             })

         .addItem(
             'Mostrar Grafo',
             function () {
                 console.log(grafo.toString());
             })
         .addItem(
             'voltar',
             function () {
                 menuPrincipal()
             })
         .start();
}

function submenu2() {
    clear();
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
    clear();
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
    clear();
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
