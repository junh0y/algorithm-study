/*
  Queue
  : A FIFO (First In First Out) data structure

  Where Queus are used
  · Background tasks
  · Uploading resources
  · Printing / Task processing
*/

let q1 = [];
q1.push('First');
q1.push('Second');
q1.push('Third');
q1.shift();
q1.shift();
q1.shift();

q1.unshift('First');
q1.unshift('Second');
q1.unshift('Third');
q1.pop();
q1.pop();
q1.pop();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /*
    Enqueue Psuedocode
    · This function accepts some value
    · Create a new node using that value passed to the function
    · If there are no nodes in the queue, set this node to be the first and last property of the queue
    · Otherwise, set the next property on the current last to be that node,
      and then set the last property of the queue to be that node
    · Increment the size of the queue by 1
    · 
  */
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  /*
    Dequeue Pseudocode
    · If there is no first property, just return null
    · Store the first property in a variable
    · See if the first is the same as the last (check if there is only 1 node).
      If so, set the first and last to be null
    · If there is more than 1 node, set the first property to be the next property of first
    · Decrement the size by 1
    · Return the value of the node dequeued
  */
  dequeue() {
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
    Big O of Queues

    Insertion - O(1)
    Removal   - O(1)
    Searching - O(N)
    Access    - O(N)
  */

  /*
    Recap
    · Queues are a FIFO data structure, all elements are first in first out.
    · Queues are useful for processing tasks and are foundational for more complex data structures
    · Insertion and Removal can be done in O(1)
  */
}

let queue = new Queue();
console.log(queue.enqueue('First'));
console.log(queue.enqueue('Second'));
console.log(queue.enqueue('Third'));
console.log(queue.enqueue('Fourth'));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);