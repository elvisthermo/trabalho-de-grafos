function prim(graph) {
    var parent = [], key =[],visited = [];
    var tamanho = this.graph.length;
    var i;
    for(i=0; i< length;i++){
        key[i]= INF;
        visited[i] = false;
    }
    key[0]= 0;
    parent[0] = -1;
    for(i=0;i<tamanho-1;i++){
        var u =minKey(key,visited);
        visited[u] = true;
        for(var v=0;v<tamanho;v++){
            if(this.graph[u][v] && visited[v]==false && this.graph[u][v] < key[v]){
                parent[v] = u;
                key = this.graph[u][v];
            }
        }
}
return parent;
var graph = [[0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]];
    prim(graph);
};

