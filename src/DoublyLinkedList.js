class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.Node = class {
            constructor(key, value) {
                this.prev = null;
                this.key = key;
                this.value = value;
                this.next = null;
            }
        }
    }

    get length() {
        return this.traverseForwardFromNode(this.head).length;
    }

    push(key, value) {
        const node = new this.Node(key, value);
        this.pushNode(node);
    }

    append(key,value) {
        const node = new this.Node(key, value);
        this.appendNode(node);
    }

    addAfter(afterKey, key, value) {
        let temp = this.head;
        while (temp) {
            if(temp.key === afterKey) {
                let node = new this.Node(key, value);
                if(temp.next === null) {
                    this.tail = node;
                }
                temp.next = node;
                break;
            }
            temp = temp.next;
        }
    }

    addBefore(beforeKey, key, value) {
        let temp = this.head;
        while(temp) {
            if(temp.key === beforeKey) {
                let node = new this.Node(key, value);
                if(temp.prev === null) {
                    this.head = node;
                }
                else temp.prev.next = node;
                temp.prev = node;
                break;
            }

            temp = temp.next;
        } 
    }

    pushNode(toInsertNode) {
        if(!this.head) {
            this.head = toInsertNode;
            this.tail = toInsertNode;
            return toInsertNode;
        }

        this.head.prev = toInsertNode;
        toInsertNode.next = this.head;
        toInsertNode.prev = null;
        this.head = toInsertNode;

        return toInsertNode;
    }

    appendNode(toInsertNode) {
        if(!this.tail) {
            this.head = toInsertNode;
            this.tail = toInsertNode;
            return toInsertNode;
        }

        this.tail.next = toInsertNode;
        toInsertNode.prev = this.tail;
        toInsertNode.next = null;
        this.tail = toInsertNode;
        return toInsertNode;
    }

    addAfterNode(afterNode, toInsertNode) {
        if(afterNode === this.tail) {
            this.tail = toInsertNode;
        }
        toInsertNode.next = afterNode.next;
        toInsertNode.prev = afterNode;
        afterNode.next = toInsertNode;

        return toInsertNode;
    }

    addBeforeNode(beforeNode, toInsertNode) {
        if(beforeNode === this.head) {
            this.head = beforeNode;
        }

        toInsertNode.prev = beforeNode.prev;
        toInsertNode.next = beforeNode;
        beforeNode.prev.next = toInsertNode;
        beforeNode.prev = toInsertNode;

        return toInsertNode;
    }

    traverseForwardFromNode(traverseNode) {
        let stack = [];
        while(traverseNode) {
            stack.push(traverseNode);
            traverseNode = traverseNode.next;
        }

        return stack;
    }

    traverseBackwardFromNode(traverseNode) {
        let stack = [];
        while(traverseNode) {
            stack.push(traverseNode);
            traverseNode = traverseNode.prev;
        }

        return stack;
    }

    getNode(key) {
        let temp = this.head;
        while(temp) {
            if(key === temp.key) {
                return temp;
            }
            temp = temp.next;
        } 

        return null;
    }

    traverse() {
        let temp = this.head;
        while(temp)  {
            console.log(temp);
            temp = temp.next;
        }
    }

    traverseReverse() {
        let temp = this.tail;
        while(temp) {
            console.log(temp);
            temp = temp.prev;
        }
    }

    remove(key) {
        let temp = this.head;
        while (temp) {
            if (temp.key === key) {
                if(temp.prev === null) {
                    this.head = temp.next;
                }
                else temp.prev.next = temp.next ;

                if(temp.next === null) {
                    this.tail = temp.prev;
                }

                else temp.next.prev = temp.prev;
                return temp;
            }

            temp = temp.next;
        }

        return null;
    }

    removeFromLast() {
        const toReturn = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        return toReturn;
    }

    removeFromFirst() {
        const toReturn = this.head;
        this.head.next.prev = null;
        this.head = this.head.next;
        return toReturn;
    }

    setTail(node) {
        this.tail = node;
        this.tail.next = null;
        return this.tail;
    }

    setHead(node) {
        node.next = this.head.next;
        this.head = node;
        this.head.prev = null;
        return this.head;
    }

    isEmpty() {
        return this.head === null;
    }

}