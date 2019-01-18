class LinkedList {
    constructor() {
        this.head = undefined;
        this.Node = class {
            constructor(key, value, next) {
                this.key = key;
                this.value = value;
                this.next = next;
            }
        }
    }

    get length() {
        let count = 0;
        for(let item of this) {
            count++;
        }

        return count;
    }

    // [Symbol.iterator]() {
    //     let temp = this.head;
    //     const iterator = {
    //         next() {
    //             if(temp) {
    //                 let value = temp.value;
    //                 temp = temp.next;
    //                 return { value, done: false }
    //             }
    //             return { done: true }
    //         }
    //     }

    //     return iterator;
    // }

    * [Symbol.iterator]() {
        let temp = this.head;
        while(temp) {
            yield { key: temp.key , value: temp.value };
            temp = temp.next;
        }
    }

    add(key, value) {
        const node = new this.Node(key, value, null);
        let exists = false;
        if (this.head === undefined) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while(temp.next) {
                if(temp.key === key) {
                    temp.value = value;
                    exists = true;
                    break;
                }
                temp = temp.next;
            }

            if(!exists) temp.next = node;
        }
    }

    traverse() {
        let temp = this.head;
        do {
            console.log(temp);
            temp = temp.next;
        } while(temp);
    }

    remove(key) {
        let current = this.head;
        let prev = this.head;
        let count = 0;
        while(current) {
            if(current.key === key) {
                prev.next = current.next;
                count++;
            }

            else {
                prev = current;
            }

            current = current.next;
        }

        return count;
    }

    addAt(index, key, value) {

        if (index < 0 || index > this.length) return;

        let toInsert = new this.Node(key, value, this.head);
        if (index === 0) {
            this.head = toInsert;
        }

        else {
            let current = this.head;
            let prev = null;
            let i = 0;
            while(current && i !== index) {
                prev = current;
                current = current.next;
                i++;
            } 

            prev.next = new this.Node(key, value, current)
        }
    }

    removeAt(index) {
        if (index === 0) {
            let node = this.head;
            this.head = this.head.next;
            return { key: node.key, value: node.value };
        }

        let current = this.head;
        let prev = null;
        let i = 0;
        while(current && i !== index) {
            prev = current;
            current = current.next;
            i++;
        } 

        prev.next = current.next;
        return { key: current.key, value: current.value };
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(key) {
        if(!key) return -1;

        let temp = this.head;
        let index = -1;
        while(temp) {
            index++;
            if (temp.key === key) {
                break;
            }
            temp = temp.next;
        }

        return index;
    }

    elementAt(index) {
        if (index > this.length - 1 || index < 0) {
            return null;
        }
        
        let temp = this.head;
        let element = temp;
        let i = 0;
        while(temp && i != index) {
            i++;
            temp = temp.next;
            element = temp;
        }

        return { key: element.key, value: element.value };
    }

    get(key) {
        for(let item of this) {
            if(item.key === key) {
                return item.value;
            }
        }
    }
}