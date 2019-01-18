class StackUsingDeque {
    constructor() {
        this.collection = new DoubleEndedQueue();
    }

    get length() {
        return this.collection.length;
    }

    push(key, value) {
        this.collection.push(key, value);
    }

    pop() {
        return this.collection.pop();
    }

    isEmpty() {
        return this.collection.isEmpty();
    }

    peek() {
        return this.collection.peekFirst();
    }
}