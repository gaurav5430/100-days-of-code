class QueueUsingLinkedList {
    constructor() {
        this.collection = new LinkedList();
    }

    get length() {
        return this.collection.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(key, value) {
        this.collection.add(key, value);
    }

    dequeue() {
        const element = this.collection.removeAt(0);
        return element && element.value;
    }

    peek() {
        const element = this.collection.elementAt(0);
        return element && element.value;
    }
}