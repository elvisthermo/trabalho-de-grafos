let menu = require('node-menu');
const colors = require('colors');
let Graph = require("./graphs.js")
let bellman = require("./bellmanFord");
let floyd = require("./floydwarshal");
const readline = require('readline');
var clear = require('clear');
var cfc = require('./cfc');

let grafo;
let direcao = true;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
        console.log("vertice adicionados:"+response);
        for (let i = 0; i <vertices.length ; i++) {
            grafo.addVertex(vertices[i]);
        }
        grafo.matAdj();
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


function aresta(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite a arresta v1,v2,valor : ', answer);
    function answer(response) {
        let aresta = response.split(',');
        grafo.addEdge(aresta[0],aresta[1],aresta[2]);
        grafo.addAresta(aresta[0],aresta[1],parseInt(aresta[2]));
        grafo.edgb(parseInt(aresta[0]),parseInt(aresta[1]),parseInt(aresta[2]));
        submenu1();
    }
}

function arestaNaoDir(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite a arresta v1,v2,valor : ', answer);
    function answer(response) {
        let aresta = response.split(',');
        grafo.addEdgend(aresta[0],aresta[1],aresta[2]);
        grafo.addArestaNaoDir(aresta[0],aresta[1],parseInt(aresta[2]));
        grafo.edgbNd(parseInt(aresta[0]),parseInt(aresta[1]),parseInt(aresta[2]));
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

function buscaP() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite o vertice onde iniciara a busca:', answer);
    function answer(response) {
        console.log("inicio");
        let ini = response
        grafo.buscaProfundidade(ini);
        console.log("busca em profundidae:");
        //submenu2();
    }
}

function buscaL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var response = rl.question('Digite o vertice onde iniciara a busca:', answer);
    function answer(response) {
        console.log("inicio");
        let ini = response;
        let bl = grafo.bfs(ini);
        console.log("busca em largura:");
        console.log(bl);
        //submenu2();
    }
}

function ordenacaoTop() {
        console.log("inicio");
        let bl = grafo.ordenacaoTopologica();
}

function alg_dijktra() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
   var response = rl.question('Digite o vertice onde iniciara :', answer);
    function answer(response) {
        let ini = response;
        console.log("Dijkstra:");
        console.log(grafo.dijkstra(ini));
}
}

    function alg_bellman_ford() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var response = rl.question('Digite o vertice onde iniciara :', answer);
        function answer(response) {
            let ini = parseInt(response);
            console.log("bellman ford:");

            let g = grafo.edge;
            //console.log(g);
            let num = grafo.num;
            console.log(num);
            //let g =[[0,1,10],
              //      [0,2,6],
              //      [0,3,5],
              //      [1,3,15],
              //      [2,3,4]];

            bellman(g,ini,num);
        }
    }
        function alg_floyd() {
/*
            let graph = [
                [0, 5,Infinity, 10],
                [Infinity,0,3, Infinity],
                [Infinity,Infinity,0,1],
                [Infinity,Infinity,Infinity,0]
            ];
*/
            let mat = grafo.getVertMat();
            floyd(mat);
        }


function componetesSCC(){
    console.log("componetes fortemente conexos!");
    cfc(grafo.num,grafo.edge);


}

function euleriano() {
    if(!grafo.isEuler()){
        console.log("não é euleriano");
    }else{
        console.log("grafo é euleriano");
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

//--chamada do menu--------------------------------
menuIniciar();

//--------------------menus ---------------------


function menuIniciar() {
        clear();
        menu.resetMenu();
        var testObject = new TestObject();
        menu.addDelimiter('-', 40, colors.black.bgWhite('Trabalho de grafos( ͡° ͜ʖ ͡°) '))
            .addItem(
                'Grafo direcionado',
                function () {
                    direcao = true;
                    menuPrincipal();

                })
            .addItem(
                'Grafo não direcionado', function () {
                    direcao = false;
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
                if(!direcao){
                    console.log("está opção so é possivel em grafos direcionados!");
                    //menuPrincipal();
                    return menuPrincipal();
                }
                submenu3();

            })
        .addItem(
            'Arvore Geradora Minima', function () {
                submenu4()

            })
        .disableDefaultHeader()
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
                if(!direcao){
                    arestaNaoDir();
                }
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
                 grafo.showMatrix();
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
              buscaP();
            })
        .addItem(
            'Busca em largura',
            function () {
                buscaL();
            })
        .addItem(
            'Ordenação topologica',
            function () {
                ordenacaoTop();
            }).addItem(
        'Componentes fortemete conexos',
        function () {
           componetesSCC();
        })

        .addItem(
            'É euleriano',
            function () {
                euleriano();
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
                alg_dijktra();

            })
        .addItem(
            'Bellman-ford',
            function () {
                alg_bellman_ford();

            })
        .addItem(
            'Floyd-warshall',
            function () {
                alg_floyd();

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
            grafo.prim();
            })
        .addItem(
            'Kruslkall',
            function () {
                grafo.kruskal();

            })
        .addItem(
            'voltar',
            function () {
                menuPrincipal()
            })
        .start();
}
