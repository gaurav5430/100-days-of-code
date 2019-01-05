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

        return this.addNode(item, this.root);
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
}