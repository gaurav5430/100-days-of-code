class NodeIterative {
    constructor(left, value, right) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class BinarySearchTreeIterative {
    constructor() {
        this.root = null;
    }

    add(item) {
        if (!this.root) {
            this.root = new NodeIterative(null, item, null);
            return this.root;
        }

        return this.addNode(item, this.root);
    }

    addAll(arr) {
        for (let item of arr) {
            this.add(item);
        }
    }
    
    addNode(item, node) {
        while(node) {
            if(item < node.value) {
                if(!node.left) {
                    let toInsert  = new NodeIterative(null, item, null);
                    node.left = toInsert;
                    break;
                }

                node = node.left;
            }

            else if(item > node.value) {
                if(!node.right) {
                    let toInsert  = new NodeIterative(null, item, null);
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
        while(node) {
            if (node.left && item === node.left.value) {
                //check children
                let toDelete = node.left;
                // 0 children
                if (toDelete.left === null && toDelete.right === null) {
                    node.left = null;
                }
    
                // 1 children
                else if (toDelete.left === null) {
                    node.left = toDelete.right;
                }
    
                else if (toDelete.right === null) {
                    node.left = toDelete.left;
                }
    
                // 2 children
                else {
                    let minNode = this.findMinNode(toDelete.right);
                    toDelete.value = minNode.value;
                    item = minNode.value;
                }

                node = node.left;
            }

            else if (node.right && item === node.right.value) {
                //check children
                let toDelete = node.right;
                // 0 children
                if (toDelete.left === null && toDelete.right === null) {
                    node.right = null;
                }
    
                // 1 children
                else if (toDelete.left === null) {
                    node.right = toDelete.right;
                }
    
                else if (toDelete.right === null) {
                    node.right = toDelete.left;
                }
    
                // 2 children
                else {
                    let minNode = this.findMinNode(toDelete.right);
                    toDelete.value = minNode.value;
                    item = minNode.value;
                }

                node = node.right;
            }

            else if (item < node.value) {
                node = node.left;
            }

            else if (item > node.value) {
                node = node.right;
            }
        }
    }

    findMinNode(node) {
        if(!node) {
            node = this.root;
        }

        while(node.left) {
            node = node.left;
        }

        return node;
    }

    findMaxNode(node) {
        if(!node) {
            node = this.root;
        }

        while (node.right) {
            node = node.right;
        }

        return node;
    }

    inorderTraversal(node) {
        let stack = [];

        while(stack.length > 0 || node) {
            while(node) {
                stack.push(node);
                node = node.left;
            }
    
            if(stack.length > 0){
                node = stack.pop();
                console.log(node.value);
                node = node.right;
            }
        }
    }

    preorderTraversal(node) {
        let stack = [];
        stack.push(node);
        while(stack.length > 0) {
                node = stack.pop();
                console.log(node.value);
                if(node.right) stack.push(node.right);
                if(node.left) stack.push(node.left);
            }
    }

    postorderTraversal(node) {
        // let stack = [];
        // let prev = null;
        // stack.push(node);
        // while(stack.length > 0) {
        //     while(node) {
        //         stack.push(node);
        //         prev = node;
        //         node = node.left;
        //     }
            
        //     node = stack.pop();
        //     console.log(node.value);

        //     if(prev.right) stack.push(prev.right);
        // }
    }
}