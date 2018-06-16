function Graph(numero) {
    this.num = numero
    let vertices = [];
    this.adjList = new Map();

    let vertMat = [];

    //funções para matriz
    function montarLinha() {
        lista = [];
        for (let i = 0; i < num; i++) {//numero vertices
            lista.push(0);
        }
        return lista;
    }

    //adicionar elementos a matriz
    this.matAdj = function () {
        //vertMat.push(vertices);
        for (let i = 0; i < num; i++) {//numero veritices
            let lista = montarLinha(vertices);
            vertMat.push(lista);
        }
    };

    //adicionar aresta
    this.addAresta = function (v1, v2, value) {
        vertMat[v1].splice(v2, 1, 1);

    };

    this.removeAresta = function (v1, v2) {
        if (vertMat[v1][v2] == 0) {
            console.log("aresta não existe")
        }
        else {
            vertMat[v1].splice(v2, 1, 0);
            console.log("aresta removida");
        }

    };

    this.grauVertice = function (v) {
        let grau = 0;
        for (let i = 0; i < num; i++) {
            if (vertMat[v][i] > 0) {
                grau++;
            }
        }
        console.log("grau do vertice:" + v + "= " + grau);
    }

    this.checkAresta = function (v1, v2) {
        if (!vertMat[v1][v2]) {
            console.log("a aresta não existe:" + v1 + "-" + v2 + "está vazia");
        }
        else if (vertMat[v1][v2] != 0) {
            console.log("aresta existe valor da aresta :" + vertMat[v1][v2]);
        }

    };

    this.visinhos = function () {
        for (let i = 0; i < vertMat.length; i++) {
            let visinho = [];
            let coluna = [];
            for (let j = 0; j < vertMat.length; j++) {
                if (vertMat[i][j] != 0) {
                    visinho.push(vertices[0][j]);
                    visinho.push(vertMat[i][j]);
                }
            }
            console.log(vertices[0][i] + ":" + "->" + visinho);
        }
    };

    this.showMatrix = function () {
        console.log(vertMat);
        console.log("------------");
    };

    //funçoes para lista

    //adicionar vertices lista
    this.addVertex = function (v) {
        vertices.push(v);
        this.adjList.set(v, []);

    };

    this.addEdge = function (v, w,value) {
        this.adjList.get(v).push(w,['value' ,value]);
        this.adjList.get(w).push(v,['value', value]);//lista não direcionada tirra  comentario

    };

    this.addEdged = function (v, w,value) {
        this.adjList.get(v).push(w,['value' ,value]);
        //this.adjList.get(w).push(v);//lista não direcionada tirra  comentario
    };


    this.removeArestaAdjList = function (v, w) {
        let index1 = adjList.get(v).indexOf(w);
        let index2 = adjList.get(w).indexOf(v);

        this.adjList.get(v).splice(index1, 1);
        this.adjList.get(w).splice(index2, 1);
    };

    this.grauLista = function (v) {
        if (!v) {
            console.log("vertice grau 0");
        }
        console.log("vertice:" + v + " grau: " + this.adjList.get(v).length);
    }
    this.checkArestaAdjList = function (v, w) {
        if (this.adjList.get(v).indexOf(w) == -1) {
            console.log("não exite  aresta! ");
        }
        else {
            console.log("aresta existe");
        }

    };

    this.toString = function () {
        let s = '';
        for (let i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            let vizinhos = this.adjList.get(vertices[i]);
            for (let j = 0; j < vizinhos.length; j++) {
                s += vizinhos[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };

    this.isEuleriano = () => {
        var grau = new Map();
        let count = 0;
        for (let v = 1; v <= vertices.length; v++){
            grau = this.adjList.get(v).length;
            console.log(grau);
            if(grau % 2 != 0) {
                console.log("Não é euleriano!");
                count++;
                break;
            }
        }
        if (count == 0){
            console.log("É euleriano");
        }
    }


//-------------funcoes de busca--------------------------------------------------------------------------------//

    this.buscaProfundidade = function (vInicial) {

        let visit = [];
        for (let i = 0; i < this.numero; i++)
            visit[i] = false;
        this.DFSUtil(vInicial, visit);
    }

//função recursiva para explorar os vertices adjecentes

    this.DFSUtil = function (vert, visitado) {
        visitado[vert] = true;
        console.log(vert);
        let visinhos = this.adjList.get(vert);

        for (let i in visinhos) {
            let get_elem = visinhos[i];
            if (!visitado[get_elem])
                this.DFSUtil(get_elem, visitado);
        }
    }


//--------------busca em largura-----------------------------------------

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'; //{1}
        }
        console.log("cores:" + color);
        return color;
    };


this.bfs = function(v){
    console.log("inicio");
    var color = initializeColor(),
        queue = [],
        d = [], //{1}
        pred = []; //{2}
    queue.push(v);
    //console.log("fila: "+queue);

    for (var i=0; i<vertices.length; i++){ //{3}
        d[vertices[i]] = 0; //{4}
        pred[vertices[i]] = null; //{5}
    }

    while (!queue.length ==0){
        var u = queue.shift(),
            neighbors = this.adjList.get(u);
        color[u] = 'grey';
        //console.log(neighbors);
        for (i=1; i<neighbors.length; i++){
            var w = neighbors[i];
            if (color[w] === 'white'){
                color[w] = 'grey';
                d[w] = d[u] + 1;
                pred[w] = u;
                queue.push(w);
                console.log(queue);
            }
        }
        color[u] = 'black';
    }
    return {
        distances: d,
        predecessors: pred
    };

    var fromVertex = vertices[0]; //{9}
    for (var i=1; i<vertices.length; i++){ //{10}
        var toVertex = vertices[i], //{11}
            path = []; //{12}
        for (var v=toVertex; v!== fromVertex;
             v=shortestPathA.predecessors[v]) { //{13}
            path.push(v); //{14}
        }
        path.push(fromVertex); //{15}
        var s = path.pop(); //{16}
        while (!path==null){ //{17}
            s += ' - ' + path.pop(); //{18}
        }
        console.log(s); //{19}
    }


}

}

//-------------------------algoritimo de floyd warshall--------------------------------------------

var floydWarshall = (function () {
    /**
     * Matrix used for the algorithm.
     */
    var dist;
    /**
     * Initialize the distance matrix.
     *
     * @private
     * @param {Array} graph Distance matrix of the array.
     * @return {Array} Distance matrix used for the algorithm.
     */
    function init(graph) {
        var dist = [];
        var size = graph.length;
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
        return dist;
    }

    var distMatrix =
    [[Infinity, 7,        9,       Infinity,  Infinity, 16],
     [7,        Infinity, 10,       15,       Infinity, Infinity],
     [9,        10,       Infinity, 11,       Infinity, 2],
     [Infinity, 15,       11,       Infinity, 6,        Infinity],
     [Infinity, Infinity, Infinity, 6,        Infinity, 9],
 [16,       Infinity, 2,        Infinity, 9,        Infinity]];

    var shortestDists = floydWarshall(distMatrix);