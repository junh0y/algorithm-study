/*
  Stack
  · A LIFO (Last In First Out) data strucuture
  · The last element added to the stack will be the first element removed from the stack

  Where stacks are used
  · Managing function invocations
  · Undo / Redo
  · Routing (the history object) is treated like a stack
*/

let stack1 = [];
stack1.push('google');
stack1.push('instagram');
stack1.push('youtube');
stack1.pop();
stack1.pop();
stack1.push('amazon');
stack1.pop();
stack1.pop();

let stack2 = [];
stack2.unshift('create new file');
stack2.unshift('resized file');
stack2.unshift('cloned out wrinkle');
stack2.shift();
stack2.shift();
stack2.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /*
    Pushing Pseudocode
    · The function should accept a value
    · Create a now node with that value
    · If there are no nodes in the stack, set the first and last property to be the newly created node
    · If there is at least one node, create a variable that stores the current first property on the stack
    · Reset the first property to be the newly created node
    · Set the next property on the node to be the previously created variable
    · Increment the size of the stack by 1
  */
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  /*
    Pop Pseudocode
    · If there are no nodes in the stack, return null
    · Create a temprary variable to store the first property on the stack
    · If there is only 1 node, set the first and last property to be null
    · If there is more than one node, set the first property to be the next property on the current first
    · Decrement the size by 1
  */
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  /*
    Big O of Stacks

    Insertion - O(1)
    Removal   - O(1)
    Searching - O(N)
    Access    - O(N)
  */

  /*
    Recap
    · Stacks are a LIFO data structure where the last value in is always the first one out.
    · Stacks are used to handle function invocations(the call stack), for operations like undo/redo,
      and for routing(remember pages you have visited and go back/forward) and much more
    · They are not a built in data structure in JavaScript,
      but are relatively simple to implement
  */
}

let stack = new Stack();
console.log(stack.push('First'));
console.log(stack.push('Second'));
console.log(stack.push('Third'));
console.log(stack.push('Fourth'));
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);