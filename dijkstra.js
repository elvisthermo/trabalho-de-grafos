function dijkstra(graph, startVertex) {
    var nodes = new PriorityQueue();
    var distances = {};
    var previous = {};

    for(vertex in graph.vertices) {
        if (vertex === startVertex) {
            distances[vertex] = 0;
            nodes.enqueue(0, vertex);
        } else {
            distances[vertex] = INFINITY;
            nodes.enqueue(INFINITY, vertex);
        }

        previous[vertex] = null;
    }


    while(!nodes.isEmpty()) {
        var smallest = nodes.dequeue();

        for(var neighbor in graph.vertices[smallest]) {
            var alt = distances[smallest] + graph.vertices[smallest][neighbor];

            if(alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = smallest;
            }
        }
    }

    return distances;
}

function PriorityQueue(){
    this._nodes = [];

    this.enqueue = function (priority, key) {
        this._nodes.push({key: key, priority: priority });
        this.sort();
    }
    this.dequeue = function () {
        return this._nodes.shift().key;
    }
    this.sort = function () {
        this._nodes.sort(function (a, b) {
            return a.priority - b.priority;
        });
    }
    this.isEmpty = function () {
        return !this._nodes.length;
    }
}

