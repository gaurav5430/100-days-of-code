class SetUsingArray {
    constructor(iterable) {
        this.collection = [];
        this.addAll(iterable);

        let handler = {
            get: function(target, name) {
                if(name === 'add') {
                    return function(key, value) {
                        return target.push({ key, value });
                    };
                }

                else if(name === 'has') {
                    return function() {
                        const callbackFn = (item) => { return item.key === arguments[0] };
                        return target.filter(callbackFn).length ? true: false;
                    }
                }

                else if(name === 'remove') {
                    return function(key) {
                        const indexToRemove = target.findIndex((item) => {
                            return item.key === key;
                        });

                        if(indexToRemove > -1) {
                            return target.splice(indexToRemove, 1)[0];
                        }
                
                        return null;
                    }
                }

                else return target[name];
            }
        }

        this.collectionProxy = new Proxy(this.collection, handler);
    }

    addAll(iterable) {
        if(iterable) {
            for (let item of iterable) {
                if(!this.has(item.key)) {
                    this.collectionProxy.add(item);
                }
            }
        }

        return this;
    }

    * [Symbol.iterator] () {
        yield* this.collectionProxy;
    }

    get length() {
        return this.collectionProxy.length;
    }

    add(key, value) {
        if(!this.has(key)) {
            this.collectionProxy.add(key, value);
        }

        return this;
    }

    has(key) {
        return this.collectionProxy.has(key);
    }

    remove(key) {
        return this.collectionProxy.remove(key);
    }
}