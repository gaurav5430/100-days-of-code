class AssociativeArrayUsingBST {
    constructor() {
        this.collection = new BinarySearchTreeRecursive();
    }

    * [Symbol.iterator]() {
        yield* this.collection;
    }
    
    add(key, value) {
        return this.collection.add(key,value);
    }

    remove(key) {
        return this.collection.delete(key);
    }

    get(key) {
        return this.collection.search(key);
    }


}