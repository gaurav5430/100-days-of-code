class BSTUsingArray extends BinaryTreeUsingArray {
    constructor() {
        super();
    }

    insert(key, value) {
        return this.insertNode(key, value, this.root);
    }

    insertNode(key, value, node) {
        if(!this.collection[node]) {
            this.collection[node] = { key, value };
        }

        else if(key < this.collection[node].key) {
            this.insertNode(key, value, this.getLeftChildIndex(node));
        }

        else if(key > this.collection[node].key) {
            this.insertNode(key, value, this.getRightChildIndex(node));
        }
    }

    delete(key, value) {
        return this.deleteNode(key, value, this.root);
    }

    deleteNode(key, value, node) {
        if(!this.collection[node]) {
            return;
        }

        else if(key < this.collection[node].key) {
            this.deleteNode(key, value, this.getLeftChildIndex(node));
        }

        else if(key > this.collection[node].key) {
            this.deleteNode(key, value, this.getRightChildIndex(node));
        }

        else {
            //leaf node
            if(!this.collection[this.getLeftChildIndex(node)] && !this.collection[this.getRightChildIndex(node)]) {
                this.collection[node] = null;
            }

            else if(!this.collection[this.getLeftChildIndex(node)]) {
                this.collection[node] = this.collection[this.getRightChildIndex(node)];
                this.collection[this.getRightChildIndex(node)] = null;
            }

            else if(!this.collection[this.getRightChildIndex(node)]) {
                this.collection[node] = this.collection[this.getLeftChildIndex(node)];
                this.collection[this.getLeftChildIndex(node)] = null;
            }

            else {
                //find the inorder successor
                // findMin from right subtree
                const indexToDelete = this.findMin(this.getRightChildIndex(node));
                this.collection[node] = this.collection[indexToDelete];
                this.collection[indexToDelete] = null;
            }
        }
    }

    findMin(node) {
        const index = node;
        while(this.collection[this.getLeftChildIndex(index)]) {
            index = this.getLeftChildIndex(index);
        }

        return index;
    }

    search(key) {
        const index = -1;
        return this.collection[this.searchNode(key, this.root, index)];
    }

    searchNode(key, node, index) {
        if(!this.collection[node]) {
            return index;
        }

        else if(key < this.collection[node].key) {
            index = this.searchNode(key, this.getLeftChildIndex(node), index);
        }

        else if(key > this.collection[node].key) {
            index = this.searchNode(key, this.getRightChildIndex(node), index);
        }

        else {
            index = node;
        }

        return index;
    }
}