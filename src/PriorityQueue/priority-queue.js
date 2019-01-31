const pq1 = new PriorityQueueUsingArray();
const pq2 = new PriorityQueueUsingLinkedList();
const pq3 = new PriorityQueueUsingDoublyLinkedList();

const pqs = [ pq1, pq2, pq3 ];
const toPush = [
    { key: 0, value: { data: "zero", priority: 10 } },
    { key: 1, value: { data: "one", priority: 1 } },
    { key: 2, value: { data: "two", priority: 4 } },
    { key: 3, value: { data: "three", priority: 5 } },
]

for(let obj of toPush) {
    let { key, value } = obj;
    for(let pq of pqs) {
        pq.enqueue(key, value);
    }
}

for(let pq of pqs) {
    console.log(pq.peek());
    console.log(pq.dequeue());
    console.log('length', pq.length);
}






