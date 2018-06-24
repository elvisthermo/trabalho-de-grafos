function Graph(numero) {
    this.num = numero;
    let vertices = [];
    this.adjList = new Map();
    this.edge = [];
    let vertMat = [];

    //funções para matriz
    function montarLinha() {
        lista = [];
        for (let i = 0; i < numero; i++) {//numero vertices
            lista.push(0);
        }
        return lista;
    }

    this.getVertMat = function () {
        console.log(vertMat.length);
    }

    //adicionar elementos a matriz
    this.matAdj = function () {
        //vertMat.push(vertices);
        for (let i = 0; i < this.num; i++) {//numero veritices
            //console.log(i);
            let lista = montarLinha(numero);
            vertMat.push(lista);
        }
        console.log(vertMat);
    };

    //adicionar aresta
    this.addAresta = function (v1, v2, value) {
        vertMat[v1].splice(v2, 1, value);
        this.edge.push[v1,v2,value];
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

    this.addEdge = function (v, w, value) {
        this.adjList.get(v).push(w, ['value', value]);
        this.adjList.get(w).push(v, ['value', value]);//lista não direcionada tirra  comentario

    };

    this.addEdged = function (v, w, value) {
        this.adjList.get(v).push(w, ['value', value]);
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

    //-----------verificar se o grafo e euleriano
    this.isEuleriano = () => {
        var grau = new Map();
        let count = 0;
        for (let v = 1; v <= vertices.length; v++) {
            grau = this.adjList.get(v).length;
            console.log(grau);
            if (grau % 2 != 0) {
                console.log("Não é euleriano!");
                count++;
                break;
            }
        }
        if (count == 0) {
            console.log("É euleriano");
        }
    }


//-------------funcoes de busca--------------------------------------------------------------------------------//
//---------------busca em profundidae-------------------------------------------------------------------------//
    this.buscaProfundidade = function (vInicial) {

        let visit = [];
        for (let i = 0; i < this.num; i++)
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

//-------colorir arestas------------------------------------------
    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        console.log("cores:" + color);
        return color;
    };

//--------------busca em largura-----------------------------------------
    this.bfs = function (v) {
        console.log("inicio");
        var color = initializeColor(),
            queue = [],
            d = [],
            pred = [];
        queue.push(v);
        //console.log("fila: "+queue);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.length == 0) {
            var u = queue.shift(),
                neighbors = this.adjList.get(u);
            color[u] = 'grey';
            //console.log(neighbors);
            for (i = 1; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
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

        var fromVertex = vertices[0];
        for (var i = 1; i < vertices.length; i++) {
            var toVertex = vertices[i],
                path = [];
            for (var v = toVertex; v !== fromVertex;
                 v = shortestPathA.predecessors[v]) {
                path.push(v);
            }
            path.push(fromVertex);
            var s = path.pop();
            while (!path == null) {
                s += ' - ' + path.pop();
            }
            console.log(s);
        }

    }

//-------------ordenação topologica-----------------//

    this.ordenacaoTopologica = () => {
        var stack = [];
        var visited = [];
        for (var i = 0; i < this.num; i++) {
            visited[i] = false;
        }
        for (var i = 0; i < this.num; i++) {
            if (visited[i] == false) {
                this.topSortHelper(i, visited, stack);
            }
        }
        for (var i = 0; i < stack.length; i++) {
            if (stack[i] != undefined && stack[i] != false) {
                console.log(vertices[stack[i]]);
            }
        }
    }
    this.topSortHelper = (v, visited, stack) => {
        visited[v] = true;
        for (var w in this.adjList[v]) {
            if (!visited[w]) {
                this.topSortHelper(visited[w], visited, stack);
            }
        }
        stack.push(v);
    }
//--------------------dijkstra-------------------------------------------
    this.dijkstra = function (src) {
        var dist = [], visited = [],
            length = vertMat.length;
        for (var i = 0; i < length; i++) {
            dist[i] = Infinity;
            visited[i] = false;
        }
        dist[src] = 0; //{2}
        for (var i = 0; i < length - 1; i++) {
            var u = minDistance(dist, visited);
            visited[u] = true;
            for (var v = 0; v < length; v++) {
                if (!visited[v] && vertMat[u][v] != 0 && dist[u] != Infinity && dist[u] + vertMat[u][v] < dist[v]) { //{6}
                    dist[v] = dist[u] + vertMat[u][v];
                }
            }
        }
        return dist;

    }

//distancia minima primm-----------------
    var minDistance = function (dist, visited) {
        var min = Infinity, minIndex = -1;
        for (var v = 0; v < dist.length; v++) {
            if (visited[v] == false && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }
        //console.log(minIndex);
        return minIndex;
    }

    //algoritimo de prim------------
    this.prim = function() {
        var parent = [], key = [], visited = [];
        var tamanho = vertMat.length;
        var i;
        for (i = 0; i < tamanho; i++) {
            key[i] = Infinity;
            visited[i] = false;
        }
        key[0] = 0;
        parent[0] = -1;
        for (i = 0; i < tamanho - 1; i++) {
            var u = minDistance(key, visited);
            visited[u] = true;
            for (var v = 0; v < tamanho; v++) {
                if (vertMat[u][v]!=0 && visited[v] == false && vertMat[u][v] < key[v]) {
                    parent[v] = u;
                    key[v] = vertMat[u][v];
                }
            }
        }

        // return parent;
        console.log(parent);
        console.log("Edge")
        for(let j=1;j<tamanho;j++){

            console.log(parent[j]+" - "+j);
        }
    }



    function initializeCost(graph){
        const cost = [];
        const length  = graph.length;
        for (let i = 0; i < length; i++) {
            cost[i] = [];
            for (let j = 0; j < length; j++) {
                if (graph[i][j] === 0) {
                    cost[i][j] = Infinity;
                } else {
                    cost[i][j] = graph[i][j];
                }
            }
        }
        return cost;

    };
    //-------krsukal--------------------------
    this.kruskal = function() {
        var length = vertMat.length;
        const parent = [];
        let ne = 0;
        let a;
        let b;
        let u;
        let v;
        let cost = initializeCost(vertMat);
        while (ne < length ) {
            for (let i = 0, min = Infinity; i < length; i++) {
                for (let j = 0; j < length; j++) {
                    if (cost[i][j] < min) {
                        min = cost[i][j];
                        a = u = i;
                        b = v = j;
                    }
                }
            }
            u = find(u, parent);
            v = find(v, parent);
            if (union(u, v, parent)) {
                ne++;
            }
            cost[a][b] = cost[b][a] = Infinity;
        }

        console.log("AGM");
        for(let j=1;j<length;j++){
            console.log(parent[j]+" - "+j);
        }
        console.log(parent);
        //return parent;
    };

    var union = function (i, j, parent) {
            if (i != j) {
                parent[j] = i;
                return true;
            }
            return false;
        };

        var find = function (i, parent) {
            while (parent[i]) {
                i = parent[i];
            }
            return i;
        };



}




