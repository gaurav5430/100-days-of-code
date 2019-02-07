class BinaryTreeUsingNode {
    constructor() {
        this.root = null;
        this.Node = class {
            constructor(key, value) {
                this.left = null;
                this.right = null;
                this.key = key;
                this.value = value;
            }
        }
    }

    insert(key, value) {
        //traverse level order to insert in complete tree.
        //BFS
        const nodeToInsert = new this.Node(key, value);
        if(!this.root) {
            this.root = nodeToInsert;
            return;
        }

        const q = new QueueUsingArray();
        q.enqueue(this.root, this.root);
        let current = this.root;
        while(!q.isEmpty()) {
            current = q.dequeue();
            if(!current.left) {
                current.left = nodeToInsert;
                break;
            }

            else if(!current.right) {
                current.right = nodeToInsert;
                break;
            }

            else {
                q.enqueue(current.left, current.left);
                q.enqueue(current.right, current.right);
            }
        }
    }

    inorderTraverse(root) {
        if(root) {
            this.inorderTraverse(root.left);
            console.log(root);
            this.inorderTraverse(root.right);
        }
    }

    inorderTraversal() {
        this.inorderTraverse(this.root);
    }

    preorderTraversal(root) {
        if(root) {
            console.log(root);
            this.preorderTraversal(root.left);
            this.preorderTraversal(root.right);
        }
    }

    postorderTraversal(root) {
        if(root) {
            this.postorderTraversal(root.left);
            this.postorderTraversal(root.right);
            console.log(root);
        }
    }

    reversePostorderTraversal(root) {
        if(root) {
            this.postorderTraversal(root.right);
            this.postorderTraversal(root.left);
            console.log(root);
        }
    }

    search(key) {
        const toReturn = null;
        return this.searchNode(key, this.root, toReturn);
    }
    
    searchNode(key, root, toReturn) {
        if(root.key === key) {
            toReturn = root;
        }
        else if(!toReturn) {
            toReturn = this.searchNode(key, root.left, toReturn);
            toReturn = this.searchNode(key, root.right, toReturn);
        }

        return toReturn;
    }

    delete(key) {
        //delete and replace with the last node
        const node = this.search(key);
        const q = new QueueUsingArray();
        //BFS to find last node
        q.enqueue(this.root, this.root);
        let current = null;
        while(!q.isEmpty()) {
            current = q.dequeue();
            if(current.left) {
                q.enqueue(current.left, current.left);
            }

            if(current.right) {
                q.enqueue(current.right, current.right);
            }
        }

        //current is the last node after the loop ends
        node.key = current.key;
        node.value = current.value;
        this.deleteDeepest(this.root, current);
    }

    deleteDeepest(root, deepest) {
        //level order traversal till the parent of last node
        const q = new QueueUsingArray();
        q.enqueue(root, root);
        let current = null;

        while(!q.isEmpty()) {
            current = q.dequeue();
            if(current.left) {
                if(current.left === deepest) {
                    current.left = null;
                }
                
                else {
                    q.enqueue(current.left, current.left);
                }
            }

            if(current.right) {
                if(current.right === deepest) {
                    current.right = null;
                }
                
                else {
                    q.enqueue(current.right, current.right);
                }
            }
        }
    }
}