class DoubleEndedQueue {
    constructor() {
        this.collection = new DoublyLinkedList();
    }

    get length() {
        return this.collection.length;
    }

    push(key, value) {
        this.collection.push(key, value);
    }

    append(key, value) {
        this.collection.append(key,value);
    }

    pop() {
        const node = this.collection.removeFromFirst();
        return node && node.value;
    }

    eject() {
        const node = this.collection.removeFromLast();
        return node && node.value;
    }

    peekFirst() {
        const node = this.collection.head;
        return node && node.value;
    }

    peekLast() {
        const node = this.collection.tail;
        return node && node.value;
    }

    isEmpty() {
        return this.collection.isEmpty();
    }
}