class PriorityQueueUsingDoublyLinkedList {
    constructor() {
        this.collection = new DoublyLinkedList();
    }

    get length(){
        return this.collection.length;
    }

    enqueue(key, value) {
        let current = this.collection.head;

        if(!current) {
            this.collection.push(key, value);
            return;
        }

        while (current.next && value.priority < current.value.priority) {
            current = current.next;
        }
    
        const toInsertNode = new this.collection.Node(key, value);
        this.collection.addAfterNode(current, toInsertNode);
    }

    dequeue() {
        return this.collection.removeFromFirst().value;
    }

    peek() {
        return this.collection.head.value;
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}