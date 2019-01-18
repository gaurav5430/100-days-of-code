class StackUsingArray {
    constructor() {
        this.collection = [];
    }

    get length() {
        return this.collection.length;
    }

    push(key, value) {
        this.collection.push({ key, value });
    }

    pop() {
        const element = this.collection.pop();
        return element && element.value;
    }

    peek() {
        const element = this.collection[this.length - 1];
        return element && element.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}