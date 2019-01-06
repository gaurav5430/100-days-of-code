class LinkedList {
    constructor() {
        this.head = undefined;
        this.Node = class {
            constructor(value, next) {
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
            yield temp.value;
            temp = temp.next;
        }
    }

    add(item) {
        const node = new this.Node(item, null);
        if (this.head === undefined) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }

            temp.next = node;
        }
    }

    traverse() {
        let temp = this.head;
        do {
            console.log(temp.value);
            temp = temp.next;
        } while(temp);
    }

    remove(key) {
        let current = this.head;
        let prev = this.head;
        let count = 0;
        while(current) {
            if(current.value === key) {
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

    addAt(item, index) {

        if (index < 0 || index > this.length) return;

        let toInsert = new this.Node(item, this.head);
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

            prev.next = new this.Node(item, current)
        }
        

        
    }

    removeAt(index) {
        if (index === 0) {
            let { value } = this.head;
            this.head = this.head.next;
            return value;
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
        return current.value;
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(value) {
        if(!value) return -1;

        let temp = this.head;
        let index = -1;
        while(temp) {
            index++;
            if (temp.value === value) {
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
        let element = temp.value;
        let i = 0;
        while(temp && i != index) {
            i++;
            temp = temp.next;
            element = temp.value;
        }

        return element;
    }
}