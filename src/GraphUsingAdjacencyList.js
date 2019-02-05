class GraphUsingAdjacencyList {
    constructor(numVertices) {
        this.collection = new Array(numVertices);
        for(let i=0; i<this.collection.length; i++) {
            this.collection[i] = new LinkedList();
        }
    }

    addEdge(src, dest) {
        this.collection[src].add(dest);
        this.collection[dest].add(src);
    }

    traverseGraph() {
        for(let i=0;i <this.collection.length; i++) {
            for(let edge of this.collection[i]) {
                console.log(`${i} -> ${edge.key}`)
            }
        }
    }

    searchEdge(src, dest) {
        if(this.collection[src].indexOf(dest) >= 0) {
            return true;
        }

        return false;
    }
}