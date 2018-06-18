function floydWarshall(graph){
    let dist = [];
    let size = graph.length;


    for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    for (let k = 0; k < size; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if((dist[i][k] + dist[k][j] < dist[i][j])){
                   dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    console.log("menores distancias");
    console.log(dist);

    //verificar existencia de valores negativos
    for (i = 0; i < size; i++)
        if (dist[i][i] < 0)
            return console.log("grafo contém ciclo negativo");
    return false;

}
/*
function ciclosNegativos(){

}
let graph = [
            [0, 5,Infinity, 10],
            [Infinity,0,3, Infinity],
            [Infinity,Infinity,0,1],
            [Infinity,Infinity,Infinity,0]
            ];

floydWarshall(graph);
*/

