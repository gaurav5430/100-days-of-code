class RedBlackTree {
    constructor() {
        this.root = null;
        this.Node = class {
            constructor(key, value, color="red") {
                this.key = key;
                this.value = value;
                this.left = null;
                this.right = null;
                this.parent = null;
                this.color = color;
            }
        }
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
        if(!this.root) {
            this.root = new this.Node(key, value, "black");
            return this.root;
        }

        this.root = this.addNode(key, value, this.root);
        return this.root;
    }

    addNode(key, value, node) {
        if(!node) {
            return new this.Node(key, value);
        }

        else if (key < node.key) {
            node.left = this.addNode(key, value, node.left);
            node.left.parent = node;
        }

        else if (key > node.key) {
            node.right = this.addNode(key, value, node.right);
            node.right.parent = node;
        }

        else {
            return node;
        }
    }

    balance(node) {
        let parent = null; 
        let grand_parent = null; 
  
        while ((node != this.root) && (node.color != 'black') && 
           (node.parent.color == 'red')) 
        { 
  
            parent = node.parent; 
            grand_parent = node.parent.parent; 
  
            /*  Case : A 
                Parent of node is left child of Grand-parent of node */
            if (parent == grand_parent.left) 
            { 
  
                let uncle = grand_parent.right; 
  
                /* Case : 1 
                The uncle of node is also red 
                Only Recoloring required */
                if (uncle != null && uncle_node.color == 'red') 
                { 
                    grand_parent.color = 'red'; 
                    parent.color = 'black'; 
                    uncle_node.color = 'black'; 
                    node = grand_parent; 
                } 
  
                else
                { 
                    /* Case : 2 
                   node is right child of its parent 
                   Left-rotation required */
                    if (node === parent.right) 
                    { 
                        this.rotateLeft(root, parent); 
                        node = parent; 
                        parent = node.parent; 
                    } 
  
                    /* Case : 3 
                    node is left child of its parent 
                    Right-rotation required */
                    this.rotateRight(root, grand_parent); 
                    swap(parent.color, grand_parent.color); 
                    node = parent; 
                } 
        } 
  
        /* Case : B 
           Parent of node is right child of Grand-parent of node */
        else
        { 
            Node *uncle = grand_parent.left; 
  
            /*  Case : 1 
                The uncle of node is also red 
                Only Recoloring required */
            if ((uncle != null) && (uncle_node.color == 'red')) 
            { 
                grand_parent.color = 'red'; 
                parent.color = 'black'; 
                uncle_node.color = 'black'; 
                node = grand_parent; 
            } 
            else
            { 
                /* Case : 2 
                   node is left child of its parent 
                   Right-rotation required */
                if (node == parent.left) 
                { 
                    rotateRight(root, parent); 
                    node = parent; 
                    parent = node.parent; 
                } 
  
                /* Case : 3 
                   node is right child of its parent 
                   Left-rotation required */
                rotateLeft(root, grand_parent); 
                swap(parent.color, grand_parent.color); 
                node = parent; 
            } 
        } 
    } 
  
    root.color = 'black'; 
    }
}