/**

  What is a Linked List?
  · A data structure that contains a head, tail and length property.
  · Linked Lists conist of nodes, and each node has a value and a pointer to another node or null

  Comparsions with Arrays
  · Lists
    - Do not have indexes!
    - Connected via nodes with a next pointer
    - Random access is not allowed

  · Arrays
    - Indexed in order!
    - Insertion and deletion can be expensive
    - Can quickly be accessed at a specific index

  Big O of Singly Linked Lists
  Insertion - O(1)
  Removal - It depends O(1) or O(M)
  Searching - O(N)
  Access - O(N)

*/

//  Piece of data - value
//  Reference to ndex node - next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null;
    this.length = 0;
  }
  
  /**
  
    Pushing
    : Adding a new node to the end of the Linked List!
  
    Pushing pseudocode
  
    · This function should accept a value
    · Create a new node using the value passed to the function
    · If there is no head property on the list,
      set the head and tail to be the newly created node
    · Otherwise set the next property on the tail to be the new node
      and set the tail property on the list to be the newly created node
    · Increment the length by one
    · Return the linked list
    
  */
 push(value) {
   let newNode = new Node(value)
   if (!this.head) {
     this.head = newNode;
     this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; 
    return this;
  }
  
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  
  /** 
   
    Popping
    : Removing a node from the end of the Linked List!

    Poping pseudocode

    · If there are no nodes in the list, return undefined
    · Loop through the list until you reach the tail
    · Set the next property of the 2nd to last node to be null
    · Set the tail to be the 2nd to last node
    · Decrement the length of the list by 1
    · Return the value of the node removed
  
  */
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**

    Shifting
    : Removing a new node from the beginning of the Linked List!

    Shifting pseudocode

    · If there are no nodes in the list, return undefined
    · Store the current head property in a variable
    · Set the head property to be the current head's next property
    · Decrement the length by 1
    · Return the value of the node removed

  */
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    
    return currentHead;
  }

  /**

    Unshifting
    : Adding a new node to the beginning of the Linked List!

    Unshifting pseudocode
    · This function should accept a value
    · Create a new node using the value passed to the function
    · If there is no head property on the list,
      set the head and tail to be the newly created node
    · Otherwise set the newly created node's next property to be the current head property on the list
    · Set the head property on the list to be that newly created node
    · Increment the length of the list by 1
    · Return the linked list

  */
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
    Get
    : Retrieving a node by it's position in the Linked List!

    Get Pseudocode
    · This function should accept an index
    · If the index is less than zero or greater than or equal to the length of the list,
      return null
    · Loop through the list until you reach the index and
      return the node at that specific index
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  /**
    Set
    : Changing the value of a node based on it's position in the Linked List

    Set Pseudocode
    · This function should accept a value and an index
    · Use your get function to find the specific node
    · If the node is not found, return false
    · If the node is found, set the value of that node to be the value passed to the function and return true
  */
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value; 
      return true;
    } else {
      return false;
    }
  }

  /**
    Insert
    : Adding a node to the Linked List at a specific position

    Insert Pseudocode
    · If the index is less than zero or greater than the length,
      return false
    · If the index is the same as the length,
      push a new node to the end of the list
    · If the index is 0,
      unshift a new node to the start of the list
    · Otherwise, using the get method,
      access the node at the index-1
    · Set the next property on that node to be the new node
    · Set the next property on the new node to be the previous next
    · Increment the length
    · Return true
  */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return this.unshift(value);

    let newNode = new Node(value);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  /**
    Remove
    : Removing a node from the Linked List ad a specific position

    Remove Pseudocode
    · If the index is less than zero or greater than the length,
      return undefined
    · If the index is the same as the length-1, pop
    · If the index is 0, shift
    · Otherwise, using the get method, access the node at the index-1
    · Set the next property on that node to be the next of the next node
    · Decrement the length
    · Return the value of the node removed
  */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length -1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;

    return removed;
  }

  /**
    Reverse
    : Reversing the Linked List in place!

    · Swap the head and tail
    · Create a variable called next
    · Create a variable called prev
    · Create a variable called node and initialize it to the head property
    · Loop through the list
    · Set next to be the next property on whatever node is
  */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0 ; i < this.length ; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
  print() {
    let A = [];
    let current = this.head;
    while (current) {
      A.push(current.value)
      current = current.next;
    }
    console.log(A);
  }
}

let list = new SinglyLinkedList()
list.push('Hello');
list.push('Goodbye');
list.push('!');
list.push('<3');
list.push(':)');
console.log(list.reverse());
console.log(list.print());

/**

  Recap

  · Singly Linked List are an excellent alternative to arrays
    when insertion and deletion at the beginning are frequently required
  · Arrays contain a built in index whereas Linked Lists do not
  · The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues

*/
 
 





