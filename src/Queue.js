class Queue {
    constructor() {
        this.values = [];
    }

    get length() {
        return this.values.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(item) {
        this.values.push(item);
    }

    dequeue() {
        return this.values.shift();
    }

    peek() {
        return this.values[0];
    }
}