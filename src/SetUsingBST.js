class SetUsingBST extends SetUsingArray {
    constructor(iterable) {
        super();
        this.collection = new BinarySearchTreeRecursive();
        this.addAll(iterable);
    
        let handler = {
            get: function(target, name) {
                if(name === 'add') {
                    return target.add;
                }
    
                else if(name === 'has') {
                    return function(key) {
                        return target.search(key) != null ? true : false;
                    }
                }
    
                else if(name === 'remove') {
                    return function(key) {
                        return target.delete(key);
                    }
                }
    
                else return target[name];
            }
        }
    
        this.collectionProxy = new Proxy(this.collection, handler);
    }
}