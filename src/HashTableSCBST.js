class HashTableSCBST extends HashTableSCLinkedLists {
    constructor(size) {
        super(size);
        this.collection = [];
        this.bucket = BinarySearchTreeRecursive;
    }

    * [Symbol.iterator] () {
        for(let slot of this.collection) {
            if(slot) yield* slot;
        }
    }

    put(key, value) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        if(!this.has(stringKey)) {
            if(!this.collection[hash]) {
                this.collection[hash] = new this.bucket();
            }
            this.collection[hash].add(stringKey, value);
        }
    }

    has(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        return this.collection[hash] && this.collection[hash].search(key) != null;
    }

    get(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        return this.collection[hash] && this.collection[hash].search(key);
    }

    remove(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        return this.collection[hash] && this.collection[hash].delete(stringKey);
    }
}