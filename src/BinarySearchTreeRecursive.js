class BinarySearchTreeRecursive {
    constructor() {
        this.root = null;
        this.Node = class {
            constructor(key, value) {
                this.key = key;
                this.value = value;
                this.left = null;
                this.right = null;
                this.height = 1;
            }
        }
    }

    * [Symbol.iterator] () {
        let node = this.root;
        let arr = this.inorderTraversal(node);
        yield* arr;
    }

    search(key) {
        return this.searchNode(key, this.root);
    }

    searchNode(key, node) {
        if(!node) {
            return null;
        }

        if(key < node.key) {
            return this.searchNode(key, node.left);
        }
        else if(key > node.key) {
            return this.searchNode(key, node.right);
        }

        else if(key === node.key) {
            return node.value;
        }
    }

    add(key, value) {
        if (!this.root) {
            this.root = new this.Node(key, value);
            return this.root;
        }

        this.root = this.addNode(key, value, this.root);
        return this.root;
    }

    addAll(arr) {
        for (let item of arr) {
            this.add(item.key, item.value);
        }
    }

    addNode(key, value, node) {
        if(!node) {
            return new this.Node(key, value);
        }

        if (key < node.key) {
            node.left = this.addNode(key, value, node.left);
        }

        else if (key > node.key) {
            node.right = this.addNode(key, value, node.right);
        }

        return node;
    }

    delete(key) {
        if(this.root.key === key) {
            
            // 0 child
            if(this.root.left === null && this.root.right === null) {
                this.root = null;
            }

            // 1 child
            else if(this.root.left === null) {
                this.root = this.root.right;
            }

            else if(this.root.right === null) {
                this.root = this.root.left;
            }
            // 2 child
            else {
                //replace with the minimum of right subtree and then delete the minimum child
                let minNode = this.findMinNode(this.root.right);
                this.root.key = minNode.key;
                this.root.value = minNode.value;
                this.deleteNode(minNode.key, this.root.right);
            }
        }

        else {
            return this.deleteNode(key, this.root);
        }
    }

    deleteNodeUnderstood(key, node) {
        if(!node) {
            return null;
        }

        if (key < node.key) {
            node.left = this.deleteNodeUnderstood(key, node.left);
        }

        if(key > node.key) {
            node.right = this.deleteNodeUnderstood(key, node.right);
        }

        else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if(node.left === null) {
                const toReturn = node.right;
                node = null;
                return toReturn;
            }

            if(node.right === null) {
                const toReturn = node.left;
                return node.left;
            }

            else {
                //replace with the minimum of right subtree and then delete the minimum child
                let minNode = this.findMinNode(node.right);
                node.key = minNode.key;
                node.value = minNode.value;
                node.right = this.deleteNode(minNode.key, node.right);
            }
        }

        return node;
    }

    deleteNode(key, node) {
        if(node.left && key === node.left.key) {
            let toDelete = node.left;
            // 0 child
            if(toDelete.left === null && toDelete.right === null) {
                node.left = null;
            }
            // 1 child
            else if(toDelete.left === null) {
                node.left = toDelete.right;
            }

            else if(toDelete.right === null) {
                node.left = toDelete.left;
            }
            // 2 child
            else {
                //replace with the minimum of right subtree and then delete the minimum child
                let minNode = this.findMinNode(toDelete.right);
                toDelete.key = minNode.key;
                toDelete.value = minNode.value;
                this.deleteNode(minNode.key, toDelete);
            }
        }

        else if(node.right && key === node.right.key) {

            let toDelete = node.right;
            // 0 child
            if(toDelete.left === null && toDelete.right === null) {
                node.right = null;
            }
            // 1 child
            else if(toDelete.left === null) {
                node.right = toDelete.right;
            }

            else if(toDelete.right === null) {
                node.right = toDelete.left;
            }
            // 2 child
            else {
                //replace with the minimum of right subtree and then delete the minimum child
                let minNode = this.findMinNode(toDelete.right);
                toDelete.key = minNode.key;
                toDelete.value = minNode.value;
                this.deleteNode(minNode.key, toDelete);
            }
        }

        else if (key < node.key) {
            this.deleteNode(key, node.left);
        }

        else if(key > node.key) {
            this.deleteNode(key, node.right);
        }

    }

    deleteNodeNotUnderstood(key, node) {

        if(!node) {
            return null;
        }

        if(key < node.key) {
            node.left = this.deleteNode(key, node.left);
        }

        else if(key > node.key) {
            node.right = this.deleteNode(key, node.right);
        }

        else {
            // 0 or 1 child
            if(node.right === null) {
                let toReturn = node.left;
                node = null;
                return toReturn;
            }

            else if(node.left === null) {
                let toReturn = node.right;
                node = null;
                return toReturn;
            }
            // 2 child
            else {
                //replace with the minimum of right subtree and then delete the minimum child
                let minNode = this.findMinNode(node.right);
                node.key = minNode.key;
                node.value = minNode.value;
                node.right = this.deleteNode(minNode.key, node.right);
            }
        }

        return node;
        
    }

    findMinNode(node) {
        if(!node) {
            node = this.root;
        }

        if(node.left) {
            return this.findMinNode(node.left);
        }

        return node;
    }

    findMaxNode(node) {
        if(!node) {
            node = this.root;
        }

        if(node.right) {
            return this.findMaxNode(node.right);
        }

        return node;
    }

    preorderTraversal(node) {
        if(node) {
            console.log(node.key);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    inorderTraversal(node) {
        let arr = [];
        this.inorderTraversalWithArray(node, arr);
        return arr;
    }

    inorderTraversalWithArray(node, arr) {
        if(node) {
            this.inorderTraversalWithArray(node.left, arr);
            arr.push(node.key);
            this.inorderTraversalWithArray(node.right, arr);
        }
    }

    postorderTraversal(node) {
        if(node) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.key);
            
        }
       
    }
}