class AssociativeArrayUsingLinkedList {
    constructor() {
        this.collection = new LinkedList();
    }

    * [Symbol.iterator]() {
        yield* this.collection;
    }
    
    add(key, value) {
        return this.collection.add(key,value);
    }

    remove(key) {
        return this.collection.remove(key);
    }

    get(key) {
        return this.collection.get(key);
    }


}