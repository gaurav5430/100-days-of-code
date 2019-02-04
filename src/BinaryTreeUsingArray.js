class BinaryTreeUsingArray {
    constructor() {
        this.collection = [];
        this.root = 0;
    }

    getParentIndex(index) {
        return parseInt((index - 1)/2);
    }

    getLeftChildIndex(index) {
        return parseInt(2 * index + 1);
    }

    getRightChildIndex(index) {
        return parseInt(2 * index + 2);
    }

    insert(key, value) {
        //insert in level order
        this.collection.push({ key, value });
    }

    delete(key) {
        let indexToDelete = this.searchNode(key, this.root, -1);
        if(indexToDelete >= 0) {
            //replace with last node
            this.collection[indexToDelete] = this.collection[this.collection.length - 1];
            this.collection.length--;
        }
    }

    deleteNode(key, node) {
        if(!this.collection[node]) {
            return -1;
        }

        else if(key < this.collection[node].key) {
            return this.deleteNode(key, this.getLeftChildIndex(node));
        }

        else if(key > this.collection[node].key) {
            return this.deleteNode(key, this.getRightChildIndex(node));
        }

        else {
            return node;
        }
    }

    search(key) {
        const index = -1;
        return this.collection[this.searchNode(key, this.root, index)];
    }

    searchNode(key, node, index) {
        if(this.collection[node] && index === -1) {
            index = this.searchNode(key, this.getLeftChildIndex(node), index);
            if(this.collection[node].key === key) {
                index = node; 
            }
            index = this.searchNode(key, this.getRightChildIndex(node), index);
        }

        return index;
    }

    // Function to print all nodes of a given level from left to right
    printLevel(node, level)
    {
        if (!this.collection[node])
            return false;

        if (level === 1)
        {
            console.log(this.collection[node]);
            // return true if at-least one node is present at given level
            return true;
        }

        let left = this.printLevel(this.getLeftChildIndex(node), level - 1);
        let right = this.printLevel(this.getRightChildIndex(node), level - 1);

        return left || right;
    }

    // Function to print level order traversal of given binary tree
    levelOrderTraversal(node)
    {
        if (!this.collection[node])
            return;

        // start from level 1 -- till height of the tree
        let level = 1;

        // run till printLevel() returns false
        while (this.printLevel(node, level))
            level++;
    }

    inorderTraversal(node) {
        if(this.collection[node]) {
            this.inorderTraversal(this.getLeftChildIndex(node));
            console.log(this.collection[node]);
            this.inorderTraversal(this.getRightChildIndex(node)); 
        }
    }

    preorderTraversal(node) {
        if(this.collection[node]) {
            console.log(this.collection[node]);
            this.preorderTraversal(this.getLeftChildIndex(node));
            this.preorderTraversal(this.getRightChildIndex(node));
        }
    }

    postorderTraversal(node) {
        if(this.collection[node]) {
            this.postorderTraversal(this.getLeftChildIndex(node));
            this.postorderTraversal(this.getRightChildIndex(node));
            console.log(this.collection[node]);
        }
    }
}