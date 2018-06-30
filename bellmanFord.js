module.exports = function bellmanford(g,src,v){
    let V = v;
    let dist = [];

    for (let i=0; i<V; ++i)
        dist[i] = Infinity;
    dist[src] = 0;
    //console.log(graph);
    // relaxamento verificações
    // Etapa 2: relaxe todas as arestas | V | - 1 vez Um simples
    // caminho mais curto de src para qualquer outro vértice
    // tem no máximo | V | - 1 arestas
    for (let j=0; j<V; ++j)
    {
        let u =  g[j][0];
        let v =  g[j][1];
        let weight = g[j][2];
        if (dist[u]!=Infinity &&
            dist[u]+ weight <dist[v])
            dist[v]=dist[u]+weight;
    }
    console.log(dist);
    for (let j=0; j<V; ++j){

        let u = g[j][0];
        let v = g[j][1];
        let weight = g[j][2];
        if (dist[u] != Infinity &&
            dist[u] + weight < dist[v])
            console.log("O grafo contem ciclo negativo");
    }
    printArr(dist, V);
}

function printArr(dist,V){
    console.log("Vertices distancias");
    for (let i=0; i<V; ++i)
        console.log(i+"\t\t"+dist[i]);
}


//0-1-2-3-4
/*
let graph =  [[0,-1,4,0,0],//0
    [0,0,3,2,2],//1
    [0,0,0,0,0],//2
    [0,1,5,0,0],//3
    [0,0,0,-3,0]];//4

let g = new Graph(5);
g.addEdge(0,1,10);
g.addEdge(0,2,6);
g.addEdge(0,3,5);
g.addEdge(1,3,15);
g.addEdge(2,3,4);

bellmanford(g,1,5);
//g.show();
*/
