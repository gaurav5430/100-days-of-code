class AVLTree extends BinarySearchTreeRecursive {
    constructor() {
        super();
    }
    
    getHeight(node) {
        if(!node) return 0;
        return node.height;
    }

    getBalance(node) {
        if(!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    leftRotate(node) {
        const rightNode = node.right;
        const leftSubtreeOfRight = rightNode.left;

        rightNode.left = node;
        node.right = leftSubtreeOfRight;

        node.height = 1 + Math.max(this.getHeight(node.left),this.getHeight(node.right));
        rightNode.height = 1 + Math.max(this.getHeight(rightNode.left), this.getHeight(rightNode.right));

        return rightNode;
    }

    rightRotate(node) {
        const leftNdoe = node.left;
        const rightSubtreeOfLeft = leftNode.right;

        leftNode.right = node;
        node.left = rightSubtreeOfLeft;

        node.height = 1 + Math.max(this.getHeight(node.left),this.getHeight(node.right));
        leftNode.height = 1 + Math.max(this.getHeight(leftNode.left), this.getHeight(leftNode.right));

        return leftNode;
    }

    add(key, value) {
        if (!this.root) {
            this.root = new this.Node(key, value);
            return this.root;
        }

        this.root = this.addNode(key, value, this.root);
        return this.root;
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

        else {
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        const balance = this.getBalance(node);

        // Left Left Case 
        if (balance > 1 && key < node.left.key) 
        return this.rightRotate(node); 

        // Right Right Case 
        if (balance < -1 && key > node.right.key) 
            return this.leftRotate(node); 

        // Left Right Case 
        if (balance > 1 && key > node.left.key) 
        { 
            node.left =  this.leftRotate(node.left); 
            return this.rightRotate(node); 
        } 

        // Right Left Case 
        if (balance < -1 && key < node.right.key) 
        { 
            node.right = this.rightRotate(node.right); 
            return this.leftRotate(node); 
        } 

        /* return the (unchanged) node pointer */
        return node; 
    }

    delete(key) {
        this.root = this.deleteNode(key, this.root);
        return this.root
    }

    deleteNode(key, node) {
        if(!node) {
            return null;
        }

        else if (key < node.key) {
            node.left = this.deleteNode(key, node.left);
        }

        else if(key > node.key) {
            node.right = this.deleteNode(key, node.right);
        }

        else {
            if(node.left === null && node.right === null) {
                node = null;
            }

            else if(node.left === null) {
                const toReturn = node.right;
                node = toReturn;
            }

            else if(node.right === null) {
                const toReturn = node.left;
                node = toReturn;
            }

            else {
                //replace with the minimum of right subtree and then delete the minimum child
                let minNode = this.findMinNode(node.right);
                node.key = minNode.key;
                node.value = minNode.value;
                node.right = this.deleteNode(minNode.key, node.right);
            }


        }

        // If the tree had only one node then return 
        if (node == null) 
        return node; 

        // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE 
        node.height = 1 + Math.max(this.getHeight(node.left), 
                                this.getHeight(node.right)); 

        // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to 
        // check whether this node became unbalanced) 
        let balance = this.getBalance(node); 

        // If this node becomes unbalanced, then there are 4 cases 

        // Left Left Case 
        if (balance > 1 && this.getBalance(node.left) >= 0) 
            return this.rightRotate(node); 

        // Left Right Case 
        if (balance > 1 && this.getBalance(node.left) < 0) 
        { 
            node.left =  this.leftRotate(node.left); 
            return this.rightRotate(node); 
        } 

        // Right Right Case 
        if (balance < -1 && this.getBalance(node.right) <= 0) 
            return this.leftRotate(node); 

        // Right Left Case 
        if (balance < -1 && this.getBalance(node.right) > 0) 
        { 
            node.right = this.rightRotate(node.right); 
            return this.leftRotate(node); 
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
}