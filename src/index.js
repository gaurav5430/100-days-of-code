"use strict";
// import Queue from './Queue.js';

// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// console.log(q.peek());
// console.log(q.dequeue());
// console.log(q.dequeue());

let pq = new PriorityQueue();
pq.enqueue({ name: 'one', priority: 2 });
pq.enqueue({ name: 'two', priority: 3 });
pq.enqueue({ name: 'three', priority: 1 });
pq.enqueue({ name: 'four', priority: 4 });

console.log(pq.dequeue());

// let pq_ll = new PriorityQueueWithLinkedList();
// pq_ll.enqueue({ name: 'one', priority: 2 });
// pq_ll.enqueue({ name: 'two', priority: 3 });
// pq_ll.enqueue({ name: 'three', priority: 1 });
// pq_ll.enqueue({ name: 'four', priority: 4 });

// console.log(pq_ll.dequeue());

let list = new LinkedList();

let bst = new BinarySearchTreeIterative();

let as = new AssociativeArrayUsingBST();

let l = new SelfOrganizingListCount();
l.add(1,"one");
l.add(2,"two");
l.add(3,"three");
l.add(4,"four");

l.get(2);
l.get(2);
l.get(4);
l.get(4);

let dl = new DoublyLinkedList();
let headNode = null;
let currentNode = null;
let nodeToInsert = new dl.Node(1, "google.com");
dl.appendNode(nodeToInsert);
nodeToInsert = new dl.Node(2, "google.com/result1");
dl.appendNode(nodeToInsert);
nodeToInsert = new dl.Node(3, "google.com/result2");
dl.appendNode(nodeToInsert);
nodeToInsert = new dl.Node(4, "google.com/result3");
dl.appendNode(nodeToInsert);
currentNode = dl.removeFromLast();
console.log('history ----');
for(let item of dl.traverseBackwardFromNode(currentNode)) {
    console.log(item);
}
let poppedNode = dl.getNode(2);
let newNode = new dl.Node(5, "google.com/result4");
currentNode = dl.addAfterNode(poppedNode, newNode);
dl.setTail(currentNode);

let de = new DoubleEndedQueue();
de.push(1, "one");
de.append(2, "two");
de.append(3, "three");
de.push(0, "zero");

console.log("start", de.peekFirst());
console.log("end", de.peekLast());

let q = new QueueUsingDeque();
q.enqueue(0, "zero");
q.enqueue(1, "one");
q.enqueue(2, "two");
q.enqueue(3, "three");

console.log(q.peek());
console.log(q.dequeue());



