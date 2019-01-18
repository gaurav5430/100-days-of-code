class QueueUsingArray {
    constructor() {
        this.collection = [];
    }

    get length() {
        return this.collection.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(key, value) {
        this.collection.push({ key, value });
    }

    dequeue() {
        const element = this.collection.shift();
        return element && element.value;
    }

    peek() {
        const element = this.collection[0];
        return element && element.value;
    }
}