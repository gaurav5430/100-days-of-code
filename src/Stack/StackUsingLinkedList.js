class StackUsingLinkedList {
    constructor() {
        this.collection = new LinkedList();
    }

    get length() {
        return this.collection.length;
    }

    push(key, value) {
        this.collection.addAt(0, key, value);
    }

    pop() {
        const node = this.collection.removeAt(0);
        return node && node.value;
    }

    isEmpty() {
        return this.collection.isEmpty();
    }

    peek() {
        const node = this.collection.head;
        return node && node.value;
    }
}