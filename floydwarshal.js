module.exports = function floydWarshall(graph){
    let dist = [];
    let size = graph.length;

    let graf = matinf(graph);

    for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (!isFinite(graf[i][j])) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graf[i][j];
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

function matinf(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if(i== j){
                mat[i][j] = 0;
            }else if(mat[i][j] == 0 && i != j){
                mat[i][j] = Infinity;

            }
        }
    }
    //console.log(mat);
    return mat;
}

}


/*
let graph = [
            [0, 5,Infinity, 10],
            [Infinity,0,3, Infinity],
            [Infinity,Infinity,0,1],
            [Infinity,Infinity,Infinity,0]
            ];

floydWarshall(graph);

*/

