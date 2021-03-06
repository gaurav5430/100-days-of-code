### Day 1
Started working on Data Structures in Javascript using ES6.  
Implemented [Queue](https://github.com/gaurav5430/100-days-of-code/blob/master/src/Queue.js) and [Priority queue](https://github.com/gaurav5430/100-days-of-code/blob/master/src/PriorityQueue.js).  
  
**Learning:**  
a bit about getters and setters.  
using getter for a non settable property (length of Queue shouldn't be modifiable but should be visible)  
Running ES6 code directly in chrome without transpilation.  
Can't load modules without CORS - so need to run a web server if you want to use import/export  
used array.reduce to work like array.findIndex  

### Day 2
Started implementing [LinkedList](src/LinkedList.js) in Javascript ES6.  

**Learning:**  
how to create iterators using symbol.  
how to use generators to create iterators  
how to use generators as class methods.  
no nested classes in ES6, so no way to define Node class within LinkedList class? 
no private variables in es6, so used a getter to calculate length of linked list, so that length is not modifiable from outside. 
The drawback is that everytime length is accessed it traverses the list to find out the length. Since there are no private properties, 
there is no way to store length and not allow it to be changed from outside.

### Day 3  
Finsihed implementing [LinkedList](src/LinkedList.js) by adding common methods for addAt, removeAt.  

**Learning**  
- created inner class by using class expressions in constructor, not sure how good a practice it is.
- was trying to look into the Set and Map objects on browser console to find implementation details, got to learn a bit about internal properties in double square brackets.
- should LinkedList also provide methods like map, filter and reduce ?

### Day 4  
Started implementing [Binary Search Tree](https://github.com/gaurav5430/100-days-of-code/blob/master/src/BinarySearchTree.js) in ES6  

**Learnings/Achievements**  
- chrome has a task manager which can allow you to kill a tab, if it is running in an infinite loop and clicking on close doesn't work.
- you can also try to pause and then stop script exacution to stop the infinite loop (didn't help in my case).
- learnt how deletion in Binary Search Tree works. (0 child, 1 child, 2 child - min from right subtree or max from left subtree)
- implemented recursive as well as iterative add method.

### Day 5
Continued implementing BST in ES6

**Learning**
- the above mentioned pause and stop script does work in chrome but if you reload(F5) before pausing , it interferes with the pause and stop.
- iterative traversals are hard to wrap your head around.
- learnt a bit about self-balancing BSTs. (AVL, Red-Black) , might implement them later.
- planning to implement HashTables using LinkedLists, associative arrays using BST, associative arrays using HashTable, and Priority Queue using BST.
- still to implement iterators in the BST, though i guess it would reuse the logic of inorder traversal.

### Day 6:
Not a lot of progress, finished iterative postorder traversal in BST.

**Learning**
- learnt a bit about associative arrays and how they can be implemented using BST, HashTable.
- finally understood how iterative postorder traversal works with single/double stack and implemented it.

### Day 7:
Finished BST functionality. started with Associative Arrays.

**Learning**
- created iterator for BST.
- trying to figure out if it is possible to return elements in order instead of printing it.
- created a associative array using BST.
- corrected delete functionality as it wasn't working for root node. There is a lot of repitition in the code, must be a way to write it succinctly.

### Day 8:
Corrected BST iterator. It returns all elements inorder using an array.
implemented Associative Array using BST and Linked List.

**Learning**
- destructuring assignment works for anything that implements an iterator (LinkedList, BST)
- wondering how recursion works in functional programming, where we need to pass in a memoization array from outside the recursive function.
- yield* is more or less similar to for...of loop, yielding every value one at a time.

### Day 9:
Learnt a bit about Self Organizing Trees and Self Organizing Linked Lists.
Also read about Abstract Data Types.
No Coding sadly.


### Day 10:
Implemented 3 popular ways for self organizing lists.  
Extended the LinkedList class and overrode the search/get method to work accordingly for Transpose/Count/MTF.  
Should changing the Node Type be allowed when creating a Linked List (As it might be required to change the structure of the node to store extra things, like in this case count) ?  
I circumvented it by defining a associative array on the List class, instead of changing the Node definition and used it for keeping track of counts.  

How are self organizing lists used in symbol tables ?  
How are associative arrays used in the decorator pattern ?   
(Both questions from wikipedia entries for the respective data structures)  

### Day 11:
Implemented insertion in AVL tree.  
Re-implemented deletion in BST by returning root of the tree after every deletion.  

**Learning**  
- Self balancing Binary Search trees are generally much more efficient than regular BSTs.
- multiple kinds of self balancing trees - AVL trees, Red-Black Trees.

### Day 12:  
Read about deletion in AVL tree. Couldn't implement it yet.

**Learning**
- Deletion is more complex than insertion as you might have to balance, the parents of the rotated node as well. Still to figure out why.

### Day 13:  
No coding.

**Learning**  
- Self organizing lists are used in symbol tables to keep the most recently used symbol towards the top of the table for quick access.
  
### Day 14:  
Implemented Circular Linked List and Doubly Linked List.  

**Learning**
- Circular Linked List is useful for round-robin kind of algorithms.
- It is not trivial to extend or use LinkedList to create either of Circular/Doublt Linked List, easier to create it as an independent class.

### Day 15:  
Finished Doubly Linked List browser back/forward algorithm implementation.  
Implemented Double Ended Queue.  

**Learning**
- Doubly Linked list is really useful if you already have a reference to a node and want to traverse forward/backward from that node (which was the main reason to use it for browser back/forward algorithm implementation)

### Day 16:
Implemented Queue and Stack using Linked List and Deque.  

**Learning**:
- what are circular queues and what problems they solve. (fixed-size buffers, round-robin).
- double ended queue is a generalization of queue and stack.
- it is not trivial to implemented PriorityQueue using a Queue , but it is easier to just extend an extending Queue class and change the enqueue method to make a PriorityQueue.

### Day 17:
No Coding.

### Day 18:
Finished AVL tree deletion implementation. Moced on to Red Black trees which seem even more complex to implement.

**Laarning**:
- it is a good idea to return the root from tree operations, as it allows us to do operations on parent and parent of parent in a recursive way, without keeping track of parent in a separate pointer.

### Day 19: 
Implemented Bottom-Up insertion in Red-Black Trees.

**Learning**
- understood why we insert a red node and not a black node, because red violation is easier to fix.

### Day 20:
Implemented Set using Array/LinkedList/BST

**Learning**
- instead of usual inheritance and overriding all the functions (as general function names differ across arrays, linkedlist and BST) used a Proxy object for remapping differently named functions across implementations to a common interface, so whenever there is a need to create a new implemnetation, jsut override the proxy implementation in the constructor.

### Day 21:
Implemented a simple HashTable with Separate Chaining using LinkedList/Array/BST

**Learning**
- how difficult it is to get a good hash function.
- some details of how Java implements HashTable
- still to figure out universal hash functions.

### Day 22:
Implemented a binary min heap using arrays.

**Learning/Todo**
- heaps are really good as priority queues.
- need to look into other type of heaps.
- need to write tests for each of these data structures.

### Day 23:
Implemented Circular Buffer and Deque using Array and Circular Buffer.

### Day 25, 25, 26:
No coding, no reading

### Day 27:
Implemented Priority Queue using Heap, Priority Queue using Doubly Linked List.

**Learning**
- Priority Queue can be implemented using any data structure that allows access to all the elements sequentially, so it can't be implemented using something like a Deque.

### Day 28:
Implemented buildHeap using siftDown and siftUp. Also implemented a way to allow user to pass in a comparator function to decide whether they want a min heap or a max heap.

**Learning**
- top down vs bottom up heap creation.
- it is possible to build a heap in O(n) using siftDown, while siftUp would build it in O(nlogn)
- siftUp is mostly useful when you need to insert one at a time, like when creating a priority queue using a heap.
- some great explanation here: https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity/18742428#18742428

### Day 29:
Started Implementing Binary Tree using Array.

**Learning**
- how to do a level order traversal recursively.
- how to persist state in recursive function.

### Day 30:  
Learnt a bit about postorder and preorder applications.  

### Day 31:  
Finished implementing Binary Tree using Array. extended to BST using Array.

### Day 32:
Started with Graph Implementation using AdjacencyMatrix and AdjacencyList

**Learning/ToDo:**
- create adjacency list using Sets/HashTable
- BFS/DFS iterative and recursive
- parallel edges

### Day 33:
Implemented BFS and DFS

### Day 34: 
played around with BFS/level order traversal
Implemented a Complete BinaryTree using Node

**Learning/ToDo:**
- recursive BFS

### Day 35: 
Tried some solutions for Recursive BFS. Inspired from the level order traversal of Binary Tree.

**Learning/Todo:**
- no recursive solution is better than the iterative solution using Queue.
- Recursive BFS can employ DFS to traverse till a particular depth/level.
- yet to find a better implementation. Some comments here: https://cs.stackexchange.com/questions/64379/can-breadth-first-search-be-implemented-recursively-without-data-structures?answertab=votes#tab-top

### Day 36:
Nothing on this repo. Did solve a few linked list questions otherwise

**Learning/Todo:**
- Tortoise/Hare - fast/slow ptr algorithm is used quite a lot in linked list problems.
- Reversing a linked list, getting length of a linked list.

### Day 37
Staretd implementing Sorting algorithms on Arrays and LinkedList
Implemented Selection Sort on arrays and LinkedList today.

**Learning/Todo:**
- Stable selection sort, selection sort using linked list (better implementation)