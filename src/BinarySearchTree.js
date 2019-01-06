class Node {
    constructor(left, value, right) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(item) {
        if (!this.root) {
            this.root = new Node(null, item, null);
            return this.root;
        }

        return this.addNodeIterative(item, this.root);
    }

    addAll(arr) {
        for (let item of arr) {
            this.add(item);
        }
    }

    addNode(item, node) {
        if (item < node.value) {
            if(!node.left) {
                node.left = new Node(null, item, null);
            }

            else {
                this.addNode(item, node.left);
            }
        }

        else if (item > node.value) {
            if(!node.right) {
                node.right = new Node(null, item, null);
            }

            else {
                this.addNode(item, node.right);
            }
        }
    }
    
    addNodeIterative(item, node) {
        while(node) {
            if(item < node.value) {
                if(!node.left) {
                    let toInsert  = new Node(null, item, null);
                    node.left = toInsert;
                    break;
                }

                node = node.left;
            }

            else if(item > node.value) {
                if(!node.right) {
                    let toInsert  = new Node(null, item, null);
                    node.right = toInsert;
                    break;
                }

                node = node.right;
            }
        } 
    }

    delete(item) {
        return this.deleteNode(item, this.root);
    }

    deleteNode(item, node) {
        if(node.left && item === node.left.value) {
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
                toDelete.value = minNode.value;
                this.deleteNode(minNode.value, toDelete);
            }
        }

        else if(node.right && item === node.right.value) {

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
                toDelete.value = minNode.value;
                this.deleteNode(minNode.value, toDelete);
            }
        }

        else if (item < node.value) {
            this.deleteNode(item, node.left);
        }

        else if(item > node.value) {
            this.deleteNode(item, node.right);
        }
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
}