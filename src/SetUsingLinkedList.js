class SetUsingLinkedList extends SetUsingArray {
    constructor(iterable) {
        super();
        this.collection = new LinkedList();
        this.addAll(iterable);
    
        let handler = {
            get: function(target, name) {
                if(name === 'add') {
                    return target.add;
                }
    
                else if(name === 'has') {
                    return function(key) {
                        return target.indexOf(key) > -1 ? true : false;
                    }
                }
    
                else if(name === 'remove') {
                    return function(key) {
                        return target.remove(key);
                    }
                }
    
                else return target[name];
            }
        }
    
        this.collectionProxy = new Proxy(this.collection, handler);
    }
}
