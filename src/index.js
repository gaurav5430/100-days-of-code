"use strict";
// import Queue from './Queue.js';

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.peek());
console.log(q.dequeue());
console.log(q.dequeue());

let pq = new PriorityQueue();
pq.enqueue({ name: 'one', priority: 2 });
pq.enqueue({ name: 'two', priority: 3 });
pq.enqueue({ name: 'three', priority: 1 });
pq.enqueue({ name: 'four', priority: 4 });

console.log(pq.dequeue());

let pq_ll = new PriorityQueueWithLinkedList();
pq_ll.enqueue({ name: 'one', priority: 2 });
pq_ll.enqueue({ name: 'two', priority: 3 });
pq_ll.enqueue({ name: 'three', priority: 1 });
pq_ll.enqueue({ name: 'four', priority: 4 });

console.log(pq_ll.dequeue());

let list = new LinkedList();
list.add(1);
// list.add(2);
// list.add(3);
// list.add(2);
// list.add(1);

for(let item of list) {
    console.log(item);
}

//list.remove(2);

let bst = new BinarySearchTree();

bst.add(2);
bst.add(4);
bst.add(3);
bst.add(1);
