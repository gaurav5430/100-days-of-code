class HashTableSCLinkedLists {
    constructor(size = 100) {
        this.size = size;
        this.hashingFn = function(str) {
            const p = 31;
            const m = 1e9 + 9;
            let hash_value = 0;
            let p_pow = 1;
            for (let c of str) {
                hash_value = (hash_value + (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1) * p_pow) % m;
                p_pow = (p_pow * p) % m;
            }

            if(hash_value < 0) hash_value *= -1;
            console.log(hash_value % this.size);
            return hash_value % this.size;
        }

        this.collection = [];
        this.bucket = LinkedList;
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
        return this.collection[hash] && this.collection[hash].indexOf(stringKey) > -1;
    }

    get(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        return this.collection[hash] && this.collection[hash].get(stringKey);
    }

    remove(key) {
        const stringKey = key.toString();
        const hash = this.hashingFn(stringKey);
        return this.collection[hash] && this.collection[hash].remove(stringKey);
    }
}