class CircularLinkedList {
    constructor() {
        this.head = null;
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
        let temp = this.head;
        do {
            count++
            temp = temp.next;
        } while(temp!==this.head)

        return count;
    }

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
        if (this.head === null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while(temp.next && temp.next!==this.head) {
                if(temp.key === key) {
                    temp.value = value;
                    exists = true;
                    break;
                }
                temp = temp.next;
            } 

            if(!exists) {
                temp.next = node;
                node.next = this.head;
            } 
        }
    }

    traverse() {
        let temp = this.head;
        do {
            console.log(temp);
            temp = temp.next;
        } while(temp!==this.head);
    }

    remove(key) {
        let current = this.head;
        let prev = null;
        
        while(current) {
            if(current.key === key) {
                prev.next = current.next;
            }

            else {
                prev = current;
            }

            current = current.next;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    get(key) {
        let i = 0;
        for(let item of this) {
            if(i === this.length - 1) break;
            if(item.key === key) {
                return item.value;
            }

            i++;
        }

        return null;
    }
}