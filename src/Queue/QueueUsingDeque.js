class QueueUsingDeque {
    constructor() {
        this.collection = new DoubleEndedQueue();
    }

    get length() {
        return this.collection.length;
    }

    enqueue(key, value) {
        this.collection.append(key,value);
    }

    dequeue() {
        return this.collection.pop();
    }

    peek() {
        return this.collection.peekFirst();
    }

    isEmpty() {
        return this.collection.isEmpty();
    }
}