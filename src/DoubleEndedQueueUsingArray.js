class DoubleEndedQueueUsingArray {
    constructor() {
        this.collection = [];
    }

    get length() {
        return this.collection.length;
    }

    push(key, value) {
        this.collection.shift(key, value);
    }

    append(key, value) {
        this.collection.push(key,value);
    }

    pop() {
        const node = this.collection.unshift();
        return node && node.value;
    }

    eject() {
        const node = this.collection.pop();
        return node && node.value;
    }

    peekFirst() {
        const node = this.collection[0];
        return node && node.value;
    }

    peekLast() {
        const node = this.collection[this.length - 1];
        return node && node.value;
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}