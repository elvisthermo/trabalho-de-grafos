let Graph = require('./graphs');

module.exports = function montar(num,edges){
    let grafo = new Graph(num);
    for (let i = 0; i < num; i++) {
        grafo.addVertex(i);
    }

    for(let i = 0; i < edges.length; i++) {
        grafo.addEdge(edges[i][0],edges[i][1],edges[i][2]);
    }

    grafo.imprimeComponentes();

}

/*
let g = new  Graph(5);
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge(1,0);
g.addEdge(0,2);
g.addEdge(2,1);
g.addEdge(0,3);
g.addEdge(3,4);

console.log("Following are strongly connected components " +
  "in given graph");
g.imprimeComponentes();


let g2 = new  Graph(4);
g2.addVertex(0);
g2.addVertex(1);
g2.addVertex(2);
g2.addVertex(3);


g2.addEdge(0,1);
g2.addEdge(1,2);
g2.addEdge(2,3);
console.log("Following are strongly connected components " +
    "in given graph");
g2.imprimeComponentes();


let g3 = new  Graph(7);
g3.addVertex(0);
g3.addVertex(1);
g3.addVertex(2);
g3.addVertex(3);
g3.addVertex(4);
g3.addVertex(5);
g3.addVertex(6);

g3.addEdge(0,1);
g3.addEdge(1,2);
g3.addEdge(2,0);
g3.addEdge(1,4);
g3.addEdge(1,6);
g3.addEdge(3,5);
g3.addEdge(4,5);

console.log("Following are strongly connected components " +
    "in given graph");
g3.imprimeComponentes();

let g4 = new  Graph(11);
g4.addVertex(0);
g4.addVertex(1);
g4.addVertex(2);
g4.addVertex(3);
g4.addVertex(4);
g4.addVertex(5);
g4.addVertex(6);
g4.addVertex(7);
g4.addVertex(8);
g4.addVertex(9);

g4.addEdge(0,1);
g4.addEdge(0,3);
g4.addEdge(1,2);
g4.addEdge(1,4);
g4.addEdge(2,0);
g4.addEdge(2,6);
g4.addEdge(3,2);
g4.addEdge(4,5);
g4.addEdge(4,6);
g4.addEdge(5,6);
g4.addEdge(5,7);
g4.addEdge(5,8);
g4.addEdge(6,4);
g4.addEdge(7,9);
g4.addEdge(8,9);
g4.addEdge(9,8);

console.log("Following are strongly connected components " +
    "in given graph");
g4.imprimeComponentes();

*/