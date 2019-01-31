class PriorityQueueUsingHeap {
    constructor() {
        this.collection = new MinHeapUsingArray();
    }

    enqueue(key, value) {
        this.collection.push(value.priority, { key, value });
    }

    dequeue() {
        this.collection.pop().value;
    }

    peek() {
        this.collection.peek().value;
    }

    isEmpty() {
        return this.collection.isEmpty();
    }

}