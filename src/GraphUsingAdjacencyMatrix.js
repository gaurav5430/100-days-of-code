class GraphUsingAdjacencyMatrix {
    constructor(numVertices, directed = false) {
        this.directed = directed;
        this.collection = new Array(numVertices);
        for(let i=0;i<this.collection.length; i++){
            this.collection[i] = new Array(numVertices);
        }
    }

    addEdge(src, dest, weight = 1) {
        this.collection[src][dest] = weight;
        if(!this.directed) {
            this.collection[dest][src] = weight;
        }
    }

    traverseGraph() {
        for(let i=0; i<this.collection.length; i++) {
            for(let j = 0; j< this.collection[i].length; j++) {
               if(this.collection[i][j] != null) {
                   console.log(`${i} -> ${j}`);
               }
            }
        }
    }

    searchEdge(src, dest) {
        if(this.collection[src][dest]) {
            return true;
        }

        return false;
    }

    // BFS(start) {
    //     const visited = new Array(this.collection.length);
    //     visited[start] = true;
    //     for(let i=0; i< this.collection.length; i++) {
    //         if(this.collection[start][i])
    //     }
    // }
}