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

    BFS(start) {
        let q = new QueueUsingArray();
        let visited = new Array(this.collection.length);
        q.enqueue(start,start);
        while(!q.isEmpty()) {
            let current = q.dequeue()
            visited[current] = true;
            console.log(current);
            for (let i = 0; i<this.collection[current].length; i++) {
                if(this.collection[current][i] != undefined) {
                    if(!visited[i]) {
                        q.enqueue(i, i);
                    }
                }
            }
        }
    }

    DFS(start) {
        let stack = new StackUsingArray();
        let visited = new Array(this.collection.length);
        stack.push(start, start);
        while(!stack.isEmpty()) {
            let current = stack.pop();
            console.log(current);
            visited[current] = true;
            for(let i = this.collection[current].length - 1; i>= 0 ; i--) {
                if(this.collection[current][i] != undefined) {
                    if(!visited[i]) {
                        stack.push(i, i);
                    }
                }
            }
        }
    }


    DFSRecursive(start) {
        let visited = new Array(this.collection.length);
        this.DFSRecurse(start, visited);
    }

    DFSRecurse(start, visited) {
        visited[start] = true;
        console.log(start);
        for(let i = 0; i< this.collection[start].length; i++) {
            if(!visited[i]) {
                if(this.collection[start][i] != undefined) {
                    this.DFSRecurse(i, visited);
                }
            }
        }
    }

    BFSRecursive(start) {
        let visited = new Array(this.collection.length);
        const q = new QueueUsingArray();
        q.enqueue(start, start);
        this.BFSRecurse(visited, q);
    }

    BFSRecurse(visited, q) {
        if(!q.isEmpty()) {
            let current = q.dequeue();
            console.log(current);
            visited[current] = true;

            for(let i = 0;i<this.collection[current].length; i++) {
                if(!visited[i] && this.collection[current][i] !== undefined) {
                    q.enqueue(i, i);
                }
            }

            this.BFSRecurse(visited, q);
        }
    }
    
    levelTraverse(node, level, visited) {
        if(level === 1) {
            console.log(this.collection[node]);
            return true;
        }

        for(let i=0; i<this.collection[node].length; i++) {
            if(!visited[i] && this.collection[node][i] !== undefined) {
                this.levelTraverse(i, level - 1);
            }
        }
    }

    levelOrderTraversal(start) {

    }
}