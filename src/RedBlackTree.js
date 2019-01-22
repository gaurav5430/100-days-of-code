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

    rotateLeft(node) 
    { 
        let rightNode = node.right; 
        node.right = rightNode.left; 
  
        if (node.right != null) 
            node.right.parent = node; 
    
        rightNode.parent = node.parent; 
    
        if (node.parent == null) 
            root = rightNode; 
  
        else if (node == node.parent.left) 
            node.parent.left = rightNode; 
    
        else
            node.parent.right = rightNode; 
  
        rightNode.left = pt; 
        node.parent = rightNode; 
    } 
  
    rotateRight(node) 
    { 
        let leftNode = node.left; 
        node.left = leftNode.right; 
  
        if (node.left != null) 
            node.left.parent = node; 
  
        node_left.parent = node.parent; 
    
        if (node.parent == NULL) 
            root = node_left; 
    
        else if (node == node.parent.left) 
            node.parent.left = node_left; 
    
        else
            node.parent.right = node_left; 
  
        node_left.right = node; 
        node.parent = node_left; 
    } 

    add(key, value) {
        if(!this.root) {
            this.root = new this.Node(key, value, "black");
            return this.root;
        }

        this.root = this.addNode(key, value, this.root);
        this.root.color = 'black';
        return this.root;
    }

    addNode(key, value, node) {
        if(!node) {
            return new this.Node(key, value);
        }

        else if (key < node.key) {
            node.left = this.addNode(key, value, node.left);
            //node.left.parent = node;
            node = this.balanceNode(node, node.left);
        }

        else if (key > node.key) {
            node.right = this.addNode(key, value, node.right);
            //node.right.parent = node;
            node = this.balanceNode(node, node.right);
        }

        return node;
    }

    isRed(node) {
        return node && node.color === 'red';
    }

    leftRotate(node) {
        const rightNode = node.right;
        const leftSubtreeOfRight = rightNode.left;

        rightNode.left = node;
        node.right = leftSubtreeOfRight;

        return rightNode;
    }

    rightRotate(node) {
        const leftNode = node.left;
        const rightSubtreeOfLeft = leftNode.right;

        leftNode.right = node;
        node.left = rightSubtreeOfLeft;

        return leftNode;
    }

    balanceNode(node, child) {
        let uncle = node.left;
        if(child === node.left) {
            uncle = node.right;
        }

        if(this.isRed(child)) {
            //Case 1 : uncle is red
            if(this.isRed(uncle)) {
                node.color = 'red';
                node.left.color = 'black';
                node.right.color = 'black';
            }

            //uncle is black or d.n.e
            else {
                
                //Left - Left case
                if(child === node.left && this.isRed(child.left)) {
                    let color = node.color;
                    node.color = child.color;
                    child.color = color;
                    return this.rightRotate(node);
                }

                //Left - Right case
                else if(child === node.left && this.isRed(child.right)) {
                    this.leftRotate(child);
                    return this.rightRotate(node);
                }

                //Right - Left case
                if(child === node.right && this.isRed(child.left)) {
                    node.right = this.rightRotate(child);
                    return this.leftRotate(node);
                }

                //right - Right case
                else if(child === node.right && this.isRed(child.right)) {
                    let color = node.color;
                    node.color = child.color;
                    child.color = color;
                    return this.leftRotate(node);
                }
            }
        }

        return node;
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
                    let uncle = grand_parent.left; 
  
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