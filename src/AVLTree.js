class AVLTree extends BinarySearchTreeRecursive {
    
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
            this.root = new Node(key, value);
            return this.root;
        }

        return this.addNode(key, value, this.root);
    }

    addNode(key, value, node) {
        
        if(!node) {
            return new Node(key, value);
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

    }
}