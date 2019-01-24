class HashTableSCDynamicArray extends HashTableSCLinkedLists {
    constructor(size) {
        super(size);
        this.collection = [];
        this.bucket = Array;
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
            this.collection[hash].push({ key: stringKey, value });
        }
    }

    has(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        return this.collection[hash] && this.collection[hash].findIndex(item => {
            return item.key === stringKey;
        }) > -1;
    }

    get(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        return this.collection[hash] && this.collection[hash][stringKey];
    }

    remove(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        const indexToDelete = this.collection[hash].findIndex(item => {
            return item.key === stringKey;
        });
        return this.collection[hash] && (indexToDelete > -1) && this.collection[hash].splice(indexToDelete, 1);
    }
}