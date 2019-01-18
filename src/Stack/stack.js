const stack1 = new StackUsingArray();
const stack2 = new StackUsingLinkedList();
const stack3 = new StackUsingDeque();

const stacks = [ stack1, stack2, stack3 ];
const toPush = [
    { key: 0, value: "zero" },
    { key: 1, value: "one" },
    { key: 2, value: "two" },
    { key: 3, value: "three" },
]

for(let obj of toPush) {
    let { key, value } = obj;
    for(let stack of stacks) {
        stack.push(key, value);
    }
}

for(let stack of stacks) {
    console.log(stack.peek());
    console.log(stack.pop());
    console.log('length', stack.length);
}






