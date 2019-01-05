### Day 1
Started working on Data Structures in Javascript using ES6.  
Implemented Queue and Priority queue.  
  
**Learning:**  
a bit about getters and setters.  
using getter for a non settable property (length of Queue shouldn't be modifiable but should be visible)  
Running ES6 code directly in chrome without transpilation.  
Can't load modules without CORS - so need to run a web server if you want to use import/export  
used array.reduce to work like array.findIndex  

### Day 2
Started implementing LinkedList in Javascript.  

**Learning:**  
how to create iterators using symbol.  
how to use generators to create iterators  
how to use generators as class methods.  
no nested classes in ES6, so no way to define Node class within LinkedList class? 
no private variables in es6, so used a getter to calculate length of linked list, so that length is not modifiable from outside. 
The drawback is that everytime length is accessed it traverses the list to find out the length. Since there are no private properties, 
there is no way to store length and not allow it to be changed from outside.

### Day 3  
Finsihed implementing LinkedList by adding common methods for addAt, removeAt.  

**Learning**  
- created inner class by using class expressions in constructor, not sure how good a practice it is.
- was trying to look into the Set and Map objects on browser console to find implementation details, got to learn a bit about internal properties in double square brackets.
- should LinkedList also provide methods like map, filter and reduce ?
