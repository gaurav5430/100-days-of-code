const queue1 = new QueueUsingArray();
const queue2 = new QueueUsingLinkedList();
const queue3 = new QueueUsingDeque();

const queues = [ queue1, queue2, queue3 ];
const toPush = [
    { key: 0, value: "zero" },
    { key: 1, value: "one" },
    { key: 2, value: "two" },
    { key: 3, value: "three" },
]

for(let obj of toPush) {
    let { key, value } = obj;
    for(let queue of queues) {
        queue.enqueue(key, value);
    }
}

for(let queue of queues) {
    console.log(queue.peek());
    console.log(queue.dequeue());
    console.log('length', queue.length);
}






